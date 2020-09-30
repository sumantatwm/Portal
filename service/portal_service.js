//const Portal = require('../model/portalschema')
const db = require('../config/db.config');
let ObjectId = require('mongodb').ObjectId;

exports.getAllProjects = async function () {
    try {
        let coll = await db.getPortalColl();
        let result = await coll.find({status : true});
        if(result) {
            return {status : true, code : 200, message : 'Record fetched successfuly', data : await result.toArray() };
        } else {
            return {status : false, code : 422, message : 'Error occured while fetching data' };
        }
    } catch (error) {
        console.log(error);
    }
};


exports.updateProject = async function (projectId, updateProject) {   
    try {
        let coll = await db.getPortalColl();
        let result = await coll.updateOne(
            { _id : ObjectId(projectId), status : true},
            {$set : updateProject}
        );
        if(result) {
            return {status : true, code : 200, message : 'Record updated successfuly' };
        } else {
            return {status : false, code : 422, message : 'Error occured while updatinf data' };
        }
    
    } catch (error) {
        console.log(error);
    }
};


exports.newProject = async function (projectCode, Projectscope, projectspoc, Assignee) {
    let newportal = {
            projectcode : projectCode,
            projectscope : Projectscope,
            projectspoc : projectspoc,
            projectassignee : Assignee,
            status : true,
            createdAt : new Date(),
            updateAt : new Date()
        };
    try {
        let coll = await db.getPortalColl();
        let result = await coll.insertOne(newportal);
        if(result.insertedCount) {
            return {status : true, code : 201, message : 'Record cretaed successfuly' };
        } else {
            return {status : false, code : 422, message : 'Error occured while inserting' };
        }
    } catch (error) {
        console.log(error);
    }
};

exports.deleteProject = async function (projectId) {
    try {
        let coll = await db.getPortalColl();
        let result = await coll.updateOne(
            { _id : ObjectId(projectId)},
            {$set : { status : false, updateAt : new Date()}}
        );
        if(result.modifiedCount) {
            return {status : true, code : 201, message : 'Record deleted successfuly' };
        } else {
            return {status : false, code : 422, message : 'Error occured while deleting' };
        }
    } catch (error) {
        console.log(error);
    }
};