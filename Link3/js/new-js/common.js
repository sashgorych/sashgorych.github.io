'use strict';

function x() {
    function getticket(data) {
        console.log('обробка запроса');
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                Math.random() > 0.5 ? resolve('забронировано') : reject('Нету билетов');
            }, 2000);
        });
        return promise;
    }

    function fly(u) {
        console.log(u);
    }

    function looser(error) {
        console.error(error);
    }

    getticket({}).then(function (suc) {
        return fly(suc);
    }).catch(function (error) {
        return looser(error);
    });
}

(function print() {
    var me = {};
    me.avatar = "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";

    var you = {};
    you.avatar = "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    //-- No use time. It is a javaScript effect.
    function insertChat(who, text) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        var control = "";
        var date = formatAMPM(new Date());

        if (who == "me") {

            control = '<li style="width:100%">' + '<div class="msj macro">' + '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' + '<div class="text text-l">' + '<p>' + text + '</p>' + '<p><small>' + date + '</small></p>' + '</div>' + '</div>' + '</li>';
        } else {
            control = '<li style="width:100%;">' + '<div class="msj-rta macro">' + '<div class="text text-r">' + '<p>' + text + '</p>' + '<p><small>' + date + '</small></p>' + '</div>' + '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' + '</li>';
        }

        setTimeout(function () {
            $("#cont1").append(control);
        }, time);
    }
    insertChat("you", 'Здравствуйте, чем могу помочь?', 1000);

    function resetChat() {
        $("ul").empty();
    }

    $(".mytext").on("keyup", function (e) {
        if (e.which == 13) {
            var text = $(this).val();
            if (text !== "") {
                insertChat("me", text);
                $(this).val('');
            }
        }
    });

    //-- Clear Chat
    resetChat();

    //-- Print Messages


    //-- NOTE: No use time on insertChat.


    var phrases = {
        'привет': 'Здравствуйте.',
        'отследить': 'Введите код Вашей посылки',
        'нужн карт': 'Карта дает вам скидки на все услуги компании, обычная 5%, серебряная 10%, золотая 15%',
        'дает карт': 'Карта дает вам скидки на все услуги компании, обычная 5%, серебряная 10%, золотая 15%',
        'для чего карт': 'Карта дает вам скидки на все услуги компании, обычная 5%, серебряная 10%, золотая 15%',
        'возобновить карту': 'Чтобы возобновить карту подзвоните менеджеру',
        'получить карт': 'Карту можно получить после первой покупки на соответствующую сумму <br> [похожее: золотая карта, серебряная карта]',
        'карт серебр': 'Серебряная карта выдается при сумарной суме покупок больше чем на 10 000',
        'карт золот': 'Золотая карта выдается при сумарной суме покупок больше чем на 10 000',
        'бонус': 'Чтобы получить бонус воспользуйтесь картой',
        'потеря карт': 'Если Вы потеряли карту - передзвоните нашему менеджеру!',
        'потеря ее': 'Если Вы потеряли карту - передзвоните нашему менеджеру!',
        'error': 'Извените, я не знаю что ответить. Попробуйте перефразировать вопрос'
    };

    document.onkeypress = function (event) {
        var answer = [];
        if (event.keyCode == 0xA || event.keyCode == 0xD) {
            var flag_original = false; //повне співпадіння фрази
            var test = [];
            var sms = document.getElementById("sms").value.toLowerCase();
            var sms_words = sms.split(' ');
            var count_of_answer = 0;
            var mas = [];
            for (var key in phrases) {
                var counter_of_all = 0;
                var counter = 0;
                var key_array = key.split(' ');
                var temporarily;
                for (var i = 0; i < key_array.length; i++) {
                    for (var j = 0; j < sms_words.length; j++) {
                        if (sms_words[j].length < 2) {
                            // console.log('wjjj: '+sms_words[j])
                            sms_words.splice(j, 1);
                        }
                        // console.log('key[' + i + ']=' + key_array[i] + ' ' + 'words[' + j + ']=' + sms_words[j]);
                        var flag = true;

                        // повне/неповне входження
                        if (sms_words[j] == key_array[i]) {
                            counter_of_all++;
                        }
                        // кінець повне/неповне входження


                        // коефіцієнт співпадіння
                        var koef2 = Math.floor(key_array[i].length / 1.2);
                        for (var p = 0; p < koef2; p++) {
                            if (!(sms_words[j][p] == key_array[i][p])) {
                                flag = false;
                            }
                        }
                        // коефіцієнт співпадіння

                        //перевірка на включення підстроки
                        // console.log('rivnist: ' + (sms_words[j].indexOf(key_array[i]) + 1 || key_array[i].indexOf(sms_words[j]) + 1) && flag)
                        if (sms_words[j].indexOf(key_array[i]) + 1 || key_array[i].indexOf(sms_words[j]) + 1) {
                            counter++;
                            test[count_of_answer] = sms_words[j];
                        }
                        //перевірка на включення підстроки
                    }
                }

                if (counter_of_all == key_array.length && sms_words.length == key_array.length) {
                    console.log(key_array + ' - полная фраза');
                    flag_original = true;
                }

                if (counter == key_array.length) {
                    answer[count_of_answer] = key_array;
                    count_of_answer++;
                    for (var _i = 0; _i < count_of_answer; _i++) {
                        mas[_i] = answer[_i].join(' ');
                    }
                }
            }

            if (mas.length == 0) {
                count_of_answer = 1;
            }
            for (var _i2 = 0; _i2 < count_of_answer; _i2++) {
                if (!(mas.length == 0)) {
                    if (flag_original) {
                        insertChat("you", phrases[mas[_i2]], 1500, true);
                    } else {
                        insertChat("you", phrases[mas[_i2]], 1500);
                    }
                } else {
                    insertChat("you", phrases.error, 1500);
                }
            }
        };
    };
})();