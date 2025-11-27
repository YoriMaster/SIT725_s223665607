var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const cardList = [
    {
        title: "2010 Holden Cruze",
        image: "images/Holden.jpg",
        linkText: "2023.10 - 2024.8",
        link: "https://www.facebook.com/share/16Tr79hvGd/",
        desciption: "Water tank issue, need to replace the whole engine cooling system"
    },
    {   
        title: "2008 Audi TT",
        image: "images/Audi.jpg",
        linkText: "2024.8 - 2025.6",
        link: "https://www.facebook.com/share/15S2Vp59EHE/",
        desciption: "Air intake issue, couldn't solve it"
    },
    {   
        title: "2010 Golf TSI",
        image: "images/VW.jpg",
        linkText: "2025.6 - now",
        link: "#",
        desciption: "German car, best car"
    }
]

app.get("/api/projects",(req,res)=>{
    res.json({statusCode:200,data: cardList, message:"success"})
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
})
