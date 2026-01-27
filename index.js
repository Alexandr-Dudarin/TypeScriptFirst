var element = document.getElementById("ForTS");
if (element) {
    element.textContent = "Hello TypeScript!";
}
var text = "Hi, my name is Alexander";
var age = 28;
var woman = false;
var n = null;
var postId = undefined;
var height = [180, 178, 188, 196, 185];
var length = height.length;
console.log(text);
console.log(age);
console.log(woman);
console.log(null);
console.log(postId);
console.log(height);
console.log(length);
var age = 55;
var woman = true;
console.log(age);
console.log(woman);
height.push(201);
height.push(183);
height.push(177);
height.pop();
console.log(height.length);
height.sort(function (a, b) { return a - b; });
console.log(height);
