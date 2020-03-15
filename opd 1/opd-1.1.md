# Onderzoek features

## Onderzochte features

* [Slecht (breedband) internet](#Slecht-(breedband)-internet)
* [Ad-blockers](#Ad-blockers)

## Slecht (breedband) internet

Wat gebeurt er als je slecht internet hebt en een webpagina probeert te laden?

### Soorten problemen

1. Laden duurt lang.
2. Sommige bestanden (afbeeldingen of scripts) worden niet opgehaald.
3. Pagina ziet er incompleet uit.
4. Geen interactie mogelijk.

**Bronnen:**

Het artikel [*Slow internet is fueling inequality*](https://www.wired.com/2016/10/slow-internet-is-fueling-inequality/) uit 2016 van Wired

Het artikel [*The Psychology of Web Performance*](http://www.websiteoptimization.com/speed/tweak/psychology-web-performance/) uit 2008 van WebsiteOptimization&#46;com

Het artikel [*High Latency vs Low Bandwidth - Impact on Web Performance*](https://www.globaldots.com/blog/high-latency-vs-low-bandwidth-impact-web-performance) uit 2015 van Goran Čandrlić

Het artikel [*The "why" of web performance*](https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance) uit 2020 van MDN contributors

### Hoe te testen

1. Ga naar de *developer tools* in de browser of gebruik **CTRL + SHIFT + I**
2. Ga voor de *Network* optie of gebruik **CTRL + SHIFT + E**
3. Klik op het label *No throttling*
4. Kies een van de opties die een tragere snelheid simuleren of voeg zelf een toe
5. Laad opnieuw de website

### Sites waar het problemen geeft

### Hoe op te lossen?

1. Ervoor zorgen dat de content (html) als eerst inlaad en als laatst pas javascript, want javascript duurt langer om te renderen dan html. Zet geen inline \<script> in de DOM maar zet de \<script> aan het eind van het HTML-document.

2. Maak zo klein mogelijke bestandsgroottes (html, css & JavaScript), omdat het grootte van het bestand impact heeft op de tijd wanneer de browser klaar is met renderen.

3. Back-up code of bestanden laden als eerste code of bestanden niet worden geladen.

## Ad-blockers

Wat gebeurt er als er een ad-blocker aanstaat als de website wordt geladen?

### Wat doet een ad-blocker en hoe werkt het?

Een ad-blocker is een programma die alle JavaScript-bestanden en domeinen blokkeert die op een zwarte lijst staan. Elke keer als een pagina wordt geladen, kijkt het of de url van een bestand of een bestandsnaam overeenkomt met de namen uit de zwarte lijst en stopt het de browser met het laden van dat bestand van het domein.

**Bronnen:**

Het artikel [*How to Detect an Ad Blocker*](https://davidwalsh.name/detect-ad-blocker) uit 2019 van David Walsh

Het artikel [*How to detect Adblock on my website?*](https://stackoverflow.com/questions/4869154/how-to-detect-adblock-on-my-website) uit 2009 van James P. Wright op Stackoverflow

Het artikel [*How To: Detect Ad Blockers (adblock, uBlock, etc)*](https://jonathanmh.com/how-to-detect-ad-blockers-adblock-ublock-etc/) uit 2018 van Jonathan M. Hethey

### Soorten problemen

1. Belangrijke JavaScript-code kan niet uitgevoerd worden.
2. Verandert de DOM.

### Hoe te testen

1. Ga naar de extensies of add-ons van de browser
2. Zoek voor een ad-blocker
3. Installeer de ad-blocker
4. Zet de ad-blocker aan en uit

### Sites waar het problemen geeft

### Hoe op te lossen?

**Geen onnodige/irrelevante content tonen.**

Maar als het zorgt voor errors: Schrijf minder complexe code.

<!-- voor developers
Script schrijven die de veranderingen die een ad-blocker uitvoert detecteert en de content laat veranderen o.b.v. of de gebruiker wel of geen ad-blocker heeft. Deze manier is echter niet 100% robuust, omdat het niet met zekerheid is te zeggen of er een ad-blocker wordt gebruikt of niet.

Een andere manier is een script schrijven waar je een bestand of script laad waarvan je zeker weet dat het geblokkeerd zal worden door de ad-blocker. Op basis daarvan kun je veranderingen aanbrengen die ervoor zorgen dat de pagina niet kapot gaat. Deze manier is ook niet 100% robuust, omdat een ad-blocker steeds verandert en daardoor het script niet meer werkt.

Ook het maskeren van de naam van een bestand of het serveren van de content op het domein van de website kan een oplossing zijn.
-->
