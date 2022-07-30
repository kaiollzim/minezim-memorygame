

document.onkeydown = tecla;


function tecla(e) {
    if (e.keyCode == 13) {
        const debugBox = document.querySelector('.debug')
        debugBox.classList.remove('hide')
        
    }
}