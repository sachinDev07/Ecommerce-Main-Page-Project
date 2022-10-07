const bar = document.querySelector('.bar');
const close = document.querySelector('.cross_mark');
const list = document.getElementById('list');
const closeActive = document.getElementById('close')

if(bar) {
    bar.addEventListener('click', () => {
        list.classList.add('active');
            closeActive.classList.add('closeActive');
    });   
    
}

if(close) {
    close.addEventListener('click', () => {
        closeActive.classList.remove('closeActive');
        list.classList.remove('active');
        
    })
}


const mainImage = document.getElementById('mainImage');
const smallImage = document.getElementsByClassName('smallImage');

smallImage[0].onclick = function() {
    mainImage.src = smallImage[0].src;
}

smallImage[1].onclick = function() {
    mainImage.src = smallImage[1].src;
}

smallImage[2].onclick = function() {
    mainImage.src = smallImage[2].src;
}

smallImage[3].onclick = function() {
    mainImage.src = smallImage[3].src;
}