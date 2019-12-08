let btnSearch = document.getElementById("btnSearch");
let allPost = document.querySelector(".allPost");

btnSearch.onclick = function () {
    let month = document.getElementById("b");
    let year = document.getElementById("a");
    let url = `http://api.aladhan.com/v1/calendarhttp://api.aladhan.com/v1/calendar?latitude=41&longitude=49&method=2&month=${month.value}&year=${year.value}`
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response)
        }
    }
        http.open("GET", url);
        http.send();
}