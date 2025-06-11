
// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";

// function App() {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
     
//     </BrowserRouter>
//   );
// }

// export default App;

import { Provider } from "react-redux"; 
import AppRoutes from "./routes/AppRoutes";
import 'react-toastify/dist/ReactToastify.css';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
