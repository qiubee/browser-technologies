# Testen van de OBA website: Datahulpje

De volgende website is getest: [Het Datahulpje](https://qiubee.github.io/datacompanion). Deze website is gemaakt voor de OBA.

[**Github repository van de website >**](https://github.com/qiubee/datacompanion)

## Soorten tests

1. [**Features**](#features)
2. [**Devices**](#devices)
3. [**Browsers**](#browsers)
4. [**Screenreader**](#screenreader)

## Features

De website is getest op de volgende features:

1. [Afbeeldingen uitzetten](#afbeeldingen-uitzetten)
2. [Custom fonts uitzetten](#custom-fonts-uitzetten)
3. [Kleur uitzetten en kleurenblindheid instellen](#kleur-uitzetten-en-kleurenblindheid-instellen)
4. [Muis/Trackpad werkt niet](#muis-rtackpad-werkt-niet)
5. [Slecht internet](#breedband-internet-uitzetten)
6. [Javascript uitzetten](#javascript-uitzetten)
7. [Cookies niet accepteren](#cookies-niet-accepteren)
8. [localstorage doet het niet](#localstorage-doet-het-niet)

Dit is getest op Linux (Ubuntu) in Firefox 74

### Afbeeldingen uitzetten

Als het laden van afbeeldingen uitstaat, wordt de alt-tekst getoond verderin plaats van afbeeldingen. Er zijn verder geen problemen gezien.

### Custom fonts uitzetten

Als de custom fonts uitstaan, laad het een systeemfont. Er zijn op de beginpagina geen problemen verder.

Op de overzichtspagina laad het ook het systeemfont. Het enige dat "misgaat" is dat de titel van het informatieoverzicht in capitalen staat in plaats van kleine letters en aan het begin een hoofdletter. Dit kan opgelost worden door in CSS in plaats van `text-transform: uppercase` er `text-transform: capitalize` van te maken, maar het kan ook worden verwijdert.

Ook kan in CSS de *fallback*-fonts en het type font (sans-serif, serif, etc.) nog worden meegegeven.

### Kleur uitzetten en kleurenblindheid instellen

Om het kleurcontrast te controleren, heb ik de Accessability Inspector gebruikt, die in de Developer Tools is te vinden. De WCAG AAA standaarden worden gebruikt voor het controleren van de toegankelijkheid van de tekst. Dit zijn de eisen om WCAG niveau AAA te behalen:

> WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text. (Bron: [WebAIM](https://webaim.org/resources/contrastchecker/))

#### Beginpagina

Op de beginpagina heeft de heading een contrast van 6.47:1 en 6.82:1. Van de labels heeft de tekst *Vivi* een contrast van 9.3:1 en de tekst *Momo* een contrast van 10.07:1. Deze scores voldoen aan de AAA standaarden van WCAG.

**Resultaten:**

* Heading: 6.47:1 & 6.82:1
* Tekst keuze 1 (Vivi): 9.3:1
* Tekst keuze 2 (Momo): 10.07:1

#### Overzichtspagina

Op de overzichts hebben de headings van de boekensectie een contrast van 21:1. Dit is de hoogste score die je kunt halen. Voor het informatieoverzicht heeft de heading een contrast van 9.30:1 en hebben alle items in de lijst een contrast van 17.19:1. Deze scores voldoen aan de AAA standaarden van WCAG.

**Resultaten:**

* Headings (boekensectie): 21:1
* Heading (informatieoverzicht): 9.30:1
* Tekst in lijst (informatieoverzicht): 17.19:1.

### Muis/Trackpad werkt niet

#### Problemen

Als je tabt over de input-elementen kun je ze selecteren, maar als je op **Enter** drukt gaat het gelijk naar de overzichtspagina zonder dat je nog terug kunt om een ander kan kiezen.

#### Oplossingen

Een knop toevoegen waarmee je je keuze bevestigt.

### Slecht internet

De snelheid waarop getest is, is **Regular 2G**.

#### Beginpagina

De pagina is snel geladen en is klaar in 340 miliseconden. Er zijn verder geen problemen gezien.

**Resultaten:**

* HTML content geladen: 105 miliseconden.
* Laden: 279 miliseconden.
* Klaar: 340 miliseconden.

##### Problemen

Geen problemen.

#### Overzichtspagina

De pagina heeft de HTML redelijk snel geladen en is klaar in 762 miliseconden, maar toen het de afbeeldingen in ging laden steeg de laadtijd flink: naar boven de 10 seconden. Als er een bestand nog niet geladen is verschijnt er een alt-tekst, maar dat gebeurt alleen met JavaScript aan.

**Resultaten:**

* HTML content geladen: 762 miliseconden.
* Laden: 12.28 seconden.
* Klaar: 12.28 seconden.

##### Problemen

1. Het laden van de afbeeldingen duurde lang, meer dan 10 seconden.
2. Alt-tekst verschijnt alleen als JavaScript aan staat.

##### Oplossingen

**1:** De grootte van de afbeeldingen comprimeren en de bestandsgrootte kleiner maken.
**2:** De alt-tekst genereren op de server en dan pas de HTML versturen in plaats van het in het JavaScript bestand te doen.

### Javascript uitzetten

#### Problemen

1. Als JavaScript uit staat kun je niet verder naar de overzichtspagina en blijf je hangen op de pagina waar je een datahulpje kan kiezen.

#### Oplossingen

**1:** In plaats van het kiezen door JavaScript te laten doen, een knop maken:

```html
<input type="submit" value="Keuze bevestigen">
```

Daar kun je op drukken om de keuze te bevestigen. De data wordt dan naar de server verstuurt en de server geeft de de volgende pagina terug.

### Cookies niet accepteren

#### Problemen

1. Als ik geen enkele cookie accepteer kan je niet naar de overzichtspagina gaan, omdat het in de Console de volgende error geeft: `SecurityError: The operation is insecure.`. De gebruiker kan dan niet verder.

#### Oplossingen

**1:** In plaats van de data lokaal op te slaan het naar de server sturen en opslaan in een database.

### localstorage doet het niet

#### Problemen

1. Als localstorage het niet dan kan het niet naar de overzichtspagina gaan, omdat het in de Console de volgende error geeft: `TypeError: storageType is null`. De gebruiker kan dan niet verder.

#### Oplossingen

**1:** In plaats van de data lokaal op te slaan het naar de server sturen en opslaan in een database.

## Devices

De website is getest op de volgende devices met de browsers:

1. [HTC Nexus 9](#htc-nexus-9)
2. [iPod Touch 4](#ipod-touch-4)
3. [Nokia Lumia 620](#nokia-lumia-620)

### HTC Nexus 9

* Besturingsysteem: **Android 7.11**
* Browser: **Chrome 80**

`Mozilla/5.0 (Linux; Android 7.1.1; Nexus 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36`

#### Problemen

##### CSS

1. De position fixed werkt niet. Het overzicht blijft niet plakken aan de rechterkant van het scherm.

##### Javascript

Geen problemen.

#### Oplossingen

##### CSS

**1.** Op [Stackoverflow](https://stackoverflow.com/questions/19254146/position-fixed-not-working-in-mobile-browser) wordt een oplossing aangedragen:

```css

-webkit-backface-visibility: hidden;

```

Door **-webkit-backface-visibility** toe te voegen en op  *hidden* te zetten, blijft het element staan op de plek waarop je het zet.

### iPod Touch 4

* Besturingsysteem: **iOS 6.1.3**
* Browser: **Safari**

`Mozilla/5.0 (iPod; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25`

#### Problemen

##### CSS

1. Laad geen (custom) fonts. *@font-face* werkt niet (komt mogelijk doordat ***CSS variabelen*** niet worden ondersteund of dat ***font-format*** .otf niet wordt ondersteund). Er wordt Times New Roman getoond.
2. Heeft niet de juiste layout (***flexbox*** en/of ***vw*** & ***vh*** worden niet ondersteund).
3. Kleuren worden niet weergegeven (komt doordat ***CSS variabelen*** niet wordt ondersteund)
4. De tekst staat bovenop elkaar (komt doordat ***transform*** niet wordt ondersteund)
5. Geen transities

##### JavaScript

1. Je kunt niet naar de overzichtspagina, omdat de versie van JavaScript niet wordt ondersteund.

#### Oplossingen

##### CSS

**1- 3:** CSS methodes die niet worden ondersteund veranderen in styling die voor elke browser werken. Dit kan **handmatig** door andere manieren te vinden voor bijvoorbeeld *flexbox* en *CCS variabelen* of door een script (bijvoorbeeld **Webpack**) te gebruiken die op de server de CSS omzet naar code die voor elke browser te begrijpen is.

**4:** In plaats van *transform*, **margin** of **padding** gebruiken om positie te veranderen.

**5:** In plaats van *transform* in *transitions* te zetten, de **margin en padding in transition zetten**.

##### JavaScript

**1:** JavaScript die met versie ECMAScript 2015 (ES 6) is geschreven omzetten naar ECMAScript 5. Dit kan **handmatig** door JSHint te gebruiken en alle gemarkeerde code om te zetten naar code voor ES 6. Het kan ook automatisch door een script (bijvoorbeeld **Webpack**) te gebruiken die op de server de JavaScript omzet naar code die voor meerdere browsers te lezen is.

### Nokia Lumia 620

* Besturingsysteem: **Windows Phone 8.1**
* Browser: **Mobile Internet Explorer 11.0**

`Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 620) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537`

#### Problemen

##### CSS

1. Laad geen (custom) fonts. *@font-face* werkt niet (komt mogelijk doordat ***CSS variabelen*** niet worden ondersteund of dat ***font-format*** .otf niet wordt ondersteund).
2. Heeft niet de juiste layout (***flexbox*** en/of ***vw*** & ***vh*** worden niet ondersteund).
3. Kleuren worden niet weergegeven, behalve van de titel. De titel heeft wel de juiste kleur, maar andere kleuren worden niet weergegeven (komt mogelijk doordat ***CSS variabelen*** niet worden ondersteund).

##### Javascript

1. Je kunt niet naar de overzichtspagina, omdat de versie van JavaScript niet wordt ondersteund.

#### Oplossingen

##### CSS

**1- 3:** CSS methodes die niet worden ondersteund veranderen in styling die voor elke browser werken. Dit kan **handmatig** door andere manieren te vinden voor bijvoorbeeld *flexbox* en *CCS variabelen* of door een script (bijvoorbeeld **Webpack**) te gebruiken die op de server de CSS omzet naar code die voor elke browser te begrijpen is.

##### JavaScript

**1:** JavaScript die met versie ECMAScript 2015 (ES 6) is geschreven omzetten naar ECMAScript 5. Dit kan **handmatig** door JSHint te gebruiken en alle gemarkeerde code om te zetten naar code voor ES 6. Het kan ook automatisch door een script (bijvoorbeeld **Webpack**) te gebruiken die op de server de JavaScript omzet naar code die voor meerdere browsers te lezen is.

## Browsers

De website is getest in de volgende browsers:

1. [Firefox](#firefox)
2. [Chrome](#chrome)
3. [Brave](#brave)
4. [Internet Explorer 10](#internet-explorer-10)
5. [Internet Explorer 8](#internet-explorer-8)

### Firefox

Versie: **73.0.1**

#### Problemen

Geen problemen.

### Chrome

Versie: **80.0.3987.132**

#### Problemen

Geen problemen.

### Brave

Versie: **1.4.96**

#### Problemen

Geen problemen.

### Internet Explorer 10

#### Problemen

##### CSS

1. Laad geen (custom) fonts. *@font-face* werkt niet (komt mogelijk doordat ***CSS variabelen*** niet worden ondersteund of dat ***font-format*** .otf niet wordt ondersteund).
2. Kleuren worden niet weergegeven, behalve van de titel. De titel heeft wel de juiste kleur, maar andere kleuren worden niet weergegeven (komt doordat ***CSS variabelen*** niet worden ondersteund).

##### Javascript

1. Je kunt niet naar de overzichtspagina, omdat de versie van JavaScript niet wordt ondersteund.

#### Oplossingen

##### CSS

**1- 2:** In plaats van CSS variabelen te gebruiken, kun je de code in de variabelen simpelweg in de property van het element zetten.

##### JavaScript

**1:** JavaScript die met versie ECMAScript 2015 (ES 6) is geschreven omzetten naar ECMAScript 5. Dit kan **handmatig** door JSHint te gebruiken en alle gemarkeerde code om te zetten naar code voor ES 6. Het kan ook automatisch door een script (bijvoorbeeld **Webpack**) te gebruiken die op de server de JavaScript omzet naar code die voor meerdere browsers te lezen is.

### Internet Explorer 8

#### Problemen

##### CSS

1. Laad geen (custom) fonts. *@font-face* werkt niet (dit komt doordat ***CSS variabelen*** niet worden ondersteund of dat ***font-format*** .otf niet wordt ondersteund).
2. Kleuren worden niet weergegeven (dit komt doordat ***CSS variabelen*** niet worden ondersteund).
3. De titel laat niet een kleur zien (dit komt doordat *rgba* niet wordt ondersteund).
4. De layout klopt niet (dit komt doordat ***flexbox*** en ***vw*** & ***vh*** niet worden ondersteund).
5. Geen transities (dit komt doordat *transition* niet worden ondersteund).
6. De *radio buttons* verdwijnen niet.

##### Javascript

1. Je kunt niet naar de overzichtspagina, omdat de versie van JavaScript niet wordt ondersteund.
2. Er kan geen data lokaal worden opgeslagen, omdat *localstorage* & *sessionstorage* niet zijn geimplementeerd.

#### Oplossingen

##### CSS

**1- 2:** In plaats van CSS variabelen te gebruiken, kun je de code in de variabelen simpelweg in de property van het element zetten.

**3:** In plaats van *rgba* te gebruiken, gebruik maken van **rgb & opacity**.

**4:** **Handmatig** andere manieren vinden om hetzelfde effect te krijgen als *flexbox* of door een script (bijvoorbeeld **Webpack**) te gebruiken die op de server de CSS omzet naar code die voor elke browser te begrijpen is.

**5:** Ervoor zorgen dat de gebruiker nog steeds feedback krijgt door gebruik te maken van CSS pseudo-classes, zoals *:hover*, *:focus* of *:checked*.

**6:** Een oplossing is om **opacity: 0** te gebruiken.

##### JavaScript

**1:** JavaScript die met versie ECMAScript 2015 (ES 6) is geschreven omzetten naar ECMAScript 5. Dit kan **handmatig** door JSHint te gebruiken en alle gemarkeerde code om te zetten naar code voor ES 6. Het kan ook automatisch door een script (bijvoorbeeld **Webpack**) te gebruiken die op de server de JavaScript omzet naar code die voor meerdere browsers te lezen is.

**2:** Inplaats van data op te slaan in de browser, het versturen naar de server om het in een database op te slaan.

## Screenreader

De website is getest met een screenreader. Dit is gedaan op Windows 10 door in de instellingen de *Verteller* aan te zetten.

### Problemen

1. Tijdens het selecteren van een datahulpje kun je niet bevestigen dat je er een hebt gekozen, waardoor je niet verder kunt.

2. De alt-tekst van de afbeeldingen van de kaften van de boeken vertellen niet over hoe de kaft eruit ziet. Dit kan nog beter worden beschreven.

3. Ook zitten er in sommige alt-teksten van de afbeeldingen van boeken het woord *undefined* in waar eigenlijk de naam van de auteur of uitgeverij te horen moet. Ook kan de interpunctie van de alt-tekst beter, bijvoorbeeld door tussen de titel van het boek en de auteur/uitgeverij een komma te zetten.

### Oplossingen

1. Een knop toevoegen die *Bevestigen* heet, zodat de keuze kan worden bevestigt en verstuurt kan worden naar de server.

2. De boeken worden opgehaald vanuit een API, waardoor het moeilijk is om goed elke kaft te beschrijven. Een oplossing zou kunnen zijn om elke kaft individueel te beschrijven of het een programma te laten doen.

3. Tijdens het genereren van de alt-tekst het woord *undefined* te vervangen voor de naam van de auteur of uitgeverij, maar als die er niet is het woord *onbekend* neer te zetten. Ook moet er een komma tussen de titel van het boek en de auteur/uitgeverij komen te staan.
