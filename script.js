const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

function imc(){
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value

  
  if(peso && altura){
      const resultadoImc = (peso / (altura * altura)).toFixed(1)
      resultado.textContent = `Seu imc é ${resultadoImc}`
    } 
    else{
      resultado.textContent = 'Preencha os campos'
    }
  }


calcular.addEventListener('click', imc)
