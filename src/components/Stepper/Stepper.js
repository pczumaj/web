import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  StepCircle,
  StepCircleCurrent,
  StepCircleDone,
  StepLine,
  StepNumber,
  StepNumberCurrent,
  StepNumberDone,
  StepperInner,
  StepperWrapper,
  StepWrapper
} from './Stepper.styled';

const MINIMUM_STEPS_TO_DISPLAY = 3;

const Stepper = ({ currentStep, numberOfSteps }) => {
  const renderSteps = Array.from({ length: numberOfSteps }, (_, index) => {
    const step = index + 1;

    const renderStep = (() => {
      if (step === currentStep) {
        return (
          <>
            <StepCircleCurrent />
            <StepNumberCurrent>{step}</StepNumberCurrent>
          </>
        );
      }

      if (step < currentStep) {
        return (
          <>
            <StepCircleDone />
            <StepNumberDone>{step}</StepNumberDone>
          </>
        );
      }

      return (
        <>
          <StepCircle />
          <StepNumber>{step}</StepNumber>
        </>
      );
    })();

    return (
      <Fragment key={index}>
        <StepWrapper>{renderStep}</StepWrapper>
        {step < numberOfSteps ? <StepLine /> : null}
      </Fragment>
    );
  });

  const step = currentStep - 1;
  const lastStepToMove = numberOfSteps - MINIMUM_STEPS_TO_DISPLAY;

  return (
    <StepperWrapper>
      <StepperInner step={step < lastStepToMove ? step : lastStepToMove}>
        {renderSteps}
      </StepperInner>
    </StepperWrapper>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.number.isRequired
};

export default Stepper;
