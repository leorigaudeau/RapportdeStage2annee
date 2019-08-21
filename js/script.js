(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

; (function ($) {
    $.expr[":"].onScreen = function (elem) {
        var $window = $(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = $(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height

        return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
})(jQuery);

$(function () {
    setInterval(function () {
        $(".paragraphe").filter(":onScreen").addClass("animated fadeInLeft")
        $(".paragrapheD").filter(":onScreen").addClass("animated fadeInRight")
        $(".iconshist").filter(":onScreen").addClass("animated tada")
        $(".card").filter(":onScreen").addClass("animated bounceIn")
    }, 1)
})

$('.dropdown-trigger').dropdown();

$('a[href^=#]').on("click",function(){
    var t= $(this.hash);
    var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
    if(t.length){
        var tOffset=t.offset().top;
        $('html,body').animate({scrollTop:tOffset-20},'slow');
        return false;
    }
});

//*****************************changement class perso******************************* */
function slideH() {
    document.getElementById('histoire').className = "col s12 txt-align animated pulse"
    document.getElementById('LPH').className = "none"
    document.getElementById('descriptionH').className = "none"
    document.getElementById('txtH-more').className = "txt padd paddingT"
    document.getElementById('titreH').className = "titrepara"
    document.getElementById('group').className = " none"
    document.getElementById('enemy').className = " none"

}
function slideG() {
    document.getElementById('group').className = "col s12 txt-align animated pulse"
    document.getElementById('LPG').className = "none"
    document.getElementById('descriptionG').className = "none"
    document.getElementById('txtG-more').className = "txt padd paddingT"
    document.getElementById('titreG').className = "titrepara"
    document.getElementById('histoire').className = "none"
    document.getElementById('enemy').className = "none"

}
function slideE() {
    document.getElementById('enemy').className = "col s12 txt-align animated pulse"
    document.getElementById('LPE').className = "none"
    document.getElementById('descriptionE').className = "none"
    document.getElementById('txtE-more').className = "txt padd paddingT"
    document.getElementById('titreE').className = "titrepara"
    document.getElementById('group').className = "none"
    document.getElementById('histoire').className = "none"

}
function restart() {
    document.getElementById('histoire').className = "col s12 m4 txt-align partiH"
    document.getElementById('group').className = "col s12 m4 txt-align partiH"
    document.getElementById('enemy').className = "col s12 m4 txt-align partiH"
    document.getElementById('txtH-more').className = "none"
    document.getElementById('txtG-more').className = "none"
    document.getElementById('txtE-more').className = "none"
    document.getElementById('LPH').className = ""
    document.getElementById('LPG').className = ""
    document.getElementById('LPE').className = ""
    document.getElementById('titreH').className = "none"
    document.getElementById('titreG').className = "none"
    document.getElementById('titreE').className = "none"
    document.getElementById('descriptionH').className = "txt"
    document.getElementById('descriptionG').className = "txt"
    document.getElementById('descriptionE').className = "txt"
}
// function catgRes() {
//     // document.getElementById('resterbtn').className = "waves-effect waves-light btn-large btn-categ "
//     document.getElementById('btnres').className = "none"

// }
// function catgDev() {

// }
// //  function resetbtn() {
// //      document.getElementById('sectionbtn').innerHTML = '<a  href="javascript: catgDev()" class="waves-effect waves-light btn-large btn-categ">Développement</a> <a href = "javascript: catgRes()" class="waves-effect waves-light btn-large btn-categ" > Réseau</a> <a id="resterbtn" href="javascript: restetbtn()" class="waves-effect waves-light btn-large btn-categ none">Reset Btn</a>'

// //     }

function detailcarte1() {
    document.getElementById('mission1').className = "col s12 m12 animated pulse"
    document.getElementById('mission2').className = "none"
    document.getElementById('mission3').className = "none"
    document.getElementById('mission5').className = "none"
    document.getElementById('mission4').className = "none"
    document.getElementById('mission6').className = "none"
    document.getElementById('mission7').className = "none"
    document.getElementById('mission1a').className = "card-image INITGRANDimg"
    document.getElementById('missionT').className = "card-content txt-align INITGRANDtxt txt"
    document.getElementById('descipttxt').className = "none"
    document.getElementById('mission1b').className = "card-content txt-align INITGRANDtxt paddingT"
    document.getElementById('linkIN').innerHTML = '<a href="javascript: restarmission()">Retour</a>'
}
function detailcarte2() {
    document.getElementById('mission2').className = "col s12 m12 animated pulse"
    document.getElementById('mission1').className = "none"
    document.getElementById('mission3').className = "none"
    document.getElementById('mission5').className = "none"
    document.getElementById('mission4').className = "none"
    document.getElementById('mission6').className = "none"
    document.getElementById('mission7').className = "none"
    document.getElementById('mission2a').className = "card-image INITGRANDimg"
    document.getElementById('missionT2').className = "card-content txt-align INITGRANDtxt txt"
    document.getElementById('descipt2txt').className = "none"
    document.getElementById('mission2b').className = "card-content txt-align INITGRANDtxt paddingT"
    document.getElementById('link2IN').innerHTML = '<a href="javascript: restarmission()">Retour</a>'
}
function detailcarte3() {
    document.getElementById('mission3').className = "col s12 m12 animated pulse"
    document.getElementById('mission2').className = "none"
    document.getElementById('mission1').className = "none"
    document.getElementById('mission5').className = "none"
    document.getElementById('mission4').className = "none"
    document.getElementById('mission6').className = "none"
    document.getElementById('mission7').className = "none"
    document.getElementById('mission3a').className = "card-image INITGRANDimg"
    document.getElementById('missionT3').className = "card-content txt-align INITGRANDtxt txt"
    document.getElementById('descipt3txt').className = "none"
    document.getElementById('mission3b').className = "card-content txt-align INITGRANDtxt paddingT"
    document.getElementById('link3IN').innerHTML = '<a href="javascript: restarmission()">Retour</a>'
}

function detailcarte4() {
    document.getElementById('mission4').className = "col s12 m12 animated pulse"
    document.getElementById('mission2').className = "none"
    document.getElementById('mission1').className = "none"
    document.getElementById('mission5').className = "none"
    document.getElementById('mission3').className = "none"
    document.getElementById('mission4a').className = "card-image INITGRANDimg"
    document.getElementById('descipt4txt').className = "none"
    document.getElementById('mission6').className = "none"
    document.getElementById('mission7').className = "none"
    document.getElementById('mission4b').className = "card-content txt-align INITGRANDtxt paddingT"
    document.getElementById('missionT4').className = "card-content txt-align INITGRANDtxt txt"
    document.getElementById('link4IN').innerHTML = '<a href="javascript: restarmission()">Retour</a>'
}

function detailcarte5() {
    document.getElementById('mission5').className = "col s12 m12 animated pulse"
    document.getElementById('mission2').className = "none"
    document.getElementById('mission1').className = "none"
    document.getElementById('mission3').className = "none"
    document.getElementById('mission4').className = "none"
    document.getElementById('mission6').className = "none"
    document.getElementById('mission7').className = "none"
    document.getElementById('mission5a').className = "card-image INITGRANDimg"
    document.getElementById('missionT5').className = "card-content txt-align INITGRANDtxt txt"
    document.getElementById('descipt5txt').className = "none"
    document.getElementById('mission5b').className = "card-content txt-align INITGRANDtxt paddingT"
    document.getElementById('link5IN').innerHTML = '<a href="javascript: restarmission()">Retour</a>'
}
function detailcarte6() {
    document.getElementById('mission6').className = "col s12 m12 animated pulse"
    document.getElementById('mission2').className = "none"
    document.getElementById('mission1').className = "none"
    document.getElementById('mission3').className = "none"
    document.getElementById('mission4').className = "none"
    document.getElementById('mission5').className = "none"
    document.getElementById('mission7').className = "none"
    document.getElementById('mission6a').className = "card-image INITGRANDimg"
    document.getElementById('missionT6').className = "card-content txt-align INITGRANDtxt txt"
    document.getElementById('descipt6txt').className = "none"
    document.getElementById('mission6b').className = "card-content txt-align INITGRANDtxt paddingT"
    document.getElementById('link6IN').innerHTML = '<a href="javascript: restarmission()">Retour</a>'
}
function detailcarte7() {
    document.getElementById('mission7').className = "col s12 m12 animated pulse"
    document.getElementById('mission2').className = "none"
    document.getElementById('mission1').className = "none"
    document.getElementById('mission3').className = "none"
    document.getElementById('mission4').className = "none"
    document.getElementById('mission5').className = "none"
    document.getElementById('mission6').className = "none"
    document.getElementById('mission7a').className = "card-image INITGRANDimg"
    document.getElementById('missionT7').className = "card-content txt-align INITGRANDtxt txt"
    document.getElementById('descipt7txt').className = "none"
    document.getElementById('mission7b').className = "card-content txt-align INITGRANDtxt paddingT"
    document.getElementById('link7IN').innerHTML = '<a href="javascript: restarmission()">Retour</a>'
}

function restarmission() {
    document.getElementById('mission1').className = "col s12 m4"
    document.getElementById('mission2').className = "col s12 m4"
    document.getElementById('mission3').className = "col s12 m4"
    document.getElementById('mission4').className = "col s12 m6"
    document.getElementById('mission6').className = "col s12 m6"
    document.getElementById('mission7').className = "col s12 m6"
    document.getElementById('mission5').className = "col s12 m6"
    document.getElementById('mission1a').className = "card-image"
    document.getElementById('mission2a').className = "card-image"
    document.getElementById('mission3a').className = "card-image"
    document.getElementById('mission4a').className = "card-image"
    document.getElementById('mission5a').className = "card-image"
    document.getElementById('mission6a').className = "card-image"
    document.getElementById('mission7a').className = "card-image"
    document.getElementById('descipttxt').className = "card-content"
    document.getElementById('descipt2txt').className = "card-content"
    document.getElementById('descipt3txt').className = "card-content"
    document.getElementById('descipt4txt').className = "card-content"
    document.getElementById('descipt5txt').className = "card-content"
    document.getElementById('descipt6txt').className = "card-content"
    document.getElementById('descipt7txt').className = "card-content"
    document.getElementById('mission1b').className = "none"
    document.getElementById('mission2b').className = "none"
    document.getElementById('mission3b').className = "none"
    document.getElementById('mission4b').className = "none"
    document.getElementById('mission5b').className = "none"
    document.getElementById('mission6b').className = "none"
    document.getElementById('mission7b').className = "none"
    document.getElementById('missionT').className = "none"
    document.getElementById('missionT2').className = "none"
    document.getElementById('missionT3').className = "none"
    document.getElementById('missionT4').className = "none"
    document.getElementById('missionT5').className = "none"
    document.getElementById('missionT6').className = "none"
    document.getElementById('missionT7').className = "none"
    document.getElementById('linkIN').innerHTML = '<a href="javascript: detailcarte1()">Lire plus</a>'
    document.getElementById('link2IN').innerHTML = '<a href="javascript: detailcarte2()">Lire plus</a>'
    document.getElementById('link3IN').innerHTML = '<a href="javascript: detailcarte3()">Lire plus</a>'
    document.getElementById('link4IN').innerHTML = '<a href="javascript: detailcarte4()">Lire plus</a>'
    document.getElementById('link5IN').innerHTML = '<a href="javascript: detailcarte5()">Lire plus</a>'
    document.getElementById('link6IN').innerHTML = '<a href="javascript: detailcarte6()">Lire plus</a>'
    document.getElementById('link7IN').innerHTML = '<a href="javascript: detailcarte7()">Lire plus</a>'
}

function overG() {
    setTimeout(function () {
        document.getElementById("contentG").className = "col m11 s12 animated push  "
        document.getElementById("contentE").className = "col m1 s12 animated push"
        document.getElementById("imgG").className = "imgsectiontech animated slideInLeft"
        document.getElementById('imgE').className = "imgpetit  animated slideInLeft"
        document.getElementById('TitG').className = "animated rubberBand legendeTech"
        document.getElementById('TitE').className = "animated rubberBand legendeTechP"
    }, 1)
    document.getElementById('TitG').className = "legendeTech"
    document.getElementById('TitE').className = "legendeTech"
}


function overE() {
    setTimeout(function () {
        document.getElementById("contentG").className = "col m1 s12 animated push "
        document.getElementById("contentE").className = "col m11 s12 animated push"
        document.getElementById("imgG").className = "imgpetit animated slideInRight "
        document.getElementById('imgE').className = "imgsectiontech position animated slideInRight "
        document.getElementById('TitG').className = "animated rubberBand legendeTech"
        document.getElementById('TitE').className = "animated rubberBand legendeTech"
    }, 1)
    document.getElementById('TitG').className = "legendeTech"
    document.getElementById('TitE').className = "legendeTech"
}
function overR() {
    document.getElementById("contentG").className = "col m6 s12  "
    document.getElementById('contentE').className = "col m6 s12 "
    document.getElementById("imgG").className = "imgsectiontech"
    document.getElementById('imgE').className = "imgsectiontech position"
    document.getElementById('txtG').className = "none"
    document.getElementById('txtE').className = "none"
    document.getElementById('TitG').className = "legendeTech"
    document.getElementById('TitE').className = "legendeTech"
    document.getElementById('btnG').className = "none"
    document.getElementById('btnE').className = "none"

}

function openG() {
    document.getElementById("contentE").className = "none"
    document.getElementById("contentG").className = "col m12 s12 geant"
    document.getElementById('imgG').className = "imgsectiontech"
    document.getElementById('txtG').className = "paddingT"
    document.getElementById('btnG').className = "btn-floating btn-large waves-effect waves-light red"

}
function openE() {
    document.getElementById("contentG").className = "none"
    document.getElementById("contentE").className = "col m12 s12 geant"
    document.getElementById('imgE').className = "imgsectiontech"
    document.getElementById('txtE').className = "paddingT"
    document.getElementById('btnE').className = "btn-floating btn-large waves-effect waves-light red"
}

