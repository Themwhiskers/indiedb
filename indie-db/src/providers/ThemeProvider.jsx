import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useState, useMemo, createContext } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [isDark, setDark ] = useState(false);

    const toggleDarkMode = () => setDark(!isDark);

    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
        }
    });

    const value = useMemo(() => {
        return { isDark, toggleDarkMode };
    }, [isDark, toggleDarkMode]);

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={value}>
                { children }
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context ) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};