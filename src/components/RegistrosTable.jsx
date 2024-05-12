import React from 'react';
import PropTypes from 'prop-types';
import RegistrosRow from './RegistrosRow';

const RegistrosTable = (props) => {
  const { registros } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Tipo Cafe</th>
          <th>Tiempo Germinacion </th>
          <th>Tiempo Siembra </th>
          <th>Tiempo Fruto </th>
          <th>Años Produccion </th>
        </tr>
      </thead>
      <tbody>
        {registros.map((registro) => (
          <RegistrosRow key={registro.id} registro={registro} />
        ))}
      </tbody>
    </table>
  );
};

RegistrosTable.propTypes = {
  registros: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    tipoCafe: PropTypes.string.isRequired,
    tiempoGerminacion: PropTypes.number.isRequired,
    tiempoSiembra: PropTypes.number.isRequired,
    tiempoFruto: PropTypes.number.isRequired,
    añosProduccion: PropTypes.number.isRequired,
  })).isRequired,
};

export default RegistrosTable;