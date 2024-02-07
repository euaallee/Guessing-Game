const resp = document.getElementById('resp');
const btnTentar = document.getElementById('tentar');
const h2 = document.querySelector('h2');
const span = document.querySelector('span');
const campoResp = document.querySelector('#campoResp');

const numeroPensado = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(numeroPensado);
let contador = 0;

function tentar() {
    console.log('Tentando');
    if (resp.value === '') {
        span.innerText = 'Digite um valor!';
    } else {
        if (resp.value == numeroPensado) {
            if (contador === 0) {
                console.log('Parabêns, acertou de prima!');
                h2.innerText = 'Parabêns, acertou de prima!';
                span.remove();
                resp.value = "";
                resp.remove();
                btnTentar.remove();
                const btn = document.createElement('button');
                btn.classList = 'btnTentar';
                btn.textContent = 'Jogar novamente!';
                campoResp.appendChild(btn);
                btn.onclick = function () {
                    window.location.reload();
                };
            } else if (contador === 1) {
                console.log('Parabêns, acertou na 1 tentativas');
                h2.innerText = 'Parabêns, acertou na 1 tentativa!';
                span.remove();
                resp.value = "";
                resp.remove();
                btnTentar.remove();
                const btn = document.createElement('button');
                btn.classList = 'btnTentar';
                btn.textContent = 'Jogar novamente!';
                campoResp.appendChild(btn);
                btn.onclick = function () {
                    window.location.reload();
                };
            } else {
                console.log('Parabêns, acertou em ' + contador + ' tentativas!');
                h2.innerText = 'Parabêns, acertou em ' + contador + ' tentativas!';
                span.remove();
                resp.value = "";
                resp.remove();
                btnTentar.remove();
                const btn = document.createElement('button');
                btn.classList = 'btnTentar';
                btn.textContent = 'Jogar novamente!';
                campoResp.appendChild(btn);
                btn.onclick = function () {
                    window.location.reload();
                };
            }
        } else {
            console.log('Sem acerto');
            span.classList = 'aviso';
            span.innerText = 'Errou! Tente novamente!';
            resp.value = "";
            contador += 1;
        }
    }
}

function keyEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        tentar();
    }
}

function click(event) {
    tentar();
}

resp.addEventListener('keypress', keyEnter);
btnTentar.addEventListener('click', click);