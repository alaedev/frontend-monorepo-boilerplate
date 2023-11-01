 

import {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
  PaletteColorOptions,
} from '@mui/material/styles/createPalette'

import { CSSProperties } from 'react'

declare module '@mui/material/styles' {

  //Theme 
  interface Theme {
    brand: {
      blue: CSSProperties['color'];
      green: CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    brand: {
      blue: CSSProperties['color'];
      green: CSSProperties['color'];
    };
  }

  
  // Palette
  interface Palette extends MuiPalette {
    surface: PaletteColor
  }

  interface PaletteOptions extends MuiPaletteOptions {
    surface: PaletteColorOptions    
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    titleXl: React.CSSProperties
    titleMd: React.CSSProperties
  }

  
  interface TypographyVariantsOptions {
    titleXl?: React.CSSProperties
    titleMd?: React.CSSProperties
  }
}

// Typography
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleXl: true
    titleMd: true
  }
}
