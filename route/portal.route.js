const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const portal_controller = require('../controller/portal_controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/projectdetails', portal_controller.getDetails);
router.post('/newproject', portal_controller.newProject);
router.put('/updateproject/:project_id', portal_controller.updateProject);
router.delete('/deleteproject/:project_id', portal_controller.deleteProject);
module.exports = router;