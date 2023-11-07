const foodData = require('./food.json');

//Task 1st
function listallfoodname(){
    return foodData;
}
console.log(listallfoodname());

//Task 2nd 
function listallvegetable(){
    return foodData.filter((food) => food.category === 'Vegetable');
}
console.log(listallvegetable());

//Task 3rd
function listallfruit(){
  return foodData.filter((food) => food.category === 'Fruit');
}
console.log(listallfruit());

//Task 4th
function listallprotein(){
  return foodData.filter((food) => food.category === 'Protein');
}
console.log(listallprotein());

//task 4th
function listallnuts(){
  return foodData.filter((food) => food.category === 'Nuts');
}
console.log(listallnuts());

//task 5th
function listallgrains(){
  return foodData.filter((food) => food.category === 'Grain');
}
console.log(listallgrains());

//task 6th
function listalldairy(){
  return foodData.filter((food) => food.category === 'Dairy');
}
console.log(listalldairy());

//task 7th
function listallcalorieabovehundred(){
  return foodData.filter((food) => food.calorie > 100);
}
console.log(listallcalorieabovehundred());

//task 8th
function listallcaloriebelowhundred(){
  return foodData.filter((food) => food.calorie < 100);
}
console.log(listallcaloriebelowhundred());

//task 9th
function listalllowtohighcab(){
    return foodData.sort((a, b) => a.cab - b.cab);
  }
  console.log(listalllowtohighcab());