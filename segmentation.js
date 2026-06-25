// Customer Count by Segment

new Chart(
document.getElementById("segmentCountChart"),
{
type:"bar",

data:{
labels:[
"Champions",
"Loyal",
"Potential",
"At Risk",
"Lost"
],

datasets:[{
label:"Customers",

data:[
1500,
1300,
1100,
800,
500
],

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


// Revenue Contribution

new Chart(
document.getElementById("segmentRevenueChart"),
{
type:"bar",

data:{
labels:[
"Champions",
"Loyal",
"Potential",
"At Risk",
"Lost"
],

datasets:[{
label:"Revenue ($K)",

data:[
650,
500,
300,
150,
70
],

backgroundColor:"#ff6b35"
}]
}
}
);


// RFM Scores

new Chart(
document.getElementById("rfmChart"),
{
type:"radar",

data:{
labels:[
"Recency",
"Frequency",
"Monetary"
],

datasets:[{

label:"Average Score",

data:[
85,
92,
88
],

backgroundColor:"rgba(79,70,229,.3)",

borderColor:"#4f46e5",

borderWidth:2
}]
}
}
);


// Segment Percentage

new Chart(
document.getElementById("segmentPieChart"),
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

data:[
35,
25,
20,
12,
8
],

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