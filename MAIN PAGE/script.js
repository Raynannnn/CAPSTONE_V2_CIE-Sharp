function showInfo(feature){

    var title = document.getElementById("infoTitle");

    var text = document.getElementById("infoText");

    var box = document.getElementById("featureBox");


    if(feature == "microgame"){

        title.innerHTML = "Microgames";

        text.innerHTML =
        "CIE-Sharp uses short, interactive microgame activities to supplement ICT students' motivation in learning the C# programming language. The activities provide opportunities for students to practice fundamental C# programming concepts in an interactive learning environment.";

    }


    else if(feature == "quiz"){

        title.innerHTML = "Formative Quizzes";

        text.innerHTML =
        "The formative quizzes provide short learning activities that allow students to check their understanding of fundamental C# programming concepts. These activities can provide feedback that helps students identify areas that need further practice.";

    }


    else if(feature == "modules"){

        title.innerHTML = "Learning Modules";

        text.innerHTML =
        "The learning modules provide structured lessons covering fundamental C# programming concepts. The modules are designed to introduce concepts before students proceed to interactive microgame activities.";

    }


    box.style.display = "flex";

}



/* CLOSE FEATURE INFORMATION */
function closeInfo(){
    document.getElementById("featureBox").style.display = "none";
}



/* RESEARCHERS */
function showResearchers(){

    document.getElementById("researcherBox").style.display = "flex";

}

/* CLOSE RESEARCHERS */
function closeResearchers(){

    document.getElementById("researcherBox").style.display = "none";

}

var currentResearcher = 0;

var researchers = document.querySelectorAll(".researcher-slide");


function showResearcher(index){

    researchers.forEach(function(slide){
        slide.classList.remove("active");
    });

    researchers[index].classList.add("active");

    document.getElementById("researcherNumber").innerHTML =
        (index + 1) + " / " + researchers.length;
}



/*RESEARCHER DATA*/

var currentResearcher = 0;

var researchers = [

    {
        name: "Marciales, Raynan A.",
        role: "Main Developer",
        image: "images/marciales.jpg",
        description:
        "Responsible for the development and implementation of the CIE-Sharp web-based microgame learning material."
    },

    {
        name: "Inquig, Precious Gold B.",
        role: "Research Leader",
        image: "images/inquig.jpg",
        description:
        "Serves as the research leader who helps coordinate the research activities and development of the CIE-Sharp instructional material."
    },

    {
        name: "Domingo, Noe D.",
        role: "Researcher & Developer",
        image: "images/domingo.jpg",
        description:
        "Contributed to the research and development activities of the CIE-Sharp learning material."
    },

    {
        name: "Gidayawan, Joses D.",
        role: "Researcher & Developer",
        image: "images/gidayawan.jpg",
        description:
        "Contributed to the research and development activities of the CIE-Sharp learning material."
    },

    {
        name: "Sorinio, Bea A.",
        role: "Researcher & Developer",
        image: "images/sorinio.jpg",
        description:
        "Contributed to the research and development activities of the CIE-Sharp learning material."
    }

];


/* =========================
   OPEN RESEARCHER BOX
========================= */

function showResearchers(){

    currentResearcher = 0;

    document.getElementById("researcherBox").style.display = "flex";

    document.querySelector(".researcher-profile").style.display = "flex";

    document.querySelector(".researcher-navigation").style.display = "flex";

    document.querySelector(".researcher-school").style.display = "block";

    document.getElementById("researchTeamSummary").style.display = "none";

    showResearcher();

}


/* =========================
   SHOW RESEARCHER
========================= */

function showResearcher(){

    var researcher = researchers[currentResearcher];

    document.getElementById("researcherName").innerHTML =
        researcher.name;

    document.getElementById("researcherRole").innerHTML =
        researcher.role;

    document.getElementById("researcherDescription").innerHTML =
        researcher.description;

    document.getElementById("researcherImage").src =
        researcher.image;


    /* COUNTER */

    document.getElementById("researcherNumberBottom").innerHTML =
        (currentResearcher + 1) + " / " + researchers.length;


    /* PREVIOUS BUTTON */

    document.getElementById("prevResearcher").disabled =
        currentResearcher === 0;


    /* NEXT BUTTON */

    if(currentResearcher === researchers.length - 1){

        document.getElementById("nextResearcher").innerHTML =
            "View Research Team →";

    }

    else{

        document.getElementById("nextResearcher").innerHTML =
            "Next →";

    }

}


/* =========================
   NEXT RESEARCHER
========================= */

function nextResearcher(){

    if(currentResearcher < researchers.length - 1){

        currentResearcher++;

        showResearcher();

    }

    else{

        showResearchTeam();

    }

}


/* =========================
   PREVIOUS RESEARCHER
========================= */

function previousResearcher(){

    if(currentResearcher > 0){

        currentResearcher--;

        showResearcher();

    }

}


/* =========================
   SHOW FINAL SUMMARY
========================= */

function showResearchTeam(){

    document.querySelector(".researcher-profile").style.display =
        "none";

    document.querySelector(".researcher-navigation").style.display =
        "none";

    document.querySelector(".researcher-school").style.display =
        "none";

    document.getElementById("researchTeamSummary").style.display =
        "block";

}


/* =========================
   CLOSE RESEARCHER BOX
========================= */

function closeResearchers(){

    document.getElementById("researcherBox").style.display =
        "none";

}


/* =========================
   FEATURE INFORMATION
========================= */

function showInfo(feature){

    var title = document.getElementById("infoTitle");

    var text = document.getElementById("infoText");

    var box = document.getElementById("featureBox");


    if(feature == "microgame"){

        title.innerHTML = "Microgames";

        text.innerHTML =
        "CIE-Sharp uses short, interactive microgame activities to supplement ICT students' motivation in learning the C# programming language. The activities provide opportunities for students to practice fundamental C# programming concepts in an interactive learning environment.";

    }

    else if(feature == "quiz"){

        title.innerHTML = "Formative Quizzes";

        text.innerHTML =
        "The formative quizzes provide short learning activities that allow students to check their understanding of fundamental C# programming concepts. These activities can provide feedback that helps students identify areas that need further practice.";

    }

    else if(feature == "modules"){

        title.innerHTML = "Learning Modules";

        text.innerHTML =
        "The learning modules provide structured lessons covering fundamental C# programming concepts. The modules are designed to introduce concepts before students proceed to interactive microgame activities.";

    }


    box.style.display = "flex";

}


/* =========================
   CLOSE FEATURE BOX
========================= */

function closeInfo(){

    document.getElementById("featureBox").style.display =
        "none";

}


