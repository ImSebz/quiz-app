import React from 'react'
import gatos from '../assets/gatos.jpg'

function SurpriseImage() {
  // Puedes cambiar la URL por cualquier imagen que desees
  return (
    <img
      src={gatos}
      alt="Sorpresa"
      style={{
        width: 280,
        borderRadius: 14,
        boxShadow: '0 2px 16px #ff8fa366',
        marginBottom: 8
      }}
    />
  )
}

export default SurpriseImage