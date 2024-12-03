var i = 5;
var img = new Array();
img[0] = new Image();
img[0].src = 'assets/game-1.png';
img[1] = new Image();
img[1].src = 'assets/game-2.png';
img[2] = new Image();
img[2].src = 'assets/game-3.png';
img[3] = new Image();
img[3].src = 'assets/game-4.png';
img[4] = new Image();
img[4].src = 'assets/game-5.png';
img[5] = new Image();
img[5].src = 'assets/game-6.png';
img[6] = new Image();
img[6].src = 'assets/game-7.png';
var kontrol_yazi = /^[.]+$/;
var soru = "";
var str = "";
var j = 0;
var indis = Math.floor(Math.random() * 5);
var sehirler = ["NERELİSİN", "NERELİSİN", "NERELİSİN", "NERELİSİN", "NERELİSİN"];
var ulkeler = ["TÜRKİYE", "MISIR", "FRANSA", "NORVEÇ", "HOLLANDA"];
var hayvanlar = ["KÖPEK", "YUNUS", "KEDİ", "CİVCİV", "ASLAN"];


function baslat(e) {
    if (document.getElementById('sehir').checked) {
        document.getElementById('soru-turu').innerHTML = "ŞEHİR";
        soru = sehirler[indis];
    } else if (document.getElementById('ulke').checked) {
        document.getElementById('soru-turu').innerHTML = "ÜLKE";
        soru = ulkeler[indis];

    } else if (document.getElementById('hayvan').checked) {
        document.getElementById('soru-turu').innerHTML = "HAYVAN";
        soru = hayvanlar[indis];

    } else {
        alert("Lütfen Soru Türünü Seçiniz ve Oyunu Başlatınız.");
        return false;
    }

    console.log(indis);
    document.getElementById('baslat').disabled = true;
    document.getElementById('sehir').disabled = true;
    document.getElementById('ulke').disabled = true;
    document.getElementById('hayvan').disabled = true;
    olustur();


    return false;
}

function olustur() {
    var konum = 370;
    for (var k = 0; k < soru.length; k++) {
        var cizgi = document.createElement("img");
        cizgi.src = "assets/cizgi.png";
        cizgi.className = "cizgi";
        cizgi.setAttribute("id", k + 1);
        var xyz = document.getElementById("cevap");
        xyz.appendChild(cizgi);

        var yeniDiv = document.createElement("div");
        yeniDiv.innerHTML = soru[k];
        yeniDiv.className = "cevap-konum";
        yeniDiv.setAttribute("id", (k + 1) + "div");
        xyz.appendChild(yeniDiv);

        konum += 100;
        document.getElementById(k + 1).style.left = konum + "px";
        document.getElementById((k + 1) + "div").style.left = (konum + 8) + "px";
        document.getElementById((k + 1) + "div").style.display = 'none';
        str = soru;


    }
}

function tahmin(e) {
    if (soru == "" || soru == null) {
        alert("Lütfen Soru Türünü Seçiniz ve Oyunu Başlatınız.")
        return false;
    }
    var deneme = e.innerHTML;
    var tut = str.indexOf(deneme);
    do {

        if (tut < 0) {
            e.style.color = 'red';
            e.disabled = true;
            hakKaybet();
            return false;
        }
        document.getElementById((tut + 1) + "div").style.display = 'block';
        str = str.replace(str[tut], ".");
        tut = str.indexOf(deneme);

    } while (tut >= 0);
    e.style.color = 'red';
    e.disabled = true;
    kontrol();



}

function kontrol() {
    var p = document.createElement("p");
    if (str.match(kontrol_yazi)) {
        p.innerHTML = "&nbsp;YOU WİN&nbsp;";
        var x = document.getElementById("kalp").querySelectorAll(".kalp");
        for (var s = 5; s >= 0; s--) {
            x[s].style.display = 'none';
        }
        var buton = document.createElement("button");
        buton.className = "tekrar";
        buton.innerHTML = "TEKRAR OYNA";
        document.getElementById("f5").appendChild(buton);
        p.className = "game-over";
        document.getElementById("kalp").appendChild(p);
        document.querySelectorAll('.harf').forEach(t => {
            t.disabled = true;
        });


    } else if (i < 0) {
        var asd = document.getElementById("adamasmaca").querySelectorAll(".as");
        var win = asd[0];
        win.src = "assets/game_over.gif";
        p.innerHTML = "GAME OVER";
        for (var m = 0; m < soru.length; m++) {
            if (str[m] != ".") {
                document.getElementById((m + 1) + "div").style.color = 'red';
                document.getElementById((m + 1) + "div").style.display = 'block';
            }

        }

        p.className = "game-over";
        document.getElementById("kalp").appendChild(p);
        var buton = document.createElement("button");
        buton.className = "tekrar";
        buton.innerHTML = "TEKRAR OYNA";
        document.getElementById("f5").appendChild(buton);
        document.querySelectorAll('.harf').forEach(t => {
            t.disabled = true;
        });

    }



}

function hakKaybet() {
    if (i > 0) {
        var x = document.getElementById("kalp").querySelectorAll(".kalp");
        x[i].style.display = 'none';
        sonrakiresim();
        i--;
        return false;
    }

    var x = document.getElementById("kalp").querySelectorAll(".kalp");
    x[i].style.display = 'none';
    sonrakiresim();
    i--;
    kontrol();

}

function sonrakiresim() {

    var temp = document.getElementById("adamasmaca").querySelectorAll(".as");
    var resim = temp[0];
    if (j < img.length - 1) {
        resim.src = img[j + 1].src;
        j++;
    }

    return false;

}

function tekrar() {
    var result = window.confirm("TEKRAR OYNAMAK İSTER MİSİN");
    if (result === true) {
        window.alert('Okay, if yoe sure.');
    } else {
        window.alert('You seem uncertain.');
    }

}