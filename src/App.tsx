import { ToastContainer } from 'react-toastify';

import Routes from "./Routes";

import 'react-toastify/dist/ReactToastify.css';


import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
