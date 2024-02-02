function shiftPressionado(event) {

    let p = document.getElementById("mensagem"); 
    const texto = document.getElementById("input").value;
    console.log(event);

    if(event.shiftKey){
        p.innerHTML = "Shift Pressionado"    
    } else{
        p.innerHTML = "";
    }

}