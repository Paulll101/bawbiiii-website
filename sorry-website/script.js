/* =====================================================
   PRELOADER
===================================================== */

const preloader =
    document.getElementById("preloader");

const loaderBar =
    document.getElementById("loaderBar");

const loaderPercent =
    document.getElementById("loaderPercent");


let loading = 0;


const loader =
    setInterval(() => {

        loading += 2;

        loaderBar.style.width =
            loading + "%";

        loaderPercent.textContent =
            loading + "%";


        if (loading >= 100) {

            clearInterval(loader);

            setTimeout(() => {

                preloader.classList.add(
                    "hidden"
                );

            }, 700);

        }

    }, 35);





/* =====================================================
   MUSIC
===================================================== */

const music =
    document.getElementById("music");

const musicToggle =
    document.getElementById("musicToggle");

const musicIcon =
    document.getElementById("musicIcon");

const musicWidget =
    document.querySelector(".music-widget");


let playing = false;


function startMusic() {

    music.volume = .3;

    music.play()
        .then(() => {

            playing = true;

            musicIcon.textContent =
                "❚❚";

            musicWidget.classList.remove(
                "paused"
            );

        })
        .catch(() => {

            console.log(
                "Music needs user interaction."
            );

        });

}


musicToggle.addEventListener(
    "click",
    () => {

        if (music.paused) {

            startMusic();

        } else {

            music.pause();

            playing = false;

            musicIcon.textContent =
                "▶";

            musicWidget.classList.add(
                "paused"
            );

        }

    }
);





/* =====================================================
   ENVELOPE
===================================================== */

const envelopeWrapper =
    document.getElementById(
        "envelopeWrapper"
    );

const openLetter =
    document.getElementById(
        "openLetter"
    );


function openEnvelope() {

    envelopeWrapper.classList.add(
        "open"
    );


    startMusic();


    createHeartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );


    setTimeout(() => {

        switchPage(
            "home",
            "letterPage"
        );

        startLetterTyping();

    }, 1000);

}


envelopeWrapper.addEventListener(
    "click",
    openEnvelope
);


openLetter.addEventListener(
    "click",
    openEnvelope
);





/* =====================================================
   PAGE SWITCHING
===================================================== */

function switchPage(
    oldPage,
    newPage
) {

    const oldElement =
        document.getElementById(
            oldPage
        );

    const newElement =
        document.getElementById(
            newPage
        );


    if (oldElement) {

        oldElement.classList.remove(
            "active"
        );

    }


    if (newElement) {

        newElement.classList.add(
            "active"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}





/* =====================================================
   LETTER
===================================================== */

const letterText =
`Babii,

Sorry po sa naging asal ko kagabi dahil dun nag away tuloy tayo babii sorry po di kita na intindi han agad sorry po kasi ganun nagawa ko sorry den po kung naisip mo di na kita nirerespeto pero babi sobrang laki ng respeto ko sayo babi alam mo yan tibaa super super lakiii babii

sorry kung di kita maintindihan minsan babii pero babiii babii babawi ako sayo pamamagitan ng inaral ko babii love na love po kita sorry babi wmamwamwa sana pag nagising ka love mo paren ako kasi love na love kita babii hehehehe

di ako sleep ngaoyn sorry aaralin ko muna tong ginagawa ko pag nagawa ko ibig sabihin na aral ko hehehe pero pag di moto nababasa ehh baka send ko nalang sayo toh pero tatary ko best ko para magawa toh babiii love na love kita mwamwaaaaaa sorry po ulet babiii ILOVEYOUUUUUU`;


let letterIndex = 0;


function startLetterTyping() {

    const target =
        document.getElementById(
            "letterText"
        );


    target.textContent = "";

    letterIndex = 0;


    function type() {

        if (
            letterIndex <
            letterText.length
        ) {

            target.textContent +=
                letterText[
                    letterIndex
                ];

            letterIndex++;

            setTimeout(
                type,
                14
            );

        }

    }


    type();

}





/* =====================================================
   TO MEMORIES
===================================================== */

document
    .getElementById("toMemories")
    .addEventListener(
        "click",
        () => {

            switchPage(
                "letterPage",
                "memoriesPage"
            );

        }
    );





/* =====================================================
   PHOTO LIGHTBOX
===================================================== */

const photoCards =
    document.querySelectorAll(
        ".photo-card"
    );


const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxCaption =
    document.getElementById(
        "lightboxCaption"
    );


const photos = [

    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg"

];


const captions = [

    "HEHEHEHE LOOK AT US BABII ❤️",

    "CUTE NATIN OH EHEHEHE 😭❤️",

    "MWAMWAMWAMWA BABII 💕",

    "MY FAVORITE BABII 🥺❤️"

];


photoCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        card.dataset.photo
                    );


                lightboxImage.src =
                    photos[index];

                lightboxCaption.textContent =
                    captions[index];


                lightbox.classList.add(
                    "show"
                );

            }
        );

    }
);


document
    .getElementById(
        "lightboxClose"
    )
    .addEventListener(
        "click",
        () => {

            lightbox.classList.remove(
                "show"
            );

        }
    );


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            lightbox.classList.remove(
                "show"
            );

        }

    }
);





/* =====================================================
   RELATIONSHIP TIMER
===================================================== */

const relationshipStart =
    new Date(
        2026,
        1,
        12,
        17,
        0,
        0
    );


