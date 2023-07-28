import styled, { keyframes } from "styled-components";

interface AnimationContainerProps {
  isEntering: boolean;
}

export const scaleInCenterAnimation = keyframes`
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    opacity: 1;
  }
`;

export const scaleOutCenterAnimation = keyframes`
  0% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      opacity: 1;
    }
    100% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        opacity: 1;
    }
`;

export const ScaleAnimationContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isEntering',
}) <AnimationContainerProps>`
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-name: ${(props) => (props.isEntering ? scaleInCenterAnimation : scaleOutCenterAnimation)};
  opacity: ${(props) => (props.isEntering ? 1 : 0)};
`;

export const scaleLeftInCenterAnimation = keyframes`
    0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
`;

export const scaleLeftOutCenterAnimation = keyframes`
   0% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    opacity: 1;
  }
`;

export const ScaleLeftAnimationContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isEntering',
}) <AnimationContainerProps>`
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-name: ${(props) => (props.isEntering ? scaleLeftInCenterAnimation : scaleLeftOutCenterAnimation)};
  opacity: ${(props) => (props.isEntering ? 1 : 0)};
`;