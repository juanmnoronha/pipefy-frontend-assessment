import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const RotateAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
    animation: ${RotateAnimation} 1s linear infinite;
    color: var(--brand-base);
    height: 64px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
`