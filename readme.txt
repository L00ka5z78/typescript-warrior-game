tworzymy grę, gdzie walczymy rożnymi wojownikami.

wojownicy torzeni sa przez inne osoby w systemie.

Aplikacja ma 3 czesci:
1. Rejestracja wojownika
2. Arena walk
3. Sal sław.

nie będziemy implementować żadnej autoryzacji i uwierzytelnienia.
Czyli każdy może stworzyć dowolnego wojownika i dowolnie przeprowadzać walki.

Wszystkie dane zapisywane są w bazie danych.

Rejestarcja wojownika polega na wpisaniu jego danych:
- Imię - 'musi być unikalne w stosunku do wszystkich wojowników'
- Siła
- Obrona
- Wytrzymałość
- Zwinność

Trudnośc polega na tym, że do rozdania jest łącznie 10 punktów.
1. Łącznie statystyki muszą wynosić 10 .

Te informacje kiedy zostaną zapisane nigdy się nie zmieniają. Tzn. np. podczas walki utrata obrony jest tymczasowa,  nie powinna zostać zapisana między walkami.
Liczba zwycięstw - domyślnie 0.

Arena walk
Arena polega na tym, że wybieramy z 2 selectów 2 różnych przeciwników (nie można
tych samych). Walczą ze sobą, na końcu widzimy log całej walki na frontendzie.

Algorytm walki (można go modyfikowac, to tylko propozycja):
1.Na początku każdy ma tyle pkt życia HP ile wynosi jego wytrzymałość * 10.
Każdy ma na początku tyle tarczy DP ile wynosi jego obrona.
2.WOjownik, który zaczyna wykonuje atak o wartości rónej jego sile.
3. Jeżeli wojownik atakowany ma tarczę + zwinność większą niż siłą ataku to
    - Odejmowana mu jesta tarcza w wysokości ataku
        Jeżeli atak był większy niż tarcza, to odejmowana jest mu od życia pozostała ilość
        siły ataku.
        Jeżeli atak byłmaksymalnie tyle ile wynosi  aktualnie tarcza, to nie jest odejmowane życie.
4.Następuje zmiana kolejności i teraz atakowany zostaje atakującym, a  atakujący atakowanym.
5. Powtarzamy punkty 2-4 tak długo dopóki ktoś nie umrze, czyli jego HP nie spadnie do min 0. Gdy jeden z wojowników umrze, to atakujący zostaje zwycięzcą. Zapisujemy mu w bazie +1 do zwycięstw.

Podczas walki powinien się genreować dokłądny log, który zostanie zwrócony na frontend. Powinien
on zawierać szczególowe informacje - kto kogo atakuje, czy powipdła się obrona, iel zostało zabrane z tarczy itp.

Sala sław
To miejsce gdzie wypisujemy 10 najlepszych wojowników. Najwyżej pokazujemy tych z największą ilością zwycięstw. Pokazujemy na liście: pozycję, ilosć zwycięstw i iię wojownika.


*Realizacja. Unique na bazie / logika / unique + logika
**Można zrobić bardzo ładną wersję tego - przez dodanie np ikon czy innych kolorów  w zależności od typu sytuacji.

Plan
v1:
skonfigurować edytor,
potrzebne paczki i konfiguracja TS
Pliki statyczne ,
konfiguracja expresa folder publiczny
    ogólna struktura routerów= ścieżek.
    zaplanować jakie ścieżki się pojawią,
    Zaplanowanie widoków. Ogólna struktura widoków.
        -strona główna,
            - '/'
        -rejestracja,
            - formularz
            -zapisanie
        -arena walk
            -formularz
        -sala sław
    Rekord wojownika
        -nazwa bazy danych: mehak_arena
        - tabela:
            -warrior
                ID - UUID (varchar 36)
                - Imię - varchar(?) - unikalne !'musi być unikalne w stosunku do wszystkich wojowników'
                - Siła -TINYINT(2)
                - Obrona -TINYINT(2)
                - Wytrzymałość -TINYINT(2)
                - Zwinność -TINYINT(2)
                - Liczba zwycięstw domyslnie 0 INT(11)
                 - Logika związana z tworzenim wojowników
    Logika związana z salą sław
    Logika związana z areną walk
