let date = new Date(); // new Date() :현재 날짜 및 시간 가져오는 객체. Date()가 문자열을 반환하는 것과 달리 new Date는 객체를 생성한다.


const renderCalender = () => {
    const viewYear = date.getFullYear(); // getFullYear() : 년도 가져오는 메소드 (getYear 매소드는 사라짐)
    const viewMonth = date.getMonth(); // getMonth() : 월 가져오는 메소드. index가 0부터 시작하므로 1월 = 0, 2월 = 1 이다.
    
    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;
    
    const prevLast = new Date(viewYear, viewMonth, 0); // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds) 순. day 기본값은 1(1일) 이므로, 0 = 마지막날
    const thisLast = new Date(viewYear, viewMonth + 1, 0);
    
    const PLDate = prevLast.getDate(); // getDate() : 며칠인지를 반환.
    const PLDay = prevLast.getDay(); // getDay() : 요일을 반환. 일요일 = 0, 월요일 = 1, ..., 토요일 = 6
    
    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();
    
    const prevDates = [];
    const thistDates = [...Array(TLDate + 1).keys()].slice(1); 
    // [...] : 배열을 문자열로 변환
    // getDate()를 array로 바꿔보면 key값은 index로 0부터 시작하니까 마지막 숫자가 30이 되므로 +1 해서 31을 만들어줌
    // slice() : 콤마(,) 기준점으로 index 위치를 잘라냄. slice('시작점', '종료') -> 즉, slice(1)을 해서 getDate() array에서 0을 잘라냄
    const nextDates = [];
    
    // 전월 날짜 이월된거 처리
    if(PLDay !== 6) { // 전월 마지막 날의 요일이 토요일이 아닐때
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i); // unshift() : 새로운 요소를 array의 맨 앞쪽에 추가하고, 추가된 array의 length를 변환함.
        }
    }
    
    // 금월 날짜 남는거 다음달 날짜 뜨게 처리
    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }
    
    const dates = prevDates.concat(thistDates, nextDates); // concat() : 기존 배열들을 합쳐서 새로운 배열을 만들어줌
    const firstDateIndex = dates.indexOf(1); // indexOf() : 괄호() 안에 가지는 내용의 index를 구해줌
    const lastDateIndex = dates.lastIndexOf(TLDate); // lastIndexOf() : 괄호() 안에 가지는 내용을 끝에서 부터 찾고, 그 내용의 index를 구해줌 (내용의 값만 뒤에서 찾는거고, index는 앞에서부터 구함)
    
    dates.forEach((date, i) => {
        const condition = (i >= firstDateIndex && i < lastDateIndex + 1)
            ? 'this' // 금월 날짜라는 걸 표시
            : 'other'; // 다른 달 날짜라는 걸 표시
        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    });
    
    document.querySelector('.dates').innerHTML = dates.join(''); // join() : 배열의 요소를 연결해서 하나의 문자열로 변환

    const today = new Date();
    if(viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for(let date of document.querySelectorAll('.this')) { // for a of b : b가 a에 할당된다 
            if (+date.innerText === today.getDate()) { // + 연산자 : type을 num으로 변환해줌
                date.classList.add('today');
                break;
            }
        }
    }

};

renderCalender();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1); // setMonth() : 지정된 달로 세팅해줌
    renderCalender();
}

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
}

document.querySelector('.go-prev').addEventListener('click', () => {
    prevMonth();
});

document.querySelector('.go-next').addEventListener('click', () => {
    nextMonth();
});