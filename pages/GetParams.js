// récupère l'id du photographe passée en paramètre d'URL, ou rien (page principale)
function getParams() {
  let params = window.location.search.substring(1);
  let param = params.split("=");
  return parseInt(param[1],10)
};