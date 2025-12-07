const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myprojectDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    linkText: String,
    link: String,
    description: String
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
    {
        title: "2010 Holden Cruze",
        image: "images/Holden.jpg",
        linkText: "2023.10 - 2024.8",
        link: "https://www.facebook.com/share/16Tr79hvGd/",
        description: "Water tank issue, need to replace the whole engine cooling system"
    },
    {
        title: "2008 Audi TT",
        image: "images/Audi.jpg",
        linkText: "2024.8 - 2025.6",
        link: "https://www.facebook.com/share/15S2Vp59EHE/",
        description: "Air intake issue, couldn't solve it"
    },
    {
        title: "2010 Golf TSI",
        image: "images/VW.jpg",
        linkText: "2025.6 - now",
        link: "#",
        description: "German car, best car"
    }
];

Project.insertMany(sampleData)
    .then(() => {
        console.log("Sample data inserted");
        mongoose.connection.close();
    })
    .catch(err => console.error(err));