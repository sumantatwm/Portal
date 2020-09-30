const portalservice = require('../service/portal_service')

//Simple version, without validation or sanitation
exports.getDetails = async function (req, res) {
    let result = await portalservice.getAllProjects();
    res.status(result.code).send(result);
};
exports.newProject = async function (req, res) {
    let projectcode = req.body.projectcode;
    let projectscope = req.body.projectscope;
    let projectspoc = req.body.projectspoc;
    let projectassignee = req.body.projectassignee;
    let result = await portalservice.newProject(projectcode,projectscope,projectspoc,projectassignee)
    res.status(result.code).json(result);
};

exports.updateProject = async function (req, res) {
    let projectId = req.params.project_id;
    let updateProject = req.body;
    updateProject.updateAt = new Date();
    let result = await portalservice.updateProject(projectId, updateProject);
    res.status(result.code).send(result);
};

exports.deleteProject = async function (req, res) {
    let projectId = req.params.project_id;
    let result = await portalservice.deleteProject(projectId);
    res.status(result.code).send(result);
};