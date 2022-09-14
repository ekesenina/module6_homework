function numbers(begin, end){
    let num = +begin;
    
    const intervalId = setInterval(function(){
      console.log(num);
      
      if(num == end){
        clearInterval (intervalId);
    } else{
        num++;
    }
    }, 1000, num)
  }
  numbers(prompt('Введите первое число'), prompt('Введите второе число'))