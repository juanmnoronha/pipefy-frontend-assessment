import React from 'react';

import * as S from './Button.style';

interface ButtonProps {
  onClick: () => void
}

export function Button({ onClick }: ButtonProps) {
  return <S.Container onClick={onClick}>Show More</S.Container>;
}