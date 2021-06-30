import{timeAgo} from './timeAgo.js';

function updateTime (){
    setTimeout(
        function (){
            let time = document.querySelectorAll('.time_test-js');
            time.forEach(element => {
                    console.log(element.getAttribute('data-time'));
                    let convertTime = new Date(element.getAttribute('data-time')),
                    update = timeAgo(convertTime);
                    element.innerHTML = update;
            });
        updateTime();
        }
        , 60000);
}

export{
    updateTime
}