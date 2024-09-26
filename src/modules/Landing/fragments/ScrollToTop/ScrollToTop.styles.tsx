import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    margin:0,
    padding:'0 3%',
    position:'fixed',
    bottom:20,
    zIndex:999,
    width:'100%',
    backgroundColor:'transparent',
  },
  buttonScrollToTop:{
    width:'4rem',
    cursor:'pointer'
  }
}));
