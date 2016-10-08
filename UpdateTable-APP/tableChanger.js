function addRow() {
    console.log("onClick event invoked addRow function");
    var table = document.getElementById("table");
    var nextRow = table.rows.length;
    var row = table.insertRow(nextRow);
    row.insertCell(0).innerHTML = (nextRow + 1).toString();
    row.insertCell(1).innerHTML = document.getElementById("data").value;
    return true;
}