export const theme = {
  primary: '#0070f3',
  primaryHover: '#0076ffe6',
  textGray: '#696969',
  textBlack: '#111111',
  fontColor(r: number, g: number, b: number, opacity: number) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  },
};

export type Theme = typeof theme;
