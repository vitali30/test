/*let a = 10;
let b = 15;
console.log(a+b);
console.log(b-a, 10*a);
console.log(typeof a);
let c = "Hello!!!!!!";
console.log(c, typeof c);
console.log("Здраствуйте /n ${b} раз");
let carProp = 'color';*/


/*let car = {
    color: 'green', 
    maxSpeed: 250,
    cost: 1000001,
    audio:{
        brand: 'sony',
        speakers: 12,
        cost: 2,
    }
};*/
/*console.log( typeof car);
console.log(car);
console.log(car.color);
console.log( typeof car.color);
*/
//car.color = 'green';

//car[carProp] = 'green';

/*console.log(car.color);
console.log( typeof car.color);


console.log( typeof car.audio.brand);
console.log(car.audio.brand);*/

/*let car = {
    color: 'green', 
};

let car2 = {
    color: 'red', 
};

colorChange(car);

function colorChange(theCar){
    theCar.color = 'yellow';
    }

console.log("car:" + car.color);
console.log("car2:" + car2.color);
*/

/*console.log(car.color);
car.color = 'red';
console.log(car.color);*/






/*let carRed = {
    color: 'red',
    speed: 250,
    wheel: '25/456',
    weight: 1440,
    brand: 'WV',
};


let carGreen = {
    color: 'green',
    speed: 175,
    wheel: '25/456',
    weight: 1780,
    brand: 'wolvo',
};

console.log(carRed);
console.log(carGreen);

carRed.color = carGreen.color;

console.log(carRed);
console.log(carGreen);*/

/*if(car.color == 'red'){
    console.log('автомобиль красный');
}else if(car.color == 'green'){
    console.log('Автомобиль зеленый');
}else{
    console.log('Цвет не определен');
}*/

//car.color == 'green' ? console.log('Зеленый') : console.log('Не зеленый');

//let color = car.color == 'red' ? 'Красный'  : 'Не красный';
//console.log(color);

//car.cost > 1000000 ? console.log('Стои милион и больше') : console.log('стоит меньше миллиона');

/*if(car.cost == 200){
    console.log('Милион');
}else{
    console.log('Не милион');
}*/




/*let car = {
    speed: 250,
    color: 'Red',
    update: speedChange,
};

let car2 = {
    speed: 290,
    color: 'Red',
};

car.update(car2);


function speedChange(newSpeed) {
    console.log('скорость была:' + newSpeed.speed);
    car.speed = newSpeed.speed + 60;
    console.log('скорость стала: ' + car.speed);
};
*/

/*let tgt = 6;
function watch(message = 'привет'){
    console.log(message);};
watch();*/


/*
function watch(message){
    return message + '   ХаудиХО';
    console.log('Test');};
let message1 = watch('Простое слово');//результат работы функции по переменной "Простое слово" присваиваем переменной message1
console.log(message1);
*/


/*
let a = 'red';
let b = 'green';
color(b);
function color(colorNew = 'red'){
    if(colorNew == 'red'){
    console.log('Цвет был красный');
    return;    }
console.log(colorNew);}
*/

/*let anonym = function(){
    console.log('We are anonymous');};
anonym();*/


/*(function(){
    console.log('We are anonymous');
})();*/



/*let anonym = function (){
    console.log('We are anonymous');
};*/

/*let anonym = () => console.log('We are anonymous');
anonym();*/


/*let anonym = () => ('We are anonymous');
console.log(anonym());*/



/*let anonym = () => { 
    let count = 2;
    return 'We are anonymous    ' + count};
console.log(anonym());*/


/*let anonym = (message, count) => message + count;
console.log(anonym('You are anonymous = ', 6));*/

/*(function(){
    console.log('Ja strelochnaja functin');
})();*/

/*let strelochnaja = () => console.log('Ja strelochnaja functin');
    strelochnaja();*/


/*function getMessage() {
    console.log('I am function');}
getMessage();
let car = {
    getMessage: function(){
    console.log('I am method');}
}
car.getMessage();*/



/*let car = {
    color: 'red',
    open: function(){
        console.log('mamba');    }
};
car.open();*/



/*let car = {
    color: 'red',
    open(mamba){
        console.log(mamba);    }
};
car.open('two');*/


/*let array = [1, 3, 10, 69];
console.log(array[2]);*/



/*let car = {
    color: 'red',
    drivers: ['Alex', 'Dmitry'],
    getDriver(drivers){
        console.log('Текущий водитель - ' + this.drivers[1])}
};
car.getDriver();*/


