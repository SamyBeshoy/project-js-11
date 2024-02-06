document.title = "project-js-11";
// Get Elements From HTML

let input_js = document.getElementById("input_html");
let btn_js = document.getElementById("btn_html");
let box_js = document.getElementById("box_html");
input_js.focus();
btn_js.onclick = function () {
    if (input_js.value != "") {
        console.log("not empty")
        let task_parent = document.createElement("div");
        task_parent.className = "parent"; 
        let task_value = document.createElement("span");
        task_value.innerHTML = input_js.value;
        let remove_btn = document.createElement("span");
        remove_btn.innerHTML = "❌";
        remove_btn.style.cursor = "pointer";
        remove_btn.onclick = function () {
            task_parent.remove()
        }
        task_parent.append(task_value);
        task_parent.append(remove_btn)
        box_js.append(task_parent);
        input_js.value = "";
        input_js.focus();
    } else {
        console.log("empty");
    }
}