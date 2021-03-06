let visor = document.getElementById('label')
let result = ''

let clear = document.querySelector('.clear')
let percentage = document.querySelector('.percentage')
let divide = document.querySelector('.divide')
let multiply = document.querySelector('.multiply')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let minus = document.querySelector('.minus')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let plus = document.querySelector('.plus')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let change = document.querySelector('.change')
let zero = document.querySelector('.zero')
let comma = document.querySelector('.comma')
let equal = document.querySelector('.equal')


clear.addEventListener('click', clearFn)
percentage.addEventListener('click', percentageFn)
divide.addEventListener('click', divideFn)
multiply.addEventListener('click', multiplyFn)
seven.addEventListener('click', sevenFn)
eight.addEventListener('click', eightFn)
nine.addEventListener('click', nineFn)
minus.addEventListener('click', minusFn)
four.addEventListener('click', fourFn)
five.addEventListener('click', fiveFn)
six.addEventListener('click', sixFn)
plus.addEventListener('click', plusFn)
one.addEventListener('click', oneFn)
two.addEventListener('click', twoFn)
three.addEventListener('click', threeFn)
change.addEventListener('click', changeFn)
zero.addEventListener('click', zeroFn)
comma.addEventListener('click', commaFn)
equal.addEventListener('click', equalFn)

function percentageFn() {
    visor.value = visor.value + '%'
}

function divideFn() {
    visor.value = visor.value + '/'
    result = result + '/'
}

function multiplyFn() {
    visor.value = visor.value + 'x'
    result = result + '*'
}

function sevenFn() {
    visor.value = visor.value + '7'
    result = result + '7'
}

function eightFn() {
    visor.value = visor.value + '8'
    result = result + '8'
}

function nineFn() {
    visor.value = visor.value + '9'
    result = result + '9'
}

function minusFn() {
    visor.value = visor.value + '-'
    result = result + '-'
}

function fourFn() {
    visor.value = visor.value + '4'
    result = result + '4'
}

function fiveFn() {
    visor.value = visor.value + '5'
    result = result + '5'
}

function sixFn() {
    visor.value = visor.value + '6'
    result = result + '6'
}

function plusFn() {
    visor.value = visor.value + '+'
    result = result + '+'
}

function oneFn() {
    visor.value = visor.value + '1'
    result = result + '1'
}

function twoFn() {
    visor.value = visor.value + '2'
    result = result + '2'
}

function threeFn() {
    visor.value = visor.value + '3'
    result = result + '3'
}

function zeroFn() {
    visor.value = visor.value + '0'
    result = result + '0'
}

function commaFn() {
    visor.value = visor.value + ','
    result = result + '.'
}

function clearFn() {
    visor.value = ''
    result = ''
}

function changeFn() {
    visor.value = eval(visor.value) * (-1)  // (Number(visor.value) * (-1)).toString()
    console.log(eval(visor.value))
}

function equalFn() {
    console.log(eval(result))
    visor.value = eval(result)
}