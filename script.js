/* ===========================================
   IMAGEN DEL TULIPÁN
=========================================== */

const TULIP_IMAGE =
    "ChatGPT Image 21 sept 2026, 22_20_35.png";


/* ===========================================
   LAS 7 RAZONES
=========================================== */

const reasons = [

    "Por lo hermosa que eres.",

    "Por tu sonrisa y felicidad tan contagiosa.",

    "Por siempre ayudarme cuando estoy mal.",

    "Por elegirme siempre a pesar de mis defectos.",

    "Por sacarme siempre una sonrisa.",

    "Por hacerme tan querido e importante para ti.",

    "Por cambiar mi vida a mejor."

];


/* ===========================================
   POSICIONES DE LAS FLORES EN EL RAMO
=========================================== */

const flowerPositions = [

    {
        x: "-100px",
        y: "40px",
        rotate: "-19deg",
        scale: "0.88",
        width: "125px"
    },

    {
        x: "100px",
        y: "45px",
        rotate: "19deg",
        scale: "0.88",
        width: "125px"
    },

    {
        x: "-65px",
        y: "5px",
        rotate: "-11deg",
        scale: "0.94",
        width: "130px"
    },

    {
        x: "65px",
        y: "8px",
        rotate: "11deg",
        scale: "0.94",
        width: "130px"
    },

    {
        x: "-30px",
        y: "-25px",
        rotate: "-5deg",
        scale: "1",
        width: "135px"
    },

    {
        x: "31px",
        y: "-25px",
        rotate: "5deg",
        scale: "1",
        width: "135px"
    },

    {
        x: "0px",
        y: "-60px",
        rotate: "0deg",
        scale: "1.07",
        width: "140px"
    }

];


const bouquet =
    document.getElementById("bouquet");


const reasonsContainer =
    document.getElementById("reasons");


let highestFlower = -1;


/* ===========================================
   CREAR RAMO
=========================================== */

flowerPositions.forEach(
    (position, index) => {

        const flower =
            document.createElement("div");


        flower.classList.add(
            "bouquet-flower"
        );


        flower.dataset.index =
            index;


        flower.style.setProperty(
            "--x",
            position.x
        );


        flower.style.setProperty(
            "--y",
            position.y
        );


        flower.style.setProperty(
            "--rotate",
            position.rotate
        );


        flower.style.setProperty(
            "--scale",
            position.scale
        );


        flower.style.setProperty(
            "--width",
            position.width
        );


        flower.innerHTML = `

            <img
                src="${TULIP_IMAGE}"
                alt="Tulipán amarillo"
            >

        `;


        bouquet.appendChild(
            flower
        );

    }
);


/* ===========================================
   CREAR LAS 7 RAZONES
=========================================== */

reasons.forEach(
    (text, index) => {

        const section =
            document.createElement("section");


        section.classList.add(
            "reason"
        );


        section.dataset.index =
            index;


        section.innerHTML = `

            <div class="reason-card">

                <div class="reason-flower">

                    <img
                        src="${TULIP_IMAGE}"
                        alt="Tulipán amarillo"
                    >

                </div>


                <div class="number">

                    ${index + 1}

                </div>


                <p class="reason-text">

                    ${text}

                </p>

            </div>

        `;


        reasonsContainer.appendChild(
            section
        );

    }
);


/* ===========================================
   AÑADIR FLORES AL RAMO
=========================================== */

function revealFlower(index) {

    if (
        index <= highestFlower
    ) {

        return;

    }


    highestFlower = index;


    const flowers =
        document.querySelectorAll(
            ".bouquet-flower"
        );


    flowers.forEach(
        flower => {

            const flowerIndex =
                Number(
                    flower.dataset.index
                );


            if (
                flowerIndex <=
                highestFlower
            ) {

                flower.classList.add(
                    "show"
                );

            }

        }
    );

}


/* ===========================================
   ANIMACIÓN DEL SCROLL
=========================================== */

const reasonSections =
    document.querySelectorAll(
        ".reason"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );


                        const index =
                            Number(
                                entry.target
                                    .dataset
                                    .index
                            );


                        revealFlower(
                            index
                        );

                    }

                }
            );

        },

        {
            threshold: 0.45
        }

    );


reasonSections.forEach(
    section => {

        observer.observe(
            section
        );

    }
);


/* ===========================================
   FINAL
=========================================== */

const finalContent =
    document.querySelector(
        ".final-content"
    );


const finalObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );

                    }

                }
            );

        },

        {
            threshold: 0.4
        }

    );


finalObserver.observe(
    finalContent
);
