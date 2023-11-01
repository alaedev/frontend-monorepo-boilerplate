import { createTheme } from '@mui/material'

const customFontFamily = "MyFont"

export const theme = createTheme({
  typography: {
    fontFamily: customFontFamily,
    
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
})
