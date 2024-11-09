// Clase donde se agregan las soft skills
const softSkills = [
    {
        imgSrc: "https://img.icons8.com/?size=100&id=OAs4QZ2x4zyX&format=png&color=000000",
        text : "Trabajo en equipo"        
    },
    {
        imgSrc: "https://img.icons8.com/?size=100&id=if1a9xStBA5I&format=png&color=000000",
        text : "Mentalidad positiva"        
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/13322/13322422.png",
        text : "Comunicación asertiva"        
    },

];

const ulSoftSkills = document.getElementById("ulSoftSkills");

softSkills.forEach(softSkill=>{
    const liSoftSkills = document.createElement("li");
    liSoftSkills.className = "lista";

    const liText = document.createElement("p");
    liText.className = "text";
    liText.textContent = softSkill.text;

    const img = document.createElement("img");
    img.src = softSkill.imgSrc;
    img.className = "skillsimg";

    liText.appendChild(img);
    liSoftSkills.appendChild(liText);
    ulSoftSkills.appendChild(liSoftSkills);
});

//---------------------------------------------------------------------------------------------------------------//

// Clase donde se agregan las hard skills
const hardSkills = [
    {
        imgSrc: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
        text : "Springboot"        
    },
    {
        imgSrc: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
        text : "Java"        
    },
    {
        imgSrc: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000",
        text : "Angular"        
    },

];

const ulhardSkills = document.getElementById("ulhardSkills");

hardSkills.forEach(hardSkill=>{
    const liHardSkills = document.createElement("li");
    liHardSkills.className = "lista";

    const liText = document.createElement("p");
    liText.className = "text";
    liText.textContent = hardSkill.text;

    const img = document.createElement("img");
    img.src = hardSkill.imgSrc;
    img.className = "skillsimg";

    liText.appendChild(img);
    liHardSkills.appendChild(liText);
    ulhardSkills.appendChild(liHardSkills);
});



