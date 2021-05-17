const photographers = [{
    "name": "Mimi Keel",
    "id": 243,
    "city": "London",
    "country": "UK",
    "tags": ["portrait", "events", "travel", "animals"],
    "tagline": "Voir le beau dans le quotidien",
    "price": 400,
    "portrait": "MimiKeel.jpg"
  },
  {
    "name": "Ellie-Rose Wilkens",
    "id": 930,
    "city": "Paris",
    "country": "France",
    "tags": ["sport", "architecture"],
    "tagline": "Capturer des compositions complexes",
    "price": 250,
    "portrait": "EllieRoseWilkens.jpg"
  },
  {
    "name": "Tracy Galindo",
    "id": 82,
    "city": "Montreal",
    "country": "Canada",
    "tags": ["art", "fashion", "events"],
    "tagline": "Photographe freelance",
    "price": 500,
    "portrait": "TracyGalindo.jpg"
  },
  {
    "name": "Nabeel Bradford",
    "id": 527,
    "city": "Mexico City",
    "country": "Mexico",
    "tags": ["travel", "portrait"],
    "tagline": "Toujours aller de l'avant",
    "price": 350,
    "portrait": "NabeelBradford.jpg"
  },
  {
    "name": "Rhode Dubois",
    "id": 925,
    "city": "Barcelona",
    "country": "Spain",
    "tags": ["sport", "fashion", "events", "animals"],
    "tagline": "Je crée des souvenirs",
    "price": 275,
    "portrait": "RhodeDubois.jpg"
  },
  {
    "name": "Marcel Nikolic",
    "id": 195,
    "city": "Berlin",
    "country": "Germany",
    "tags": ["travel", "architecture"],
    "tagline": "Toujours à la recherche de LA photo",
    "price": 300,
    "portrait": "MarcelNikolic.jpg"
  }
];

