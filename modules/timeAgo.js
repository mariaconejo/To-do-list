function timeAgo(taskTime) {
    let thisMoment = new Date(),
    secondsConvert = (thisMoment.getTime() - taskTime.getTime()) / 1000,
    lessMinute = '0 minutes ago',
    minute = parseInt(secondsConvert/60) + ' minutes ago',
    hour = parseInt(secondsConvert/3600) + ' hours ago',
    day =parseInt(secondsConvert/3600) + 'days ago';

    if(secondsConvert < 60){
        return  lessMinute;
    }else if(secondsConvert < 3600){
        return minute;
    }else if(secondsConvert <= 86400){
        return hour;
    }else if(secondsConvert > 86400){
        return day;
    }
}

export{
    timeAgo
}