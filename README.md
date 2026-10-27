# Basketball Einsatzreihe — Schüler unterrichten Schüler

Material für ein Unterrichtsprojekt im Sportunterricht am **Erasmus-Gymnasium Grevenbroich** (Frau Przybilla und Herr Hof): Zehntklässler übernehmen in Dreier- bzw. kleinen Teams die Leitung von vier Basketball-Übungseinheiten à 60 Minuten vor einer achten Klasse.

**Live-Vorschau:** https://hofa35.github.io/basketball-reihe-schueler-unterrichten-schueler/

Das ist die Seite, die auch die Schülerinnen und Schüler zur Vorbereitung bekommen. Zum Einstieg lohnt sich ein Klick durch alle vier Einsätze über die linke Navigation.

## Kurz zusammengefasst

Vier Einheiten, jeweils vorgegebener Inhalt:

1. **Wurftechnik** — Positionswurf und Korbleger
2. **Dribbel- und Schrittfehler** — typische Regelverstöße erkennen und korrigieren
3. **Positionen auf dem Feld** — drei Grundpositionen (Aufbauspieler, Flügelspieler, Center)
4. **Angriffsmuster** — Give-and-Go als Mannschaftsaktion, Abschluss der Reihe

Jede Seite ist für sich vollständig nutzbar und enthält:
- einen 60-Minuten-Ablaufplan als Zeitschiene,
- eine Technik-/Taktik-Abbildung (als Druckvorlage für die Halle gedacht, auch für die übenden Achtklässler),
- fachliche Vorbereitungstipps für die Leitung,
- einen kurzen Verhaltenskodex zum Auftritt vor der Gruppe (Haltung, Lautstärke, Umgang mit Störungen),
- eine "Mission Basketball"-Checkliste zum Ausdrucken und handschriftlichen Ausfüllen (Vorbereitung, Ablauf, Kurzprotokoll).

## Hinweise für die Lehrkraft

- **Zielgruppe der Seite sind die Schüler, nicht die Lehrkraft.** Die Texte sind entsprechend direkt und motivierend an die Zehntklässler adressiert ("Ihr", "euer Team"), nicht an Erwachsene.
- **Die Seite ersetzt nicht die Materialien in der Halle.** Sie ist zur Vorbereitung zuhause gedacht (Handy oder Laptop). In der Halle selbst brauchen die Leitungsteams die Technik-Abbildung und die Checkliste ausgedruckt auf Papier — dafür gibt es auf jeder Seite einen Link "Bild in voller Größe öffnen (zum Ausdrucken)".
- **Keine Schülerdaten.** Die Seite ist komplett statisch (kein Server, keine Datenbank, kein Login). Der Button "Als erledigt stempeln" merkt sich den Fortschritt nur lokal im Browser des jeweiligen Geräts (`localStorage`) — nirgendwo werden Daten gesammelt oder übertragen.
- **Gruppeneinteilung ist bewusst offen gehalten.** Die Texte sprechen allgemein von "Team", nicht von einer festen Teamgröße, da sich nicht überall gleichmäßige Dreierteams bilden lassen.
- **Geprüft auf iPad**, da die Schüler am Erasmus-Gymnasium damit ausgestattet sind — Hoch- und Querformat funktionieren beide, ab dem iPad Air/10. Generation (Hochformat) oder in jedem Querformat zeigt die Seite die volle Navigation, bei älteren/kleineren iPads scrollt die Navigationsleiste horizontal.
- **Nicht über Suchmaschinen auffindbar** (`noindex`), aber öffentlich erreichbar für jeden mit dem Link — kein Ersatz für ein echtes Zugriffsschutz, falls das relevant werden sollte.

## Technischer Hintergrund (kurz)

Reines statisches HTML/CSS/JavaScript, kein Build-Prozess, keine Frameworks. Gestaltet im Stil einer "Feldakte" (Dossier-Optik: Aktenreiter, gestempelte Nummerierung, angepinnte Fotos) statt als übliche bunte Sport-App, damit die Verantwortung der Schüler ernst genommen wirkt statt verspielt. Gehostet über GitHub Pages direkt aus diesem Repository, Deployment auf dem eigentlichen Schul-Webspace (Ionos) erfolgt separat per Datei-Upload.
