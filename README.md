# BAUTIS — strona www (multi-page)

Statyczna strona HTML/CSS/JS, bez frameworków.

## Podstrony
- `index.html`: strona główna
- `uslugi.html`: przegląd usług
- `odbior-mieszkania.html`, `odbior-domu.html`, `inspektor-nadzoru.html`, `budowa-domow.html`: podstrony usług
- `o-nas.html`, `opinie.html`, `faq.html`, `kontakt.html`

## Edycja
Wszystkie strony są generowane z jednego pliku: `_build/build.js` (dane firmy, nagłówek, stopka, treści).
Po zmianach uruchom:

```
node _build/build.js
```

Style: `assets/css/style.css`, skrypty: `assets/js/main.js`.

## Do uzupełnienia przed publikacją
- Zdjęcia: 2 zdjęcia linkowane z bautis.pl + 11 neutralnych zdjęć przedmiotów z Unsplash w `assets/img/` (lista niżej). Najlepiej podmienić je na prawdziwe zdjęcia z odbiorów i budów firmy.
- Formularz: otwiera program pocztowy (mailto). Na produkcji trzeba go podpiąć pod backend (np. Formspree albo formularz WordPress).
- Treści: wyłącznie z bautis.pl i wizytówki Google. Niczego nie dopisywać bez potwierdzenia właściciela.
- Opinie: dosłowne fragmenty 3 opinii z Google (tak jak je skraca Google). Warto potwierdzić z klientem, czy można je publikować.
- Cennik: bautis.pl odsyła do zakładki „OFERTA”, której nie ma w menu. Ceny dodać dopiero po otrzymaniu od właściciela.
- Polityka prywatności / RODO: dodać przed publikacją.

## Logo
- `assets/img/logo-bautis.png`: oryginalne logo (favicon).
- W nagłówku i stopce logo jest odwzorowane jako SVG w `_build/build.js` (`logoMark`), żeby było widoczne na czarnym tle. Napis: font Saira Stencil One.

## Zdjęcia z Unsplash (licencja Unsplash: darmowe, także komercyjnie)
Tylko neutralne zdjęcia przedmiotów (bez budynków).

| Plik | ID zdjęcia |
|---|---|
| rulers.jpg | photo-1550985543-49bee3167284 |
| tape-measure.jpg | photo-1703756291638-b1774ae3c186 |
| spirit-level.jpg | photo-1567361808976-260065224468 |
| drafting-tools.jpg | photo-1501516069922-a9982bd6f3bd |
| ruler-blueprint.jpg | photo-1741201663493-6f032d310a7f |
| keys.jpg | photo-1643804926339-e94f0a655185 |
| checklist.jpg | photo-1754548930574-6a995e5eb5a7 |
| clipboard.jpg | photo-1743385779431-45d26d9775b1 |
| plans-drawing.jpg | photo-1503387762-592deb58ef4e |
| laser-line.jpg | photo-1670511146782-8f52c5a7bd08 |
| red-helmet.jpg | photo-1567954970774-58d6aa6c50dc |

Każde zdjęcie: https://images.unsplash.com/<ID>
