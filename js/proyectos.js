const projects = [
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1760/1760647.png",
        title: "Practicas de clase",
        text: "En enlace lleva al perfil de github donde se encuentras los repositrios que contienen los archivos trabajados en clase",
        link: "https://github.com/DavidNaranjoG"
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/512/10061/10061836.png",
        title: "Portafolio",
        text: "Creación de portafolio como practica de lo aprendido en Html, css y javascript",
        link: "https://davidnaranjog.github.io/portafolio/#"
    },


    // Agrega más proyectos aquí
];

const projectContainer = document.getElementById("projectContainer");

projects.forEach(project => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-sm-6";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card m-3";

    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.className = "imgprojects";
    img.alt = project.title;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = project.title;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = project.text;

    const link = document.createElement("a");
    link.href = project.link;
    link.className = "btn btn-primary";
    link.textContent = "Ver más";
    link.target = "_blank"

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(link);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);
    projectContainer.appendChild(colDiv);
});
