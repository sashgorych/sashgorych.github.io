var users = getJson();
users.forEach(el=>{
    el["status"]="user";
})
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
let cssEdit={
    show:function (element) {
        element.classList.remove("hide");
        element.classList.add("show");
    },
    hide:function (element) {
        element.classList.add("hide");
        element.classList.remove("show");
    },
    tableShow:function (element) {
        element.classList.add("tableShow");
        element.classList.remove("hide");
    },
    tableHide:function (element) {
        element.classList.remove("tableShow");
        element.classList.add("hide");
    }
}

var list=(function () {
    let table = document.querySelector('#user-list');
    function getUsers() {
        return users;
    }
    function clear(){
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
    }
    function print() {
        checkEmpty()
        for (let i = 0; i < users.length; i++) {
            table.insertAdjacentHTML('beforeend',this.createUserTr(users[i],i+1));
        }
    }
    function checkEmpty() {
        if (users.length==0){
            cssEdit.show((document.querySelector(".emptyList")));
        }
    }
    function createUserTr(userInfo,id) {
        return `
            <tr data-id="${id}" user-id="${userInfo.id}">
                <td> <input type="checkbox"></td>
                <td>${id}</td>
                <td class="userName">${userInfo.name}</td>
                <td>${userInfo.username}</td>
                <td>${userInfo.status}</td>
                <td>${userInfo.email}</td>
                <td>${userInfo.address.city}</td>
                <td><button class="btn btnDelete">Delete</button></td>
                <td><button class="btn btnMore">More</button></td>
            </tr>
`

    }
    function deleteRow(event) {
        let r=+(event.target.closest("tr").getAttribute("data-id"))-1;
        users.splice(r,1);
        this.clear();
        this.print(users);
    }
    return{
        clear:clear,
        print:print,
        createUserTr:createUserTr,
        deleteRow:deleteRow,
        getUsers:getUsers
    }
})();
var moreUserInfo =(function () {
    let detailsBlock= document.querySelector("#details-view");
    let users=list.getUsers();
    let tBody =document.querySelector(".table");
    let editBlock = document.querySelector(".edit");
    let formMore = document.querySelector(".more");
    let formEdit = document.querySelector(".edit");
    let btnBack=document.querySelector("#back-btn");
    let btnSave=document.querySelector("#save-btn");
    let btnEdit=document.querySelector("#edit-btn");
    function showMore(event) {
        cssEdit.show(detailsBlock);
        cssEdit.tableHide(tBody);
        let userId=+(event.target.closest("tr").getAttribute("data-id"))-1;
        setCorrectData(users[userId]);
    }
    function setCorrectData(user) {
        document.querySelector("#inputEmail4").innerHTML = user.name;
        document.querySelector("#inputPassword4").innerHTML = user.username;
        document.querySelector("#inputState").innerHTML = user.status;
        document.querySelector("#inputAddress").innerHTML = user.address.city+" "+user.address.street+" "+user.address.suite;
        document.querySelector("#edit-btn").addEventListener("click",function () {
            showEdit(user)
        });
    }
    let editBlockSetData={
        name:function (name) {
            document.querySelector("#inputEmail1").value=name;
        },
        login:function (login) {
            document.querySelector("#inputPassword1").value=login;
        },
        addres:{
            street:function (street) {
                document.querySelector("#street").value=street;
            },
            city:function (city) {
                document.querySelector("#city").value=city;
            },
            suite:function (suite) {
                document.querySelector("#suite").value=suite;
            }
        },
        status:function (status) {
            document.querySelector("#inputState1").value=status;
        }
    }
    function showEdit(user) {
        cssEdit.show(btnSave);
        cssEdit.hide(btnEdit)
        cssEdit.hide(formMore)
        cssEdit.show(formEdit)
        editBlockSetData.name(user.name);
        editBlockSetData.login(user.username);
        editBlockSetData.addres.street(user.address.street);
        editBlockSetData.addres.city(user.address.city);
        editBlockSetData.addres.suite(user.address.suite);
        editBlockSetData.status(user.status);
        btnSave.addEventListener("click",function () {
            saveChange(user);
        })
    };
    function checkData(data,previousInfo) {
        if(data.value==""){
            return previousInfo;
        }else{
            return data.value.trim();
        }
    }
    function saveChange(user) {
       user.name = checkData(document.querySelector("#inputEmail1"),user.name);
       user.usermane = checkData(document.querySelector("#inputPassword1"),user.usermane);
       user.status = checkData(document.querySelector("#inputState1"),user.status);
       user.address.city=checkData(document.querySelector("#city"),user.address.city);
       user.address.street = checkData(document.querySelector("#street"),user.address.street);
       user.address.suite = checkData(document.querySelector("#suite"),user.address.suite);
       cssEdit.hide(detailsBlock);
       cssEdit.tableShow(tBody);
       cssEdit.hide(btnSave);
       cssEdit.hide(formEdit);
       cssEdit.show(formMore);
       cssEdit.show(btnEdit)
       list.clear();
       list.print()
    }
    btnBack.addEventListener("click",function () {
        cssEdit.tableShow(tBody);
        cssEdit.hide(detailsBlock);
        cssEdit.hide(btnSave);
        cssEdit.hide(formEdit);
        cssEdit.show(formMore);
        cssEdit.show(btnEdit)
    })
    return{
        showMore:showMore,
    }
})();

(function all() {
    list.print();
    let table = document.querySelector('#user-list');
    table.addEventListener("click",check);
})();
function check(event) {
    if(event.target.classList.contains("btnDelete")){
        list.deleteRow(event);
    }
    if(event.target.classList.contains("btnMore")){
        moreUserInfo.showMore(event);
    }
}