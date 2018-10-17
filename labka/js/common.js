let rules = {
    "**a":"!",
    "*a":"a**",
    "**b":"b**",
    "**c":"c**",
    "*b":"b*",
    "*c":"c*",
    "**":"",
    "*":"",
    " ":"*"
};


let go = true;
let i = 0;
function rep(str1,a,b){
    let start = str1.indexOf(a);
    let count = a.length;
    let first = str1.slice(0,start);
    let second = str1.slice(start+count);
    return first+b+second;
}
document.querySelector(".btn").addEventListener("click",function () {
    let str = document.querySelector("#line").value;
    str=" " + str;
    console.log("input string:"+ str);
    for (let u=0;u<100;u++) {
        for (let key in rules) {

            if (~str.indexOf(key)) {
                if(~rules[key].indexOf("!")){
                    rules[key]=rules[key].slice(0,rules[key].length-1);
                    console.log("rule:" + key +"->" + rules[key]);
                    str = rep(str, key, rules[key]);
                    console.log("result: " + str);

                }else {
                    console.log("rule:" + key +"->" + rules[key]);
                    str = rep(str, key, rules[key]);
                    console.log(str);
                }

                break;
            };

        }
    }
});