const media = [{
    "id": 342550,
    "photographerId": 82,
    "title": "Fashion Yellow Beach",
    "image": "Fashion_Yellow_Beach.jpg",
    "tags": ["fashion"],
    "likes": 62,
    "date": "2011-12-08",
    "price": 55
  },
  {
    "id": 8520927,
    "photographerId": 82,
    "title": "Fashion Urban Jungle",
    "image": "Fashion_Urban_Jungle.jpg",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2011-11-06",
    "price": 55
  },
  {
    "id": 9025895,
    "photographerId": 82,
    "title": "Fashion Pattern on a Pattern",
    "image": "Fashion_Pattern_on_Pattern.jpg",
    "tags": ["fashion"],
    "likes": 72,
    "date": "2013-08-12",
    "price": 55
  },
  {
    "id": 9275938,
    "photographerId": 82,
    "title": "Wedding Gazebo",
    "image": "Event_WeddingGazebo.jpg",
    "tags": ["events"],
    "likes": 69,
    "date": "2018-02-22",
    "price": 55
  },
  {
    "id": 2053494,
    "photographerId": 82,
    "title": "Sparkles",
    "image": "Event_Sparklers.jpg",
    "tags": ["events"],
    "likes": 2,
    "date": "2020-05-25",
    "price": 55
  },
  {
    "id": 7324238,
    "photographerId": 82,
    "title": "18th Anniversary",
    "image": "Event_18thAnniversary.jpg",
    "tags": ["events"],
    "likes": 33,
    "date": "2019-06-12",
    "price": 55
  },
  {
    "id": 8328953,
    "photographerId": 82,
    "title": "Wooden Horse Sculpture",
    "video": "Art_Wooden_Horse_Sculpture.mp4",
    "tags": ["art"],
    "likes": 24,
    "date": "2011-12-08",
    "price": 100
  },
  {
    "id": 7502053,
    "photographerId": 82,
    "title": "Triangle Man",
    "image": "Art_Triangle_Man.jpg",
    "tags": ["art"],
    "likes": 88,
    "date": "2007-05-07",
    "price": 55
  },
  {
    "id": 8523492,
    "photographerId": 82,
    "title": "Purple Tunnel",
    "image": "Art_Purple_light.jpg",
    "tags": ["art"],
    "likes": 24,
    "date": "2018-05-05",
    "price": 55
  },
  {
    "id": 75902334,
    "photographerId": 82,
    "title": "Art Mine",
    "image": "Art_Mine.jpg",
    "tags": ["art"],
    "likes": 75,
    "date": "2019-11-25",
    "price": 55
  },
  {
    "id": 73852952,
    "photographerId": 925,
    "title": "Sport Butterfly",
    "image": "Sport_Butterfly.jpg",
    "tags": ["sport"],
    "likes": 52,
    "date": "2013-02-30",
    "price": 70
  },

  {
    "id": 73852953,
    "photographerId": 925,
    "title": "8 Rows",
    "image": "Sport_2000_with_8.jpg",
    "tags": ["sport"],
    "likes": 52,
    "date": "2013-02-30",
    "price": 70
  },
  {
    "id": 92758372,
    "photographerId": 925,
    "title": "Fashion Wings",
    "image": "Fashion_Wings.jpg",
    "tags": ["fashion"],
    "likes": 58,
    "date": "2018-07-17",
    "price": 70
  },
  {
    "id": 32958383,
    "photographerId": 925,
    "title": "Melody Red on Stripes",
    "image": "Fashion_Melody_Red_on_Stripes.jpg",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2019-08-12",
    "price": 70
  },
  {
    "id": 928587383,
    "photographerId": 925,
    "title": "Venture Conference",
    "image": "Event_VentureConference.jpg",
    "tags": ["events"],
    "likes": 2,
    "date": "2019-01-02",
    "price": 70
  },
  {
    "id": 725639493,
    "photographerId": 925,
    "title": "Product Pitch",
    "image": "Event_ProductPitch.jpg",
    "tags": ["events"],
    "likes": 3,
    "date": "2019-05-20",
    "price": 70
  },
  {
    "id": 23394384,
    "photographerId": 925,
    "title": "Musical Festival Keyboard",
    "image": "Event_KeyboardCheck.jpg",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-07-18",
    "price": 70
  },
  {
    "id": 87367293,
    "photographerId": 925,
    "title": "Musical Festival Singer",
    "image": "Event_Emcee.jpg",
    "tags": ["events"],
    "likes": 23,
    "date": "2018-02-22",
    "price": 70
  },
  {
    "id": 593834784,
    "photographerId": 925,
    "title": "Animal Majesty",
    "image": "Animals_Majesty.jpg",
    "tags": ["animals"],
    "likes": 52,
    "date": "2017-03-13",
    "price": 70
  },
  {
    "id": 83958935,
    "photographerId": 925,
    "title": "Cute Puppy on Sunset",
    "video": "Animals_Puppiness.mp4",
    "tags": ["animals"],
    "likes": 52,
    "date": "2016-06-12",
    "price": 70
  },

  {
    "id": 394583434,
    "photographerId": 527,
    "title": "Rock Mountains",
    "video": "Travel_Rock_Mountains.mp4",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45
  },
  {
    "id": 343423425,
    "photographerId": 527,
    "title": "Outdoor Baths",
    "image": "Travel_Outdoor_Baths.jpg",
    "tags": ["travel"],
    "likes": 101,
    "date": "2017-04-03",
    "price": 45
  },
  {
    "id": 73434243,
    "photographerId": 527,
    "title": "Road into the Hill",
    "image": "Travel_Road_into_Hill.jpg",
    "tags": ["travel"],
    "likes": 99,
    "date": "2018-04-30",
    "price": 45
  },
  {
    "id": 23425523,
    "photographerId": 527,
    "title": "Bridge into the Forest",
    "image": "Travel_Bridge_into_Forest.jpg",
    "tags": ["travel"],
    "likes": 34,
    "date": "2016-04-05",
    "price": 45
  },
  {
    "id": 23134513,
    "photographerId": 527,
    "title": "Boat Wonderer",
    "image": "Travel_Boat_Wanderer.jpg",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45
  },
  {
    "id": 92352352,
    "photographerId": 527,
    "title": "Portrait Sunkiss",
    "image": "Portrait_Sunkissed.jpg",
    "tags": ["portrait"],
    "likes": 66,
    "date": "2018-05-24",
    "price": 45
  },
  {
    "id": 34513453,
    "photographerId": 527,
    "title": "Shaw Potrait",
    "image": "Portrait_Shaw.jpg",
    "tags": ["portrait"],
    "likes": 52,
    "date": "2017-04-21",
    "price": 45
  },
  {
    "id": 23523533,
    "photographerId": 527,
    "title": "Alexandra",
    "image": "Portrait_Alexandra.jpg",
    "tags": ["portrait"],
    "likes": 95,
    "date": "2018-11-02",
    "price": 45
  },
  {
    "id": 23523535,
    "photographerId": 527,
    "title": "Travel Rock Mountains",
    "video": "Travel_Rock_Mountains.mp4",
    "tags": ["travel"],
    "likes": 85,
    "date": "2018-10-02",
    "price": 55
  },
  {
    "id": 525834234,
    "photographerId": 527,
    "title": "Afternoon Break",
    "image": "Portrait_AfternoonBreak.jpg",
    "tags": ["portrait"],
    "likes": 25,
    "date": "2019-01-02",
    "price": 45
  },

  {
    "id": 623534343,
    "photographerId": 243,
    "title": "Lonesome",
    "image": "Travel_Lonesome.jpg",
    "tags": ["travel"],
    "likes": 88,
    "date": "2019-02-03",
    "price": 45
  },
  {
    "id": 625025343,
    "photographerId": 243,
    "title": "Hillside Color",
    "image": "Travel_HillsideColor.jpg",
    "tags": ["travel"],
    "likes": 85,
    "date": "2019-04-03",
    "price": 45
  },
  {
    "id": 2525345343,
    "photographerId": 243,
    "title": "Wednesday Potrait",
    "image": "Portrait_Wednesday.jpg",
    "tags": ["portrait"],
    "likes": 34,
    "date": "2019-04-07",
    "price": 45
  },
  {
    "id": 2523434634,
    "photographerId": 243,
    "title": "Nora Portrait",
    "image": "Portrait_Nora.jpg",
    "tags": ["portrait"],
    "likes": 63,
    "date": "2019-04-07",
    "price": 45
  },
  {
    "id": 398847109,
    "photographerId": 243,
    "title": "Raw Black Portrait",
    "image": "Portrait_Background.jpg",
    "tags": ["portrait"],
    "likes": 55,
    "date": "2019-06-20",
    "price": 45
  },
  {
    "id": 2534342,
    "photographerId": 243,
    "title": "Seaside Wedding",
    "image": "Event_SeasideWedding.jpg",
    "tags": ["events"],
    "likes": 25,
    "date": "2019-06-21",
    "price": 45
  },
  {
    "id": 65235234,
    "photographerId": 243,
    "title": "Boulder Wedding",
    "image": "Event_PintoWedding.jpg",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-06-25",
    "price": 45
  },
  {
    "id": 23523434,
    "photographerId": 243,
    "title": "Benevides Wedding",
    "image": "Event_BenevidesWedding.jpg",
    "tags": ["events"],
    "likes": 77,
    "date": "2019-06-28",
    "price": 45
  },
  {
    "id": 5234343,
    "photographerId": 243,
    "title": "Wild Horses in the Mountains",
    "video": "Animals_Wild_Horses_in_the_mountains.mp4",
    "tags": ["animals"],
    "likes": 142,
    "date": "2019-08-23",
    "price": 60
  },
  {
    "id": 95234343,
    "photographerId": 243,
    "title": "Rainbow Bird",
    "image": "Animals_Rainbow.jpg",
    "tags": ["animals"],
    "likes": 59,
    "date": "2019-07-02",
    "price": 60
  },

  {
    "id": 52343416,
    "photographerId": 195,
    "title": "Japanese Tower, Kyoto",
    "image": "Travel_Tower.jpg",
    "tags": ["travel"],
    "likes": 25,
    "date": "2019-04-03",
    "price": 60
  },
  {
    "id": 2523434,
    "photographerId": 195,
    "title": "Senset on Canals, Venice",
    "image": "Travel_SunsetonCanals.jpg",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-05-06",
    "price": 60
  },
  {
    "id": 95293534,
    "photographerId": 195,
    "title": "Mountain and Lake",
    "image": "Travel_OpenMountain.jpg",
    "tags": ["travel"],
    "likes": 33,
    "date": "2019-05-12",
    "price": 60
  },
  {
    "id": 356234343,
    "photographerId": 195,
    "title": "City Bike and Stair, Paris",
    "image": "Travel_Bike_and_Stair.jpg",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-06-20",
    "price": 60
  },
  {
    "id": 235234343,
    "photographerId": 195,
    "title": "Adventure Door, India",
    "image": "Travel_Adventure_Door.jpg",
    "tags": ["travel"],
    "likes": 63,
    "date": "2019-06-26",
    "price": 60
  },
  {
    "id": 6234234343,
    "photographerId": 195,
    "title": "Contrast, St Petersburg",
    "image": "Architecture_Contrast.jpg",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2019-06-30",
    "price": 60
  },
  {
    "id": 6525666253,
    "photographerId": 195,
    "title": "On a Hill, Tibet",
    "image": "Architecture_On_a_hill.jpg",
    "tags": ["architecture"],
    "likes": 63,
    "date": "2019-07-20",
    "price": 60
  },
  {
    "id": 98252523433,
    "photographerId": 195,
    "title": "Leaning Tower, Pisa",
    "image": "Architecture_Dome.jpg",
    "tags": ["architecture"],
    "likes": 88,
    "date": "2020-01-05",
    "price": 60
  },
  {
    "id": 9259398453,
    "photographerId": 195,
    "title": "Circle Highways, Buenos Aires",
    "video": "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
    "tags": ["architecture"],
    "likes": 57,
    "date": "2020-01-20",
    "price": 65
  },
  {
    "id": 3523523534,
    "photographerId": 195,
    "title": "Corner Building and Blue Sky",
    "image": "Architecture_Corner_Room.jpg",
    "tags": ["architecture"],
    "likes": 54,
    "date": "2020-05-05",
    "price": 60
  },

  {
    "id": 952343423,
    "photographerId": 930,
    "title": "Tricks in the Air",
    "video": "Sport_Tricks_in_the_air.mp4",
    "tags": ["sport"],
    "likes": 150,
    "date": "2018-02-30",
    "price": 70
  },
  {
    "id": 235234343,
    "photographerId": 930,
    "title": "Climber",
    "image": "Sport_Next_Hold.jpg",
    "tags": ["sport"],
    "likes": 101,
    "date": "2018-03-05",
    "price": 65
  },
  {
    "id": 235343222,
    "photographerId": 930,
    "title": "Surfer",
    "image": "sport_water_tunnel.jpg",
    "tags": ["sport"],
    "likes": 103,
    "date": "2018-03-10",
    "price": 70
  },
  {
    "id": 7775342343,
    "photographerId": 930,
    "title": "Skier",
    "image": "Sport_Sky_Cross.jpg",
    "tags": ["sport"],
    "likes": 77,
    "date": "2018-04-16",
    "price": 50
  },
  {
    "id": 9253445784,
    "photographerId": 930,
    "title": "Race End",
    "image": "Sport_Race_End.jpg",
    "tags": ["sport"],
    "likes": 88,
    "date": "2018-04-22",
    "price": 65
  },
  {
    "id": 22299394,
    "photographerId": 930,
    "title": "Jump!",
    "image": "Sport_Jump.jpg",
    "tags": ["sport"],
    "likes": 95,
    "date": "2018-04-27",
    "price": 70
  },
  {
    "id": 3452342633,
    "photographerId": 930,
    "title": "White Light",
    "image": "Architecture_White_Light.jpg",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2018-05-03",
    "price": 75
  },
  {
    "id": 939234243,
    "photographerId": 930,
    "title": "Water on Modern Building",
    "image": "Architecture_Water_on_Modern.jpg",
    "tags": ["architecture"],
    "likes": 55,
    "date": "2018-05-10",
    "price": 72
  },
  {
    "id": 222959233,
    "photographerId": 930,
    "title": "Horseshoe",
    "image": "Architecture_Horseshoe.jpg",
    "tags": ["architecture"],
    "likes": 85,
    "date": "2018-05-15",
    "price": 71
  },
  {
    "id": 965933434,
    "photographerId": 930,
    "title": "Cross Bar",
    "image": "Architecture_Cross_Bar.jpg",
    "tags": ["architecture"],
    "likes": 66,
    "date": "2018-05-20",
    "price": 58
  },
  {
    "id": 777723343,
    "photographerId": 930,
    "title": "Connected Curves",
    "image": "Architecture_Connected_Curves.jpg",
    "tags": ["architecture"],
    "likes": 79,
    "date": "2018-05-21",
    "price": 80
  }
];