/*let array = [1, 'simple', 'who is who', {color: 'red'}];
console.log(array[2] + array[1]);*/

/*for (let i = 0; i<= 10; i++){
    console.log('Iron Mdn, Mdrk - ' + i);}
*/
/*let drivers = ['Ales', 'JSON', 'James', 'Joshua'];
console.log(drivers.length);
for (let i = drivers.length-1; i >= 0; i--){
    console.log(drivers[i])}*/

/*let hater = {
    firstName: 'Bill',
    lastName: 'Gates',
    getName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(hater.getName());


let hater2 = {
    firstName: 'Gon',
    lastName: 'Lennon',
    getName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(hater2.getName());
*/

/*class Hater {
    constructor(firstName, lastName){
       this.firstName = firstName;
       this.lastName = lastName;
    }
    sayName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
let hater1 = new Hater('Norman', 'Ozborn');
hater1.sayName();
let hater2 = new Hater('Zima', 'Baba');
hater2.sayName();
*/


// class Bloger {
//     constructor(chanalName, firstName, lastName){
//         this.chanalName = chanalName;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getBloger(){
//        console.log(`Chanel ${this.chanalName} [author of the chanel ${this.firstName} ${this.lastName}]`);
//     }
// }
// let bloger1 = new Bloger ('Мой дом', 'Терешин', 'Алексей');
// bloger1.getBloger();
// let bloger2 = new Bloger ('NO DRUGS', 'Ozzy', 'Ozborn');
// bloger2.getBloger();
// let bloger3 = new Bloger ('My CAR', 'Professor', 'Preobrazhensky');
// bloger3.getBloger();
// let bloger4 = new Bloger ('Fuck MY ASS', 'Pisnoy', 'Aleksey');
// bloger4.getBloger();


// document.getElementById('id1');
// console.log(document.getElementById('id1'));
// console.log(typeof document.getElementById('id1'));
// document.getElementById('id1').innerText = 'Hello';

//let findElemnt = document.querySelector(".topic");
//console.log(findElemnt);


/*class Car {
    constructor(speed){
        this.speed = speed;}
    getSpeed(){
        `"скорость автомобиля - " ${this.speed}`;
    }
}
let audi = new Car (200);

document.querySelector('#content').innerText = audi.getSpeed();
console.log('Скорость 1 автомобиля   ' + audi.speed);
audi.speed = 300;
document.querySelector('.border').innerText = `Speed of my car - ${audi.speed}`;
console.log( 'Скорость 2 автомобиля   ' + audi.speed);*/

/*Создание генератора
function sequence(start, step){
    start = start || 0;
    step = step || 1;
    console.log(start);
    return function(){
        return start +=step;
    };
};
let generator = sequence(15, 7);
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
*/



/*
let a = { x: 1, y: 2 };
let b = a; // в b ссылка на тот же самый объект, что и в a. Проверим:
b.x = 10;
console.log(a.x); // 10

let array1 = [];
function changeArray(arr) { arr.push(1); }; // c.push(х) - добавляем в масссив в конце элемент х как собственный элемент
changeArray(array1); // в функцию передается не копия, а ссылка на тот же массив. 
console.log(array1);
*/


/*
//сравнение элементов через ===
let a, b;
a = b;
console.log(a === b);
let c = 2, d = 5;
console.log(c === d);
*/
/*
console.log(0 ? "truthy" : "falsy"); // falsy
console.log('0' ? "truthy" : "falsy"); // truthy
console.log({} ? "truthy" : "falsy"); // truthy
console.log([] ? "truthy" : "falsy"); // truthy
console.log('' ? "truthy" : "falsy"); // falsy
if (8) { console.log('truthy'); } else { console.log('falsy'); } // truthy
*/


/*
let a = "abhfgdggrghthc";
let tmp = new String(a); // происходит боксинг, создается временный объект
let b = tmp.length; // и идет обращение к свойству этого объекта
console.log(a);// после чего объект выкидывается
*/


//Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки:
let array = [];
let a = 3;
let b = 16;

function gen(step, number){
    for (let i = 0; i < number; i = i + step){
    console.log(i);
    array.push(i);
    
    }
    console.log(step, number);
    
}
gen(2, 5);
console.log(array);



// var gen2 = sequence(0, 2);
// console.log(take(gen(2, 5)); // [0, 2, 4, 6, 8 ]






