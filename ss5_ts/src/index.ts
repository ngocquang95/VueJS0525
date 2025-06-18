// happy coding 👻
console.log("hello world 6");

let a: number = '22';
let b: number = 2;
let c: number = a + b;
console.log(c);

let str: string = '22';
let str2: string = '22';
let str3: string = str + str2;
console.log(str3);

let arr: number[] = [1, 2, 3, 4, 5];

let x: any = 2;


interface Student {
    id: number;
    name: string;
    age: number;
    address?: string;
}

let student: Student = {
    id: 1,
    name: 'John',
    age: 20
}