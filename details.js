function searchCustomer() {

let input =
document.getElementById("searchInput");

let filter =
input.value.toUpperCase();

let table =
document.getElementById("customerTable");

let tr =
table.getElementsByTagName("tr");

for (let i = 1; i < tr.length; i++) {

let td =
tr[i].getElementsByTagName("td")[0];

if (td) {

let txtValue =
td.textContent || td.innerText;

if (
txtValue.toUpperCase().indexOf(filter) > -1
) {
tr[i].style.display = "";
}
else {
tr[i].style.display = "none";
}
}
}
}