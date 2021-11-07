
//const a =document.getElementsByTagName('input')[0]
//const b =document.getElementsByTagName('input')[1]

const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]

const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')

const resultbox = document.querySelector('.result')
//console.log(result)
const sum = ()=>{
  const result = parseInt(a.value) + parseInt(b.value)
  resultbox.innerHTML = result
}
const product = ()=>{
  const result = parseInt(a.value) * parseInt(b.value)
  resultbox.innerHTML = result
}
const minus = ()=>{
   const result = parseInt(a.value) - parseInt(b.value)
   resultbox.innerHTML = result
 }
//add.addEventListener('click',sum)
//multiply.addEventListener('click',product)

const calculate = (event,operation) =>{
   //console.log(event.target)
   //if (operation == 'add'){
   //   console.log('adding')}
   //else if (operation == 'multiply'){
     // console.log('multiply')}
     switch (operation){
        case 'add':
        resultbox.innerHTML = parseInt(a.value) + parseInt(b.value)
        break
        case 'multiply':
        resultbox.innerHTML = parseInt(a.value) * parseInt(b.value)
        break
        case 'subtract':
        resultbox.innerHTML = parseInt(a.value) - parseInt(b.value)
        break
        default:
         resultbox.innerHTML ="Not a valid operation"
}  
     }


add.addEventListener('click',(event)=>{
   calculate(event,'add')
})
multiply.addEventListener('click',(event)=>{
   calculate(event,'multiply')
})
subtract.addEventListener('click',(event)=>{
   calculate(event,'subtract')
})