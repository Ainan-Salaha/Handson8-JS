let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
]


let res = [];
for (let i = 0; i < studentRecords.length; i++) {
    let obj = studentRecords[i];
    res.push(obj.name.toUpperCase());
}
console.log(res);

/*2.Question */

let res2 = [];
for (let i = 0; i < studentRecords.length; i++) {
    let obj = studentRecords[i];
    if (obj.marks > 50) {
        res2.push(obj);
    }
}

console.log(res2);


/*3.Question */

let res3 = [];
for (let i = 0; i < studentRecords.length; i++) {
    let obj = studentRecords[i];
    if (obj.marks > 50 && obj.id > 120) {
        res3.push(obj);
    }
}

console.log(res3)


/*4.Question */

let sum = 0;
for (let i = 0; i < studentRecords.length; i++) {
    let obj = studentRecords[i];
    sum=sum+obj.marks;
}

console.log(sum)

/*5.Question */

let res4 = [];
for (let i = 0; i < studentRecords.length; i++) {
    let obj = studentRecords[i];
    if (obj.marks > 50) {
        res4.push(obj.name);
    }
}

console.log(res4)


/*6.Question */

let sum1=0
for (let i = 0; i < studentRecords.length; i++) {
    let obj = studentRecords[i];
    if (obj.id > 120) {
        sum1=sum1+obj.marks;
    }
}

console.log(sum1)

/*7.Question */
let sum2=0;
let count=0;
for (let i = 0; i < studentRecords.length; i++) {
    let obj = studentRecords[i];
    if (obj.marks > 50) {
        sum2=sum2+obj.marks;
    }
    else{
     count=count+15;   
    }
}

console.log(sum2+count);

/*7.Question */
let obj1={name:'Saha'  , class: 10 , id:1601 }
let obj2={name:'John'   , class: 10 , id:1602 }
let obj3={name:'Sita'   , class: 10 , id:1603 }
let obj4={name:'Alisha' , class: 10 , id:1604 }
let obj5={name:'Gerald' , class: 10 , id:1605 }
let obj6={name:'Sahil'  , class: 10 , id:1606 }

let arr=[];
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
arr.push(obj4);
arr.push(obj5);
arr.push(obj5);

console.log(arr)