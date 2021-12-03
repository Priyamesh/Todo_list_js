function getandupdate() {

    console.log("updatringgg");
    let todo_tittle = document.getElementById('title').value;
    let todo_desc = document.getElementById('description').value;


    let itemJsonArray = [];

    if (localStorage.getItem('itemjson') == null) {
        itemJsonArray.push([todo_tittle, todo_desc]);
        localStorage.setItem('itemjson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemjson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([todo_tittle, todo_desc]);
        localStorage.setItem('itemjson', JSON.stringify(itemJsonArray));
    }
    update();


}

function update() {
    // if (localStorage.getItem('itemjson') == null) {
    //     localStorage.setItem('itemjson', JSON.stringify(itemJsonArray));
    // }
    // else {
    //     itemJsonArraystr = localStorage.getItem('itemjson');
    //     itemJsonArray = JSON.parse(itemJsonArraystr);
    // }

    if (localStorage.getItem('itemjson') != null) {
        let itemJsonArray = [];
        itemJsonArraystr = localStorage.getItem('itemjson');
        itemJsonArray = JSON.parse(itemJsonArraystr);

        let tablebody = document.getElementById("tablebody");
        let res = "";
        itemJsonArray.forEach((element, index) => {
            res += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button type="button"  class="btn  btn-outline-danger" onclick="dlt(${index})">Delete</button></td>
        </tr>
        `
        });

        tablebody.innerHTML = res;
    }




}

function dlt(index) {
    console.log("dlt btn prtessed");

    itemJsonArraystr = localStorage.getItem('itemjson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(index, 1);
    localStorage.setItem('itemjson', JSON.stringify(itemJsonArray));
    update();
}


let addbt = document.querySelector("#addbtn");
addbt.addEventListener('click', getandupdate);





