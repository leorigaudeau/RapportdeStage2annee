var hardskill = [
    { name: "HTML5", pourcent: 85 },
    { name: "JavaScript", pourcent: 75 },
    { name: "Css", pourcent: 80 },
    { name: "Git", pourcent: 70 },
    { name: "Php", pourcent: 50 },
    { name: "Sass", pourcent: 50 },
    { name: "SQL", pourcent: 65 }
]

var portfolio = [
    { project: "Rapport de Stage", desc: "Realisation d'un Rapport de Stage en format site Internet pour le stage chez Fleury Michon voir dans les experience pour plus de détails.", img: "RapportdeStage.png" },
    { project: "Floxy", desc: "Front développer durant ma première Année dans une équipe de 12 développeurs nous avons crée une application utilisant une intelligence Artificiel. Montée en compétences dans les technologies liées au Frontend ", img: "StudioFloax.png" },
    {project: "Coaching 3.0", desc: "Projet Y-Days à Ynov durant ma deuxième année, J’ai été choisit comme chef de projet mais je participe aussi a la production de l’Application Mobile pour notre client l’entreprise Act’in Coach.",img:"Act'inCoach.png"}
]



var knowledge = document.getElementById("kn-listing");
var project = document.getElementById("po-listing");

// for (let i = 0; i < hardskill.length; i++) {
//     knowledge.innerHTML+='<div class="kn-ligne"><p class="element">'+hardskill[i]+'</p><div class="kn-contentprogressbar"><div class="kn-progressbar animated fadeInLeft"style="width:'+pourcent[i]+'%;"></div></div><p class="pourcent">'+pourcent[i]+'%</p></div>'
// }

hardskill.forEach(element => {
    knowledge.innerHTML += '<div class="kn-ligne"><p class="element">' + element.name + '</p><div class="kn-contentprogressbar"><div class="kn-progressbar "style="width:' + element.pourcent + '%;"></div><p class="pourcent">' + element.pourcent + '%</p></div></div>'

});

portfolio.forEach(element => {
    project.innerHTML += '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator po-img" src="Asset/' + element.img + '" ></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + element.project + '<i class="material-icons right fas fa-ellipsis-v"></i></span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' + element.project + '<i class="material-icons right fas fa-times"></i></span><p>' + element.desc + '</p></div></div>'
});

