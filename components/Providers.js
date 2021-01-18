import { lightTheme, darkTheme } from "../styles/theme";
import useDarkMode from "use-dark-mode";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

const Provider = ({ children }) => {
  const { value } = useDarkMode(false, {
    onChange: null,
  });

  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default Provider;
