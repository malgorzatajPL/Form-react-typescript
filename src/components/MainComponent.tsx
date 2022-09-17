import React from 'react';
import { CustomTextField } from './CustomTextField';
import { MainComponentStyle } from './MainComponent.style';

export default function MainComponent() {
  return (
    <MainComponentStyle>
      <CustomTextField label='x' placeholder='x' name='x' />
    </MainComponentStyle>
  );
}
