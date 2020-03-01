$(document).ready(function() { // 
    $('.selectpicker').selectpicker();
  });
  
$(document).ready(function () {
    $('input[name="datetimes"]').daterangepicker({

        cancelButtonClasses: 'cnclBtn',
        applyButtonClasses: 'applyBtn',
        drops: 'down',
        minDate: new Date(),
        timePicker24Hour: true,
        showCustomRangeLabel: true,
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        "locale": {
            'format': 'DD/MM/YY HH:mm',
            "separator": " - ",
            "applyLabel": "Прийняти",
            "cancelLabel": "Скасувати",
            "fromLabel": "De",
            "toLabel": "Até",
            "customRangeLabel": "Custom",
            "daysOfWeek": [
                "Нд",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Січень",
                "Лютий",
                "Березень",
                "Квітень",
                "Травень",
                "Червень",
                "Липень",
                "Серпень",
                "Вересень",
                "Жовтень",
                "Листопад",
                "Грудень"
            ],
            "firstDay": 0
        },
    });

});




