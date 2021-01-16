let { month, date, hours, minutes, seconds } = newFunction();


document.getElementById('currentdate').innerHTML = `&nbsp &nbsp${month}/ ${date}/ ${year}&nbsp &nbsp${hours}:${minutes}:${seconds}`; 


function newFunction() {
    let today = new Date();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    return { month, date, hours, minutes, seconds };
}
