
var resultWrapper = document.querySelector(".spin-result-wrapper"),
wheel = document.querySelector(".wheel-img"),
params = window.location.search.replace("?", "").split("&").reduce(function (e, t) {
    var n = t.split("=");
    return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]), e
}, {});

function spin() {
wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout(function () {
    resultWrapper.style.display = "block"
}, 8e3), setTimeout(function () {
    $(".spin-wrapper").slideUp(), $(".order_block").slideDown(), start_timer()
}, 1e4), wheel.classList.add("rotated"))
}
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
e.preventDefault(), $(".spin-result-wrapper").fadeOut()
});
var intr, time = 600;

function start_timer() {
intr = setInterval(tick, 1e3)
}

function tick() {
time -= 1;
var e = Math.floor(time / 60),
    t = time - 60 * e;
0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, $("#min").html("0" + e), $("#sec").html(t)
}
const hash = document.getElementsByTagName("body")[0].getAttribute("data-hash");
$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
! function () {
    "use strict";
    var e = {
            qs: function (e) {
                return document.querySelectorAll(e)
            },
            trigger: function (e, t) {
                if (!document.createEvent) {
                    var n = document.createEventObject();
                    return t.fireEvent("on" + e, n)
                }
                var r = document.createEvent("HTMLEvents");
                r.initEvent(e, !0, !1), t.dispatchEvent(r)
            },
            domReady: function (e) {
                if (document.addEventListener) document.addEventListener("DOMContentLoaded", e);
                else var t = setInterval(function () {
                    "complete" === document.readyState && (clearInterval(t), e())
                }, 5)
            },
            each: function (e, t) {
                for (var n = 0, r = e.length; r > n; n++) t(e[n], n)
            }
        },
        t = function () {
            this.userCountryCode = this.getCurrentCountry(), this.nginxCountryCode = this.getCurrentCountry(), this.defaultCountry = null, this.params = {
                countrySelector: ".country_select",
                mainPriceSelector: ".price_main",
                oldPriceSelector: ".price_old",
                phoneHelperSelector: ".phone_helper",
                nameHelperSelector: ".name_helper"
            }, this.countries = window.countryList, "object" == typeof this.countries && (this.prepareCountries(), this.initEvents(), this.fillCountrySelect(), this.setActiveCountrySelect())
        };
    t.prototype.prepareCountries = function () {
        for (var e in this.countries)
            if (this.countries[e].isDefault === !0) {
                this.defaultCountry = e;
                break
            }
    }, t.prototype.getCurrentCountry = function () {
        var e = window.location.search;
        if ("" === e) return this.defaultCountry;
        var t = e.match(/c\=([a-z]{2})/i) ? e.match(/c\=([a-z]{2})/i)[1] : this.defaultCountry;
        return t
    }, t.prototype.initEvents = function () {
        var t = this,
            n = e.qs(this.params.countrySelector);
        if (n.length > 0)
            for (var r = 0, i = n.length; i > r; r++) n[r].onchange = function (e) {
                t.changeSelectCountry.call(t, e)
            }
    }, t.prototype.changeSelectCountry = function (t) {
        t = t || window.event;
        var n = t.currentTarget || t.srcElement,
            r = n.value,
            i = this.countries[r];
        this.userCountryCode = r, e.each(e.qs(this.params.mainPriceSelector), function (e, t) {
            e.innerHTML = '<span class="x_price_current">' + i.price + '</span><span class="x_currency">' + i.labelPrice + "</span>"
        }), e.each(e.qs(this.params.oldPriceSelector), function (e, t) {
            e.innerHTML = '<span class="x_price_previous">' + i.oldPrice + '</span><span class="x_currency">' + i.labelPrice + "</span>"
        }), i.phoneHelper && e.each(e.qs(this.params.phoneHelperSelector), function (e, t) {
            e.innerHTML = i.phoneHelper
        }), i.nameHelper && e.each(e.qs(this.params.nameHelperSelector), function (e, t) {
            e.innerHTML = i.nameHelper
        })
    }, t.prototype.fillCountrySelect = function () {
        var t, n = function (e) {
                var t = document.createElement("OPTION");
                return t.value = e.code, t.text = e.name, t
            },
            r = e.qs(this.params.countrySelector);
        if (r.length > 0)
            for (var i = 0, o = r.length; o > i; i++)
                if ("SELECT" === r[i].nodeName)
                    for (var c in this.countries) t = this.countries[c], r[i].options.add(n(t))
    }, t.prototype.setActiveCountrySelect = function () {
        var t = e.qs(this.params.countrySelector),
            n = this.nginxCountryCode || this.defaultCountry;
        if ("undefined" == typeof this.countries[this.nginxCountryCode] && (n = this.defaultCountry), t.length > 0)
            for (var r = 0, i = t.length; i > r; r++) t[r].value = n, e.trigger("change", t[r])
    }, e.domReady(function () {
        window.lCountries = new t
    })
}();


