import { ThemeProvider } from "./theme/themeProvider";
import { HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  return (
    <HelmetProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HelmetProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
