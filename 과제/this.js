var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return birthday + pId;
    }
}; 
console.log(person.fullId()) //ReferenceError: birthday is not defined


var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return person.birthday + person.pId;
    }
}; 
console.log(person.fullId()) //0302191234567 출력 

//첫번째 fullId에서 birthday, pId는 undefined 출력-> 지정되지 않은 변수나 값으로 인식하는 것. 
//객체 안에서 함수를 생성할 때에 birthday, pId가 무엇인지 지정해주어야 하는 거 같음
// this. 를 쓰거나, person. 을 써서 birthday, pId가 무엇인지 지정해준다.