// constantes et variables globales
const vowels = "aeiouy";
const dataSet = [];
let cardsContainer;

// construction du tableau des tags
const tagSet = [];

// function constructeur des tags
function CreeTag(lib, status) {
  this.name = lib;
  this.state = status;
};

// le tag all permet d'afficher tous les photographes au chargement de la page
// il devient false si au moins un tag est sélectionné
let firstTag = new CreeTag("all", true);
tagSet.push(firstTag);

// construit le libellé d'affichage des tags
function libTag(arg) {
  let str = arg.substr(1, arg.length);
  let maj = arg[0].toUpperCase();
  let lib = "#" + maj + str;
  return lib
};

// fonction de récupération des données JSON au chargement de la page
async function loadJson() {
  let response = await fetch("./public/data/FishEyeData.json");
  if (response.ok) {
    let dataJson = response.json();
    dataSet = JSON.parse(dataJson);
  }
  return response.ok
};

// chargement des tags à partir des photographes
function loadTags() {
  let appendTag = true
  photographers.forEach(p => {
    p.tags.forEach(t => {
      let appendTag = true;
      for (i = 0; i < tagSet.length; i++) {
        if (t == tagSet[i].name) {
          appendTag = false;
        }
      }
      if (appendTag) {
        let newTag = new CreeTag(t, false);
        let w = tagSet.push(newTag);
      }
    })
  })
};

