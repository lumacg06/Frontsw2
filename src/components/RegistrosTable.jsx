// RegistrosTable.jsx

import RegistrosRow from './RegistrosRow';

const RegistrosTable = ({ registros, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tipo de Café</th>
          <th>Tiempo de Germinación</th>
          <th>Tiempo de Siembra</th>
          <th>Tiempo de Fruto</th>
          <th>Años de Producción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {registros.map(registro => (
          <RegistrosRow
            key={registro.idregistro}
            registro={registro}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default RegistrosTable;
