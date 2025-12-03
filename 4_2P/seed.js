const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myprojectDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

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

const sampleData = [
    {
        Name: "Yori Zhuang",
        Age: "26",
        Nationality: "Chinese",
        Link: "https://www.instagram.com/yori11zhuang",
        skills: ["coding", "front-end design", "app Testing"],
        time: Date.now(),
    },
    {
        Name: "John Cena",
        Age: "48",
        Nationality: "American",
        Link: "https://www.instagram.com/johncena/",
        skills: ["WWE", "Movie Acting", "Rapping"],
        time: Date.now(),

    }
];

Project.insertMany(sampleData)
    .then(() => {
        console.log("Sample data inserted");
        mongoose.connection.close();
    })
    .catch(err => console.error(err));