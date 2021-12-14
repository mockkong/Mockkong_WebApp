import { styled } from "@stitches/react";

export const MockkongStyled = {
  Plans: styled('div', {
    display: 'flex',
  }),
  Plan: styled('div', {
    backgroundColor: '$primary',
    width: '200px',
    height: '240px',
    color: 'white',

    'div': {
      color: 'white',
      flex: '1',
    }
  }),
};