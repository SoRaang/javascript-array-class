const arr = [1, 3, 5, 7, 9];

console.log(arr);

console.log('.find 로 찾기 : ' + arr.find((n, i) => { return n === 1 })); // 콜백 함수의 반환값과 일치하는 요소 중 첫 번째를 반환

console.log('.includes 로 찾기 : ' + arr.includes(2)); // 배열에 콜백 함수 또는 인자로 설정된 값이 존재하는지 확인

const dataarr = [
    { age: 29 },
    { age: 34 },
    { age: 17 }
];

console.log('배열에서 .find 로 객체 찾기 : ');
console.log(dataarr.find((v) => v.age === 29)); // 객체는 똑같은 형태라도 동일하지 않다. .includes 보다는 .find 로 찾는 것이 낫다



let findid = arr.findIndex((v, i) => { // .findIndex 의 사용 예시
    return v > 7; // 주어진 조건에 따른 값을 반환. 7보다 큰 값 중 제일 첫 번째 요소를 찾는다.
});

console.log(findid); // 원래 배열에서 7보다 큰 값은 9이므로, 9의 위치인 4번을 반환한다.



let filtarr = arr.filter((v, i) => { // .filter 의 사용 예시
    return v > 3; // 주어진 조건에 따른 값을 반환. 3보다 큰 모든 요소를 찾는다.
});

console.log(filtarr); // 원래 배열에서 3보다 큰 값은 5, 7, 9이므로, 세 숫자가 들어간 새로운 배열을 반환한다.

let filtobj = dataarr.filter((v) => v.age < 30); // 배열 내부에 있는 것이 객체라면 내부 속성을 조건으로 삼아 찾을 수 있다.

console.log(filtobj); // 위의 dataarr에서 age가 30 이하인 두 개의 객체가 포함된 새로운 배열을 반환한다.



const unsrtarr = [5, 12, 3, 9, 24, 16]; // .sort 의 사용 예시

unsrtarr.sort((a, b) => a - b); // a - b 비교 함수가 반환하는 값을 통해 오름차순으로 배열을 정렬한다.

console.log(unsrtarr);

unsrtarr.sort((a, b) => b - a); // b - a 비교 함수가 반환하는 값을 통해 내림차순으로 배열을 정렬한다.

console.log(unsrtarr); // 원본 배열인 unsrtarr이 정렬되었다. 원본 배열을 그대로 두고 싶다면 전개를 통해 얕은 복사를 실행한 후 정렬하면 된다.



/** 중요 : .reduce */

let rdcarr = arr.reduce((a, c) => { // 여기서는 현재까지의 누적 값이 a, 배열에서의 현재 요소가 c이다.
    return a + c; // 위에서 설정된 두 값을 연산한다. 즉, 값이 누적된다.
}, 0) // 초기 값은 0으로 설정되었다. 만약 초기 값이 설정되지 않으면 배열의 첫 번째 요소가 초기 값으로 설정된다.
// 따라서 첫 누적 값이 1, 현재 값이 3인 상태로 함수가 시작된다.

console.log(rdcarr); // .reduce 로 누산되어 1, 3, 5, 7, 9를 모두 더한 25가 반환된다.
// .reduce 는 단순 숫자 뿐만이 아니라 문자열 같은 것도 누적시킬 수 있다. 체크할 부분으로 참고.



// 배열에서 모든 요소가 조건에 해당되는지는 .every, 하나라도 해당되는지는 .some 메소드로 판단한다.
console.log(arr.every((v) => v !== null)); // arr 배열에는 null과 일치하는 값이 없으므로, 모든 요소가 조건을 충족하여 true가 반환된다.
console.log(arr.every((v) => v === null)); // 이 경우에는 배열의 첫 번째 값부터 null이 아니므로 즉시 false를 반환한다. 하나라도 틀리면 그 이상 검사하지 않는다.

console.log(arr.some((v) => v === 5)); // 홀수로 이루어진 arr 배열에서 5가 존재하는지를 검사한다. 5와 일치하는 요소가 발견되었으므로 그 이상 검사하지 않는다.



// 배열의 기초 요소

let basicarr = [1, 2, 3, 4, 5];

basicarr.pop(); // 맨 마지막 요소 제거

console.log('pop(): ' + basicarr);

basicarr.push(5); // 맨 뒤에 요소 추가

console.log('push(5): ' + basicarr);

basicarr.unshift(0); // 맨 앞에 요소 추가

console.log('unshift(0): ' + basicarr);

basicarr.shift(); // 맨 앞 요소 삭제

console.log('shift(): ' + basicarr);

basicarr.splice(2, 1); // (시작 인덱스, 제거할 요소 갯수, 추가할 요소 갯수)

console.log('splice(2, 1): ' + basicarr);

let newbasic = basicarr.slice(0, -1) // (시작 인덱스, 종료 인덱스);

console.log('slice(0, -1): ' + newbasic);

let doublebasic = basicarr.concat(newbasic); // 다수의 배열 합치기

console.log('concat(): ' + doublebasic);

basicarr.reverse(); // 순서 뒤집기

console.log('reverse(): ' + basicarr);

let joined = basicarr.join('/'); // 배열 내의 모든 요소를 (구분자, 지정되지 않으면 쉼표) 를 포함하여 하나의 문자열로

console.log("join('/'): " + joined);

let stringed = basicarr.toString(); // 배열을 단순 문자열로 출력

console.log('toString(): ' + stringed);

let valued = basicarr.valueOf(); // 특정 객체의 원시 값을 반환 (나중에 추가 정리 필요)

console.log('valueOf(): ' + valued);

// --------------------


/** 과거에 factory function 을 통했던 객체 생성 */

