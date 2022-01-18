(function(){

    // variable
    const title01 = document.querySelectorAll('.accord01 .title');
    const con01 = document.querySelectorAll('.accord01 .con');
    const ACTIVE = 'active';
    
    // function 
    // set 아코디언 
    function handleAccordion01(event) {
        // 클릭된 아이템을 제외하고 모든 아이템의 active 클래스 삭제
        con01.forEach(con => {
            if(event.target.nextElementSibling !== con && con.classList.contains(ACTIVE)) {
                con.classList.remove(ACTIVE);
            }
        })
        // 클릭된 아이템에 active 클래스 부여
        event.target.nextElementSibling.classList.toggle(ACTIVE);
    }
    
    // reset 아코디언
    function resetAccordion01(event) {
        if(!event.target.matches('.accord01 .title')) { 
            // i 연산자 : true면 false를, false면 true를 반환해줌
            // matched() : 괄호 안에 있는 내용이 요소의 선택자로 사용되는지 확인해주는 메소드. boolean으로 값을 반환해줌
            con01.forEach(con => con.classList.remove(ACTIVE));
        }
    }
    
    // event
    // title을 누르면 아코디언 이벤트 실행
    title01.forEach(title => {
        title.addEventListener('click', handleAccordion01);
    })
    
    // title이 아닌 다른 영역을 클릭하면 아코디언 이벤트 reset
    window.addEventListener('click', resetAccordion01);
    
})();