function updateTimer() {

    const now =
        new Date();


    let years =
        now.getFullYear()
        -
        relationshipStart.getFullYear();


    let months =
        now.getMonth()
        -
        relationshipStart.getMonth();


    let days =
        now.getDate()
        -
        relationshipStart.getDate();


    let hours =
        now.getHours()
        -
        relationshipStart.getHours();


    let minutes =
        now.getMinutes()
        -
        relationshipStart.getMinutes();


    let seconds =
        now.getSeconds()
        -
        relationshipStart.getSeconds();


    if (seconds < 0) {

        seconds += 60;
        minutes--;

    }


    if (minutes < 0) {

        minutes += 60;
        hours--;

    }


    if (hours < 0) {

        hours += 24;
        days--;

    }


    if (days < 0) {

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );


        days +=
            previousMonth.getDate();

        months--;

    }


    if (months < 0) {

        months += 12;
        years--;

    }


    document.getElementById(
        "years"
    ).textContent =
        years;


    document.getElementById(
        "months"
    ).textContent =
        months;


    document.getElementById(
        "days"
    ).textContent =
        days;


    document.getElementById(
        "hours"
    ).textContent =
        hours;


    document.getElementById(
        "minutes"
    ).textContent =
        minutes;


    document.getElementById(
        "seconds"
    ).textContent =
        seconds;

}


updateTimer();

setInterval(
    updateTimer,
    1000
);





/* =====================================================
   SECRET
===================================================== */

const secretButton =
    document.getElementById(
        "secretButton"
    );

const passwordModal =
    document.getElementById(
        "passwordModal"
    );

const closePassword =
    document.getElementById(
        "closePassword"
    );

const unlockButton =
    document.getElementById(
        "unlockButton"
    );

const passwordInput =
    document.getElementById(
        "passwordInput"
    );

const passwordError =
    document.getElementById(
        "passwordError"
    );


document
    .getElementById("toSecret")
    .addEventListener(
        "click",
        () => {

            switchPage(
                "memoriesPage",
                "secretPage"
            );

        }
    );


secretButton.addEventListener(
    "click",
    () => {

        passwordModal.classList.add(
            "show"
        );

        passwordInput.focus();

    }
);


closePassword.addEventListener(
    "click",
    closePasswordModal
);


function closePasswordModal() {

    passwordModal.classList.remove(
        "show"
    );

    passwordInput.value = "";

    passwordError.textContent = "";

}





/* =====================================================
   PASSWORD
===================================================== */

unlockButton.addEventListener(
    "click",
    checkPassword
);


passwordInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            checkPassword();

        }

    }
);


function checkPassword() {

    const password =
        passwordInput.value.trim();


    if (
        password === "021226"
    ) {

        passwordError.textContent =
            "";


        passwordModal.classList.remove(
            "show"
        );


        createHeartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2
        );


        setTimeout(
            showFinalScreen,
            500
        );

    }

    else {

        passwordError.textContent =
            "HMMMM... WRONG PASSWORD BABII 👀";

        passwordInput.classList.add(
            "shake"
        );


        setTimeout(() => {

            passwordInput.classList.remove(
                "shake"
            );

        }, 500);

    }

}





/* =====================================================
   FINAL MESSAGE
===================================================== */

const finalScreen =
    document.getElementById(
        "finalScreen"
    );


const finalMessage =
    document.getElementById(
        "finalMessage"
    );


const secretText =
`HEHEHEHHEE PAG ALAM MO PASSWORD HEHEHEHEHHEHEHE ILOVEYOUBGABII SUPERDUPERRR BABII MWAMWAA DAHIL ALAM MO PASSWORD BIGYAN KITA 2 REQ AND HAYAAN KIATA LIRBRE MOKO 1 TIME HHEHE ILOVEYOUU`;


function showFinalScreen() {

    finalScreen.classList.add(
        "show"
    );


    typeFinalMessage();

}


function typeFinalMessage() {

    finalMessage.textContent = "";


    let index = 0;


    function type() {

        if (
            index <
            secretText.length
        ) {

            finalMessage.textContent +=
                secretText[index];

            index++;

            setTimeout(
                type,
                28
            );

        }

    }


    type();

}





/* =====================================================
   CLOSE FINAL
===================================================== */

document
    .getElementById(
        "closeFinal"
    )
    .addEventListener(
        "click",
        () => {

            finalScreen.classList.remove(
                "show"
            );

        }
    );





/* =====================================================
   HEART CURSOR
===================================================== */

let lastCursor =
    0;


document.addEventListener(
    "mousemove",
    event => {

        const now =
            Date.now();


        if (
            now - lastCursor < 90
        ) {

            return;

        }


        lastCursor = now;


        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "cursor-particle";


        particle.textContent =
            Math.random() > .5
                ? "♥"
                : "✦";


        particle.style.left =
            event.clientX + "px";


        particle.style.top =
            event.clientY + "px";


        document.body.appendChild(
            particle
        );


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: .8
                },

                {
                    transform:
                        "translate(-50%,-100px) scale(.2)",
                    opacity: 0
                }

            ],

            {

                duration: 900,

                easing: "ease-out"

            }

        );


        setTimeout(
            () => particle.remove(),
            900
        );

    }
);





/* =====================================================
   HEART BURST
===================================================== */

function createHeartBurst(
    x,
    y
) {

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "cursor-particle";


        heart.textContent =
            "♥";


        heart.style.left =
            x + "px";


        heart.style.top =
            y + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            50 +
            Math.random() *
            100;


        heart.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            ${Math.cos(angle) * distance}px,
                            ${Math.sin(angle) * distance}px
                        )
                        scale(0)`,
                    opacity: 0
                }

            ],

            {

                duration: 900,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"

            }

        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            1000
        );

    }

}





/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            passwordModal.classList.remove(
                "show"
            );

            lightbox.classList.remove(
                "show"
            );

            finalScreen.classList.remove(
                "show"
            );

        }

    }
);