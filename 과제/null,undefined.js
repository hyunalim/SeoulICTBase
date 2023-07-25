//undefined: 원시값으로 선언한 후에 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당 
//값을 할당하지 않은 변수, 메서드와 선언에서 변수가 할당받지 않은 경우, 함수가 값을 return 하지 않았을때

//null: 원시값 중 하나, 의도적으로 비어있음을 표현, undefined는 지정되지 않은경우, null은 해당 변수가 어떤 객체도 가리키고 있지 않은 것


//1.Undefined
var a;
console.log(a); //undefined
console.log(typeof a); //undefined

//2. Null
var nullType = null;
console.log(typeof null); //object (null은 객체, 참조 자료형)

var elemnet = document.querySelector('.abc');
    //HTML 문서에서 abc 클래스를 가진 요소가 없다면?
console.log(element); //null

//3. Undefined vs Null
null == undefiend; // true: 빈 값은 같음
null === undefined; // false: 값은 비었지만 타입이 다름

null == 1 //false
null == "hello" //false
null == false // false

undefined == 1 //false
undefined == "hello" //false
undefined == false // false
