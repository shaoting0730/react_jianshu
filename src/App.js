import React from 'react';
import { GlobalStyled } from './style.js';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyled />
        <Header />
      </div>
    </Provider>
  );
}

export default App;
