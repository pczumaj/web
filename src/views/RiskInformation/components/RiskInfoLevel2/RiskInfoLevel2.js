import React from 'react';
import { Collapse } from '../../../../components';

const RiskInfoLevel2 = () => (
  <>
    <Collapse title="Odpocznij i pozostań w domu">
      <p>
        Chociaż twoje objawy najpewniej wywołane są przez inną chorobę, pozostań
        w domu, dopóki nie wyzdrowiejesz. Odpoczynek w domu nie tylko pozwoli ci
        szybciej wyzdrowieć, ale także zmniejszy ryzyko zakażenia siebie oraz
        innych osób, szczególnie starszych i mniej odpornych.
      </p>
    </Collapse>
    <Collapse title="Często myj ręce">
      <p>
        Regularnie myj ręce mydłem i wodą lub dezynfekuj je środkiem na bazie
        alkoholu (min. 60%). Mycie rąk powinno trwać 30 sekund. Sprawdź
        instrukcję.
      </p>
    </Collapse>
    <Collapse title="Zasłaniaj usta i nos, gdy kaszlesz lub kichasz">
      <p>
        Gdy kaszlesz lub kichasz, zakrywaj usta i nos chusteczką jednorazową lub
        zgięciem łokcia. Chusteczkę jak najszybciej wyrzuć do kosza i dokładnie
        umyj ręce.
      </p>
    </Collapse>
    <Collapse title="Zachowaj bezpieczną odległość (2 m)">
      <p>Unikaj bliskiego (mniej niż 2 metry) kontaktu z innymi osobami.</p>
    </Collapse>
    <Collapse title="Unikaj dotykania oczu, nosa i ust">
      <p>
        Wirus przedostaje się do organizmu przez usta, nos i oczy. Możesz go
        przenieść z zanieczyszczonej powierzchni. Na przedmiotach, na których
        znajdują się wydzieliny, np. ślina może utrzymywać się do kilku godzin
        lub dni.
      </p>
    </Collapse>
    <Collapse title="#ZostańWDomu">
      <p>
        Ogranicz wyjścia z domu do niezbędnego minimum. Dzięki temu chronisz
        siebie i innych, zmniejszając ryzyko rozprzestrzeniania się
        koronawirusa.
      </p>
    </Collapse>
    <Collapse title="Obserwuj swój stan zdrowia">
      <p>
        Obserwuj swój stan zdrowia kilka razy dziennie. Mierz temperaturę ciała
        co kilka godzin.
      </p>
      <p>Regularnie wypełniaj Dziennik Zdrowia. Dbaj o siebie!</p>
    </Collapse>
  </>
);

export default RiskInfoLevel2;
