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
  ,{prodCode: 'P001', prodName: '혼자공부하는자바', price: 8000, likeIt: 4, image: 'image/self_study_java.jpg', sale: 9}
  ,{prodCode: 'P001', prodName: 'Do it! HTML + CSS + 자바스크립트 웹 표준의 정석 ', price: 7000, likeIt: 3, image: 'image/html_css_java.jpg', sale: 7}
]
const memberData = [
   {id: 'user01', pw: 1111, name: '홍길동', Responsibility: 'User'}
  ,{id: 'user02', pw: 2222, name: '고길동', Responsibility: 'User'}
  ,{id: 'user03', pw: 3333, name: '김지수', Responsibility: 'Admin'}
]
const cartData = [
   {id:'user01', product: 'P001', qty: 3}
  ,{id:'user02', product: 'P002', qty: 1}
  ,{id:'user03', product: 'P003', qty: 2}
  
]
  
