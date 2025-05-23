async function gamemusique(url) {
    const musicjson = await fetch(url);
    const musictout = await musicjson.json();
    let changeMusic = 0;

    const musicAjout = document.querySelector("#musicAjout");

    for (let i = 0; i < musictout.length; i++) {
        const music = musictout[i];
        // musicAjout.innerHTML += `<a href="${music.src}" class="btn btn-light">${music.nom}</a>`
        const link = document.createElement('a');
        const span = document.createElement('span');
        link.classList = 'btn btn-light d-flex align-items-center gap-3 py-0 ps-0 rounded-3';

        // let j = Math.floor(Math.random() * (i + 1));

        const nom = music.nom

        link.href = music.src;
        // link.classList = "w-100"
        // link.innerHTML = '<img src="../image/image2.png" class="w-25" alt="ecouter"> ';
        link.classList.add('colorImage')
        span.innerHTML = `${nom.slice(0, 50)}...`;
        span.classList = "text-light p-3"
        musicAjout.appendChild(link);
        link.appendChild(span);

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const aclick = e.currentTarget;
            audio.src = aclick.href;
            $(("#play-button")).addClass('play');
            $("#pause-button").addClass("active");
            $("#stop-button").addClass("active");
            $(("#play-button2")).addClass('play');
            $("#pause-button2").addClass("active");
            $("#stop-button2").addClass("active");
            audio.play();
            changeMusic = music.id;
            // console.log(music.id);
            
            localStorage.setItem('change', changeMusic);
            console.log(aclick.href);
            $("#nom").text(link.text);
            localStorage.setItem('musique', JSON.stringify(audio.src));
            localStorage.setItem('musiquenom', JSON.stringify(link.text));
        })
    }

    $("#acceuil").on({
        click: function () {
            $("#musicplay").addClass("active");
            $("#playlist").removeClass("active");
        }
    });

    $("#playlistlink").on({
        click: function () {
            $("#playlist").addClass("active");
            $("#musicplay").removeClass("active");
        }
    });


    $("#precedent").on({
        click: function () {
            changeMusic--;
            // changeMusic = music.id;
            localStorage.setItem('change', changeMusic);
console.log(musicAjout.length);


            audio.src = musictout[changeMusic].src;
            let preced = audio.src;
            localStorage.setItem('musique', JSON.stringify(preced));

            $("#nom").text(musictout[changeMusic].nom);
            $("#nom2").text(musictout[changeMusic].nom);
            nomChange = musictout[changeMusic].nom;
            localStorage.setItem('musiquenom', JSON.stringify(nomChange));

            // window.location.reload();
            $("#play-button").addClass('play');
            $("#pause-button").removeClass('play');
            $("#play-button").removeClass("active");
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
    $("#suivant").on({
        click: function () {
            changeMusic++;
            // changeMusic = music.id;
console.log(musicAjout.length);

            localStorage.setItem('change', changeMusic);
            audio.src = musictout[changeMusic].src;
            suiv = audio.src;
            
            localStorage.setItem('musique', JSON.stringify(suiv));

            $("#nom").text(musictout[changeMusic].nom);
            $("#nom2").text(musictout[changeMusic].nom);
            nomChange = musictout[changeMusic].nom;
            localStorage.setItem('musiquenom', JSON.stringify(nomChange));
            // window.location.reload();
            $("#play-button").addClass('play');
            $("#pause-button").removeClass('play');
            $("#play-button").removeClass("active");
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

    $("#precedent2").on({
        click: function () {
            changeMusic--;
            // changeMusic = music.id;
console.log(musicAjout.length);

            localStorage.setItem('change', changeMusic);
            audio.src = musictout[changeMusic].src;
            let preced = audio.src;
            localStorage.setItem('musique', JSON.stringify(preced));

            $("#nom").text(musictout[changeMusic].nom);
            $("#nom2").text(musictout[changeMusic].nom);
            nomChange = musictout[changeMusic].nom;
            localStorage.setItem('musiquenom', JSON.stringify(nomChange));

            // window.location.reload();
            $("#play-button").addClass('play');
            $("#pause-button").removeClass('play');
            $("#play-button").removeClass("active");
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
    $("#suivant2").on({
        click: function () {
            changeMusic++;
            localStorage.setItem('change', changeMusic);
            // changeMusic = music.id;
console.log(musicAjout.length);

            audio.src = musictout[changeMusic].src;
            localStorage.setItem('change', changeMusic);
            suiv = audio.src;
            localStorage.setItem('musique', JSON.stringify(suiv));

            $("#nom").text(musictout[changeMusic].nom);
            $("#nom2").text(musictout[changeMusic].nom);
            nomChange = musictout[changeMusic].nom;
            localStorage.setItem('musiquenom', JSON.stringify(nomChange));
            // window.location.reload();
            $("#play-button").addClass('play');
            $("#pause-button").removeClass('play');
            $("#play-button").removeClass("active");
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

    const loc = JSON.parse(localStorage.getItem('musique'));
    const loctext = JSON.parse(localStorage.getItem('musiquenom'));
    if (loc) {
        audio.src = loc;
        $("#nom").text(loctext);
        $("#nom2").text(loctext);
    }
}