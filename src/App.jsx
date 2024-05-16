import { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrosTable from './components/RegistrosTable';
import RegistrosForm from './components/RegistrosForm';

const App = () => {
  const [registros, setRegistros] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchRegistros();
  }, []);

  const fetchRegistros = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/registros');
      setRegistros(response.data);
    } catch (error) {
      console.error('Error fetching registros:', error);
    }
  };

  const handleEdit = (idregistro) => {
    setEditingId(idregistro);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleSubmit = async (registro) => {
    try {
      if (editingId) {
        await axios.put(`http://localhost:8080/api/registros/${editingId}`, registro);
        setEditingId(null);
      } else {
        await axios.post('http://localhost:8080/api/registros', registro);
      }
      fetchRegistros(); // Actualizar la lista de registros después de agregar uno nuevo o editar
    } catch (error) {
      console.error('Error adding/editing registro:', error);
    }
  };

  const handleDelete = async (idregistro) => {
    try {
      await axios.delete(`http://localhost:8080/api/registros/${idregistro}`);
      fetchRegistros(); // Actualizar la lista de registros después de eliminar
    } catch (error) {
      console.error('Error deleting registro:', error);
    }
  };

  return (
    <div>
      <h1>Registros de Café</h1>
      <RegistrosTable
        registros={registros}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <h2>{editingId ? 'Editar Registro' : 'Agregar Nuevo Registro'}</h2>
      <RegistrosForm
        onSubmit={handleSubmit}
        onCancelEdit={handleCancelEdit}
        editingId={editingId}
      />
    </div>
  );
};

export default App;
