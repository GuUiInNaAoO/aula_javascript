



function clicou(){
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar</strong>" ;
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.google.com.br");
    //window.location.href = "https://www.google.com.br";
}

function trocar(elemento) {
    //document.getElementById("mouse-move").innerHTML = "Obrigado por passar o mouse."
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mouse-move").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}







/*
var validar;
function validadeIdade(idade){
    validar;
    if (idade >= 18){
        validar = true

    }else{
        validar = false
    }
    return validar;    
}

var idade = prompt("Qual a sua idade");
validadeIdade(idade);
console.log(validar);



/*
    function setReplace(frase, nome, novo_nome){
        return frase.replace(nome, novo_nome);
}



    /*alert(soma(5,10));
    alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getMinutes());
alert(d.getHours())
/*
var count;
for (count=0; count <=5; count++){
    console.log(count)
    alert(count);
};



/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};


/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade!");    
}else{
    alert("Menor de idade!!!")
};








/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);


/*var fruta = {nome:"Maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)



//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));




/*var nome = "Vagner Guilherme";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";

linha por linha usa duas barras //alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));*/
