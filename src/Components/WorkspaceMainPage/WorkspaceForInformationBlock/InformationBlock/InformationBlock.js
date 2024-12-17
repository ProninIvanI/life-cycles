import styles from './InformationBlock.module.css'
import { useSelector } from "react-redux";

export function InformationBlock() {
  const dataUser = useSelector((state) => state.user.data);

  // Проверка наличия данных
  if (!dataUser) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.miniContainer}>Информация о пользователе</div>
      <div>
        <h3>Пользовательская информация:</h3>
        <div>Email: {dataUser.userInfo.email}</div>
        <div>Имя: {dataUser.userInfo.name}</div>
      </div>

      <div>
        <h3>Данные о здоровье:</h3>
        <div>Активные минуты: {dataUser.healthData.activeMinutes}</div>
        <div>Калории: {dataUser.healthData.calories}</div>
        <div>Сердечный ритм: {dataUser.healthData.heartRate}</div>
        <div>Шаги: {dataUser.healthData.steps}</div>
        <div>Расстояние: {dataUser.healthData.distance}</div>
      </div>

      {/* Отображение других данных */}
      <div>
        <h3>История калорий:</h3>
        {dataUser.healthData.caloriesHistory.length > 0 ? (
          dataUser.healthData.caloriesHistory.map((calorie, index) => (
            <div key={index}>Калории на день {index + 1}: {calorie}</div>
          ))
        ) : (
          <div>Нет данных о калориях</div>
        )}
      </div>

      {/* Другие массивы можно обрабатывать аналогично */}
    </div>
  );
}