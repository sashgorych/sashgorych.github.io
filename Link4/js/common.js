const   users = getJson(),
        table = document.getElementById('mytable'),
        td = table.getElementsByClassName("userName"),
        checkall = document.getElementById('checkall'),
        searchInput = document.getElementById('search');
function sort(type) {
    let usersList=copyArray(users);
    sortArray(usersList,type);
    clearScreen();
    showAllUser(usersList)
}
function copyArray(element) {
    let copyArray=[];
    let i=0;
    element.forEach(function (el) {
        copyArray[i]=el;
        i++;
    });
    return copyArray;
}
function sortArray(array,type) {
    //bubble sort
    switch (type){
        case 'az':
            for (let k = 0; k < array.length - 1; k++) {
                for (let j = 0; j < array.length - 1 - k; j++) {
                    if (array[j + 1].name.split(" ")[0][0].toLowerCase() < array[j].name.split(" ")[0][0].toLowerCase()) {
                        let t = array[j + 1];
                        array[j + 1] = array[j];
                        array[j] = t;
                    }
                }
            }
        case 'za':
            for (let k = 0; k > array.length - 1; k++) {
                for (let j = 0; j > array.length - 1 - k; j++) {
                    if (array[j + 1].name.split(" ")[0][0].toLowerCase() < array[j].name.split(" ")[0][0].toLowerCase()) {
                        let t = array[j + 1];
                        array[j + 1] = array[j];
                        array[j] = t;
                    }
                }
            }
    }
}
function toArray(element) {
    let arr = [];
    for (let i = 0; i < element.length; i++) {
        arr[i] = element[i]
    }
    return arr;
}
function clearScreen() {
    let tr = document.getElementById('users').getElementsByTagName('tr');
    toArray(tr).forEach(function (el) {
        el.remove();
    })
}
function setCheckedAll() {
    checkall.checked ? setCheck(true) : setCheck(false)
}
function setCheck(prop) {
    toArray(table.getElementsByTagName('input')).forEach(function (el) {
        el.checked = prop;
    });
}
function searchByNames() {
    let searchText =  searchInput.value.toLowerCase();
    let tdText;
    toArray(td).forEach(function (el) {
        tdText=el.innerHTML.toLowerCase();
        (tdText.indexOf(searchText) + 1) ? tableRowStatus(el, 'table-row'): tableRowStatus(el, 'none')

    });
}
function tableRowStatus(el, status) {
    el.parentElement.style.display = status;
}
function createUserTr(userInfo) {
    let control = '<tr>' +
        '<td><input type="checkbox" class="checkthis" /></td>' +
        '<td class="userName">' +
        `${userInfo.name}` +
        '</td>' +
        '<td>' +
        `${userInfo.email}` +
        '</td>' +
        '<td>' +
        `${userInfo.website}` +
        '</td>' +
        '<td>' +
        `${userInfo.phone}` +
        '</td>' +
        '</tr>';
    return control;
}
function showAllUser(usersList) {
    for (let i = 0; i < usersList.length; i++) {
        $("#users").append(createUserTr(usersList[i]));
    }
}
function getJson() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        return JSON.parse(xhr.responseText);
    }
}
(function all() {
    showAllUser(users);
    checkall.onclick = function () {
        setCheckedAll();
    };
    searchInput.onkeyup = function () {
        searchByNames();
    };
    $('.dropdown a').click(function () {
        sort(this.id)
    })

})();



