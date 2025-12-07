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
    title: String,
    image: String,
    linkText: String,
    link: String,
    description: String
});
const Project = mongoose.model('Project', ProjectSchema);

app.get("/api/projects", async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ statusCode: 200, data: projects, message: "success" })
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
})

app.listen(port, () => {
    console.log("App listening to: " + port)
})
