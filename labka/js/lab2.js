
let arrOf=[];
document.querySelector(".btnLab2_1").addEventListener("click", function () {
    let str = document.querySelector("#line").value;
    let i = 2;
    let arr = [];
    while (i <= str) {
        if (str % i == 0) {
            console.log(i);
            arr.push(i);
            str = str / i;
        }
        else
            i = i + 1;
    }
    let result = 1;
    arr.forEach(function (el) {
        result = result * el;
    });
    console.log("dobutok: " + result)
});
function evklid(a, b) {
    if (a % b == 0) {
        return b;
    } else {
        return evklid(b, a % b)
    }
}


function search_NOK (m,n){
    return(Math.floor(m/evklid (m,n)))*n;
}


document.querySelector(".nsk").addEventListener("click", function () {
    let a = + (document.getElementById("a").value) , b = document.getElementById("b").value;
    console.log("найменше спільне кратне: "+search_NOK(a,b));
    console.log("найбільший спільний дільник:"+evklid(a, b));

});
function lastNumber(a) {
    return a%10;
}

function serchZakon(a,stepen) {
    for(let i=1;i<stepen;i++){
        let numb = Math.pow(a,i);
        numb = lastNumber(numb);
        if(arrOf.indexOf(numb) == -1){
            arrOf.push(numb)
        }else{
            return arrOf.length;
        }
    }

}
function krok2(stepen,leng){
    if(stepen%leng!=0){
        return stepen%leng;
    }else{
        return arrOf.length;
    }
}
function krok3(a,stepen){
    return lastNumber(Math.pow(a,stepen));
}

document.querySelector(".rozklad").addEventListener("click", function () {
    let num = document.getElementById("num").value , st = document.getElementById("st").value;
    let lastNumberOfNum = lastNumber(num);
    let povtor = serchZakon(lastNumberOfNum,st);
    let newStepen = krok2(st,povtor);
    let ans = krok3(lastNumberOfNum,newStepen);
    console.log("останнє число "+ans);
});




