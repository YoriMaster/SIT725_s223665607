const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookDB');

//const Book = require('../models/book.model');
const bookItems = require('../models/bookModel');

// const ProjectSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   link: String,
//   description: String,
// });

//const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
    {
        id: "b1",
        title: 'The Three-Body Problem',
        price: "29.99",
        currency: "AUD",
        author: 'Liu Cixin',
        year: 2008,
        genre: 'Science Fiction',
        summary: `The Three-Body Problem is the first novel in the Remembrance of Earth's
Past trilogy. The series portrays a fictional past, present, and future wherein
Earth encounters an alien civilization from a nearby system of three Sun-like
stars orbiting one another, a representative example of the three-body problem
in orbital mechanics.`
    },
    {
        id: "b2",
        title: 'Jane Eyre',
        price: "22",
        currency: "AUD",
        author: 'Charlotte Brontë',
        year: 1847,
        genre: 'Classic',
        summary: `An orphaned governess confronts class, morality, and love at Thornfield
Hall, uncovering Mr. Rochester’s secret and forging her own independence.`
    },
    {
        id: "b3",
        title: "Pride and Prejudice",
        price: "22",
        currency: "AUD",
        author: "Jane Austen",
        year: 1813,
        genre: "Classic",
        summary: `Elizabeth Bennet and Mr. Darcy navigate pride, misjudgement, and social
expectations in a sharp study of manners and marriage.`
    },
    {
        id: "b4",
        title: "The English Patient",
        price: "25.39",
        currency: "AUD",
        author: "Michael Ondaatje",
        year: 1992,
        genre: "Historical Fiction",
        summary: `In a ruined Italian villa at the end of WWII, four strangers with
intersecting pasts confront memory, identity, and loss.`
    },
    {
        id: "b5",
        title: "Small Gods",
        price: "31.98",
        currency: "AUD",
        author: "Terry Pratchett",
        year: 1992,
        genre: "Fantasy",
        summary: `In Omnia, the god Om returns as a tortoise, and novice Brutha must
confront dogma, empire, and the nature of belief.`
    }];
//      {
//         id: 'b2',
//         title: 'Jane Eyre',
//         author: 'Charlotte Brontë',
//         year: 1847,
//         genre: 'Classic',
//         summary: `An orphaned governess confronts class, morality, and love at Thornfield
// Hall, uncovering Mr. Rochester’s secret and forging her own independence.`
//     },
//     {
//         id: 'b3',
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         year: 1813,
//         genre: 'Classic',
//         summary: `Elizabeth Bennet and Mr. Darcy navigate pride, misjudgement, and social
// expectations in a sharp study of manners and marriage.`
//     },
//     {
//         id: 'b4',
//         title: 'The English Patient',
//         author: 'Michael Ondaatje',
//         year: 1992,
//         genre: 'Historical Fiction',
//         summary: `In a ruined Italian villa at the end of WWII, four strangers with
// intersecting pasts confront memory, identity, and loss.`
//     },
//     {
//         id: 'b5',
//         title: 'Small Gods',
//         author: 'Terry Pratchett',
//         year: 1992,
//         genre: 'Fantasy',
//         summary: `In Omnia, the god Om returns as a tortoise, and novice Brutha must
// confront dogma, empire, and the nature of belief.`
//     }
(async () => {
    try {
        // 3) ensure unique on id (good practice)
        await bookItems.collection.createIndex({ id: 1 }, { unique: true });

        // 4) clear and insert
        await bookItems.deleteMany({});
        await bookItems.insertMany(sampleData);
        console.log('Seeded 5 book items.');
    } catch (err) {
        console.error('Seeding failed:', err.message);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
})();