// 煮开水
let boilWater = () => new Promise(resolve => setTimeout(
    () => {
        console.log('boilWater');
        resolve('boilWater')
    }
    , 10 * 1000));  // 10秒钟

// 洗杯子
let washGlass = () => new Promise(resolve => setTimeout(
    () => {
        console.log('washGlass');
        resolve('washGlass')
    }
    , 2 * 1000));  // 2秒钟

// 准备茶叶
let prepareTeaLeaves = () => new Promise(resolve => setTimeout(
    () => {
        console.log('prepareTeaLeaves');
        resolve('prepareTeaLeaves')
    }
    , 1 * 1000));  // 1秒钟

console.time('async')
let makeTea = async ()=>{
    await boilWater();
    await washGlass();
    await prepareTeaLeaves();
    console.timeEnd('async');
}
makeTea();