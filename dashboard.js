// Revenue Trend

new Chart(
document.getElementById("revenueChart"),
{
type:"line",

data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{
label:"Revenue",

data:[12000,18000,15000,22000,25000,30000],

borderColor:"#ff6b35",

backgroundColor:"rgba(255,107,53,.2)",

fill:true,

tension:.4
}]
}
}
);

// Customer Segments

new Chart(
document.getElementById("segmentChart"),
{
type:"doughnut",

data:{
labels:[
"Champions",
"Loyal",
"Potential",
"At Risk",
"Lost"
],

datasets:[{
data:[35,25,20,12,8],

backgroundColor:[
"#ff6b35",
"#4f46e5",
"#10b981",
"#f59e0b",
"#ef4444"
]
}]
}
}
);