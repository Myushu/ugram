var data = "email=admin%40laway.fr&password=epitech42";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "http://api.laway.fr/api/v1/auth/sign_in");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "4aefc255-0e36-e9bf-3335-efaf5e185929");
xhr.setRequestHeader("withCredentials", true);

xhr.send(data);