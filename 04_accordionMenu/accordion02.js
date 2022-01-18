(function(){

    // variable
    const title02 = document.querySelectorAll('.accord02 .title');

    // function
    function handleAccordion02(event) {
        const con = event.target.nextElementSibling;
        if((con.style.maxHeight === "" || con.style.maxHeight === '0px')) {
            // con의 max-height 값이 0이면 max height값을 구해 넣어라
            con.style.maxHeight = `${con.scrollHeight}px`;
        } else {
            // 아니면 max-height 값을 0으로 만들어라
            con.style.maxHeight = 0;
        }
    }

    // event
    title02.forEach(title => {
        title.addEventListener('click', handleAccordion02);
    })

})();