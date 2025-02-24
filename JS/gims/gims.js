(async function gimsmusique() {
    var musicjson = await fetch("../../json/gims/gims.json");
    var recupjson = await musicjson.json();

    // console.log(recupjson);
    $(document).ready(function () {
        var i;

        for (i = 0; i < recupjson.length; i++) {
            var gims = recupjson[i];
            var list = $("<button class='btn border border-2 border-light btn-dark my-1 text-light align-items-center flex-column flex-md-row justify-content-center gap-3 partieMusic w-100 py-3'><i class='bi bi-music-note-beamed'></i></button>");
            $(".list__music").append(list);
            $(".partieMusic").append(gims.nom);
        }
    })

})()