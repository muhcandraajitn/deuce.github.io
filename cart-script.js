
let gameGta = {
        name: 'GTA V', //id = gta
        price: 600000,
        description: 'An action-adventure game developed by Rockstar North and published by Rockstar Games.',
    }
let gameFifa = {
        name: 'FIFA 21', //id = fifa
        price: 500000,
        description: 'A football simulation video game published by Electronic Arts as part of the FIFA series.',
    }
let gameFfxv = {
        name: 'Final Fantasy XV', //id = ffxv
        price: 600000,
        description: 'An action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series.',
    }
let gameMhw = {
        name: 'Monster Hunter World', //id = mhw
        price: 700000,
        description: 'An action role-playing game developed and published by Capcom and the fifth mainline installment in the Monster Hunter series',
    }
let gameCyberpunk ={
        name: 'Cyberpunk', //id = cyberpunk
        price: 800000,
        description: 'A 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe.',
    }
let gameRdr2 ={
        name: 'Red Dead Redemption 2',//id = rdr2
        price: 600000,
        description: 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.',
    }
let gamePersona = {
        name: 'Persona 5',//id = persona
        price: 650000,
        description: 'Persona 5 is a role-playing video game developed by Atlus. It is the sixth installment in the Persona series, which is part of the larger Megami Tensei franchise.',
    }
let gameHarvest = {
        name: 'Harvest Moon',//id = harvest
        price: 250000,
        description: 'Harvest Moon is a farm simulation role-playing game developed by Amccus for the Super Nintendo Entertainment System. ',
    }



let gameTemp = ''
let hargaTemp = 0
let picTemp


function insertNewRecord() {
    var table = document.getElementById("tabel").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = `<td width="80"><img src=${picTemp} height="60"  /></td>`;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = gameTemp;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = hargaTemp;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = 1;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onDelete(this)">Cancel</button>`
    totalHarga()
}


function buyGta() {
    var input = "GTA V";
    var inputHarga = 600000  
    var pic = "https://www.rockstargames.com/V/img/global/order/mobile-cover.jpg"
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    picTemp = pic
    insertNewRecord();
}
function buyFifa() {
    var input = "FIFA 21";
    var inputHarga = 500000   
    let pic = "https://images-na.ssl-images-amazon.com/images/I/81mBk8%2BsxrL._SX385_.jpg"
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    picTemp = pic
    insertNewRecord();
}
function buyFfxv() {
    var input = 'Final Fantasy 15'
    var inputHarga = 600000 
    let pic = "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/FF_XV_cover_art.jpg/220px-FF_XV_cover_art.jpg"
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    picTemp = pic
    insertNewRecord();
}
function buyMhw() {
    var input = 'Monster Hunter World'
    var inputHarga = 700000   
    containerHarga.push(inputHarga)
    let pic = "https://i.redd.it/wz8f2zzgvrr21.jpg"
    hargaTemp = inputHarga
    gameTemp = input
    piceTemp = pic
    insertNewRecord();
}
function buyCyberpunk() {
    var input = 'Cyberpunk'
    var inputHarga = 800000    
    let pic = "https://s1.gaming-cdn.com/images/products/840/orig/cyberpunk-2077-cover.jpg"
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    picTemp = pic
    insertNewRecord();
}
function buyRdr2() {
    var input = 'Red Dead Redemption 2'
    var inputHarga = 600000   
    let pic = "https://www.mobygames.com/images/covers/l/524742-red-dead-redemption-ii-xbox-one-front-cover.jpg"
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    picTemp = pic
    insertNewRecord();
}

function buyPersona() {
    var input = 'Persona 5'
    var inputHarga = 650000  
    let pic = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Persona_5_cover_art.jpg/220px-Persona_5_cover_art.jpg" 
    containerHarga.push(inputHarga)
    hargaTemp = inputHarga
    gameTemp = input
    picTemp = pic
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