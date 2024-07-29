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

let rdcarr = arr.reduce((a, c) => { // 현재까지의 누적 값 a, 배열에서의 현재 요소가 c이다.
    return a + c; // 위에서 설정된 두 값을 연산한다. 죽, 값이 누적된다.
}, 0) // 초기 값은 0으로 설정되었다. 만약 초기 값이 설정되지 않으면 배열의 첫 번째 요소가 초기 값으로 설정된다.
// 따라서 첫 누적 값이 1, 현재 값이 3인 상태로 함수가 시작된다.

console.log(rdcarr); // .reduce 로 누산되어 1, 3, 5, 7, 9를 모두 더한 25가 반환된다.
