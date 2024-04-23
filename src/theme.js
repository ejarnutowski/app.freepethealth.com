import { extendTheme } from '@mui/joy/styles';

export default extendTheme({
  components: {
    JoyModal: {
      styleOverrides: {
        backdrop: {
          backdropFilter: 'blur(1px)',
        },
      },
    },
  },
});
