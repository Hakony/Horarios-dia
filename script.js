function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.` 
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#aea5ef'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#a1b6c9'
    } else {            
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#14374e'
    }
}