// affichage des tags dans le <nav> et dans les cards
// sauf le premier, "all", qui est un switch géré par le script
function affTags() {
  tagsContainer = document.getElementById("main-tags-select");
  for (let i = 1; i < tagSet.length; i++) {
    let tag = document.createElement('button');
    let wtagLib = libTag(tagSet[i].name);
    tag.setAttribute('id', tagSet[i].name);
    tag.setAttribute('class', "tagBtnNav");
    let first = tagSet[i].name[0];
    let vowel = false;
    for (let i = 0; i < 6; i++) {
      if (first == vowels[i]) {
        vowel = true;
        break;
      }
    }
    if (vowel == true) {
      tag.setAttribute('aria-label', "Sélectionner les photos d'" + tagSet[i].name);
    } else {
      tag.setAttribute('aria-label', "Sélectionner les photos de " + tagSet[i].name);
    }
    tag.textContent = wtagLib;
    tagsContainer.append(tag);
  }
}

// initialisation de l'affichage
// supprime les cards affichées (s'il y en a...)
function effaceCards() {
  let listeCards = document.getElementsByClassName('pcard');
  let length = listeCards.length;
  if (length > 0) {
    let parentCard = listeCards[0].parentNode;
    for (let i = 0; i < length; i++) {
      parentCard.removeChild(listeCards[0]);
    }
  }
}

