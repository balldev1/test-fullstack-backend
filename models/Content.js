const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    content_name: String,
    project_name: String,
    date: {
        publishing_date: String,
        due_date: String,
        shooting_date: String,
        pitching_date: String
    },
    creative_type: String,
    channel: String,
    update_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Content', ContentSchema);

