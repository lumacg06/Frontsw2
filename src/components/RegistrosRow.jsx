// RegistrosRow.jsx


const RegistrosRow = ({ registro, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{registro.tipocafe}</td>
      <td>{registro.tiempogerminacion}</td>
      <td>{registro.tiemposiembra}</td>
      <td>{registro.tiempofruto}</td>
      <td>{registro.aniosproducion}</td>
      <td>
        <button onClick={() => onEdit(registro)}>Editar</button>
        <button onClick={() => onDelete(registro.idregistro)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default RegistrosRow;

