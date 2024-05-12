import React from 'react';

function RegistrosRow({ registro, onEdit, onDelete }) {
    const handleEdit = () => {
        onEdit(registro)
    }
    const handleDelete = () => {
        onDelete(registro.id)
    }
    return (
        <tr>
            <td>{registro.tipocafe}</td>
            <td>{registro.tiempogerminacion}</td>
            <td>{registro.tiemposiembra}</td>
            <td>{registro.tiempofruto}</td>
            <td>{registro.aniosproducion}</td>
            <td>
                <button onClick={handleEdit}>Edit✏️</button>
                <button onClick={handleDelete}>Delete🚮</button>
            </td>
        </tr>
    )
}

export default RegistrosRow;