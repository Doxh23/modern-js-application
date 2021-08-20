import "regenerator-runtime/runtime";
import moment from 'moment';
import { singlecharac } from "./script.js";
(async () => {
  //fetch the API
  document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch(
      `https://character-database.becode.xyz/characters`
    );
    const character = await response.json();

    /***********************************************got the ID from the URL******************************* */
    let queryString = location.search.substring(1);
    console.log(queryString);
    //*********************************************display information from the character************************************ */
    singlecharac(character, queryString);
    //*******************************************************delete button********************************************** */
    document.getElementById("delete").addEventListener("click", async () => {
      if (confirm(`Do you want to delete it ?`)) {
        await fetch(
          `https://character-database.becode.xyz/characters/${queryString}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("votre personnage a bien été supprimé");
        localStorage.setItem("edit",moment().format("MMMM Do YYYY, h:mm:ss a") )
        window.location.href = "index.html";
      } else {
        alert(`This character isn't delete of your API`);
      }
    });
    //******************************************************************update button**************************************************** */
    document.getElementById("update").addEventListener("click", () => {
      window.location.href = `manager-character.html?${queryString}`;
    }); // à vérifier lors que le JS du manager page est réalisé

    //btn delete js
  });
  //btn update js
})();
