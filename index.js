const workBtn = document.querySelector('.work-btn')
const myWorker = new Worker('worker.js')
workBtn.addEventListener('click', () => {
    
    myWorker.postMessage('do work');
    myWorker.onmessage = function (e) {
        document.querySelector('#output').innerHTML = e.data
    }

})

const hahaBtn = document.querySelector(".btn")
hahaBtn.addEventListener('click', () => {
    document.querySelector('#random').innerHTML = 'random'
})