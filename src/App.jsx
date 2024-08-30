import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];
  return <AnimatePresence mode="wait"></AnimatePresence>;
}

export default App;
