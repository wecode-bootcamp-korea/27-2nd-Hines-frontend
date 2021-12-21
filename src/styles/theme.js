const theme = {
  background: '#000',
  mainColor: '#000',
  white: '#FFFFFF',
  grey: 'rgba(196,196,196,0.3)',
  middleGrey: 'rgba(65,65,65,0.4)',
  deepGrey: '#828282',
  fontColor: '#2D2B2B',
  fontLarge: '38px',
  fontSemiLarge: '28px',
  fontMedium: '22px',
  fontRegular: '14px',
  fontSmall: '12px',
  fontWeightBold: '700',
  fontWeightSemiBold: '500',
  fontWeightRegular: '400',
  fontWeightLight: '200',
  fontTitle: "'Noto Sans KR', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
  flexMixin: (direction = 'row', align = 'center', justify = 'center') => `
  display:flex;
  flex-direction:${direction};
  align-items:${align};
  justify-content:${justify}
  `,
  buttonDefault: (width = '150px', backgroundColor = '#000') =>
    `width:${width}; font-size:17px; background:${backgroundColor}; color:#fff; padding:14px 10px;`,
};

export default theme;
