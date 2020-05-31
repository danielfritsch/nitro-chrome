/*==============================================================
Functionality of BACK button --> redirect to 'Leaderboard' screen
==============================================================*/
let backBtn = document.getElementById("back");
function gotoUsers() {
    location.href = "./users.html";
}
backBtn.addEventListener("click", gotoUsers);

/*==============================================================
Display data for all fields:
==============================================================*/
let username = document.getElementById("username");
username.innerHTML = localStorage.getItem("curr_user");

let team = document.getElementById("team");
team.innerHTML = localStorage.getItem("curr_team");

let pointsCompleted = document.getElementById("points-completed");
pointsCompleted.innerHTML = localStorage.getItem("curr_points_completed");

let pointsRequired = document.getElementById("points-required");
pointsRequired.innerHTML = localStorage.getItem("curr_points_required");

let prod_percentage = (localStorage.getItem("curr_productivity") * 100).toFixed(0);
let productivity = document.getElementById("productivity");
productivity.innerHTML = `${prod_percentage}%`;

window.onload = function () {
    let card = document.getElementById("card");
    let mode = localStorage.getItem("mode");
    if (mode == "dark") {
        card.classList.add("dark-mode");
    } else {
        card.classList.add("light-mode");
    }
}