// affichage de la page principale
// avec tous les photographes au lancement (aucun tag sélectionné, tag "all"=true) 
// ou seulement ceux qui possèdent le(s) tag(s) sélectionné(s)
function displayPhotographers() {
  effaceCards();
  photographers.forEach(p => {
    if (tagSet[0].state == true) {
      displayPhotographerMain(p);
    } else {
      let displayP = false;
      p.tags.forEach(t => {
        for (i = 0; i < tagSet.length; i++) {
          if (t == tagSet[i].name) {
            displayP = true;
            break;
          }
        }
        if (displayP) {
          displayPhotographerMain(p);
        }
      })
    }
  })
};

// affichage d'un photographe
function displayPhotographerMain(p) {
  cardsContainer = document.getElementById("cards-container");
  let cardPhotographe = document.createElement('a');
  cardPhotographe.setAttribute('href', "#photographe");
  cardPhotographe.setAttribute('id', p.id);
  cardPhotographe.setAttribute('class', "pcard");
  cardPhotographe.setAttribute('aria-label', "Cliquer pour choisir ce photographe");
//  cardPhotographe.setAttribute('on-click', loadPhotographe(p.id));
  cardsContainer.append(cardPhotographe);
  let pcardImg = document.createElement("div");
  pcardImg.setAttribute('class', "pcard__img");
  cardPhotographe.append(pcardImg);
  let pcardPortrait = document.createElement("img");
  pcardPortrait.setAttribute('src', "./public/img/PhotographersIDPhotos/" + p.portrait);
  pcardPortrait.setAttribute('alt', "Photo de " + p.name);
  pcardPortrait.setAttribute('aria-label', "Photo de " + p.name);
  pcardImg.append(pcardPortrait);
  let nomPhotographe = document.createElement('p');
  nomPhotographe.setAttribute('class', "pcard__name");
  nomPhotographe.setAttribute('aria-label', "Nom du photographe")
  nomPhotographe.textContent = p.name;
  cardPhotographe.append(nomPhotographe);
  let placePhotographe = document.createElement('p');
  placePhotographe.setAttribute('class', "pcard__place");
  placePhotographe.setAttribute('aria-label', "Localisation du photographe");
  placePhotographe.textContent = p.city + ", " + p.country;
  cardPhotographe.append(placePhotographe);
  let altPhotographe = document.createElement('p');
  altPhotographe.setAttribute('class', "pcard__alt");
  altPhotographe.setAttribute('aria-label', "Slogan du photographe");
  altPhotographe.textContent = p.tagline;
  cardPhotographe.append(altPhotographe);
  let pricePhotographe = document.createElement('p');
  pricePhotographe.setAttribute('class', "pcard__price");
  pricePhotographe.setAttribute('aria-label', "Tarif journalier du photographe");
  pricePhotographe.textContent = p.price + " € / jour";
  cardPhotographe.append(pricePhotographe);
  let tagsPhotographe = document.createElement('div');
  tagsPhotographe.setAttribute('class', "pcard__tags");
  tagsPhotographe.setAttribute('aria-label', "Catégories du photographe");
  cardPhotographe.append(tagsPhotographe);
  for (let i = 0; i < p.tags.length; i++) {
    let tagPhotographe = document.createElement('div');
    let wtagLib = libTag(p.tags[i]);
    tagPhotographe.setAttribute('class', "pcard__tagsx");
    tagPhotographe.setAttribute('aria-label', "Une des catégories du photographe");
    tagPhotographe.textContent = wtagLib;
    tagsPhotographe.append(tagPhotographe);
  }

};

