//Модуль 6
//Задание 1

function getAmountOfNumberTypes(){
    const arr = [0, 0, 1, 2, 3, 4, 1, NaN, null, 'hey']

let even = 0,
    odd = 0,
    zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] % 2 === 0) {
        even += 1;
        } else {
            odd += 1;
            }
        }
     }

console.log('четных элементов: ' + even)
console.log('нечетных элементов: ' + odd)
console.log('нулей: ' + zero)
}

getAmountOfNumberTypes()


