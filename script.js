/* =========================================
   KRISHIMITRA AI
   JAVASCRIPT ENGINE
========================================= */


/* =========================================
   FARMING ADVICE
========================================= */

function getAdvice() {

    let crop =
        document.getElementById("crop").value;

    let soil =
        document.getElementById("soil").value;

    let moisture =
        document.getElementById("moisture").value;

    let rain =
        document.getElementById("rain").value;

    let stage =
        document.getElementById("stage").value;


    let watering =
        document.getElementById("wateringAdvice");

    let fertiliser =
        document.getElementById("fertiliserAdvice");



    /* =========================
       WATERING LOGIC
    ========================= */

    if (
        moisture === "Low" &&
        rain === "No"
    ) {

        watering.innerText =
            "Soil moisture is low and no rain is expected. Check the root-zone soil and consider irrigation if the crop requires water.";

    }


    else if (rain === "Yes") {

        watering.innerText =
            "Rain is expected. Check actual soil moisture before irrigating and avoid unnecessary watering.";

    }


    else if (moisture === "High") {

        watering.innerText =
            "Soil moisture is currently high. Avoid unnecessary irrigation and monitor the field for waterlogging.";

    }


    else {

        watering.innerText =
            "Monitor soil moisture, crop condition and weather before deciding whether irrigation is needed.";

    }



    /* =========================
       FERTILISER LOGIC
    ========================= */

    let cropName =
        document.getElementById("crop")
        .options[
            document.getElementById("crop")
            .selectedIndex
        ].text;


    fertiliser.innerText =

        "For " +
        cropName +
        ", use crop-specific and soil-test-based nutrient guidance where possible. Mature compost or vermicompost can be considered as organic nutrient sources, but they should not automatically be treated as a complete replacement for all fertilisers.";

}



/* =========================================
   LANGUAGE SYSTEM
========================================= */

