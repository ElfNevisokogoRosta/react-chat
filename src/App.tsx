import { RouterProvider } from "react-router-dom";
import router from "./routes/route.tsx"; // Make sure to replace with the actual path to your router file

function App() {
  return <RouterProvider router={router} />;
}

export default App;
