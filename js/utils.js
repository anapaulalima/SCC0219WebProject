function parseDate(date){
    //inicio de pedaço de codigo
    var str = "";
    var currentTime = (date)? date : new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
    str += month + "/" + day + "/" + year;
    
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    hours = (hours < 10) ? "0" + hours : hours;
    str += " " + hours + ":" + minutes + ":" + seconds;
    //pedaço de código retirado de http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
    return str;
}

var domain = "http://localhost:1337/"
function urlpath(path){
    return domain + path;
};

function setLocalUser(data, $rootScope){
    $rootScope.localUser = data;
    //console.log("setando");
    localStorage["localUser"] = data;
};

function deleteLocalUser($rootScope){
    $rootScope.localUser = null;
    localStorage["localUser"] = null;
};