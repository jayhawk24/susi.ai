import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: {
    main: '#4285f4',
  },
  secondary: {
    main: '#19314B',
  },
  default: {
    main: '#fff',
  },
  error: {
    main: '#ff0000',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};
const typography = {
  useNextVariants: true,
};

export const theme = createMuiTheme({ palette, typography });
