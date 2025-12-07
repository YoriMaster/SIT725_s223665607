const getProjects = () => {
    $.get('/api/projects', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}


/* const cardList = [
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
] */
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="' + item.link + '" target="_blank">' + item.linkText + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    getProjects();
    $('.modal').modal();
});
