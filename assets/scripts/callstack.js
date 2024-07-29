// 콜 스택과 이벤트 루프, 태스크 큐, 백그라운드 이해

function aaa() { // 나의 작동 예상 = baccdd, 다른 스택이 없는 상태에서의 실제 작동 = acbcdd
    setTimeout(() => {
        console.log('d'); // 가장 마지막에 두 번 연달아 출력된다.
    });

    console.log('c');
}

setTimeout(() => {
    console.log('a'); // 태스크 큐에 들어간 순서에 따라 가장 먼저 실행된다.

    aaa(); // aaa() 함수에서 즉시 실행되는 'c'가 곧바로 이어서 출력된다.
});

setTimeout(() => {
    console.log('b'); // 태스크 큐에 들어간 순서에 따라 두 번째로 실행된다.

    aaa(); // aaa() 함수에서 즉시 실행되는 'c'가 곧바로 이어서 출력된다.
});