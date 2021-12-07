const headAppend = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
body>.skiptranslate {
    display: none;
}
.goog-te-banner-frame.skiptranslate {
    display: none !important;
}
@media print {
    #google_translate_element {
        display: none;
    }
}
.goog-te-gadget a {
    display:none;
}
#google_translate_element select {
    background-color: #409ff7;
    color: #000000;
    border: none;
    border-radius: 7px;
    padding: 6px 8px;
    font-family: 'Nunito';
    font-weight: 700;
}
#google_translate_element select option {
    color: #000000;
    font-family: 'Nunito';
    font-weight: 900;
}
.goog-te-gadget > * {
    left:-50%;
}
#google_translate_element select {
    outline: none;
    border: none;
}
#google_translate_element select:hover {
    cursor:pointer !important;
}
#goog-gt-tt[style] {
    display: none !important;
}
.goog-text-highlight {
    background-color: transparent;
    box-shadow: none;
}
body {
    top: 0px !important;
}
</style>
`;
function formatPage(){
    document.firstElementChild.style.removeProperty("height")
    document.body.style.removeProperty("position")
    document.body.style.removeProperty("top")
    document.firstElementChild.translate="yes"
    document.head.innerHTML += headAppend
}
setTimeout(formatPage, 250)
const translator = document.createElement("div");
translator.id = "google_translate_element"
translator.style.zIndex = 200
translator.style.position = "absolute"
translator.style.left = "25%"
document.body.insertBefore(translator, document.body.firstElementChild)
const translateScript1 = document.createElement("script");
const translateScript2 = document.createElement("script");
translateScript1.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.getElementsByTagName("head")[0].appendChild(translateScript1);
translateScript2.innerText = `
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}
`;
document.getElementsByTagName("head")[0].appendChild(translateScript2);


function translatorRemoveChildNodes(){
    translator.childNodes[0].childNodes[1].remove()
}

setTimeout(translatorRemoveChildNodes, 500)
console.log(`Finished loading translator  (✿◡‿◡)\nReport Bugs & Issues \n\t↓↓↓\nhttps://github.com/GooseterV/GoogleTrans-Button/issues/new`)
