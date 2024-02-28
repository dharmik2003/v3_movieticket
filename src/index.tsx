// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './components/Redux/store/store'

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <Provider store={store}>
//       <BrowserRouter>
//     <App/>    
//     </BrowserRouter>
//     </Provider>
// )




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from './components/Redux/store/store'
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // <Provider store={store}>
    //   <BrowserRouter>
    // <App/>    
    // </BrowserRouter>
    // </Provider>

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App/>
        <Toaster/>
      </BrowserRouter>
    </PersistGate>
    </Provider>
    

  //     <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <App />
  //   </PersistGate>
  // </Provider>,

)