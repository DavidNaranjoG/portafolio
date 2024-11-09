const projects = [
    {
        imgSrc: "ruta/de/la/imagen1.jpg",
        title: "Título del Proyecto 1",
        text: "Descripción breve del Proyecto 1.",
        link: "#"
    },
    {
        imgSrc: "ruta/de/la/imagen2.jpg",
        title: "Título del Proyecto 2",
        text: "Descripción breve del Proyecto 2.",
        link: "#"
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
    img.className = "card-img-top";
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

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(link);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);
    projectContainer.appendChild(colDiv);
});
