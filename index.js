
const botao = document.getElementById("process");
botao.addEventListener('click', processar);

function processar () {
    
    const v1 = document.getElementById("n1").value;
    const v2 = document.getElementById("n2").value;
    const v3 = document.getElementById("n3").value;
    const v4 = document.getElementById("n4").value;
    const v5 = document.getElementById("n5").value;

    const result = document.getElementById("result");

    if (v1 == 0 || v2 == 0 || v3 == 0 || v4 == 0 || v5 == 0) {
        alert("por favor, preencha todos os campos!");
        
    }
    else {
    result.innerHTML += `o numero ${v1} elevado ao quadrado é: ${Math.pow(v1 , 2)} <br>`
    result.innerHTML += `o numero ${v2} elevado ao quadrado é: ${Math.pow(v2 , 2)} <br>`
    result.innerHTML += `o numero ${v3} elevado ao quadrado é: ${Math.pow(v3 , 2)} <br>`
    result.innerHTML += `o numero ${v4} elevado ao quadrado é: ${Math.pow(v4 , 2)} <br>`
    result.innerHTML += `o numero ${v5} elevado ao quadrado é: ${Math.pow(v4 , 2)} <br>`

     document.getElementById("n1").value = null;
     document.getElementById("n2").value = null;
     document.getElementById("n3").value = null;
     document.getElementById("n4").value = null;
     document.getElementById("n5").value = null;
    }
}