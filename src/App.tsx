import {RouterProvider} from 'react-router-dom';
import router from './routes/route.tsx'; // Make sure to replace with the actual path to your router file
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  console.log(API_URL)
  return <RouterProvider router={router}/>;
}

export default App;
