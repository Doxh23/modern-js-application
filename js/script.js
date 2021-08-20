import "regenerator-runtime/runtime";

export const template = async (data) => {
  data.forEach((obj) => {
    let temp = document.getElementsByTagName("template")[0];
    let target = document.getElementById("target");
    let clone = temp.content.cloneNode(true);

    clone.querySelector("img").src = `data:image/png;base64,${obj.image}`;
    clone.querySelector("p").innerHTML = obj.shortDescription;
    clone.querySelector("h3").innerHTML = obj.name;
    clone.querySelector("a").href = `single-character.html?${obj.id}`;
    target.appendChild(clone);
  });
};
export const singlecharac = async (charac, string) => {
  charac.forEach((obj) => {
    if (string === obj.id) {
      let img = document.querySelector("img");
      img.src = `data:image/png;base64, ${obj.image}`;
      document.getElementById("single__name").innerHTML = obj.name;
      document.getElementById("single__preface").innerHTML =
        obj.shortDescription;
      document.getElementById("single__text").innerHTML = obj.description;
    }
  });
};

export const searchbar = () => {
  document.getElementById("search-bar").addEventListener("keyup", function () {
    let bar = document.getElementById("search-bar");
    let searchstring = bar.value.toUpperCase();
    console.log(searchstring);
    let carte = document.querySelectorAll(".carte");
    for (let i = 0; i < carte.length; i++) {
      let h3 = carte[i].querySelector("h3");
      let txt = h3.textContent || h3.innerText;
      if (txt.toUpperCase().indexOf(searchstring) > -1) {
        carte[i].style.display = "";
      } else {
        carte[i].style.display = "none";
      }
    }
  });
};

export const idsingle = async (find) => {
  let img = document.querySelector("img");
  img.src = `data:image/png;base64, ${find.image}`;
  document.getElementById("manager__name").value = find.name;
  document.getElementById("manager__preface").value = find.shortDescription;
  document.querySelector("#manager__text").children[0].innerHTML =
    find.description;
  // console.log(document.querySelector("p").value)
};
