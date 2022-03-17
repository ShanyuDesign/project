let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Apple_logo.svg') {
      myImage.setAttribute('src', 'images/google_logo.svg');
    } else {
      myImage.setAttribute('src', 'images/Apple_logo.svg');
    }
}
//先引用“button""h1"
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//函数"输入用户名“，拿到名字做本地存储，暂存在浏览器中，这是一个 Web Storage API，最后设置文字信息。
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Apple 酷毙了' + myName;
  }
//初始化代码，
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Apple 酷毙了' + storedName;
  }
//使用底部 button 切换用户
  myButton.onclick = function() {
    setUserName();
 }
//避免取消后出现 null 错误
 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Apple 酷毙了，' + myName;
    }
  }