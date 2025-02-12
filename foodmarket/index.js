// index.js 하고 login html -> login.html -> memberAdd.html -> members.js
let members = [
  {id: 'user01', pw:'1111', name:'홍길동'},
  {id: 'user02', pw:'2222', name:'김민서'},
  {id: 'user03', pw:'3333', name:'최유진'}
]
let members_json = JSON.stringify(members);                          // 문자열이 된다.
localStorage.setItem('members', members_json);                      // 회원정보. 여러곳에서 사용하려고 members내용을 localStorage에 담는다.

// 연습.
let name = 'Hongkildong';
localStorage.setItem('name', 'Hongkildong');
console.log(localStorage.getItem('name'));

// json문자열.
let json = `{
  "name": "Hongkildong", 
  "age" : 20
}`

// 문자열 -> 객체
let obj = JSON.parse(json);
console.log(json, obj);
// obj.name , obj.age

localStorage.setItem('friend', json); // 
let info = localStorage.getItem('friend');                               // json 문자열 반환                                      
console.log(JSON.parse(info));                                           // 문자열 -> 객체. 객체타입으로 변환. 나이. 이름: console.log(JSON.parse(info).name);

localStorage.setItem('friend2', obj);                                    // obj라는 값을 지정하고 set은 문자열이어야.
info = localStorage.getItem('friend2');                                  // 값을 가져올때는 getItem.
console.log(info.name);                                                  // 문자열 객체로 바꾸기 parse(). 문자열 가져와야해서 json문자열로 담아야.  

// 객체 -> 문자열.
obj = {
  name: 'Hongkildong',
  friends: [{
    name: '김민수',
    phone: '010-1111'
  },{
    name: '박현수',
    phone:'010-2222'
  }]
}
json = JSON.stringify(obj); // 객체 -> 문자열.
console.log(json);
localStorage.setItem('myfriend', json);