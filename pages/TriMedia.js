// tri de la collection de media du photographe suivant le critère choisi
const data = JSON.parse(data);
data.sort(function (key1, key2) {
  return key1.population < key2.population;
})

