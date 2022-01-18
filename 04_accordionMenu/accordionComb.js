(function(){

    // variable
    const titleComb = document.querySelectorAll('.accord_comb .title');
    const conComb = document.querySelectorAll('.accord_comb .con');
    const ACTIVE = 'active';

    // function
    function handleAccordionComb(event) {
        // 여기서부터
    }

    // event
    titleComb.forEach(title => {
        title.addEventListener('click', handleAccordionComb)
    });

})();