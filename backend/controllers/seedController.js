const db = require("../models");
const bcrypt = require("bcrypt");

const seedData = async (req, res) => {
  try {
    console.log("Starting seeding process...");

    // 1. Create Roles
    const rolesData = [
      { role_name: "Admin", role_description: "System Administrator" },
      { role_name: "Principal", role_description: "School Principal" },
      { role_name: "Teacher", role_description: "School Teacher" },
      { role_name: "Student", role_description: "School Student" },
      { role_name: "Parent", role_description: "Student Parent" },
    ];

    const roleMap = {};
    for (const role of rolesData) {
      const [createdRole] = await db.Role.findOrCreate({
        where: { role_name: role.role_name },
        defaults: role,
      });
      roleMap[role.role_name] = createdRole.role_id;
    }
    console.log("Roles seeded.");

    // 2. Create Addresses
    const addressesData = [
      { city: "Addis Ababa", subcity: "Bole", woreda: "03", kebele: "12" },
      { city: "Addis Ababa", subcity: "Yeka", woreda: "05", kebele: "10" },
      { city: "Addis Ababa", subcity: "Arada", woreda: "01", kebele: "02" },
      { city: "Adama", subcity: "Bole", woreda: "02", kebele: "05" },
      { city: "Hawassa", subcity: "Tabor", woreda: "04", kebele: "08" },
      { city: "Bahir Dar", subcity: "Tana", woreda: "01", kebele: "01" },
    ];

    const createdAddresses = await db.Address.bulkCreate(addressesData);
    const addressIds = createdAddresses.map((a) => a.address_id);
    console.log("Addresses seeded.");

    // 3. Create Schools
    const schoolsData = [
      {
        name: "Abyssinia Academy",
        address_id: addressIds[0],
        email: "info@abyssinia.com",
        established_year: 2005,
        type: "Private",
        status: "active",
        school_level: "High School",
      },
      {
        name: "Unity School",
        address_id: addressIds[1],
        email: "contact@unity.edu",
        established_year: 1998,
        type: "Public",
        status: "active",
        school_level: "Primary School",
      },
      {
        name: "Future Leaders High",
        address_id: addressIds[2],
        email: "admin@futureleaders.com",
        established_year: 2012,
        type: "International",
        status: "active",
        school_level: "High School",
      },
      {
        name: "St. George School",
        address_id: addressIds[3],
        email: "stgeorge@edu.et",
        established_year: 1950,
        type: "Religious",
        status: "active",
        school_level: "K-12",
      },
    ];

    const createdSchools = await db.School.bulkCreate(schoolsData);
    const schoolIds = createdSchools.map((s) => s.school_id);
    console.log("Schools seeded.");

    // 4. Create Classes
    const classesData = [
      { class_name: "Grade 9", section_name: "A", school_id: schoolIds[0], class_grade: 9 },
      { class_name: "Grade 10", section_name: "B", school_id: schoolIds[0], class_grade: 10 },
      { class_name: "Grade 1", section_name: "A", school_id: schoolIds[1], class_grade: 1 },
    ];
    const createdClasses = await db.Class.bulkCreate(classesData);
    const classIds = createdClasses.map((c) => c.class_id);
    console.log("Classes seeded.");

    // 5. Create Users
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);

    const usersData = [
      {
        username: "superadmin",
        password: hashedPassword,
        first_name: "Super",
        middle_name: "User",
        last_name: "Admin",
        email: "admin@system.com",
        role_id: roleMap["Admin"],
        address_id: addressIds[0],
        gender: "Male"
      },
      {
        username: "principal1",
        password: hashedPassword,
        first_name: "John",
        middle_name: "M.",
        last_name: "Doe",
        email: "principal1@abyssinia.com",
        role_id: roleMap["Principal"],
        address_id: addressIds[1],
        gender: "Male"
      },
      {
        username: "teacher1",
        password: hashedPassword,
        first_name: "Jane",
        middle_name: "L.",
        last_name: "Smith",
        email: "teacher1@abyssinia.com",
        role_id: roleMap["Teacher"],
        address_id: addressIds[2],
        gender: "Female"
      },
      {
        username: "student1",
        password: hashedPassword,
        first_name: "Samuel",
        middle_name: "K.",
        last_name: "Jackson",
        email: "student1@unity.edu",
        role_id: roleMap["Student"],
        address_id: addressIds[3],
        gender: "Male"
      },
      {
        username: "parent1",
        password: hashedPassword,
        first_name: "Martha",
        middle_name: "S.",
        last_name: "Wayne",
        email: "parent1@yahoo.com",
        role_id: roleMap["Parent"],
        address_id: addressIds[4],
        gender: "Female"
      },
      {
        username: "teacher2",
        password: hashedPassword,
        first_name: "Abebe",
        middle_name: "Beso",
        last_name: "Bela",
        email: "teacher2@unity.edu",
        role_id: roleMap["Teacher"],
        address_id: addressIds[5],
        gender: "Male"
      },
    ];

    const createdUsers = await db.User.bulkCreate(usersData);
    console.log("Users seeded.");

    // 5. Create specific role entries
    for (const user of createdUsers) {
      if (user.role_id === roleMap["Admin"]) {
        await db.Administrator.create({ user_id: user.user_id });
      } else if (user.role_id === roleMap["Principal"]) {
        await db.Principal.create({
          user_id: user.user_id,
          school_id: schoolIds[0],
          principal_type: "main",
        });
      } else if (user.role_id === roleMap["Teacher"]) {
        await db.Teacher.create({
          user_id: user.user_id,
          school_id: user.username === 'teacher1' ? schoolIds[0] : schoolIds[1],
        });
      } else if (user.role_id === roleMap["Student"]) {
        await db.Student.create({
          user_id: user.user_id,
          school_id: schoolIds[1],
          class_id: classIds[2], // Link to Grade 1 Section A at Unity School
          student_gender: user.gender,
        });
      } else if (user.role_id === roleMap["Parent"]) {
        await db.Parent.create({ user_id: user.user_id });
      }
    }
    console.log("Role-specific records seeded.");

    res.status(200).json({
      message: "Seeding completed successfully",
      summary: {
        roles: Object.keys(roleMap).length,
        addresses: createdAddresses.length,
        schools: createdSchools.length,
        users: createdUsers.length,
      },
    });
  } catch (error) {
    console.error("Seeding error:", error);
    res.status(500).json({ message: "Seeding failed", error: error.message });
  }
};

module.exports = { seedData };
