function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fname = document.getElementById('txtname')  
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      let fsex = document.getElementsByName('radsexo')
      let idade = ano - Number(fano.value)
      let genero = ''
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
          genero = 'Homem'
          if (idade >= 0 && idade < 12){
              img.setAttribute('src', 'imagens/foto-crianca-m.png')
         // } else if (idade > 13) {
           // img.setAttribute('src', 'foto-adolecente-m.png')
          } else if (idade < 21) {
              img.setAttribute('src', 'imagens/foto-jovem-m.png')
          } else if (idade < 50) {
              img.setAttribute('src', 'imagens/foto-adulto-m.png')
          } else {
              img.setAttribute('src', 'imagens/foto-idoso-m.png')
          }
      } else if (fsex[1].checked) {
          genero = 'Mulher'
          if (idade >= 0 && idade < 12){
              img.setAttribute('src', 'imagens/foto-crianca-f.png')
         // } else if (idade > 13) {
           // img.setAttribute('src', 'imagens/foto-adolecente-f.png')
          } else if (idade < 21) {
              img.setAttribute('src', 'imagens/foto-jovem-f.png')
          } else if (idade < 50) {
              img.setAttribute('src', 'imagens/foto-adulto-f.png')
          } else {
              img.setAttribute('src', 'imagens/foto-idoso-f.png ')
          }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
    } 
}