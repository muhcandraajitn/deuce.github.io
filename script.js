
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

let container = []
let containerHarga = []

let total = 0

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama Game</th><th>harga</th><th>Action</th></tr>";
    for (let i = 0; i < container.length; i++) {
        var btnCancel = "<button class='btn-Cancel' href='#' onclick='Cancel(" + i + ")'>Cancel</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + container[i] + "</td><td>" + containerHarga[i] + "</td><td>" + btnCancel + "</tr>";
        total += containerHarga[i]
    }
}

function buyGta() {
    var input = document.getElementById("gta");
    container.push(input.name);
    containerHarga.push(input.price)
    tampil();
}
function buyFifa() {
    var input = document.getElementById("fifa");
    data.push(input.name);
    containerHarga.push(input.price)
    tampil();
}
function buyFfxv() {
    var input = document.getElementById("Ffxv");
    data.push(input.name);
    containerHarga.push(input.price)
    tampil();
}
function buyMhw() {
    var input = document.getElementById("Mhw");
    data.push(input.name);
    containerHarga.push(input.price)
    tampil();
}
function buyCyberpunk() {
    var input = document.getElementById("cyberpunk");
    data.push(input.name);
    containerHarga.push(input.price)
    tampil();
}
function buyRdr2() {
    var input = document.getElementById("rdr2");
    data.push(input.name);
    containerHarga.push(input.price)
    tampil();
}
function buyPersona() {
    var input = document.getElementById("Persona");
    data.push(input.name);
    containerHarga.push(input.price)
    tampil();
}
function buyHarvest() {
    var input = 'document.getElementById("Harvest")';
    data.push(input.name);
    containerHarga.push(input.price)
    tampil();
}

function cancel(id) {
    data.pop(id);
    tampil();
}