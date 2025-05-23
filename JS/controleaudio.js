// Appelle des boutton
const audio = document.querySelector("#music");
const volume = document.querySelector("#volume");
const volumeDisplay = document.querySelector("#volume-value");
const progressBar = document.querySelector("#progressBar");

const retour = document.querySelector("#retour");
const commence2 = document.querySelector("#commence2");
const ouvre = document.querySelector("#ouvre");
const controlComplet = document.querySelector("#free");


const progressBar2 = document.querySelector("#progressBar2");
const elapsed = document.querySelector("#sec");
const elapsed2 = document.querySelector("#elapsed");
const track__time = document.querySelector("#track__time");
// let changeMusic = 0;

// Dubut du script en jquery
$(document).ready(function () {
    function config() {
        // configuration du button play
        $("#play-button").on({
            click: function () {
                $(this).addClass('play');
                $("#pause-button").removeClass('play');
                $(this).removeClass("active");
                $("#pause-button").addClass("active");
                $("#stop-button").addClass("active");

                $("#play-button2").addClass('play');
                $("#pause-button2").removeClass('play');
                $("#play-button2").removeClass("active");
                $("#pause-button2").addClass("active");
                $("#stop-button2").addClass("active");
                // commence l'audio
                audio.play();
            }
        })

        // configuration du button play2
        $("#play-button2").on({
            click: function () {
                $(this).addClass('play');
                $("#pause-button").removeClass('play');
                $(this).removeClass("active");
                $("#pause-button").addClass("active");
                $("#stop-button").addClass("active");

                $("#play-button").addClass('play');
                $("#pause-button2").removeClass('play');
                $("#play-button").removeClass("active");
                $("#pause-button2").addClass("active");
                $("#stop-button2").addClass("active");
                // commence l'audio
                audio.play();
            }
        })
        // configuration du button pause
        $("#pause-button").on({
            click: function () {
                $(this).addClass('play');
                $("#play-button").removeClass('play');
                $("#play-button").addClass("active");
                $(this).removeClass("active");

                $("#pause-button2").addClass('play');
                $("#play-button2").removeClass('play');
                $("#play-button2").addClass("active");
                $("#pause-button2").removeClass("active");
                // met  sur pause
                audio.pause();
            }
        })
        // configuration du button pause2
        $("#pause-button2").on({
            click: function () {
                $(this).addClass('play');
                $("#play-button").removeClass('play');
                $("#play-button").addClass("active");
                $(this).removeClass("active");

                $("#pause-button").addClass('play');
                $("#play-button2").removeClass('play');
                $("#play-button2").addClass("active");
                $("#pause-button").removeClass("active");
                // met  sur pause
                audio.pause();
            }
        })
        // configuration du button stop
        $("#stop-button").on({
            click: function () {
                $(this).removeClass('active');
                $("#play-button").removeClass('play');
                $("#play-button").removeClass("active");
                $("#pause-button").removeClass('play');
                $("#pause-button").removeClass("active");

                $("#stop-button2").removeClass('active');
                $("#play-button2").removeClass('play');
                $("#play-button2").removeClass("active");
                $("#pause-button2").removeClass('play');
                $("#pause-button2").removeClass("active");
                // met sur pause et remet a 0 l'audio avec audio.curentTime = 0
                audio.pause();
                audio.currentTime = 0;
            }
        })
        // configuration du button stop2
        $("#stop-button2").on({
            click: function () {
                $(this).removeClass('active');
                $("#play-button").removeClass('play');
                $("#play-button").removeClass("active");
                $("#pause-button").removeClass('play');
                $("#pause-button").removeClass("active");

                $("#stop-button").removeClass('active');
                $("#play-button2").removeClass('play');
                $("#play-button2").removeClass("active");
                $("#pause-button2").removeClass('play');
                $("#pause-button2").removeClass("active");
                // met sur pause et remet a 0 l'audio avec audio.curentTime = 0
                audio.pause();
                audio.currentTime = 0;
            }
        })

        $("#left").on({
            click: function () {
                audio.currentTime -= 10;
            }
        })
        $("#right").on({
            click: function () {
                audio.currentTime += 10;
            }
        })
    }
    config();

    // configuration du volume avec l'utilisation d'un input de type range
    volume.addEventListener('input', function () {
        let volumeValue = parseFloat(volume.value); // Convertir en nombre
        audio.volume = volumeValue;
        volumeDisplay.textContent = volumeValue.toFixed(1) + '%';
    })

    // audio.addEventListener('timeupdate', function () {
    //     let progress = (audio.currentTime / audio.duration) * 100; // Calcul de la progression en pourcentage
    //     progressBar.value = progress;

    //     let elapsedSeconds = Math.floor(audio.currentTime); // Temps écoulé en secondes
    //     let totalSeconds = Math.floor(audio.duration) || 0; // Durée totale (évite NaN)
    //     let remainingSeconds = totalSeconds - elapsedSeconds; // Temps restant

    //     elapsed.textContent = elapsedSeconds + "s";
    //     if (elapsed === 60) {
    //         elapsed2.textContent += 1

    //     }
    //     track__time.textContent = remainingSeconds + "s"; // Affiche le temps restant
    // });

    audio.addEventListener('timeupdate', function () {
        let progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        progressBar2.value = progress;

        let elapsedSeconds = Math.floor(audio.currentTime); // Secondes écoulées
        let totalSeconds = Math.floor(audio.duration) || 0; // Durée totale
        let remainingSeconds = totalSeconds - elapsedSeconds; // Secondes restantes

        // Conversion en minutes et secondes
        let elapsedMinutes = Math.floor(elapsedSeconds / 60); // Minutes écoulées
        let elapsedSec = elapsedSeconds % 60; // Secondes restantes dans la minute

        let minute = Math.floor(remainingSeconds / 60); // Minutes restantes
        let seconde = remainingSeconds % 60; // Secondes restantes

        // Affichage formaté
        elapsed.textContent = `${elapsedMinutes}:${elapsedSec < 10 ? '0' : ''}${elapsedSec}`;
        track__time.textContent = `${minute}:${seconde < 10 ? '0' : ''}${seconde}`;
        // Gérer le changement de position de lecture en déplaçant la barre de progression
        progressBar.addEventListener('input', function () {
            let progressValue = parseFloat(progressBar.value); // Convertir en nombre
            audio.currentTime = (progressValue / 100) * audio.duration; // Mettre à jour le temps de lecture
        });
        progressBar2.addEventListener('input', function () {
            let progressValue2 = parseFloat(progressBar2.value); // Convertir en nombre
            audio.currentTime = (progressValue2 / 100) * audio.duration; // Mettre à jour le temps de lecture
        });
    });

    ouvre.addEventListener('click', () => {
        controlComplet.classList.add("active");
    })
    retour.addEventListener('click', ()=>{
        controlComplet.classList.remove("active");
    })
})


