import React from 'react';
import InstallAppInstruction from './InstallAppInstruction';
import Icon1 from '../../assets/img/icons/export.svg';
import Icon2 from '../../assets/img/icons/add-to-desktop-2.svg';
import Icon3 from '../../assets/img/icons/check-mark.svg';
import Icon4 from '../../assets/img/logo/sign.png';

const InstallAppInstructionAndroidContainer = () => {
  const steps = [
    {
      icon: Icon1,
      key: 1,
      text:
        'Odszukaj na dole ekranu symbol "udostepnij" (strzałki w kwadracie) na dolnym pasku przeglądarki'
    },
    {
      icon: Icon2,
      key: 2,
      text: 'W otwartej liście znajdź przycisk "Dodaj do ekranu początkowego"'
    },
    {
      icon: Icon3,
      key: 3,
      text:
        'Po naciśnięciu i akceptacji aplikacja zainstaluje się na Twoim telefonie.'
    },
    {
      icon: Icon4,
      key: 4,
      text:
        'Na głównym ekranie telefonu znajdź i naciśnij ikonę aplikacji "ProteGO Safe"'
    }
  ];

  return <InstallAppInstruction steps={steps} />;
};

export default InstallAppInstructionAndroidContainer;
