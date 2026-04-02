function Student({ student, onIncrease, onDecrease }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <p>Marks: {student.marks}</p>

      <button onClick={() => onIncrease(student.id)}>
        Increase
      </button>

      <button onClick={() => onDecrease(student.id)}>
        Decrease
      </button>
    </div>
  );
}

export default Student;
