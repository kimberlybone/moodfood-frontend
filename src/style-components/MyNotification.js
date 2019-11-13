import React from 'react'

function MyNotification() {
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#0f2f26',
      color: 'white',
      borderRadius: 3,
      borderLeft: 'solid',
      width: 30 + 'vh'
    }}>
      <div>
        <h2>{localStorage.mood}</h2>
        <p>Has joined the chat</p>
      </div>
    </div>
  )
}
export default MyNotification
