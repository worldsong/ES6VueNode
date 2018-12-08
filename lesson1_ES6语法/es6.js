/**
 * let 块级作用域
  */
// {
//     let fruit = 'apple';
//     var dessert = 'cake';
// }
//
// // console.log(fruit)
// console.log(dessert)

/**
 * const 常量
  */
// const fruit = 'orange';
// console.log(fruit);
// fruit = 'apple';

// const fruit = [];
// fruit.push('apple');
// fruit.push('mongo');
// console.log(fruit);
// fruit = [];
// console.log(fruit);

/**
 * 解构数组
 */
//
// function breakfast(){
//     return ['cake', 'coffee', 'apple'];
// };
// var temp = breakfast();
// // var dessert = temp[0], drink = temp[1], fruit = temp[2];
// let [dessert, drink, fruit] = breakfast();
// console.log(dessert, drink, fruit);

/**
 * 解构对象
 */
// function breakfast() {
//     return {
//         dessert: 'cake',
//         drink: 'coffee',
//         fruit: 'apple'
//     }
// }
// var temp = breakfast();
// // var dessert = temp.dessert, drink = temp.drink, fruit = temp.fruit;
// let {dessert: dessert, drink: drink, fruit: fruit} = breakfast();
// // let {dessert, drink, fruit} = breakfast();
// console.log(dessert, drink, fruit)

/**
 * 模板字符串
 */
// let dessert = 'cake';
// let drink = 'coffee';
// // var breakfast = '今天的早餐是 ' + dessert + ' 与 ' + drink + ' !';
// let breakfast = `今天的早餐是 ${dessert} 与 ${drink} !`
// console.log(breakfast);
// document.body.innerText = breakfast;

/**
 * 判断字符串里是否包含其他的字符串
 */
// let dessert = "pizza";
// let drink = 'tea';
// let breakfast = `今天的早餐是${dessert} 与 ${drink} !`;
// console.log(breakfast.startsWith('今天'));
// console.log(breakfast.endsWith('!'));
// console.log(breakfast.includes('cake'));

/**
 * 默认参数
 */
// function breakfast(dessert = 'cake', drink = 'tea') {
//     return `${dessert} ${drink}`;
// }
// console.log(breakfast());
// console.log(breakfast('pizza', 'beer'));

/**
 * 展开操作符
 */
// let fruits = ['apple', 'banana'];
// let foods = [...fruits, 'pizza'];
// // let foods = ['apple', 'banana', 'pizza'];
// console.log(foods);
// console.log(...foods)

/**
 * 剩余操作符
 */
// function breakfast(dessert, drink, ...foods) {
//     console.log(dessert, drink, foods)
// }
// breakfast('cake', 'tea', 'apple', 'banana', 'peach')

/**
 * 解构参数
 */
// function breakfast(dessert, drink, {location, restaurant}={}) {
//     console.log(dessert, drink, location, restaurant)
// }
// breakfast('cake', 'beer', {location: '长沙', restaurant: '王府井'});
// breakfast('cake', 'beer', {location: '长沙'});

/**
 * 函数的名字
 */
// function breakfast(argument){
//
// }
// let breakfast = function () {
//
// }
// let breakfast = function superBreakfast() {
//
// }
// console.log(breakfast.name)

/**
 * 箭头函数
 */
// let breakfast = dessert => dessert;
// var breakfast = function (dessert) {
//     return dessert
// }
// document.body.innerText = breakfast('pizza')

// let breakfast = (dessert, drink) => dessert + drink;
//
// let content = breakfast('cake', 'milk');
// console.log(content)

/**
 * 对象表达式
 */
// let dessert = 'cake', drink = 'beer';
// // var food = {
// //     dessert: dessert,
// //     drink: drink
// // }
// // console.log(food);
// let food = {
//     dessert,
//     drink,
//     breakfast(){
//         return `今天的早餐是 ${dessert} 和 ${drink}`
//     }
// }
// console.log(food)
// // 参照一下Vuejs的组件挂载
// console.log(food.breakfast())

/**
 * 对象的属性名
 */
// let food = {};
// food.dessert = 'cake';
// console.log(food)
// // food.hot drink = 'coffee';
// // food['hot drink'] = 'coffee';
// let drink = 'hot drink';
// food[drink] = 'coffee';
// console.log(food)

/**
 * 对象的赋值
 */

// let breakfast = {};
// Object.assign(breakfast, {drink: 'beer'});
// console.log(breakfast);

