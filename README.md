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
- Zdjęcia: teraz linkowane z bautis.pl (2 zdjęcia). Najlepiej podmienić je na własne zdjęcia z odbiorów i dać je do `assets/img/`.
- Formularz: otwiera program pocztowy (mailto). Na produkcji trzeba go podpiąć pod backend (np. Formspree albo formularz WordPress).
- Treści: wyłącznie z bautis.pl i wizytówki Google. Niczego nie dopisywać bez potwierdzenia właściciela.
- Opinie: dosłowne fragmenty 3 opinii z Google (tak jak je skraca Google). Warto potwierdzić z klientem, czy można je publikować.
- Cennik: bautis.pl odsyła do zakładki „OFERTA”, której nie ma w menu. Ceny dodać dopiero po otrzymaniu od właściciela.
- Polityka prywatności / RODO: dodać przed publikacją.
