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


// const cardList = [
//     {
//         title: "2010 Holden Cruze",
//         image: "images/Holden.jpg",
//         linkText: "2023.10 - 2024.8",
//         link: "https://www.facebook.com/share/16Tr79hvGd/",
//         desciption: "Water tank issue, need to replace the whole engine cooling system"
//     },
//     {
//         title: "2008 Audi TT",
//         image: "images/Audi.jpg",
//         linkText: "2024.8 - 2025.6",
//         link: "https://www.facebook.com/share/15S2Vp59EHE/",
//         desciption: "Air intake issue, couldn't solve it"
//     },
//     {
//         title: "2010 Golf TSI",
//         image: "images/VW.jpg",
//         linkText: "2025.6 - now",
//         link: "#",
//         desciption: "German car, best car"
//     }
// ]

app.get("/api/projects", async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: Project, message: "success" })
})

app.listen(port, () => {
    console.log("App listening to: " + port)
})
