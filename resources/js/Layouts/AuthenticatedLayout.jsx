import {useState} from 'react';
import {Box, CssBaseline, CssVarsProvider} from "@mui/joy";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <CssVarsProvider>
            <CssBaseline/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100dvh',
            }}>
                {children}
            </Box>
        </CssVarsProvider>
    );
}