// DOM Elements
const navBtn = document.querySelectorAll(".tagBtnNav");
const allCards = document.querySelectorAll(".pcard");

// add event listeners
navBtn.forEach((btn) => btn.addEventListener("click", selectTag));
allCards.forEach((card) => card.addEventListener("click", loadMod1));

// clic sur un tag page principale
function selectTag(event) {
  event.preventDefault()
  console.log(this.className) // journalise le className de my_element
  console.log(event.currentTarget === this) // journalise `true`
};

// clic sur une pcard page principale
function loadMod1(event) {
  event.preventDefault()
  console.log(this.className) // journalise le className de my_element
  console.log(event.currentTarget === this) // journalise `true`
};

// charge la modale avec les données du photographe sélectionné (mod1)
function loadMod1() {
  let p = this.photographe;
  mod1Head.setAttribute('id', p.id);
  mod1Head_sel_img__img.setAttribute('src', "./public/img/PhotographersIDPhotos/" + p.portrait);
  mod1Head_sel_name.textContent = p.name;
  mod1Head_sel_alt.textContent = p.city + ", " + p.country;
  mod1Head_sel_tags.textContent = p.tagline;
  for (let i = 0; i < p.tags.length; i++) {
    let mod1Head_sel_tags = document.createElement('div');
    let wtagLib = libTag(p.tags[i]);
    tagPhotographe.setAttribute('class', "pcard__tagsx");
    tagPhotographe.setAttribute('aria-label', "Une des catégories du photographe");
    tagPhotographe.textContent = wtagLib;
    mod1Head_sel_tags.append(tagPhotographe);
  }
  alert("modale photographe",this.value);
  const collection = loadCollection(p);
  mod1.style.display = "block";
};

