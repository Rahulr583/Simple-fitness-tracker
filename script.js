let data = JSON.parse(localStorage.getItem("fitness")) || [];

const goal = 500; // daily calorie goal

function addData() {
    let activity = document.getElementById("activity").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let time = parseFloat(document.getElementById("time").value);

    if (!activity || !weight || !time) {
        alert("Enter valid data!");
        return;
    }

    let MET = 8; // for running
    let hours = time / 60;

    let calories = MET * weight * hours;

    let now = new Date();

    data.push({
        activity,
        calories: Math.round(calories),
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    });

    saveData();
    showData();
}

function showData() {
    let list = document.getElementById("list");
    let total = 0;

    let today = new Date().toLocaleDateString();

    list.innerHTML = "";

    data.forEach((item, index) => {
        if (item.date === today) {

            list.innerHTML += `
                <li>
                    ${item.activity} - ${item.calories} cal 
                    <br>
                    <small>${item.time}</small>
                    <button onclick="deleteItem(${index})">X</button>
                </li>
            `;

            total += item.calories;
        }
    });

    document.getElementById("total").innerText = total;

    let percent = (total / goal) * 100;
    document.getElementById("progress").style.width = percent + "%";
}

function deleteItem(index) {
    data.splice(index, 1);
    saveData();
    showData();
}

function saveData() {
    localStorage.setItem("fitness", JSON.stringify(data));
}

showData();