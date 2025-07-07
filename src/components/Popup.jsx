import React from 'react'

function Popup({ open, onClose, children }) {
    if (!open) return null
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.22)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                background: 'rgba(255,255,255,0.98)',
                borderRadius: 22,
                boxShadow: '0 8px 40px #ff8fa355, 0 1.5px 8px #ffe06633',
                padding: '38px 28px 32px 28px',
                minWidth: 260,
                maxWidth: 380,
                textAlign: 'center',
                position: 'relative',
                animation: 'popupIn 0.45s cubic-bezier(.23,1.01,.32,1)'
            }}>
                <button
                    onClick={onClose}
                    className='close-button'
                    aria-label="Cerrar"
                    onMouseOver={e => e.currentTarget.style.color = '#ff8787'}
                    onMouseOut={e => e.currentTarget.style.color = '#ff8fa3'}
                >x</button>
                {children}
            </div>
            <style>
                {`
          @keyframes popupIn {
            0% { opacity: 0; transform: translateY(24px) scale(0.97);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
        `}
            </style>
        </div>
    )
}

export default Popup