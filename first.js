let card=document.querySelector(".trend");
let cardfirst=document.getElementById("trendsec");
let blog=document.getElementById("blog");
let cardsec=document.getElementById("trendthree");
let cardthr=document.getElementById("trendfor");
let cardfor=document.getElementById("trendfv");
let cardfv=document.getElementById("trendsx");
let main=document.querySelector(".main");
let blogPage=document.querySelector(".trends");
let letr=document.querySelector(".letter");
let ftr=document.querySelector(".footer");
let abt=document.querySelector(".about");
let con=document.querySelector(".contact");
let cart=document.querySelector(".cart")
function home(){
    main.style.display="flex";
    card.style.display="block";
    cardfirst.style.display="block";
    cardsec.style.display="block";
    cardthr.style.display="block";
    con.style.display="none";
    cardfor.style.display="block";
    abt.style.display="block";
    cardfv.style.display="block";
    blogPage.style.display="none";
    cart.style.display="none";
    document.getElementById("home").style.color="rgb(25, 167, 167)";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
};

function shops(){
    main.style.display="none";
    blogPage.style.display="none";
    card.style.display="block";
    cardfirst.style.display="block";
    cardsec.style.display="block";
    cart.style.display="none";
    cardthr.style.display="block";
    cardfor.style.display="block";
    con.style.display="none";
    cardfv.style.display="block";
    abt.style.display="none";
    document.getElementById("shop").style.color="rgb(25, 167, 167)";
    document.getElementById("contact").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
};

function blogs(){
    main.style.display="none";
    card.style.display="none";
    cardfirst.style.display="none";
    cardsec.style.display="none";
    cardthr.style.display="none";
    cardfor.style.display="none";
    abt.style.display="none";
    cardfv.style.display="none";
    cart.style.display="none";
    con.style.display="none";
    blogPage.style.display="block";
    document.getElementById("blog").style.color="rgb(25, 167, 167)";
    document.getElementById("home").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("shop").style.color="black";
}

function about(){
    abt.style.display="block";
    main.style.display="none";
    card.style.display="none";
    cardfirst.style.display="none";
    cart.style.display="none";
    cardsec.style.display="none";
    cardthr.style.display="none";
    con.style.display="none";
    cardfor.style.display="none";
    cardfv.style.display="none";
    blogPage.style.display="none";
    document.getElementById("about").style.color="rgb(25, 167, 167)";
    document.getElementById("home").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("shop").style.color="black";
};
function contact(){
    con.style.display="block";
    abt.style.display="none";
    main.style.display="none";
    card.style.display="none";
    cart.style.display="none";
    cardfirst.style.display="none";
    cardsec.style.display="none";
    cardthr.style.display="none";
    cardfor.style.display="none";
    cardfv.style.display="none";
    blogPage.style.display="none";
    document.getElementById("contact").style.color="rgb(25, 167, 167)";
    document.getElementById("home").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("shop").style.color="black";
}

function show(img){
    let newImg=document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;
    document.querySelector(".cart").style.display="flex";
    con.style.display="none";
    abt.style.display="none";
    main.style.display="none";
    card.style.display="none";
    cardfirst.style.display="none";
    cardsec.style.display="none";
    cardthr.style.display="none";
    cardfor.style.display="none";
    cardfv.style.display="none";
    blogPage.style.display="none";
}
function addCart(){
    alert("Added to Cart");
    location.reload();
}