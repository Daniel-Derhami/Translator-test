
const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i"),
translateBtn = document.querySelector("button");


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

exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});


/* whenever the translate button clicks */
translateBtn.addEventListener("click", () => {

    /*get the first text value (.value) and remove the white spaces in be beggining and the end of text (trim) */
    let text = fromText.value.trim(),


    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;

    /* if there is no text in the input area, do nothing */
    if(!text) return;

    /* after pushing trabslare button "translating..." appear in the field while the text is translating!  */
    toText.setAttribute("placeholder", "Translating...");

    /* The API use for the mai part! Give the two values defined before and do its job */
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

    /* If the api fetched, the codes going to be execude  */
    fetch(apiUrl).then(res => res.json()).then(data => {

        /*store the responded data */
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});


