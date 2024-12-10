import { useContext } from "react";
import { NotificationContext } from "../Contexts/NotificationContext";

const useNotification = () => {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error("useNotification debe ser usado dentro de NotificationProvider");
  }

  return context;
};

export { useNotification };
