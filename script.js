
const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),


selectTag.forEach((tag,id)=>{
    for (let country_code in countries){
        let selected;
        if (id==0 && country_code=="en-GB")
            selected="selected";

    else if(id==1 && country_code=="fa-IR"){
        selected="selected";
        }
     let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;

    tag.insertAdjacentHTML("beforeend", option);
       }
});
