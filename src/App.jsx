import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewGamePage from "./pages/NewGamePage";
import GamePage from "./pages/GamePage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "new-game", element: <NewGamePage /> },
      { path: "play", element: <GamePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider basename="/tic-tac-toe" router={router} />;
}

export default App;
