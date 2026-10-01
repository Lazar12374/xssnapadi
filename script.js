let ime = document.getElementById("ime");
let godine= document.getElementById("godine");
let dugme=document.getElementById("dugme");
dugme.addEventListener("click", function(){
    let imevrednost = ime.value;
    console.log(imevrednost);
    let godinevrednost = godine.value;
    godinevrednost = parseInt(godinevrednost);
    console.log(godinevrednost);
    
    if (godinevrednost>=18){
        
        console.log("Osoba - punoletna");
    }
    else{
        console.log("Osoba - maloletna");
    }

});
