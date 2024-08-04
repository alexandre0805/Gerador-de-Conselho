const BtnGerarConselho = document.getElementById('btn-gerar-conselho');
const conselho = document.getElementById('conselhos');
const descriçãoConselho = document.getElementById('descrição-conselho');

async function gerarConselhoAleatorio() {
  const response = await fetch("https://api.adviceslip.com/advice");
  console.log(response);

  const data = await response.json();

  const conselho = data.slip.advice;

  return conselho;
}

BtnGerarConselho.addEventListener('click', async function() {
  const conselhoTexto = await gerarConselhoAleatorio();
  conselho.innerText = conselhoTexto;
});


