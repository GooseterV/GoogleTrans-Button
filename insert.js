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
body {
    top: 0px !important;
}
</style>
`;

function formatPage() {
    document.firstElementChild.style.removeProperty("height");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
};

setTimeout(formatPage, 250);

document.firstElementChild.translate = "yes"
document.head.innerHTML += headAppend

const translatorElement = document.createElement("div");
translatorElement.id = "google_translate_element"
translatorElement.style.zIndex = 1
translatorElement.style.position = "absolute"
translatorElement.style.left = "25%"

document.body.insertBefore(translatorElement, document.body.firstElementChild);

const script = document.createElement("script");
script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

document.getElementsByTagName("head")[0].appendChild(script);

const script2 = document.createElement("script");
script2.innerText = `
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en'
            }, 'google_translate_element');
        }
`
document.getElementsByTagName("head")[0].appendChild(script2);


function translatorRemoveChildNodes() {
    translatorElement.childNodes[0].childNodes[1].remove();
};

setTimeout(translatorRemoveChildNodes, 250);