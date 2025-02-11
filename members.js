// member.js  
// localStorage에서 members 정보. 
// index페이지는 초기화되기 때문에 처음만 호출하고 페이지마다 기능을 만들기. 작업 중에 index페이지x

let members = [];
members = JSON.parse(localStorage.getItem('members'));         // JSON문자열을 자바스크립트로 만들기 parse
console.log(members);
// members의 값을 활용해서 tbody 영역의 html작성.
members.forEach(function (elem) {                              //members.forEach(함수(매개값)) // 메소드
  document.querySelector('#list').innerHTML += makeRow(elem);  // '#list' tbody태그
});

// id, pw, name 속성을 활용해서 tr>td*3를 만들어주는 함수.
function makeRow(item = {}) {                                  // 함수안에서는 item으로 쓰겠다고 item
let str = '';                                                  // tr>td*3: tr만들고 td 3개 만들어서 쏙쏙 넣기
str += '<tr>';
for (let prop in item) {                                       //members만큼 배열 반복.
  str += '<td>' + item[prop] + '</td>';                        // elem[prop]:elem가 가지고 있는 속성
}
str += '</tr>';
return str; // 생성된 tr>td*3 반환.
} 

// form.submit 이벤트.
document.forms.addMember.addEventListener('submit', function (e) {      //memberAdd에 form <input
  e.preventDefault(); // submit 차단.
  let id = document.querySelector('input[name="user_id"]').value;
  let pw = document.querySelector('input[name="user_pw"]').value;
  let name = document.querySelector('input[name="user_name"]').value; 

  let newItem = makeRow({id, pw, name});                                 //속성이랑 같으면 줄여서 쓸 수 있음. id:id, pw:pw, name:name -> id, pw, name
  document.querySelector('#list').innerHTML += newItem;

  // localStroge에 저장.
  members.push({id, pw, name});
  localStorage.setItem('members', JSON.stringify(members));
})
