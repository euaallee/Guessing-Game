const input = document.querySelector("#tentar");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const span = document.querySelector("span");

const numberPensado = Math.floor(Math.random() * 11);
let contador = 1;
console.log(numberPensado);

function Tentar() {
    console.log("Clicado");
    if (input.value == ""){
        span.innerText = "Digite um número";
    } else {
        
        if (input.value == numberPensado){
            span.remove();
            input.remove();
            btn.remove();
            if(contador == 1){
                h1.innerText = `Acertou em 1 tentativa!`;
            } else {
                h1.innerText = `Acertou em ${contador} tentativas!`;
            }
            const tentarNovo = document.createElement("button");
            tentarNovo.classList = "tentarNovo"
            tentarNovo.innerText = "Jogar novamente";
            const divPai = document.querySelector(".input");
            divPai.appendChild(tentarNovo);
            tentarNovo.addEventListener("click", () => {
                window.location.reload();
            })
        } else {
            span.innerText = "Tente novamente!";
            input.value = "";
            contador++;
        }
    }
}
