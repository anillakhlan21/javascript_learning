// const arr = [10,12,2323,13,14,15];
// // arr=[3,313,2332,2323]
// arr[1]=2312;
// // arr.push(233)
// console.log(arr);

// const arr1 = new Array(10,23,324,4334)
// // console.log(typeof(arr1));
// // arr.sort()
// console.log(arr instanceof Array);

// -----------array methods-------------------------------
const fruits =
  [
    "Banana",
    "Orange",
    "Apple",
    "Mango",
  ];
// console.log(fruits.toString())
// console.log(fruits.join())
// console.log(fruits.join('*'))

// console.log(fruits.shift())
// console.log(fruits.unshift('watermelon'));

// console.log(fruits.length);
// delete fruits[2]
// console.log(fruits)

// fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits.splice(2, 2, "Lemon", "Kiwi");
// fruits.splice(2,2)

// console.log(fruits.slice(1,3));

const arr2 =
  [
    10,
    12,
    2323,
    13,
    14,
    15,
  ];
console.log(
  arr2.reverse()
);
console.log(
  arr2
);

//slice, splice , pop, push, foreach, map, filter, sort, reduce

let abc =
  (
    value,
    index
  ) => {
    console.log(
      `index :${index} & value: ${value}`
    );
  };
arr2.forEach(
  abc
);

let arr3 =
  [
    {
      id: 1,
      name: "rahul",
    },
    {
      id: 2,
      name: "rohit",
    },
    {
      id: 3,
      name: "suresh",
    },
    {
      id: 4,
      name: "sumit",
    },
    {
      id: 5,
      name: "payal",
    },
  ];


  let arr4 = arr3.map((v,i)=>{
    
  })
