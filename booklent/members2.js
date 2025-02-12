
 let members = JSON.parse(localStorage.getItem('memberData'));         
console.log(members);

members.forEach(function (elem) {                              
  document.querySelector('#list').innerHTML += makeRow(elem);  
});


function makeRow(item = {}) {                                  
let str = '';                                                  
str += '<tr>';

for (let prop in item) {                                       
  str += '<td>' + item[prop] + '</td>';                        
}

return str; 
} 

// form.submit 이벤트.
document.forms.addMember.addEventListener('submit', function (e) {      
  e.preventDefault(); // submit 차단.
  let id = document.querySelector('input[name="user_id"]').value;
  let pw = document.querySelector('input[name="user_pw"]').value;
  let name = document.querySelector('input[name="user_name"]').value; 

  let newItem = makeRow({id, pw, name});                                
  document.querySelector('#list').innerHTML += newItem;

  // localStroge에 저장.
  members.push({id, pw, name});
  localStorage.setItem('members', JSON.stringify(members));
})