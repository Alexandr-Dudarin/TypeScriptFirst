const element = document.getElementById("ForTS");
if (element) {
  element.textContent = "Hello TypeScript!";
}

let text : string = "Hi, my name is Alexander";

let age : number = 28;

let woman : boolean = false;

let n : null = null;

let postId : undefined = undefined;

let height : number[] = [180,178,188,196,185];

let leng = height.length;

console.log(text);
console.log(age);
console.log(woman);
console.log(n);
console.log(postId);
console.log(height);
console.log(leng);

age = 55;

woman = true;

console.log(age);
console.log(woman);

height.push(201);
height.push(183);
height.push(177);

height.pop();

console.log(height.length);

height.sort((a, b) => a - b);

console.log(height);