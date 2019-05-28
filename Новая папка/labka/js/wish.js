var vizhener = {
    ua : "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ".split(""),
    en : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    square : [],
    genSqViz : function (lang) {
        var l = this[lang], square = [];
        for (var i = 0; i < l.length; i++) {
            this.square[i] = l.slice(i).concat(l.slice(0, i));
        }
        console.log(this.square)
    },
    encryption : function (lang, text, key) {
        if (lang !== "ua" && lang !== "en" || text.length !== key.length) return false;
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < text.length; i++) {
            s += this.square[this[lang].indexOf(text[i])][this[lang].indexOf(key[i])];
        }
        return s;
    },
    decryption : function (lang, key, cipher) {
        if (lang !== "ua" && lang !== "en" || cipher.length !== key.length) return false;
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < cipher.length; i++) {
            var row = this[lang].indexOf(key[i])
            coll = this.square[row].indexOf(cipher[i]);
            s += this[lang][coll];
        }
        return s;
    }
};

/*
*
* vizhener.encryption (язык шифра - ru | en , шифруемый текст , текст ключ)
*
* vizhener.decryption (язык шифра - ru | en , ключ , текст шифра)
*
* */
function check(key,message){
    if (key.length<message.length){
        for(let i=0;i<key.length;i++){
            key.concat(key[i]);
            if(key.length==message.length){
                console.log(key)

                return
            }
        }
    }
}
document.querySelector('#incr').addEventListener("click",function () {
   let message = document.querySelector('#inp1').value.toUpperCase();
   let key = document.querySelector('#inp2').value.toUpperCase();
   check(key,message);
   //document.querySelector('#inp3').value = vizhener.encryption("ua", message, key).toLowerCase();
});
document.querySelector('#decr').addEventListener("click",function () {
    let key = document.querySelector('#inp4').value.toUpperCase();
    let message = document.querySelector('#inp5').value.toUpperCase();
    document.querySelector('#inp6').value = vizhener.decryption("ua",key, message).toLowerCase();
});

// document.write (vizhener.decryption("ru", "ПОЖАРГВРИМ", "ЯЭНАБЁРБСЩ") + "<br>"); //(ru) расшифровываем
