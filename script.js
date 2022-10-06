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

