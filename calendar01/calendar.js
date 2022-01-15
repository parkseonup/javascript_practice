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
    



    //////////////////////////////////////// 여기부터 공부하기
    const dates = prevDates.concat(thistDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    
    dates.forEach((date, i) => {
        const condition = (i >= firstDateIndex && i < lastDateIndex + 1)
            ? 'this'
            : 'other';
        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    });
    
    document.querySelector('.dates').innerHTML = dates.join('');

    const today = new Date();
    if(viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for(let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }

};

renderCalender();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
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