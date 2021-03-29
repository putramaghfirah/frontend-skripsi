export const theme = {
  primary: '#0070f3',
  primaryHover: '#0076ffe6',
  textGray: '#696969',
  fontColor(opacity: number) {
    return `rgba(0, 0, 0, ${opacity})`;
  },
};

export type Theme = typeof theme;
