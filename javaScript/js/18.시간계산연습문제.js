const date3 = new Date("2024/08/30/09:00:00");
const date5 = new Date()
let now = date5.getTime(); // 현재 시간 기준으로 경과 시간을 가져옴
let dDay = date3.getTime(); // 수료일 기준으로 경과 시간을 가져옴
let complition = (parseInt((dDay-now)/(1000*60*60*24))+"일 남았습니다. 힘내세요!!!!! 화이팅!");

document.getElementById("remain").innerHTML = complition;