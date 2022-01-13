import { styled } from "@stitches/react";

export const MockkongStyled = {
  DashboardGoals: styled('div', {
    width: "calc(90% - 230px)",
    margin: "0px auto"
  }),

  AIRecommendGoals: styled('div', {
    marginBottom: '30px',

    'h3': {
      marginBottom: '10px',
    },
    'div.Goal_Card': {
      display: 'flex',
      '-webkit-flex-wrap': 'wrap',
      '-webkit-justify-content': 'space-between',
      'flexWrap': 'wrap',
  
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


      '.card': {
        backgroundColor: '#ffffff',
        boxShadow: '200px 0 50px rgba(0, 0, 0, 0.5) inset',
        height: '250px',
        position: 'relative',
        transform: 'perspective(2000px)',
        transformStyle: 'preserve-3d',
        transition: 'box-shadow 1s ease, transform 1s ease, z-index 1s ease',
        width: '200px',

        '&:hover': {
          boxShadow: '20px 0 50px rgba(0, 0, 0, 0.5) inset',
          transform: 'perspective(2000px) rotateZ(-10deg)',
          zIndex: '1000',

          '.img-box': {
            transform: 'rotateY(-135deg)',
          }
        },

        '.img-box': {
          border: '1px solid #83f7da',
          height: '100%',
          position: 'relative',
          transformOrigin: 'left',
          transition: 'transform 1s ease',
          width: '100%',
          zIndex: '1',

          img: {
            height: '100%',
            left: '0',
            objectFit: 'cover',
            position: 'absolute',
            top: '0',
            width: '100%',
          },
        },

        '.details': {
          left: '0',
          padding: '20px',
          position: 'absolute',
          top: '0',

          h2: {
            fontSize: 'large',
            fontWeight: 'bold',
            padding: '20px 0px 20px 0px',
          }
        }
      },
    }
  }),
  
  MyGoals: styled('div', {
    display: 'flex',
    flexDirection: 'column',

    'h3': {
      marginBottom: '10px',
    },

    'div.Goal': {
      color: 'white',
      width: '100%',
      minHeight: '120px',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: '#2c7388',
      borderRadius: '0px 20px 0px 20px',
      boxSizing: 'border-box',
  
      'div': {
        color: 'white',
        flex: '1',
      }
    }
  }),

  Goal: styled('div', {
    width: "100%",
    opacity: '0.9',

    '&:hover': {
      opacity: '1',
    },

    '.deleteGoalIcon': {
      float: 'right',
      color: 'white',
      opacity: '0.7',

      '&:hover': {
        opacity: '1',
      }
    }
  }),

  Plans: styled('div', {
    display: 'inline-block',
    
    button: {
      cursor: 'pointer',
      width: '60px',
      height: '60px',
      marginBottom: '10px',
      textAlign: 'center',
      fontSize: '12px',
      backgroundColor: '#58d2b3b3',
      borderRadius: '50%',
      border: '1px solid white',

      '&:first-child.start': {
        backgroundColor: 'rgba(117, 247, 214, 1)',
      },

      '&.done, &:hover': {
        backgroundColor: '#75f7d6b3',
      },
    },
    
    'button + button': {
      marginLeft: '20px',
      
      '&:before': {
        content: '',
        position: 'absolute',
        left: '0px',
        width: '20px',
        marginLeft: '-20px',
        display: 'inline-block',
        height: '2px',
        backgroundColor: 'white',
        verticalAlign: 'middle'
      }
    },
  }), 

  Tags: styled('div', {
    display: 'flex',

    button: {
      color: 'white',
      fontSize: '10px',
      padding: '3px 10px',
      marginTop: '5px',
      borderRadius: '2px',
      border: '1px solid rgb(255 255 255 / 45%)',

      '& + &': {
        marginLeft: '5px'
      },
    }
  }), 

  RegisterGoal: styled('div', {
    width: '100%',
    top: '0',
    left: '0',
    position: 'absolute',
    height: '-webkit-fill-available',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  })
};

