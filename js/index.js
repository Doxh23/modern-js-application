import "regenerator-runtime/runtime";
import { searchbar, template } from "./script.js";

(async () => {
  // Fetch API :
  var heroes = await fetch(`https://character-database.becode.xyz/characters`);
  let datas = await heroes.json();
  // Clone, use and fill of the template and

  template(datas);
  // Switch to the Single Character page
  document
    .getElementById("index-new-btn")
    .addEventListener("click", function () {
      window.location.href = "manager-character.html";
    });
})();
/****************************************************SEARCH BAR*************************************************************** */
searchbar();
