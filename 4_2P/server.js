var express = require("express")
var app = express()
var port = process.env.port || 3000;
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/myprojectDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        min: 0,
        max: 80,
    },
    Nationality: String,
    link: String,
    skills: [String],
    time: { type: Date, default: Date.now },
});
const Project = mongoose.model('Project', ProjectSchema);

app.get("/api/projects", async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: Project, message: "success" })
})

app.listen(port, () => {
    console.log("App listening to: " + port)
})
