// constantes et variables globales
const fichierJson = "./public/data/FishEyeData.json";
const repPhotoId = "./public/img/PhotographersIDPhotos/";
const repMedia = "../public/img/";
const vowels = "aeiouy";

var photographersSet = []; // set des objets photographes contenus dans le fichier Json
var mediaSet = [];         // set des objets média contenus dans le fichier Json
var tagSetM = [];          // set des tags chargés à partir des tags des photographes
var tagSetP = [];          // set des tags du photographe sélectionné, pour page photographe et caroussel

// variables pour l'affichage de la page d'un photographe et de son caroussel
var pSel;      // photographe sélectionné
var modale1;   // élement HTML contenant la modale1, page d'un photographe
var modale2;   // élement HTML contenant la modale2, formulaire de contact d'un photographe
var modale3;   // élement HTML contenant la modale3, caroussel d'un photographe
var mediaShow; // élement HTML contenant la collection du photographe sélectionné [modale1 et modale3]
var photographerDirectory; // variable contenant le répertoire des médias du photographe
var allMedias; // pour afficher tous les medias d'un photographe si aucun tag n'est sélectionné
var viewWidth; // largeur d'affichage d'un média pour proportion H/W suivant la modale
var proportion1 = 0.567; // proportion page photographe
var proportion2 = 0.857; // proportion caroussel