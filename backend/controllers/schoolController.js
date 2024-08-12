const schoolServices = require("../services/schoolServices");

// const createSchool = async (req, res) => {
//   try {
//     const school = await schoolServices.createSchool(req.body);
//     res.status(201).json(school);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const createSchool = async (req, res) => {
  try {
    data = req.body;

    if (Array.isArray(data)) {
      const schools = await schoolServices.createSchools(data);
      res.status(201).json(schools);
    } else {
      const school = await schoolServices.createSchool(data);
      res.status(201).json(school);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSchools = async (req, res) => {
  try {
    const schools = await schoolServices.getAllSchools();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getActiveSchool = async (req, res) => {
  try {
    const school = await schoolServices.getActiveSchool();
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPendingSchool = async (req, res) => {
  try {
    const school = await schoolServices.getPendingSchool();
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDeletedSchool = async (req, res) => {
  try {
    const school = await schoolServices.getDeletedSchool();
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArchivedSchool = async (req, res) => {
  try {
    const school = await schoolServices.getArchivedSchool();
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSchool = async (req, res) => {
  try {
    const school = await schoolServices.getSchool(req.params.school_id);
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const school = await schoolServices.updateSchool(
      req.params.school_id,
      req.body
    );

    if (school) {
      // res.status(200).json(school);
      res.json({ message: "School updated" });
    } else {
      res.json({ message: "School not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const school = await schoolServices.deleteSchool(req.params.school_id);

    if (!school) {
      res.json({ message: "School not found" });
    } else {
      res.json({ message: "School deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSchool,
  getAllSchools,
  getActiveSchool,
  getPendingSchool,
  getDeletedSchool,
  getArchivedSchool,
  getSchool,
  updateSchool,
  deleteSchool,
};
