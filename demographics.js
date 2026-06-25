// Gender Chart

new Chart(
document.getElementById("genderChart"),
{
type:"doughnut",

data:{
labels:["Female","Male"],

datasets:[{
data:[54,46],

backgroundColor:[
"#ff6b35",
"#4f46e5"
]
}]
}
}
);


// Marital Status

new Chart(
document.getElementById("maritalChart"),
{
type:"pie",

data:{
labels:[
"Married",
"Single"
],

datasets:[{
data:[
58,
42
],

backgroundColor:[
"#10b981",
"#f59e0b"
]
}]
}
}
);


// Age Group

new Chart(
document.getElementById("ageChart"),
{
type:"bar",

data:{

labels:[
"18-25",
"26-35",
"36-45",
"46-55",
"55+"
],

datasets:[{

label:"Customers",

data:[
1500,
4200,
6000,
2800,
1200
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


// Country Analysis

new Chart(
document.getElementById("countryChart"),
{
type:"bar",

data:{

labels:[
"USA",
"UK",
"Canada",
"Germany",
"France"
],

datasets:[{

label:"Revenue",

data:[
550,
780,
420,
350,
280
],

backgroundColor:"#ff6b35"
}]
}
}
);