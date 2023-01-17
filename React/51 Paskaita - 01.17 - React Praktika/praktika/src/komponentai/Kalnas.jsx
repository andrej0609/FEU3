import React, { useState } from 'react';
import Modal from 'react-modal';

function Kalnas({ kalnas }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedMountain, setEditedMountain] = useState(kalnas);

  const handleEdit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  }

  const handleDelete = (event) => {
    event.preventDefault();
    const response = fetch(`http://localhost:5000/kalnai/${kalnas.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const handleModalSave = (event) => {
    event.preventDefault();
    const response = fetch(`http://localhost:5000/kalnai/${kalnas.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedMountain)
    });
    console.log(response);
    setIsModalOpen(false);
  }

  const handleChange = (event) => {
    setEditedMountain({
      ...editedMountain,
      [event.target.name]: event.target.value
    });
  }

  const handleCheckboxChange = (event) => {
    setEditedMountain({
      ...editedMountain,
      [event.target.name]: event.target.checked
    });
  }

  return (
    <div className="content">
      <h1>{kalnas.pavadinimas}</h1>
      <img src={kalnas.img} alt={kalnas.pavadinimas} />
      <p>Randasi: {kalnas.lokacija}</p>
      <p>Aukštis metrais: {kalnas.aukstis}</p>
      <p>Ar esu įvykęs: {kalnas.arEsuIvykes ? 'Taip' : 'Ne'}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose}>
        <form className='ModalForm' onSubmit={handleModalSave}>
          <label htmlFor="pavadinimas">Pavadinimas</label>
          <input
            type="text"
            name="pavadinimas"
            id="pavadinimas"
            value={editedMountain.pavadinimas}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="img">Nuotrauka</label>
          <input
            type="text"
            name="img"
            id="img"
            value={editedMountain.img}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="lokacija">Lokacija</label>
          <input
            type="text"
            name="lokacija"
            id="lokacija"
            value={editedMountain.lokacija}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="aukstis">Aukštis</label>
          <input
            type="number"
            name="aukstis"
            id="aukstis"
            value={editedMountain.aukstis}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="arEsuIvykes">Ar esu įveikęs?</label>
          <input
            type="checkbox"
            name="arEsuIvykes"
            id="arEsuIvykes"
            checked={editedMountain.arEsuIvykes}
            onChange={handleCheckboxChange}
          />
          <br />
          <button type="submit">Save</button>
          <button onClick={handleModalClose}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
}

export default Kalnas;


