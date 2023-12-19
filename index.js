import './index.css'

const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener('click', function(){
  const a = parseInt(num.innerText, 10)
  num.innerText = a + 1
})

