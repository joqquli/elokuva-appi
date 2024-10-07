# ElokuvaÄppi

## Projektin kuvaus

ElokuvaÄppi on verkkosovellus, joka hakee elokuvatietoja **The Movie Database (TMDb)** -palvelusta. Sovelluksen avulla käyttäjä voi:
- Selailla suosittuja elokuvia
- Etsiä elokuvia hakutoiminnon avulla
- Lisätä elokuvia suosikkilistalle
- Merkitä elokuvia katsotuiksi
- Tallentaa suosikki- ja katsotut elokuvat LocalStorageen, jolloin ne säilyvät selaimen sulkemisen jälkeen
- Poistaa elokuvia suosikki- ja katsotuista listoista

### Sovelluksen ulkoasu
Sovelluksen ulkoasu on suunniteltu hempeillä väreillä (vaaleanpunainen ja keltainen), ja siinä on pyöristetyt muodot nappien ja elokuvakorttien ympärillä.

## Teknologiat

Sovellus käyttää seuraavia teknologioita ja työkaluja:
- **HTML** sivun rakenteen luomiseen
- **CSS** tyylitiedostojen luomiseen, jossa on hempeä vaaleanpunainen ja keltainen väriteema
- **JavaScript** toiminnallisuuden, API-kutsujen ja LocalStorageen tallentamisen hallintaan
- **The Movie Database (TMDb) API** elokuvien tiedon hakemiseen

## Kansion rakenne

elokuva-appi/ │ ├── index.html # Sovelluksen HTML-tiedosto ├── css/ │ └── styles.css # CSS-tyylitiedosto, joka määrittää ulkoasun ├── js/ │ ├── app.js # JavaScript, joka hallitsee sovelluslogiikkaa ja näkymien hallintaa │ └── api.js # API-kutsut The Movie Databaseen (TMDb) └── README.md # Tämä tiedosto, joka kuvaa projektin sisällön ja rakenteen


## Käyttöohjeet

1. **API-avaimen hankkiminen**:
   - Hanki **The Movie Database (TMDb)** API-avain rekisteröitymällä osoitteessa [TMDb](https://www.themoviedb.org/documentation/api).
   - Lisää avain tiedostoon `api.js` muuttujan `apiKey` kohdalle:
     ```javascript
     const apiKey = 'YOUR_API_KEY';
     ```

2. **Projektin käynnistäminen**:
   - Lataa projekti ja avaa `index.html` selaimessasi. Tämä käynnistää sovelluksen.
   
3. **Elokuvien selaaminen ja haku**:
   - Kotisivulla voit selailla suosittuja elokuvia ja lisätä niitä suosikkilistalle tai merkitä katsotuiksi.
   - Voit etsiä elokuvia hakupalkista kirjoittamalla elokuvan nimen ja painamalla "Search".

4. **Suosikit ja katsotut elokuvat**:
   - Suosikit- ja Katsotut-sivulla voit tarkastella tallentamiasi elokuvia.
   - Voit poistaa elokuvia painamalla "Poista" suosikki- tai katsotuista elokuvista.

5. **Tallentaminen LocalStorageen**:
   - Suosikki- ja katsotut elokuvat tallennetaan selaimen LocalStorageen. Tämä tarkoittaa, että tiedot säilyvät selaimen sulkemisen jälkeen.

## Mukauttaminen

- **Värit ja ulkoasu**: Voit muokata sovelluksen ulkoasua `css/styles.css`-tiedostossa. Väriteema käyttää vaaleanpunaista ja keltaista sävyä sekä pyöristettyjä kulmia.
- **Napin tekstit**: Nappien tekstit, kuten "Lisää suosikkeihin" tai "Merkitse katsotuksi", voidaan muuttaa `app.js`-tiedostossa kohdassa, jossa napit määritellään.

## Tulevaisuuden kehitysideoita

- **Kirjautuminen**: Voit lisätä käyttäjän kirjautumistoiminnon, jotta suosikki- ja katsotut elokuvat tallennetaan pilveen käyttäjäkohtaisesti.
- **Elokuvatrailerit**: Voit laajentaa sovellusta näyttämään elokuvien trailereita lisäämällä trailerivideoiden haun TMDb API:sta.
- **Käyttäjäarvostelut**: Voit lisätä mahdollisuuden lukea ja kirjoittaa arvosteluja elokuvista.

## Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä. Voit vapaasti käyttää ja muokata sitä omiin projekteihisi.

~ Johanna Herranen, lokakuussa 2024
