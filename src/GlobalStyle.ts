import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing:   border-box;
  }

  body {
    font-family:  sans-serif, "Arial", sans-serif;
    line-height:  1.5;
    border:       0;
    margin:       0;
    background-color: #cae9ff;
  }

  :root {
    /* Gmarket Design System Base */
    /* Semantic color */
    /* Green: Positive */
    --Green-900:  #013600;
    --Green-800:  #015F00;
    --Green-700:  #018600;
    --Green-600:  #01A900;
    --Green-500:  #00C400;
    --Green-400:  #11D70D;
    --Green-300:  #39E532;
    --Green-200:  #6CEF64;
    --Green-100:  #A5F4A0;
    --Green-50:   #E5FCE3;
    /* Blue: Informative */
    --Blue-900:   #072182;
    --Blue-800:   #0231A6;
    --Blue-700:   #0048C8;
    --Blue-600:   #0062E5;
    --Blue-500:   #067DFD;
    --Blue-400:   #329CFF;
    --Blue-300:   #68BBFF;
    --Blue-200:   #A7D9FF;
    --Blue-100:   #CBE8FF;
    --Blue-50:    #EEF7FF;
    /* Red: Warning */
    --Red-900:    #7D0800;
    --Red-800:    #9F0A01;
    --Red-700:    #BF0A03;
    --Red-600:    #DA120D;
    --Red-500:    #EF2B2A;
    --Red-400:    #FF5454;
    --Red-300:    #FF8585;
    --Red-200:    #FFBFBF;
    --Red-100:    #FFDADB;
    --Red-50:     #FFF5F5;
    /* Gray */
    --Gray-900:     #222222;
    --Gray-800:     #424242;
    --Gray-700:     #616161;
    --Gray-600:     #757575;
    --Gray-500:     #9E9E9E;
    --Gray-400:     #BDBDBD;
    --Gray-300:     #E0E0E0;
    --Gray-200:     #EEEEEE;
    --Gray-100:     #F5F5F5;
    --Gray-50:      #FAFAFA;
    --Black:        #000000;
    --White:        #ffffff;

    /* font size */
    --font-size-xxxl:   24px;
    --font-size-xxl:    22px;
    --font-size-xl:     20px;
    --font-size-l:      18px;
    --font-size-m:      16px;
    --font-size-s:      14px;
    --font-size-xs:     12px;
    --font-size-xxs:    11px;
    
    /* font weight */
    --font-weight-bold:    700;
    --font-weight-medium:  500;
    --font-weight-regular: 400;

    /* size unit */
    --Spacing-xxxs:	2px;
    --Spacing-xxs:	4px;
    --Spacing-xs:	  8px;
    --Spacing-s:	  12px;
    --Spacing-m:	  16px;
    --Spacing-l:  	20px;
    --Spacing-xl: 	24px;
    --Spacing-xxl:	32px;
    --Spacing-xxxl:	40px;
  }

  a {
    text-decoration: none;
    color: var(--color-black);
  }

  hr {
    margin: 0 var(--padding-size-m);
    border-color: var(--color-gray-light);
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  input[type=search] {padding-right: 25px;}

  input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
  }
`;

export default GlobalStyle;
