import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { grey, purple, indigo } from '@mui/material/colors';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const MuiThemeProvider = ({ children }) => {
  const { theme: { themeMode } } = useSelector((state) => state);

  const getDesignTokens = (themeMode) => ({
    palette: {
      themeMode,
      ...(themeMode === 'light'
        ? {
          // palette values for light mode
          primary: {
            main: purple[200]
          },
          divider: purple[200],
          background: {
            default: grey[50],
            paper: grey[50],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
        : {
          // palette values for dark mode
          primary: {
            main: indigo[600]
          },
          divider: indigo[600],
          background: {
            default: indigo[900],
            paper: indigo[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          }
        }),
    },
  });

  const theme = createTheme(getDesignTokens(themeMode));

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;