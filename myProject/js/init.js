/*
상품코드
책목록
대여가격
평점
이미지
대여할인율
회원아이디
비번
이름
권한?
*/
const productData = [
   {prodCode: 'P001', prodName: '자바의정석 기초편', price: 9000, likeIt: 5, image: 'image/javajungsuk.jpg', sale: 10}
  ,{prodCode: 'P002', prodName: '혼자공부하는자바', price: 8000, likeIt: 4, image: 'image/self_study_java.jpg', sale: 9}
  ,{prodCode: 'P003', prodName: 'Do it! HTML + CSS + 자바스크립트 웹 표준의 정석 ', price: 7000, likeIt: 3, image: 'image/html_css_java.jpg', sale: 7}
]
const memberData = [
   {id: 'user01', pw: '1111', name: '홍길동', Responsibility: 'User'}
  ,{id: 'user02', pw: '2222', name: '고길동', Responsibility: 'User'}
  ,{id: 'user03', pw: '3333', name: '김지수', Responsibility: 'Admin'}
]
const addBookData = [
  {addCode: 'A001', addName: '세이노의 가르침', writer: '세이노', publisher: '데이원', price: '7200',image:'images/product-item1.jpg'},
  {addCode: 'A002', addName: '소년이 온다', writer: '한강', publisher: '창비', price: '13500',image:'images/product-item2.jpg'},
  {addCode: 'A003', addName: '채식주의자', writer: '한강', publisher: '창비', price: '8600',image:'images/product-item3.jpg'},
  {addCode: 'A004', addName: '작별하지 않는다', writer: '한강', publisher: '문학동네', price: '7200',image:'images/product-item4.jpg'},
  {addCode: 'A005', addName: '초역 부처의 말', writer: '코이케 류노스케', publisher: ' 포레스트북스', price: '16020',image:'images/product-item5.jpg'},
  {addCode: 'A006', addName: '모순', writer: '양귀자', publisher: '쓰다', price: '11700',image:'images/product-item6.jpg'},
  {addCode: 'A007', addName: '어른의 행복은 조용하다', writer: '태수', publisher: '페이지2북스', price: '16020',image:'images/product-item7.jpg'},
  {addCode: 'A008', addName: '급류', writer: '정대건', publisher: '민음사', price: '12600',image:'images/product-item8.jpg'},
]
localStorage.setItem('memberData', JSON.stringify(memberData));       
localStorage.setItem('productData', JSON.stringify(productData));
localStorage.setItem('cartAry', [])
localStorage.setItem('addBookData', JSON.stringify(addBookData));
  
