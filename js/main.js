var mySoqqa = prompt("Pulni kiriting");

var dollar = 9433.34;

var evro = 10354.03;

var necessarySoqqa = Math.floor((dollar * 750) + (evro * 120));

if (mySoqqa >= necessarySoqqa) {
  console.log("Oq yo'l, Alisher!");
  alert("Oq yo'l, Alisher!");
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
  alert("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
};