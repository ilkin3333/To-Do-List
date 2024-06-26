const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
// const terkib = inputBox.value

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('List boş qoyula bilməz!');
    }

    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listcontainer.insertBefore(li, listcontainer.childNodes[0]);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
        span.style.backgroundColor = 'red'
    }
    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();


inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
