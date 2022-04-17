// // 1st => function
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     // 2do =>funtcion
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//   const filterOutOdds=(...arguments)=>arguments.filter(num=>num%2===0);

//  const findMin=(1,4,12,-3)
// // findMin(1,-1) // -1
// // findMin(3,1) // 1
// function sum(...findMin){
//    return findMin.reduce((min,n)=>{
//         if (n<min){
//             return n;
//         };
// return min;
//     } 
//     )};

// const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});

// doubleAndReturnArgs([1,2,3],4,4)

// const double=(val, ...vals)=>[...val, ...vals.map(d=> d*2)]

// function extend(array1, array2) {

// }

// const extend=(array1,array2)=>{return[...array1,...array2]};


// function addKeyVal(obj, key, val) {

// }
// const addKeyVal=(obj,key,val)=> {
// let newobj = { ...obj }
// newobj[key] = val;
// return newobj;
// }
var Employee = {
    age: 28,
    name: 'abc',
    designation: 'developer'
  }
const removeKey=(obj,key)=>{
    let newobj={...obj}
    delete newobj[key];
    return newobj;
 }
// const combine = (obj1, obj2) => {
//     return { ...obj1, ...obj2 };
//   }

  const newkeyval = (obj, key, val) => {
  
    let newobj = { ...obj,}
    newobj[key] = val;
    return newobj;
}