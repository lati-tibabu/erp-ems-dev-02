const schoolServices = require("../services/schoolServices");

// const createSchool = async (req, res) => {
//   try {
//     const school = await schoolServices.createSchool(req.body);
//     res.status(201).json(school);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const createSchool = async(req, res) => {
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

const getAllSchools = async(req, res) => {
    try {
        const schools = await schoolServices.getAllSchools();
        res.json(schools);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSchoolsPagination = async(req, res) => {
    try {
        const { page, limit } = req.query;
        const schools = await schoolServices.getSchoolsPagination(parseInt(page), parseInt(limit)); // Parse the values as integers
        res.json(schools);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSchoolsPaginationC = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const { count, rows } = await schoolServices.getSchoolsPaginationC(page, limit);

        res.json({
            schools: rows,
            totalSchools: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            headers: req.headers,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const getActiveSchool = async(req, res) => {
    try {
        // const { page = 1, limit = 10 } = req.query;
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const { count, rows } = await schoolServices.getActiveSchool(page, limit);
        res.json({
            schools: rows,
            totalSchools: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getPendingSchool = async(req, res) => {
    try {
        // const { page = 1, limit = 10 } = req.query;
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const { count, rows } = await schoolServices.getPendingSchool(parseInt(page), parseInt(limit));
        res.json({
            schools: rows,
            totalSchools: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDeletedSchool = async(req, res) => {
    try {
        // const { page = 1, limit = 10 } = req.query;
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const { count, rows } = await schoolServices.getDeletedSchool(parseInt(page), parseInt(limit));
        res.json({
            schools: rows,
            totalSchools: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getArchivedSchool = async(req, res) => {
    try {
        // const { page = 1, limit = 10 } = req.query;
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const { count, rows } = await schoolServices.getArchivedSchool(parseInt(page), parseInt(limit));
        res.json({
            schools: rows,
            totalSchools: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSchool = async(req, res) => {
    try {
        const school = await schoolServices.getSchool(req.params.school_id);
        res.json(school);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSchoolTotal = async(req, res) => {
    try {
        const total = await schoolServices.getSchoolTotal();
        res.json({ count: total });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateSchool = async(req, res) => {
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

const deleteSchool = async(req, res) => {
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
    getSchoolsPagination,
    getSchoolsPaginationC,
    getActiveSchool,
    getPendingSchool,
    getDeletedSchool,
    getArchivedSchool,
    getSchool,
    getSchoolTotal,
    updateSchool,
    deleteSchool,
};