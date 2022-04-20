import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const spin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) }
  100% { transform: translate(-50%, -50%) rotate(360deg) }
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 1s linear infinite;
  color: var(--brand-base);
  height: 64px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 64px;
`