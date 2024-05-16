import { useState, useEffect } from 'react';

function RegistrosForm({ onSubmit, onCancelEdit, editingRegistro }) {
  const [registro, setRegistro] = useState({
    idregistro: null,
    tipocafe: '',
    tiempogerminacion: '',
    tiemposiembra: '',
    tiempofruto: '',
    aniosproducion: '',
  });

  useEffect(() => {
    if (editingRegistro) {
      const { idregistro, ...rest } = editingRegistro;
      setRegistro({ idregistro, ...rest });
    }
  }, [editingRegistro]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistro({ ...registro, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(registro);
    setRegistro({
      idregistro: null,
      tipocafe: '',
      tiempogerminacion: '',
      tiemposiembra: '',
      tiempofruto: '',
      aniosproducion: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tipocafe"
        placeholder="Tipo de café"
        value={registro.tipocafe}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tiempogerminacion"
        placeholder="Tiempo de germinación"
        value={registro.tiempogerminacion}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tiemposiembra"
        placeholder="Tiempo de siembra"
        value={registro.tiemposiembra}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tiempofruto"
        placeholder="Tiempo de fruto"
        value={registro.tiempofruto}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="aniosproducion"
        placeholder="Años de producción"
        value={registro.aniosproducion}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingRegistro ? 'Guardar cambios' : 'Agregar'}</button>
      {editingRegistro && <button type="button" onClick={onCancelEdit}>Cancelar edición</button>}
    </form>
  );
}

export default RegistrosForm;
