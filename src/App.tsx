import { AdminLayout } from "layouts/AdminLayout";
import { AppRouter } from "./AppRouter";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AdminLayout>
        <AppRouter />
      </AdminLayout>
    </ThemeProvider>
  );
}
