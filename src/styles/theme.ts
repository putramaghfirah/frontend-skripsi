export const theme = {
  primary: '#2563EB',
  fontColor(opacity: number) {
    return `rgba(0, 0, 0, ${opacity})`;
  },
};

export type Theme = typeof theme;
