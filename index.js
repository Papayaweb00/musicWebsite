const fs = require('fs');
const path = require('path');

// Configuration
const MUSIC_ROOT = './Musiques'; // Chemin relatif vers vos musiques
const OUTPUT_FILE = 'playlist.json';

// Fonction principale
async function generateJSON() {
    try {
        console.log('⌛ Analyse des fichiers MP3...');
        
        const musicData = [];
        let id = 1;

        // Parcours récursif du dossier
        const walkDir = (dir) => {
            const files = fs.readdirSync(dir);
            
            files.forEach(file => {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    walkDir(fullPath); // On explore le sous-dossier
                } 
                else if (file.toLowerCase().endsWith('.mp3')) {
                    // Extraction des informations
                    const relativePath = path.relative(MUSIC_ROOT, fullPath);
                    const album = path.basename(path.dirname(fullPath));
                    const artist = path.basename(path.dirname(path.dirname(fullPath)));

                    musicData.push({
                        id: id++,
                        src: relativePath.replace(/\\/g, '/'), // Compatibilité Windows
                        nom: path.basename(file, '.mp3'),
                        partie: album,
                        artiste: artist
                    });
                }
            });
        };

        walkDir(MUSIC_ROOT);

        // Écriture du fichier JSON
        fs.writeFileSync(
            OUTPUT_FILE, 
            JSON.stringify(musicData, null, 4), 
            'utf-8'
        );

        console.log(`✅ Fichier ${OUTPUT_FILE} généré avec ${musicData.length} morceaux !`);
        console.log(`📁 Emplacement : ${path.resolve(OUTPUT_FILE)}`);

    } catch (error) {
        console.error('❌ Erreur :', error);
    }
}

// Lancement
generateJSON();