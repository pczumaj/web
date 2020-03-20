import React from 'react';
import { useSelector } from 'react-redux';

import Background from '../../assets/img/banners/banner-1.png';
import {
  Banner,
  Brand,
  Button,
  Container,
  MenuButton,
  Warning
} from '../../components';
import './Home.scss';

const WarningCase1 = () => (
  <>
    <Warning />
    <p className="big text-center text-bold">
      Niskie ryzyko - kontynuuj działania profilaktyczne
    </p>
  </>
);

const WarningCase2 = () => (
  <>
    <Warning color="green" />
    <h2>Samokontrola - zostań w domu i monitoruj stan swojego zdrowia </h2>
  </>
);

const WarningCase3 = () => (
  <>
    <Warning color="yellow" />
    <h2>Odizoluj się, nie wychodź, unikaj kontaktów z domownikami</h2>
  </>
);

const WarningCase4 = () => (
  <>
    <Warning color="red" />
    <h2>Powiadom służby medyczne i unikaj wszelkich kontaktów.</h2>
  </>
);

const WarningCase5 = () => (
  <>
    <Warning color="red" />
    <h2>
      Powiadom służby medyczne, konieczna izolacja ambulatoryjna, unikaj
      wszelkich kontaktów.
    </h2>
  </>
);

const Home = () => {
  const { triageLevel } = useSelector(state => state.triage);
  const renderRiskLevel = (() => {
    switch (triageLevel) {
      case 'no_risk': {
        return <WarningCase1 />;
      }
      case 'self_monitoring': {
        return <WarningCase2 />;
      }
      case 'quarantine': {
        return <WarningCase3 />;
      }
      case 'isolation_call': {
        return <WarningCase4 />;
      }
      case 'isolation_ambulance': {
        return <WarningCase5 />;
      }
      default: {
        return null;
      }
    }
  })();

  return (
    <div className="view view__home">
      <Banner background={Background} size="small">
        <Brand content={false} white />
        <MenuButton />
      </Banner>
      <Container>
        {renderRiskLevel}
        <Button onClick={() => null} type="primary" text="Co mam zrobić?" />
      </Container>
    </div>
  );
};

export default Home;