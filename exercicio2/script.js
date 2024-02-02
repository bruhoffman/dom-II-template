const mostrarSenha = () => {

    const esconderSenha = document.getElementById("password");
    esconderSenha.setAttribute("type", "text");

}

const escurerTela = () => {

    const darkColor = document.getElementsByTagName("form");
    darkColor[0].setAttribute("class", "dark");
    document.getElementById("trocarCor").innerHTML = "Clarear Tela";
    const trocarCor = document.getElementById("trocarCor");
    trocarCor.setAttribute("onclick", "clarearTela()");

}

const clarearTela = () => {

    const lightColor = document.getElementsByTagName("form");
    lightColor[0].setAttribute("class", "light");
    document.getElementById("trocarCor").innerHTML = "Escurecer Tela";
    const trocarCor = document.getElementById("trocarCor");
    trocarCor.setAttribute("onclick", "escurecerTela()");

}