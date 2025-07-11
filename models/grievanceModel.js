const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'],
        default: 'Pending'
    },
    uniqueID: {
        type: String,
        required: true,
        unique: true
    },
    ministryName: {
        type: String,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    },
    publicAuthority: {
        type: String,

    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
      
    },
    locationOfIssue: {
        type: String,
       
    },
    dateOfIncident:{
        type: Date,
       
    },
    grievanceDescription: {
        type: String,
        required: true
    },
    attachments: [{
        public_id: String,
        url: String
    }],
    resolution: {
        type: String,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    escalatedLeadOfficer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    escalatedToLeadOfficer: {
        type:Boolean,
        default: false
    },
    activityLog: [{
        message: String,
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        status: String,
        timestamp: { type: Date, default: Date.now }
    }],
    feedbackGiven: {
        type: Boolean,
        default: false
    },
    isClosed: {
        type: Boolean,
        default: false
    }

},{timestamps: true});

module.exports = mongoose.model('Grievance', grievanceSchema);