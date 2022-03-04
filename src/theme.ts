import type {} from "@mui/x-data-grid/themeAugmentation";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        iconSeparator: {
          display: "none",
        },
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default theme;
