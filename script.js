let gameTemp = ''
let hargaTemp = 0


function insertNewRecord() {
    var table = document.getElementById("tabel").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = gameTemp;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = hargaTemp;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onDelete(this)">Cancel</a>`;
    totalHarga()
}

function buyGta() {
    var input = "GTA V";
    var inputHarga = 600000  
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    insertNewRecord();
}
function buyFifa() {
    var input = "FIFA 21";
    var inputHarga = 500000   
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    insertNewRecord();
}
function buyFfxv() {
    var input = 'Final Fantasy 15'
    var inputHarga = 600000 
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    insertNewRecord();
}
function buyMhw() {
    var input = 'Monster Hunter World'
    var inputHarga = 700000   
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    insertNewRecord();
}
function buyCyberpunk() {
    var input = 'Cyberpunk'
    var inputHarga = 800000    
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    insertNewRecord();
}
function buyRdr2() {
    var input = 'Red Dead Redemption 2'
    var inputHarga = 600000   
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    insertNewRecord();
}

function buyPersona() {
    var input = 'Persona 5'
    var inputHarga = 650000   
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    insertNewRecord();
}

function onDelete(td) {
    if (confirm('Are you sure to cancel')) {
        row = td.parentElement.parentElement;
        containerHarga.splice(row.rowIndex-1, 1)
        console.log(containerHarga)
        document.getElementById("tabel").deleteRow(row.rowIndex);
        totalHarga()
    }
}
let hargaTotal = 0
function totalHarga(){
    document.getElementById("total").innerHTML = `Total = ${containerHarga.reduce((a, b) => a + b, 0)}`
}
let containerHarga = []