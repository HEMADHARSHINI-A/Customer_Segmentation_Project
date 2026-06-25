// Revenue Trend

const revenueCtx =
document.getElementById("revenueChart");

new Chart(revenueCtx, {

type: "line",

data: {

labels: [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets: [{

label: "Revenue",

data: [
12000,
18000,
15000,
22000,
26000,
30000
],

borderColor: "#6d28d9",

backgroundColor:
"rgba(109,40,217,0.2)",

fill: true,

tension: 0.4

}]
}

});


// Customer Segments

const segmentCtx =
document.getElementById("segmentChart");

new Chart(segmentCtx, {

type: "bar",

data: {

labels: [
"Champions",
"Loyal",
"Potential",
"At Risk",
"Lost"
],

datasets: [{

label: "Customers",

data: [
1500,
1300,
1000,
700,
400
],

backgroundColor: [
"#6d28d9",
"#8b5cf6",
"#3b82f6",
"#f59e0b",
"#ef4444"
]

}]
}

});
