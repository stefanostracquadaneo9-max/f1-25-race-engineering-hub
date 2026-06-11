# Race Engineering Hub - F1 25

Applicazione web statica per preparare una strategia di gara e generare un assetto completo per F1 25.

## Funzioni

- Home page con accesso rapido ai due strumenti
- Strategy Desk con analisi di stint, pit stop e otto finestre meteo
- Simulatore strategico che confronta una, due e tre soste usando degrado, pit loss, track position e crossover meteo
- Bridge opzionale per calibrare la strategia con vita utile, usura, delta e set gomme trasmessi dalla telemetria UDP ufficiale di F1 25
- Setup Lab che richiede soltanto dati mostrati da F1 25
- Foglio assetto nello stesso ordine delle sezioni del gioco
- Esportazione PDF dell'assetto completo
- Layout responsive per desktop e smartphone

## Utilizzo

Apri `index.html` oppure visita il sito pubblicato tramite GitHub Pages.

## Telemetria F1 25

Per usare i dati gomme trasmessi direttamente dal gioco:

1. Avvia `AVVIA_TELEMETRIA_F1_25.bat`.
2. In F1 25 abilita `UDP Telemetry`.
3. Imposta formato `2025`, IP `127.0.0.1` e porta `20777`.
4. Apri Strategy Desk e premi `Collega F1 25`.

Il bridge usa il pacchetto ufficiale `Tyre Sets`. L'algoritmo interno proprietario di F1 25 non è pubblico: la modalità telemetria calibra il simulatore con gli stessi dati gomme esposti dal gioco.

Documentazione di riferimento:

- [Data Output from F1 25 - specifica UDP ufficiale EA](https://forums.ea.com/t5/s/tghpe58374/attachments/tghpe58374/f1-games-game-info-hub-en/61/4/Data%20Output%20from%20F1%2025%20v3.pdf)
- [F1 25 Advancements Deep Dive - pneumatici e degrado specifico per circuito](https://www.ea.com/games/f1/f1-25/news/f1-25-advancements-deep-dive)

Il progetto è indipendente e non affiliato a EA Sports o Ferrari S.p.A.