function createMonster(name, hp, att) {
    return { name, hp, att, attack } // 내부에서 attack() 함수를 매번 생성하는 것은 비효율적이다. 아래에서 생성한 attack()을 포함시키는 방식.
}

function attack(monster) {
    monster.hp -= this.att;
}

const monster1 = createMonster('슬라임', 25, 10);

console.log(monster1); // 위에서 포함시킨 attack() 함수가 포함되어 있는 것을 확인할 수 있다.

// 또는, 아래처럼 Monster라는 prototype을 만들어 자동적으로 생성자에 메소드를 포함시킨다.

function Monster(name, hp, att) {
    this.name = name;
    this.hp = hp;
    this.att = att;
}

Monster.prototype.attack = function(monster) { // Monster 생성자에 prototype 메소드를 만든다.
    monster.hp -= this.att;
}

const monster2 = new Monster('슬라임', 26, 9);

console.log(monster2); // new Monster 생성자를 통해 생성했기 때문에 Monster 라는 생성자 함수의 이름이 붙는다.

/** this에 대한 설명
 *
 * this는 상황에 따라 값이 달라진다. 가장 기본적으로는 window를 가리킨다.
 * 생성자 함수를 호출할 때 new를 붙이지 않고 사용하면 this로 지정한 속성이 window에 지정된다.
 * this가 window를 가리키지 않는 경우 :
 */

// 1. 객체의 메소드로 this를 사용하면 this는 해당 객체를 가리킨다.

const thisobj = {
    name: '김창완',
    sayName() {
        console.log('제 이름은 ' + this.name + '입니다');
    }
}

thisobj.sayName(); // thisobj 자신을 가리키게 된다.

// 단, 아래처럼 메소드에 구조분해 할당을 적용하면 this가 객체 자신을 가리키지 않게 된다.

/**
 * const { sayName } = thisObj;
 *
 * sayName();
 */

// 2. 함수의 this는 bind() 메소드를 사용해 값ㅇ르 바꿀 수 있다.

const bindobj = { name: '박창완' };

function editname() {
    console.log(this);
}

editname.bind(bindobj)();

// 단, 화살표 함수는 bind() 메소드로 this를 바꿀 수 없어 유지된다. 따라서 this가 외부 요인에 따라 바뀌는 것을 원치 않으면 화살표 함수를 사용할 수 있다.

const notthis = () => {
    console.log(this);
}

notthis.bind(bindobj)(); // undefined

const arrowobj = {
    name: '최창완',
    sayName() {
        const whatIsThis = () => { // 화살표 함수 메소드
            console.log(this);
        }

        whatIsThis();
    }
}

arrowobj.sayName(); // 내부의 this가 arrowobj 자신을 가리킨다.

// 반대로 whatIsThis를 함수 선언문으로 선언하면 this는 window가 된다.

const unarrowobj = {
    name: '이창완',
    sayName() {
        const whatIsThis = function() { // 함수 선언
            console.log(this);
        }

        whatIsThis();
    }
}

unarrowobj.sayName(); // undefined

// 3. 앞선 예시에서 보았듯, 생성자 함수를 호출할 때 new를 붙이면 this는 생성자 함수가 새로 생성하는 객체가 된다.


// --------------------


/** 중요 : class */

// 기초 개념에 대해서는 이미 설명한 바 있고 익히 알고 있으므로, class의 상속에 대한 빠른 예시를 작성한다.

class Unit { // 유닛을 생성하는 부모 class
    constructor(name, hp, att) {
        this.name = name;
        this.hp = hp;
        this.att = att;
    }

    attack(target) {
        target.hp -= this.att;
    }
}

class Hero extends Unit { // extends를 통해 Unit 부모 class로부터 상속을 받는다.
    constructor(name, hp, att) {
        super(name, hp, att); // 부모 class의 컨스트럭터 메소드를 불러온다.
        this.maxHp = hp; // 이 class가 가지는 그 외의 속성.
    }

    attack(target) {
        super.attack(target); // 부모 class가 가지고 있는 attack() 메소드를 불러온다.
        console.log('영웅이 강력하게 공격했다.'); // 그 외의 추가 동작.
    }

    heal() { // 이 class가 가진 별도의 메소드
        this.hp = this.maxHp;
    }
}

class Villain extends Unit { // 위의 Hero class와 동일한 부모 class를 공유한다.
    constructor(name, hp, att) {
        super(name, hp, att);
    }

    attack(target) {
        super.attack(target);
        console.log('으악! 이건 너무 아프다.');
    }
}

const heroMan = new Hero('정창완', 50, 150);
const monsterMan = new Villain('스켈레톤', 40, 5);

console.log(heroMan);
console.log(monsterMan);

heroMan.attack(monsterMan); // 객체에 내장된 공격 메소드를 사용한다.

console.log(monsterMan);


// --------------------


/** 비동기와 타이머 */

// setTimeout(), setInterval()은 비동기 함수이므로 이후에 작성된 코드가 먼저 실행된다.

setTimeout(() => {
	console.log('0초 뒤에 실행된다.')
}, 0);

console.log('내가 먼저 실행한다!');

// setTimeout()의 콜백 함수는 외부에서 작성해서 가지고 와도 된다.

const logger = () => { console.log('2초 뒤에 실행된다.') }

setTimeout(logger, 2000);



// setInterval()

setInterval(() => {
    console.log('2초마다 실행된다.');
}, 2000);



// 타이머를 멈추는 메소드

const bombTimer = setTimeout(() => console.log('펑!'), 5000);

clearTimeout(bombTimer); // clearTimeout()은 타이머가 실행되기 전에만 취소할 수 있다.

const hiccUp = setInterval(() => console.log('딸꾹!'), 5000);

clearInterval(hiccUp);