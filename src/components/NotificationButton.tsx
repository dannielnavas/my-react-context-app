import { useNotification } from "../hooks/useNotification";

const NotificationButton = () => {
  const { showNotification } = useNotification();
  return (
    <button
      onClick={() => showNotification("✅ tu transacción se ha realizado con éxito")}
    >
      Confirmar transacción
    </button>
  );
};

export { NotificationButton };
