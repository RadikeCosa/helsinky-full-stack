const Total = ({ parts }) => {
  // Usamos reduce para calcular la suma de los ejercicios
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};
export default Total;
