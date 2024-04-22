let alram;
let si;
let bum;
let hour = prompt("시간 입력 : ", ""); // 프롬프트로 입력을 받으면 String Type임
hour = Number(hour);
let min = prompt("분 입력 : ", "");
min = Number(min);
let calc = (hour * 60) + min;
if(calc < 45) calc = (24 * 60) + min;
calc -= 45;
document.write("<h2>" + `${parseInt(calc / 60)}시 ${calc % 60}` + "</h2>");
