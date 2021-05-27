const calcular = document.getElementById('calcular')


function imc(e){
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if(peso && altura){
      const resultadoImc = (peso / (altura * altura)).toFixed(1)
      resultado.innerHTML = `Seu imc é ${resultadoImc}`
      e.preventDefault()
    } 
    else{
      resultado.innerHTML = 'Preencha os campos'
      e.preventDefault()
    }
  }


calcular.addEventListener('click', imc)
