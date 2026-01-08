const socket = io();

const content = document.getElementById("chart").getContext("2d");
const chart = new Chart(content, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Value",
            data: [],
        }]
    }
});

socket.on("data", value => {
    chart.data.labels.push("");
    chart.data.datasets[0].data.push(value);

    if (chart.data.datasets[0].data.length > 20) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();

    console.log("New random number:", value);
});