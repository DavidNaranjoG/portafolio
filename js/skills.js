// Clase donde se agregan las soft skills
const softSkills = [
    {
        imgSrc: "link/imagen.png",
        text : "habilidad 1"        
    },
    {
        imgSrc: "link/imagen.png",
        text : "habilidad 1"        
    },
    {
        imgSrc: "link/imagen.png",
        text : "habilidad 1"        
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
        imgSrc: "link/imagen.png",
        text : "habilidad 1"        
    },
    {
        imgSrc: "link/imagen.png",
        text : "habilidad 1"        
    },
    {
        imgSrc: "link/imagen.png",
        text : "habilidad 1"        
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