function loadCollection(p) {
  let mediaSet = media.forEach(item => {
    if (item.photographerId == p.id) {
      
      mediaSet.push(item);
    }
  })
  console.log(mediaSet);
  return mediaSet;
  };

//************ exécution du script ****************//  
// loadJson()      // ne fonctionne pas..!
loadTags();
affTags();
displayPhotographers();
debugger;


/*
// Contructeurs des objets photographer et media 
function Photographer(name, id, city, country, tags, tagline, price, portrait) {
  this.name = name;
  this.id = id;
  this.city = city;
  this.country = country;
  this.tags = tags;
  this.tagline = tagline;
  this.price = price;
  this.portrait = portrait;

}

function Media(id, photoId, title, image, tags, likes, date, price) {
  this.id = id;
  this.photographerId = photoId;
  this.title = title;
  this.image = image;
  this.tags = tags;
  this.likes = likes;
  this.date = date;
  this.price = price;
}

//la class factory se charge pour nous de comprendre quel élément on cherche à créer
//on passe le contenu en argument directement au constructor lors de l'instanciation (new)
//on se sert de l'argument par défaut "" pour dire que par défaut content vaut la chaine de caractère vide, ce qui évite des erreurs
//on peut lui passer un objet json en paramètre lorsque l'on souhaiterai par exemple avoir des classes différentes pour chaque élément
class factory {

  constructor(content = {}) {
    // ici on se sert de includes pour savoir quelle est l'extension du fichier.
    // si c'est du mp4 on crée une vidéo,
    // autrement on crée une image
    if (content.video) return new factoryVideo(content.video);
    else return new factoryImage(content.image);
  }
}

//toujours la même classe permettant de créer une vidéo
class factoryVideo {
  constructor(content) {
    this.el = document.createElement("video");
    this.el.appendChild(document.createElement("source"));
    this.el.children[0].src = content;
  }
  // un getter permet ici de récupérer l'élément html créé dans le constructeur
  getEl() {
    return this.el;
  }
  affich() {
    document.body.appendChild(this.el);
  }
}

class factoryImage {
  constructor(content) {
    this.el = document.createElement("img");
    this.el.src = content;
  }
  getEl() {
    return this.el;
  }
  affich() {
    document.body.appendChild(this.el);
  }
}

//la création se fait maintenant toujours avec la même classe factory
const image = new factory({
  image: "chose.jpg"
});
const video = new factory({
  video: "vid.mp4"
});

//on peut toujours s'en servir de la même manière peu importe le type d'élément html
image.affich();
video.affich();


/*
const data = JSON.parse(data);
data.sort(function (key1, key2) {
  return key1.population < key2.population;
})
*/