document.addEventListener('DOMContentLoaded', function() {




})



function innerText (elem, a, b, c) {
    let element = document.querySelector(elem)
    d = new Date();
    p = new Date(d.getTime());
    let result = a + (p.getHours() * b) + p.getMinutes() * c;

    element.innerHTML = ' ' + result
}
if (document.body.classList.contains('ev-date')) {
    // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
    // Працює як в порядку спадання, так і в порядку зростання.
    document.addEventListener("DOMContentLoaded", postDate);

    function postDate() {
        const msInDay = 86400000,
            counterLength = 90,
            countryName = 'ro', // Встановлюємо мову для місяців.
            isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
            localDate = new Date();

        let months;

        switch (countryName) {
            case 'lv': // Latvia латышский
                months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
                break;
            case 'lt': // Litva литовский
                months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužės', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
                break;
            case 'it': // Italy
                months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                break;
            case 'es': // Spain
                months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                break;
            case 'fr': // France
                months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
                break;
            case 'pt': // Portugal
                months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
                break;
            case 'de': // Germany
                months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
                break;
            case 'bg': // Bulgaria
                months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
                break;
            case 'pl': // Poland
                months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
                break;
            case 'ro': // Romania
                months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
                break;
            case 'id': // Indonesia
                months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
                break;
            case 'hu': // Hungary (Румунія)
                months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
                break;
            case 'gr': // Greece
            case 'cy': // Cyprus (Кіпр)
                months = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
                break;
            case 'ar': // Арабский
                months = ['يناير', 'فبراير', 'مسيرة', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
                break;
            case 'th': // Тайский
                months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
                break;
            case 'ru': // Русский
                months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
                break;
            case 'ua': // Українська
                months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
                break;
            case 'en': // Английский
                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                break;
            case 'ge': // Грузинский
                months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
                break;
            case 'kz': // Казахский
                months = ['Қаңтар', 'Ақпан', 'Марш', 'Сәуір', 'Мүмкін', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
                break;
            case 'sk': // Словацкий
                months = ['január', 'február', 'marec', 'apríl', 'máj', 'júna', 'júl', 'august', 'septembra', 'október', 'november', 'december'];
                break;
            case 'cz': // Czech
                months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
                break;
            case 'hr': // Хорватский
                months = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'];
                break;
            case 'sl': // Словенский
                months = ['Januarja', 'Februarja', 'Marca', 'Aprila', 'Maja', 'Junija', 'Julija', 'Avgusta', 'Septembra', 'Oktobra', 'Novembra', 'Decembra'];
                break;
            case 'nl': // Нидерландский
                months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
                break;
            case 'vi': // Вьетнамский
                months = ['tháng một', 'tháng hai', 'diễu hành', 'tháng tư', 'có thể', 'tháng sáu', 'tháng bảy', 'tháng tám', 'tháng chín', 'tháng mười', 'tháng mười một', 'Tháng 12'];
                break;
            case 'my': // Малайский
                months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
                break;
            case 'mm': // Бирманский
                months = ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီလ', 'ချီတက်', '.ပြီလ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'];
                break;
            case 'in': // Хинди (Индия)
                months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
                break;
            case 'tw': // Китайский (Тайвань)
                months = ['一月', '二月', '行軍', '四月', '可能', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
                break;
            case 'bd': // Бенгальский (Бангладеш)
                months = ['জানুয়ারী', 'ফেব্রুয়ারি', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
                break;
        }

        if (isAbbreviated) {
            for (let i = 0; i < months.length; i++) months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
        }

        for (let counter = 0; counter < counterLength; counter++) {
            const dateClass = "date-" + counter,
                nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() - counter * msInDay);

            let timeCounter = 0,
                timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

            timeArray = timeFormat(timeArray);

            for (let i = 0; i < nodeList.length; i++) {
                const data = nodeList[i].dataset;

                data.format
                    ? nodeList[i].innerHTML = format(date, data.format)
                    // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                    // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                    : nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

                if (/\btime\b/.test(nodeList[i].className)) {
                    nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
                    timeCounter++;
                }
            }
        }

        // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
        // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

        for (let counter = 0; counter < counterLength; counter++) {
            const dateClass = "date-" + counter,
                  nodeList = document.getElementsByClassName(dateClass),
                  date = new Date(localDate.getTime() - counter * msInDay);

            let timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.
            timeArray = timeFormat(timeArray);

            for (let i = 0; i < nodeList.length; i++) {
                const data = nodeList[i].dataset;

                data.format
                    ? nodeList[i].innerHTML = format(date, data.format)
                // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                    : nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            }
        }


        function time(nodeList, reverse) {
            const timeArray = [];

            for (let i = 0; i < nodeList.length; i++)
                nodeList[i].className.match(/\btime\b/)
                    ? timeArray.push(timeRandom())
                    : false;

            if (reverse) timeArray.sort(function (a, b) {
                return b - a;
            });
            else timeArray.sort(function (a, b) {
                return a - b;
            });

            return timeArray;
        }

        function timeRandom() {
            return Math.round(Math.random() * 1440);
        }

        function timeFormat(timeArray) {
            const array = [];

            for (let i = 0; i < timeArray.length; i++) {
                const hTemp = Math.floor(timeArray[i] / 60),
                      mTemp = timeArray[i] % 60,
                      hours = hTemp < 10 ? "0" + hTemp : hTemp,
                      minutes = mTemp < 10 ? "0" + mTemp : mTemp;
                array.push(hours + ":" + minutes)
            }
            return array;
        }

        function format(date, formatString) {
            let innerDate = "";

            const day = date.getDate(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                fo = formatString || true;

            switch (fo) {
                case "yyyy":
                    innerDate += "" + year;
                    return innerDate;

                case "yyyy-1":
                    innerDate += "" + year - 1;
                    return innerDate;

                case "yyyy-2":
                    innerDate += "" + year - 2;
                    return innerDate;

                case "mm.dd.yyyy":
                    innerDate += (month < 10) ? ("0" + month) : month;
                    innerDate += ".";
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += "." + year;
                    return innerDate;

                case "month":
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;

                case "dd":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    return innerDate;

                case "dd month":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += " ";
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;

                case "dd month yyyy":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += " ";
                    innerDate += months[month - 1].toLowerCase();
                    innerDate += " " + year;
                    return innerDate;

                case "day dd, month yyyy":
                    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
                    innerDate += days[new Date(year, month - 1, day).getDay()];
                    innerDate += " ";
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += " ";
                    innerDate += months[month - 1];
                    innerDate += " " + year;
                    return innerDate;

                case "dd/mm/yyyy":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += "/";
                    innerDate += (month < 10) ? ("0" + month) : month;
                    innerDate += "/" + year;
                    return innerDate;

                case "dd-mm-yyyy":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += "-";
                    innerDate += (month < 10) ? ("0" + month) : month;
                    innerDate += "-" + year;
                    return innerDate;

                default:
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += ".";
                    innerDate += (month < 10) ? ("0" + month) : month;
                    innerDate += "." + year;
                    return innerDate;
            }
        }
    }
}