import Starfield from "./components/background/Starfield";
import Dashboard from "./features/dashboard/Dashboard";

export default function App() {
  return (
    <>
      <Starfield />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Dashboard />
        
        
      </div>
    </>
  );
}
