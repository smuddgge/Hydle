const options = document.getElementById("options");

/**
 * A map of the music avaliable.
 * id: [file_name, title, composer, period]
 */
const music = {
    2: ['Beethoven_Symphony_9.mp3', 'Beethoven Symphony 9', 'Beethoven', 'Romantic'], 
    3: ['Mozart_Symphony_25.mp3', 'Mozart Symphony 25', 'Mozart', 'Classical'], 
    4: ['Beethoven_Sonata_29.mp3', 'Beethoven Sonata 29', 'Beethoven', 'Romantic'], 
    5: ['Mahler_Symphony_9.mp3', 'Mahler Symphony 9', 'Mahler', 'Romantic'], 
    6: ['Schubert_Symphony_8.mp3', 'Schubert Symphony 8', 'Schubert', 'Romantic'], 
    7: ['Strauss_DonJuan.mp3', 'Strauss DonJuan', 'Strauss', 'Romantic'], 
    8: ['Tchaikovsky_Symphony_5.mp3', 'Tchaikovsky Symphony 5', 'Tchaikovsky', 'Romantic'], 
    9: ['Berlioz_SymphonieFantastique.mp3', 'Berlioz SymphonieFantastique', 'Berlioz', 'Romantic'], 
    10: ['Tchaikovsky_Symphony_6.mp3', 'Tchaikovsky Symphony 6', 'Tchaikovsky', 'Romantic'], 
    11: ['Dvorak_Symphony_8.mp3', 'Dvorak Symphony 8', 'Dvorak', 'Romantic'], 
    12: ['Corelli_Symphony_64.mp3', 'Corelli Symphony 64', 'Corelli', 'Classical'], 
    13: ['Dvorak_Symphony_9.mp3', 'Dvorak Symphony 9', 'Dvorak', 'Romantic'], 
    14: ['Stamitz_Trio.mp3', 'Stamitz Trio', 'Stamitz', 'Classical'], 
    15: ['Mendelssohn_Symphony_4.mp3', 'Mendelssohn Symphony 4', 'Mendelssohn', 'Romantic'], 
    16: ['Mozart_Conceto_23.mp3', 'Mozart Conceto 23', 'Mozart', 'Classical'], 
    17: ['Haydn_Symphony_104.mp3', 'Haydn Symphony 104', 'Haydn', 'Classical'], 
    18: ['Bruckner_Symphony_4.mp3', 'Bruckner Symphony 4', 'Bruckner', 'Romantic'], 
    19: ['Filtz_Symphony_2.mp3', 'Filtz Symphony 2', 'Filtz', 'Classical'], 
    20: ['Rachmaninov_TheBells.mp3', 'Rachmaninov TheBells', 'Rachmaninov', 'Romantic'], 
    21: ['Liszt_Liebestraum.mp3', 'Liszt Liebestraum', 'Liszt', 'Romantic'], 
    22: ['CPEBach_Symphony_Em.mp3', 'CPEBach Symphony Em', 'CPEBach', 'Classical'], 
    23: ['Kapustin_Concerto_2.mp3', 'Kapustin Concerto 2', 'Kapustin', 'Romantic'], 
    24: ['Mendelssohn_Symphony_3.mp3', 'Mendelssohn Symphony 3', 'Mendelssohn', 'Romantic'], 
    25: ['Beethoven_Symphony_3_v2.mp3', 'Beethoven Symphony 3 mov1', 'Beethoven', 'Romantic'], 
    26: ['Haydn_Symphony_41.mp3', 'Haydn Symphony 41', 'Haydn', 'Classical'], 
    27: ['Elgar_Concerto_Cello.mp3', 'Elgar Concerto Cello', 'Elgar', 'Romantic'], 
    28: ['Stamitz_Symphony_2.mp3', 'Stamitz Symphony 2', 'Stamitz', 'Classical'], 
    29: ['Haydn_Symphony_40.mp3', 'Haydn Symphony 40', 'Haydn', 'Classical'], 
    30: ['Chopin_Prelude_Em.mp3', 'Chopin Prelude Em', 'Chopin', 'Romantic'], 
    31: ['Haydn_Symphony_94.mp3', 'Haydn Symphony 94', 'Haydn', 'Classical'], 
    32: ['Haydn_Symphony_47.mp3', 'Haydn Symphony 47', 'Haydn', 'Classical'], 
    33: ['Rachmaninov_Concerto_2.mp3', 'Rachmaninov Concerto 2', 'Rachmaninov', 'Romantic'], 
    34: ['JCBach_Symphony_4.mp3', 'JCBach Symphony 4', 'JCBach', 'Classical'], 
    35: ['Berlioz_Harold.mp3', 'Berlioz Harold', 'Berlioz', 'Romantic'], 
    36: ['Liszt_Symphony_3.mp3', 'Liszt Symphony 3', 'Liszt', 'Romantic'], 
    37: ['Schubert_Symphony_3.mp3', 'Schubert Symphony 3', 'Schubert', 'Romantic'], 
    38: ['Haydn_Symphony_2.mp3', 'Haydn Symphony 2', 'Haydn', 'Classical'], 
    39: ['Mahler_Symphony_2.mp3', 'Mahler Symphony 2', 'Mahler', 'Romantic'], 
    40: ['Satie_Vexations.mp3', 'Satie Vexations', 'Satie', 'Romantic'], 
    41: ['Smetana_MaVlast.mp3', 'Smetana MaVlast', 'Smetana', 'Romantic'], 
    42: ['Beethoven_Symphony_3.mp3', 'Beethoven Symphony 3 mov2', 'Beethoven', 'Romantic'], 
    43: ['Mahler_Symphony_1.mp3', 'Mahler Symphony 1', 'Mahler', 'Romantic'], 
    44: ['Scriabin_Symphony_2.mp3', 'Scriabin Symphony 2', 'Scriabin', 'Romantic'], 
    45: ['Wieniawski_Concerto_2.mp3', 'Wieniawski Concerto 2', 'Wieniawski', 'Romantic'], 
    46: ['Schubert_Symphony_5.mp3', 'Schubert Symphony 5', 'Schubert', 'Romantic'], 
    47: ['Beethoven_Symphony_6.mp3', 'Beethoven Symphony 6', 'Beethoven', 'Romantic'], 
    48: ['Schumann_Symphony_3.mp3', 'Schumann Symphony 3', 'Schumann', 'Romantic'], 
    49: ['Haydn_Symphony_31.mp3', 'Haydn Symphony 31', 'Haydn', 'Classical'], 
    50: ['Beethoven_Symphony_5.mp3', 'Beethoven Symphony 5', 'Beethoven', 'Romantic'], 
    51: ['Brahms_Symphony_4.mp3', 'Brahms Symphony 4', 'Brahms', 'Romantic'], 
    52: ['Haydn_Symphony_26.mp3', 'Haydn Symphony 26', 'Haydn', 'Classical']
}

const composers = []
const periods = ["Classical", "Romantic"]

var playlist = []

// First run
for (let id in music) {
    let composer = music[id][2]
    if (!composers.includes(composer)) {
        composers.push(composer)
    }
}

for (let index in periods) {
    addOption(periods[index])
}
for (let index in composers) {
    addOption(composers[index])
}
for (let id in music) {
    addOption(music[id].at(1))
}

function addOption(value) {
    var option = document.createElement('option');
    option.value = value;
    options.appendChild(option);
}

/**
 * Used to get the music source location.
 * @param {Integer} id 
 */
function getSource(id) {
    return "./audio/" + music[id][0]
}

function playlistAll() {
    playlist = []
    for (let id in music) {
        playlist.push(id)
    }
}

function playlistALevel() {
    playlist = [
        52, 51, 50, 49, 47, 48, 46, 43, 42, 41, 39, 
        38, 37, 36, 35, 34, 32, 31, 29, 28, 26, 25, 24, 22, 
        21, 19, 18, 17, 16, 15, 13, 14, 13, 12, 11, 10, 9, 
        8, 7, 6, 5, 4, 3, 2
    ]
}