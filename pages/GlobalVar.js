"use strict"
// constantes et variables globales
const fichierJson = "./public/data/FishEyeData.json";
const repPhotoId = "./public/img/PhotographersIDPhotos/";
const repMedia = "../public/img/";
const vowels = "aeiouy";

var photographersSet = []; // set des objets photographes contenus dans le fichier Json
var mediaSet = [];         // set des objets médias contenus dans le fichier Json
var tagSetM = [];          // set des tags chargés à partir des tags des photographes
var tagSetP = [];          // set des tags du photographe sélectionné pour la page photographe

// variables pour l'affichage de la page d'un photographe et de son caroussel
var pSel;      // photographe sélectionné
var modale1;   // élement HTML contenant la modale1, page d'un photographe
var modale2;   // élement HTML contenant la modale2, formulaire de contact d'un photographe
var mediaShow; // élement HTML contenant la l'affichage de la collection du photographe sélectionné [page solo et caroussel]
var caroussel; // array des éléments HTML enfants de mediaShow
var photographerDirectory; // variable contenant le répertoire des médias du photographe
var allMedias; // pour afficher tous les medias d'un photographe si aucun tag n'est sélectionné
var paramMedia;// id du média cliqué lors de l'affichage du caroussel pour qu'il s'y affiche en premier
var viewWidth; // largeur d'affichage d'un média pour proportion H/W suivant la page
var proportion1 = 0.567; // proportion H/W d'affichage d'un média page photographe (mobile et tablettes)
var proportion2 = 0.857; // proportion H/W d'affichage d'un média sur le caroussel et page photographe sur laptop
var proportion3 = 0.75;  // proportion H/W d'affichage d'un média sur le caroussel (4:3 si laptop)
var triCrit = 0 // valeur du critère de tri (laptop)