v2
Log walki , można zrobić bardzo ładną wersję tego - przez dodanie np ikon czy innych kolorów  w zależności od typu sytuacji.

dodać frontendowy JS ułatwiający rozdawanie pktów




Tworzymy grę, w której walczy się z różnymi wojownikami. Wojownicy są tworzeni przez inne osoby w systemie.

1 Aplikacja składa się z 3 części:
1. Rejestracja wojownika
2. Arena walk
3. Sala sław
Nie będziemy teraz implementowali jeszcze żadnej autoryzacji i uwierzytelnienia. Czyli każdy może stworzyć dowolnego wojownika i dowolnie przeprowadzać walki.

Wszystkie dane są zapisywane w bazie danych.
Rejestracja wojownika polega na wpisaniu jego danych:
- Imię - musi być unikalne w stosunku do wszystkich wojowników*
- Siła
- Obrona
- Wytrzymałość
- Zwinność
Trudność polega na tym, że do rozdania jest łącznie 10 punktów.
Każda statystyka musi wynosić min.
1. Łącznie statystyki muszą wynosić 10.
Te informacje kiedy zostaną zapisane nigdy się nie zmieniają. Tzn. np. podczas walki utrata obrony jest tymczasowa, nie powinna zostać zapisana między walkami.1
- Liczba zwycięstw: domyślnie 0

Arena walk
Arena polega na tym, że wybieramy z dwóch select-ów dwóch różnych przeciwników (nie można tych samych). Walczą oni ze sobą, na końcu widzimy log całej walki na frontendzie.

Algorytm walki (można go zmodyfikować, to tylko propozycja):
1. Każdy na początku ma tyle punktów życia (HP) ile wynosi jego wytrzymałość * 10. Każdy ma na oczątku tyle        tarczy (DP) ile wynosi jego obrona.
2. Wojownik, który zaczyna wykonuje atak o wartości równej jego sile
3. Jeżeli wojownik atakowany ma tarczę + zwinność większą niż siła ataku, to:
    3.1. Odejmowane mu jest tarcza w wysokości ataku.
    3.2.A) Jeżeli atak był większy niż tarcza, to odejmowana jest mu od życia pozostała ilość siły ataku.
    3.2.B) Jeżeli atak byt maksymalnie tyle ile wynosi aktualnie tarcza, to nie jest odejmowane życie.
Jezeli warunke 3 nie jest spełniony to od zycia odejmujemy atak.

4. Następuje zmiana kolejności i teraz atakowany zostaje atakującym, a atakujacy zostaje atakowanym.
5. Powtarzamy punkty 2 - 4 tak długo, dopóki ktoś nie umrze, czyli jego HP nie spadnie do min. 0.
Gdy jeden z wojowników umrze, to atakujący zostaje zwycięzcą.

Zapisujemy mu w bazie +1 do zwycięstw. Podczas walki, powinien się generować dokładny log, który zostanie zwrócony na frontendzie. Powinien on zawierać szczegółowe informacje -kto kogo atakuje, czy powiodła się obrona, ile zostało zabrane z tarczy itp. * * Sala sław Jest to miejsce, w którym wypisujemy 10 najlepszych śmiałków. Najwyżej pokazujemy tych z największą ilością zwycięstw. Pokazujemy na liście: pozycję, ilość zwycięstw i imię wojownika. * Realizacja: Unique na bazie / Logika / Unique + logi ** Możesz zrobić bardzo ładną wersję tego - poprzez do czy innych kolorów w zależności od typu sytuacji.'
















