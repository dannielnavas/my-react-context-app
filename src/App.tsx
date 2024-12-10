import "./App.css";
import { Notification } from "./components/Notification";
import { NotificationButton } from "./components/NotificationButton";
import { NotificationProvider } from "./Contexts/NotificationContext";

function App() {
  return (
    <NotificationProvider>
      <h1>💸 Transacción Casi lista</h1>
      <p>¿Estas seguro que quieres completar esta transacción?</p>
      <NotificationButton />
      <Notification />
    </NotificationProvider>
  );
}

export default App;
