import { styled } from "@stitches/react";

export const MockkongStyled = {
  AIRecommendGoals: styled('div', {
    margin: '35px 0px',
    'h3': {
      marginBottom: '10px',
    },
    'div.Goal-Card': {
      display: 'flex',
      
  
      'div.Goal': {
        backgroundColor: '$primary',
        width: '180px',
        height: '240px',
        color: 'white',
        padding: '15px',
        marginRight: '20px',
        borderRadius: '20px',
        boxSizing: 'border-box',
    
        'div': {
          color: 'white',
          flex: '1',
        }
      },
    }
  }),
  
  Goals: styled('div', {
    display: 'flex',
    flexDirection: 'column',

    'h3': {
      marginBottom: '10px',
    },

    'div.Goal': {
      color: 'white',
      width: '100%',
      height: '120px',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: '$primary',
      borderRadius: '20px',
      boxSizing: 'border-box',
  
      'div': {
        color: 'white',
        flex: '1',
      }
    }
  }),
};