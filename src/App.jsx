import React from 'react'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖 Agent Two</h1>
        <p style={{ fontSize: '1.5rem' }}>AI-Powered Task Management Platform</p>
        <p style={{ marginTop: '2rem', opacity: 0.8 }}>Successfully Deployed! 🚀</p>
      </div>
    </div>
  )
}

export default App
