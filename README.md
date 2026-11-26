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
- Zdjęcia: 2 zdjęcia linkowane z bautis.pl + 9 zdjęć poglądowych z Unsplash w `assets/img/` (lista niżej). Najlepiej podmienić je na prawdziwe zdjęcia z odbiorów i budów firmy.
- Formularz: otwiera program pocztowy (mailto). Na produkcji trzeba go podpiąć pod backend (np. Formspree albo formularz WordPress).
- Treści: wyłącznie z bautis.pl i wizytówki Google. Niczego nie dopisywać bez potwierdzenia właściciela.
- Opinie: dosłowne fragmenty 3 opinii z Google (tak jak je skraca Google). Warto potwierdzić z klientem, czy można je publikować.
- Cennik: bautis.pl odsyła do zakładki „OFERTA”, której nie ma w menu. Ceny dodać dopiero po otrzymaniu od właściciela.
- Polityka prywatności / RODO: dodać przed publikacją.

## Logo
- `assets/img/logo-bautis.png`: oryginalne logo (favicon).
- W nagłówku i stopce logo jest odwzorowane jako SVG w `_build/build.js` (`logoMark`), żeby było widoczne na czarnym tle. Napis: font Saira Stencil One.

## Zdjęcia z Unsplash (licencja Unsplash: darmowe, także komercyjnie)
| Plik | Źródło |
|---|---|
| apartment-building.jpg | photo-1545324418-cc1a3fa10c00 |
| empty-room.jpg | photo-1757742690834-aa581b9f53b2 |
| grey-room.jpg | photo-1789353527927-21e987b43eb2 |
| house-construction.jpg | photo-1593786267440-550458cc882a |
| new-house.jpg | photo-1672627170267-fca17bb54156 |
| site-aerial.jpg | photo-1541888946425-d81bb19240f5 |
| plans-drawing.jpg | photo-1503387762-592deb58ef4e |
| laser-line.jpg | photo-1670511146782-8f52c5a7bd08 |
| red-helmet.jpg | photo-1567954970774-58d6aa6c50dc |

Każde zdjęcie: https://images.unsplash.com/<id>