/**
 * 类 class
 */
// class Chef {
//     constructor(food){
//         this.food = food;
//     }
//     cook(){
//         console.log(this.food);
//     }
// }
// let Song = new Chef(['tomato', 'egg']);
// Song.cook()

/**
 * get 与 set
 */
// class Chef {
//     constructor(food){
//         this.food = food;
//         this.dish = [];
//     }
//     get menu(){
//         console.log('取')
//         return this.dish;
//     }
//     set menu(dish){
//         console.log('存')
//         this.dish.push(dish);
//     }
//     cook(){
//         console.log(this.food);
//     }
// }
// let Song = new Chef(['tomato', 'egg']);
// Song.cook()
// Song.menu = 'egg';
// Song.menu = 'oil';
// console.log(Song.menu);

/**
 * 静态方法 不需要实例化就可以使用
 */
// class Chef {
//     constructor(food){
//         this.food = food;
//         this.dish = [];
//     }
//     get menu(){
//         console.log('取')
//         return this.dish;
//     }
//     set menu(dish){
//         console.log('存')
//         this.dish.push(dish);
//     }
//     static cook(food){
//         console.log(food);
//     }
// }
// Chef.cook('egg')

/**
 * extends 继承
 */
// class Person {
//     constructor(name, birthday) {
//         this.name = name;
//         this.birthday = birthday;
//     }
//     intro(){
//         return `${this.name}, ${this.birthday}`;
//     }
// }
// class Chef extends Person {
//     constructor(name, birthday){
//         super(name, birthday)
//     }
// }
// let Song = new Chef('Song', '1986-12-22');
// console.log(Song.intro())

/**
 * 设置对象的prototype
 */
// let breakfast = {
//     getDrink(){
//         return 'coffee';
//     }
// };
// let dinner = {
//     getDrink(){
//         return 'beer';
//     }
// }
// let sunday = Object.create(breakfast);
// console.log(sunday.getDrink());
// console.log(Object.getPrototypeOf(sunday) === breakfast);
// Object.setPrototypeOf(sunday, dinner);
// console.log(sunday.getDrink())
// console.log(Object.getPrototypeOf(sunday) === dinner);

/**
 * __proto__
 */
// let breakfast = {
//     getDrink(){
//         return 'coffee';
//     }
// };
// let dinner = {
//     getDrink(){
//         return 'beer';
//     }
// }
//
// let sunday = {
//     __proto__: breakfast
// }
// console.log(sunday)
// console.log(Object.getPrototypeOf(sunday) === breakfast)
// sunday.__proto__ = dinner;
// console.log(sunday.getDrink());
// console.log(Object.getPrototypeOf(sunday) === dinner);

/**
 * super
 */
// let breakfast = {
//     getDrink(){
//         return 'coffee';
//     }
// };
// let dinner = {
//     getDrink(){
//         return 'beer';
//     }
// }
//
// let sunday = {
//     __proto__: breakfast,
//     getDrink(){
//         return super.getDrink() + ' milk'
//     }
// }
// console.log(sunday.getDrink());

/**
 * 集合 Set ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。)
 */
// let foods = new Set(['apple', 'orange', 'banana']);
// foods.add('coffee');
// foods.add('banana');
// console.log(foods)
// console.log(foods.size)
// console.log(foods.has('apple'));
// foods.delete('apple');
// console.log(foods)
// foods.forEach(foods => {
//     console.log(foods)
// })
// foods.clear()
// console.log(foods);
// // 去除数组的重复成员
// let array = [1,1,2,2,3,4,5];
// console.log([...new Set(array)])
//
// // 提问
// const set = new Set([1, 2, 3, 4, 4]);
// console.log(set)
// console.log([set])
// console.log([...set])

/**
 * Map Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
 */
let food = new Map();
let fruit = {}, cook = function () {}, dessert = '甜点';
food.set(fruit, 'apple');
food.set(cook, 'knife');
food.set(dessert, 'cake');
console.log(food);
console.log(food.size);
console.log(food.get(fruit));
console.log(food.get(cook));
food.delete(dessert);
console.log(food.has(dessert))
food.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});

food.clear();
console.log(food);
// 练习
// Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。

const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

console.log([...map.keys()])
// [1, 2, 3]

console.log([...map.values()])
// ['one', 'two', 'three']

console.log([...map.entries()])
// [[1,'one'], [2, 'two'], [3, 'three']]

console.log([...map])
// [[1,'one'], [2, 'two'], [3, 'three']]