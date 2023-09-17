import {
  ThemeProvider,
  themeOzenDark,
  themeOzenDefault,
} from '@ozen-ui/kit/ThemeProvider';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import Routes from './routes';
// import { store } from './store';
import './index.scss';

export const App = () => {
  const themes = {
    default: themeOzenDefault,
    dark: themeOzenDark,
  };

  return (
    <ThemeProvider theme={themes.default}>
      start
      {/* <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider> */}
    </ThemeProvider>
  );
};
