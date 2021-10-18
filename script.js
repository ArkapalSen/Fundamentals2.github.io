//challange 1
// //test 1
// const dolphin1 = 44;
// const dolphin2 = 23;
// const dolphin3 = 71;
// const koala1 = 65;
// const koala2 = 54;
// const koala3 = 49;
// const calcAvg = (result1,result2,result3)=>{
//     return (result1+result2+result3)/3;
// }
// const checkWinner = (avgDolphins,avgKoalas)=>{
//     if(avgDolphins > (2*avgKoalas)){
//         console.log(`Dolphins team Wins! with score of : ${avgDolphins} and team Koalas scoring ${avgKoalas}`);
//     }
//     else if(avgKoalas > (2*avgDolphins)){
//         console.log(`Koalas team wins! with score of : ${avgKoalas} and team Dolphins scoring ${avgDolphins}`);
//     }
//     else{
//         console.log(`No team Wins!`);
//     }
// }
// const avgDolphins = calcAvg(dolphin1,dolphin2,dolphin3);
// const avgKoalas = calcAvg(koala1,koala2,koala3);
// checkWinner(avgDolphins,avgKoalas);
// console.log(avgDolphins,avgKoalas);



//test 2
// const dolphin1 = 85;
// const dolphin2 = 54;
// const dolphin3 = 41;
// const koala1 = 23;
// const koala2 = 34;
// const koala3 = 27;
// const calcAvg = (result1,result2,result3)=>{
//     return (result1+result2+result3)/3;
// }
// const checkWinner = (avgDolphins,avgKoalas)=>{
//     // console.log(avgDolphins,avgKoalas);
//     if(avgDolphins > (2*avgKoalas)){
//         console.log(`Dolphins team Wins! with score of : ${avgDolphins} and team Koalas scoring ${avgKoalas}`);
//     }
//     else if(avgKoalas > (2*avgDolphins)){
//         console.log(`Koalas team wins! with score of : ${avgKoalas} and team Dolphins scoring ${avgDolphins}`);
//     }
//     else{
//         console.log(`No team Wins!`);
//     }
// }
// const avgDolphins = calcAvg(dolphin1,dolphin2,dolphin3);
// const avgKoalas = calcAvg(koala1,koala2,koala3);
// checkWinner(avgDolphins,avgKoalas);
// console.log(avgDolphins,avgKoalas);



//challange2
// const calcTip = (billValue) =>{
//     const tip = (billValue>50 && billValue <300) ? (billValue * 0.15) : (billValue * 0.20);
//     return tip;
// }
// const tip = calcTip(100);
// console.log(tip);
// console.log(`---------------`);

// const bills = [125,555,44];
// const tips = [];
// const total = [];
// for(i=0;i<bills.length;i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(bills[i]+tip);
// }
// console.log(bills , tips , total);




// challange 3
// const markObj = {
//     fullName : 'Mark Miller',
//     mass : 78 , 
//     height : 1.69,
//     calcBMI()
//     {
//         BMI = this.mass / (this.height ** 2)
//         return BMI;
//     }
// }
// const johnObj = {
//     fullName : 'John Miller',
//     mass : 92 , 
//     height : 1.95 ,
//     calcBMI ()
//     {
//         BMI = this.mass / (this.height ** 2)
//         return BMI;
//     }
// }
// const markBMI =  Math.trunc(markObj.calcBMI());
// const johnBMI =  Math.trunc(johnObj.calcBMI());
// if(markBMI>johnBMI){
//     console.log(`${markObj.fullName} have BMI (${markBMI}) greater than that of ${johnObj.fullName} having BMI (${johnBMI})`);
// }
// else if(markBMI === johnBMI){
//     console.log(`Both Mark and John are having same BMI`);
// }
// else
// {
//     console.log(`${johnObj.fullName} have BMI (${johnBMI}) greater than that of ${markObj.fullName} having BMI (${markBMI})`);
// }




// //challange 4
// const calcTip = (billValue) =>{
//     const tip = (billValue>50 && billValue <300) ? (billValue * 0.15) : (billValue * 0.20);
//     return tip;
// }
// const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
// const tips = [];
// const total = [];
// for(i=0;i<bills.length;i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(bills[i]+tip);
// }
// console.log(bills , tips , total);

// //bonus (via apply method)
// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
// function calcAverage(...arr) {
//     let sum = 0;
//     for(i=0;i<arr.length;i++){
//         sum+= arr[i];
//     }
//     const avg = sum / arr.length;
//     return avg;
// }
// const avg = calcAverage.apply(this,arr);
// console.log(avg);

// //bonus (via for loop)
// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
// let sum = 0;
// function calcAverage(value) {
//     sum+= value;
// }
// for(i=0;i<arr.length;i++){
//     calcAverage(arr[i])
// }
// let avg = sum / arr.length;
// console.log(avg);
