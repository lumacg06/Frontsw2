import { useState, useEffect } from 'react'

import RegistrosTable from './components/RegistrosTable'
import RegistrosForm from './components/RegistrosForm'

import './App.css'
import axios from 'axios'

function App() {
  const [registros, setRegistros] = useState([])

  const [editingRegistro, setEditingRegistro] = useState(null) +

    //Actualiza la lista de registros por cada registro nuevo
    useEffect(() => {
      fetchRegistros()
    }, [])

  //crea o actualiza un registro
  const handleCreateOrUpdateRegistro = async (registroData) => {
    if (editingRegistro) {
      await axios.put(`http://localhost:8080/api/registros/${editingRegistro.id}`, registroData)
    } else {
      await axios.post(`http://localhost:8080/api/registros/`, registroData)
    }
    fetchRegistros()
    setEditingRegistro(null)
  }
  //Recorre la lista de registros y los retorna como respuesta
  const fetchRegistros = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/registros')
      setRegistros(response.data)

    } catch (error) {
      console.log('Error al cargar los registros : ', error)

    }
  }
  //Permite edidtar un registro
  const handleEditRegistro = (registro) => {
    setEditingRegistro(registro)
  }
  //Permite eliminar un registro a partir de un Id
  const handleDeleteRegistro = async (registroId) => {
    await axios.delete(`http://localhost:8080/api/registros/${registroId}`)
    fetchRegistros()
  }

  return (
    <div className='App'>
      <h1>Api Tipos de Cafe</h1>
      <br />
      <h2>Lista Registros</h2>
      <RegistrosTable registros={registros} onEdit={handleEditRegistro} onDelete={handleDeleteRegistro} />
      <h2>{editingRegistro ? 'Editar registro' : 'Crear registro'}</h2>
      <RegistrosForm onSubmit={handleCreateOrUpdateRegistro} initialRegistro={editingRegistro} />
    </div>
  )
}

export default App