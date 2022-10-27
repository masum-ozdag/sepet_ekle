let basketArray = [];
let piece = 0;
let piece2 = 0;
let piece3 = 0;
let piece4 = 0;
let count = 0;

function basketAdd(event) {
    let urunAd = document.getElementById('urun1').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun1').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun1').getElementsByClassName("card-id")[0].innerHTML;
    piece++;
    count++;

    urunFiyat = 200;
    let totalPrice = piece * urunFiyat;

    let products = {
        id: count,
        adet: piece,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar(event)" >Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri").innerHTML = "";
    document.getElementById("sepet-urunleri").appendChild(tr);

    console.log(products)

}

function cıkar(event) {
    let urunAd = document.getElementById('urun1').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun1').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun1').getElementsByClassName("card-id")[0].innerHTML;
    if (piece > 1 && count > 1) {

        piece--;
        count--;

    } else if (piece > 0 && count > 0) {
        event.target.closest("tr").remove();
        return;
    }


    urunFiyat = 200;
    let totalPrice = piece * urunFiyat;

    let products = {
        id: count,
        adet: piece,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar(event)" >Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri").innerHTML = "";
    document.getElementById("sepet-urunleri").appendChild(tr);

    console.log(products)
}

function basketAdd2(event) {
    let urunAd = document.getElementById('urun2').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun2').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun2').getElementsByClassName("card-id")[0].innerHTML;
    piece2++;
    count++;

    urunFiyat = 100;
    let totalPrice = piece2 * urunFiyat;

    let products = {
        id: count,
        adet: piece2,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece2}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar2(event)" >Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri2").innerHTML = "";
    document.getElementById("sepet-urunleri2").appendChild(tr);

    console.log(products)

}

function cıkar2(event) {
    let urunAd = document.getElementById('urun2').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun2').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun2').getElementsByClassName("card-id")[0].innerHTML;
    if (piece2 > 1 && count > 1) {

        piece2--;
        count--;

    } else if (piece2 > 0 && count > 0) {
        piece2--;
        count--;
        event.target.closest("tr").remove();
        return;
    }


    urunFiyat = 200;
    let totalPrice = piece2 * urunFiyat;

    let products = {
        id: count,
        adet: piece2,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece2}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar2(event)" >Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri2").innerHTML = "";
    document.getElementById("sepet-urunleri2").appendChild(tr);

    console.log(products)
}
function basketAdd3(event) {
    let urunAd = document.getElementById('urun3').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun3').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun3').getElementsByClassName("card-id")[0].innerHTML;
    piece3++;
    count++;

    urunFiyat = 500;
    let totalPrice = piece3 * urunFiyat;

    let products = {
        id: count,
        adet: piece3,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece3}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar3(event)">Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri3").innerHTML = "";
    document.getElementById("sepet-urunleri3").appendChild(tr);

    console.log(products)

}

function cıkar3(event) {
    let urunAd = document.getElementById('urun3').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun3').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun3').getElementsByClassName("card-id")[0].innerHTML;
    if (piece3 > 1 && count > 1) {

        piece3--;
        count--;

    } else if (piece3 > 0 && count > 0) {
        piece3--;
        count--;
        event.target.closest("tr").remove();
        return;
    }


    urunFiyat = 200;
    let totalPrice = piece3 * urunFiyat;

    let products = {
        id: count,
        adet: piece3,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece3}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar3(event)" >Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri3").innerHTML = "";
    document.getElementById("sepet-urunleri3").appendChild(tr);

    console.log(products)
}

function basketAdd4(event) {
    let urunAd = document.getElementById('urun4').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun4').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun4').getElementsByClassName("card-id")[0].innerHTML;
    piece4++;
    count++;

    urunFiyat = 600;
    let totalPrice = piece4 * urunFiyat;

    let products = {
        id: count,
        adet: piece4,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece4}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar4(event)">Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri4").innerHTML = "";
    document.getElementById("sepet-urunleri4").appendChild(tr);

    console.log(products)

}

function cıkar4(event) {
    let urunAd = document.getElementById('urun4').getElementsByClassName("card-title")[0].innerHTML;
    let urunFiyat = document.getElementById('urun4').getElementsByClassName("card-price")[0].innerHTML;
    let urunNo = document.getElementById('urun4').getElementsByClassName("card-id")[0].innerHTML;
    if (piece4 > 1 && count > 1) {

        piece4--;
        count--;

    } else if (piece4 > 0 && count > 0) {
        piece4--;
        count--;
        event.target.closest("tr").remove();
        return;
    }


    urunFiyat = 600;
    let totalPrice = piece4 * urunFiyat;

    let products = {
        id: count,
        adet: piece4,
        urunAdi: urunAd,
        urunNo,
        urunFiyat,
        totalPrice
    }
    basketArray.push(products);

    let td = `
    <td class="card-title">${urunAd}</td>
    <td class="card-title">${piece4}</td>
    <td class="card-title">${totalPrice}</td>
    <td><button class="btn btn-warning" onclick="cıkar4(event)" >Çıkar</button></td>
    `
    const tr = document.createElement('tr');
    tr.setAttribute("id", count);


    tr.innerHTML = td;


    document.getElementById("sepet-urunleri4").innerHTML = "";
    document.getElementById("sepet-urunleri4").appendChild(tr);

    console.log(products)
}