function changeLanguage() {

    let language =
        document.getElementById("language").value;



    /* =========================
       ENGLISH
    ========================= */

    if (language === "en") {

        document.getElementById("headerSubtitle").innerText =
            "Smart Farming Assistant";

        document.getElementById("welcomeTitle").innerText =
            "Welcome to KrishiMitra 🌱";

        document.getElementById("welcomeText").innerText =
            "A smart farming assistant designed to help farmers make informed decisions about irrigation, soil and nutrient management.";

        document.getElementById("farmTitle").innerText =
            "🌱 Farm Information";

        document.getElementById("cropLabel").innerText =
            "Crop";

        document.getElementById("soilLabel").innerText =
            "Soil Type";

        document.getElementById("moistureLabel").innerText =
            "Soil Moisture";

        document.getElementById("rainLabel").innerText =
            "Rain Expected";

        document.getElementById("stageLabel").innerText =
            "Growth Stage";

        document.getElementById("adviceButton").innerText =
            "Get Farming Advice";

        document.getElementById("recommendationTitle").innerText =
            "🤖 KrishiMitra Recommendations";

        document.getElementById("wateringTitle").innerText =
            "💧 Watering";

        document.getElementById("fertiliserTitle").innerText =
            "🌱 Fertiliser";

        document.getElementById("organicTitle").innerText =
            "🌿 Organic Nutrient Options";

        document.getElementById("organicDescription").innerText =
            "KrishiMitra can also provide information about organic nutrient sources.";

        document.getElementById("compostTitle").innerText =
            "Compost";

        document.getElementById("compostText").innerText =
            "Mature compost made from suitable biodegradable plant materials.";

        document.getElementById("vermiTitle").innerText =
            "Vermicompost";

        document.getElementById("vermiText").innerText =
            "Compost produced using suitable biodegradable materials and earthworms.";

        document.getElementById("greenTitle").innerText =
            "Plant Residues";

        document.getElementById("greenText").innerText =
            "Appropriate crop residues and organic materials can contribute to soil health.";

        document.getElementById("safetyTitle").innerText =
            "⚠️ Important";

        document.getElementById("safetyText").innerText =
            "Fertiliser requirements vary by crop, soil and growth stage. Exact nutrient recommendations should be based on reliable agricultural guidance and, where available, soil-test results.";

    }



    /* =========================
       HINDI
    ========================= */

    else if (language === "hi") {

        document.getElementById("headerSubtitle").innerText =
            "स्मार्ट कृषि सहायक";

        document.getElementById("welcomeTitle").innerText =
            "कृषिमित्र में आपका स्वागत है 🌱";

        document.getElementById("welcomeText").innerText =
            "कृषिमित्र किसानों को सिंचाई, मिट्टी और पोषक तत्वों के बारे में बेहतर निर्णय लेने में सहायता करता है।";

        document.getElementById("farmTitle").innerText =
            "🌱 खेत की जानकारी";

        document.getElementById("cropLabel").innerText =
            "फसल";

        document.getElementById("soilLabel").innerText =
            "मिट्टी का प्रकार";

        document.getElementById("moistureLabel").innerText =
            "मिट्टी की नमी";

        document.getElementById("rainLabel").innerText =
            "बारिश की संभावना";

        document.getElementById("stageLabel").innerText =
            "फसल की अवस्था";

        document.getElementById("adviceButton").innerText =
            "कृषि सलाह प्राप्त करें";

        document.getElementById("recommendationTitle").innerText =
            "🤖 कृषिमित्र की सलाह";

        document.getElementById("wateringTitle").innerText =
            "💧 सिंचाई";

        document.getElementById("fertiliserTitle").innerText =
            "🌱 उर्वरक";

        document.getElementById("organicTitle").innerText =
            "🌿 जैविक पोषक विकल्प";

        document.getElementById("organicDescription").innerText =
            "कृषिमित्र जैविक पोषक स्रोतों के बारे में भी जानकारी दे सकता है।";

        document.getElementById("compostTitle").innerText =
            "कम्पोस्ट";

        document.getElementById("compostText").innerText =
            "उपयुक्त जैविक पौधों के अवशेषों से बनाया गया परिपक्व कम्पोस्ट।";

        document.getElementById("vermiTitle").innerText =
            "वर्मी कम्पोस्ट";

        document.getElementById("vermiText").innerText =
            "उपयुक्त जैविक सामग्री और केंचुओं की सहायता से तैयार किया गया कम्पोस्ट।";

        document.getElementById("greenTitle").innerText =
            "पौधों के अवशेष";

        document.getElementById("greenText").innerText =
            "उपयुक्त फसल अवशेष और जैविक सामग्री मिट्टी के स्वास्थ्य में योगदान दे सकते हैं।";

        document.getElementById("safetyTitle").innerText =
            "⚠️ महत्वपूर्ण";

        document.getElementById("safetyText").innerText =
            "उर्वरक की आवश्यकता फसल, मिट्टी और फसल की अवस्था पर निर्भर करती है। सही पोषक तत्वों की सलाह विश्वसनीय कृषि मार्गदर्शन और, जहाँ उपलब्ध हो, मिट्टी की जाँच पर आधारित होनी चाहिए.";

    }



    /* =========================
       MARATHI
    ========================= */

    else if (language === "mr") {

        document.getElementById("headerSubtitle").innerText =
            "स्मार्ट शेती सहाय्यक";

        document.getElementById("welcomeTitle").innerText =
            "कृषिमित्रमध्ये आपले स्वागत आहे 🌱";

        document.getElementById("welcomeText").innerText =
            "कृषिमित्र शेतकऱ्यांना सिंचन, माती आणि पोषक तत्त्वांबाबत योग्य निर्णय घेण्यास मदत करते.";

        document.getElementById("farmTitle").innerText =
            "🌱 शेताची माहिती";

        document.getElementById("cropLabel").innerText =
            "पीक";

        document.getElementById("soilLabel").innerText =
            "मातीचा प्रकार";

        document.getElementById("moistureLabel").innerText =
            "मातीतील ओलावा";

        document.getElementById("rainLabel").innerText =
            "पावसाची शक्यता";

        document.getElementById("stageLabel").innerText =
            "पिकाची अवस्था";

        document.getElementById("adviceButton").innerText =
            "शेतीविषयक सल्ला मिळवा";

        document.getElementById("recommendationTitle").innerText =
            "🤖 कृषिमित्रचा सल्ला";

        document.getElementById("wateringTitle").innerText =
            "💧 सिंचन";

        document.getElementById("fertiliserTitle").innerText =
            "🌱 खत";

        document.getElementById("organicTitle").innerText =
            "🌿 सेंद्रिय पोषक पर्याय";

        document.getElementById("organicDescription").innerText =
            "कृषिमित्र सेंद्रिय पोषक स्रोतांबद्दलही माहिती देऊ शकते.";

        document.getElementById("compostTitle").innerText =
            "कंपोस्ट";

        document.getElementById("compostText").innerText =
            "योग्य जैविक वनस्पती अवशेषांपासून तयार केलेले परिपक्व कंपोस्ट.";

        document.getElementById("vermiTitle").innerText =
            "गांडूळ खत";

        document.getElementById("vermiText").innerText =
            "योग्य जैविक सामग्री आणि गांडुळांच्या मदतीने तयार केलेले कंपोस्ट.";

        document.getElementById("greenTitle").innerText =
            "वनस्पती अवशेष";

        document.getElementById("greenText").innerText =
            "योग्य पिकांचे अवशेष आणि सेंद्रिय सामग्री मातीच्या आरोग्यास मदत करू शकतात.";

        document.getElementById("safetyTitle").innerText =
            "⚠️ महत्त्वाचे";

        document.getElementById("safetyText").innerText =
            "खताची गरज पीक, माती आणि पिकाच्या अवस्थेनुसार बदलते. योग्य पोषक तत्त्वांची शिफारस विश्वसनीय कृषी मार्गदर्शन आणि उपलब्ध असल्यास माती परीक्षणावर आधारित असावी.";

    }

}