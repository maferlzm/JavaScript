// Serie  FIBONACCI

EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApp);
}

function InitApp(){
    let num=Number(prompt('Ingrese un número mayor a 1:'));

    let fib1=1;
    let fib2=1;


    while(num<=1){
         console.log(num);
    }
    for(let i=2;i<=num;i++)
    {
        console.log(fib2);
        fib2 = fib1 + fib2;
        fib1 = fib2 - fib1;
    }
    

}