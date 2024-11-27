import React from 'react';

const Signout = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <span role="img" aria-label="sign-out" style={styles.icon}>
            🚪
          </span>
        </div>
        <h2 style={styles.title}>You have been signed out</h2>
        <p style={styles.message}>
          You have successfully signed out. We hope to see you again soon!
        </p>
        <button style={styles.button} onClick={() => window.location.href = '/Dashboard'}>
          Go to Dashboards
        </button>
      </div>
    </div>
  );
};

// Styles for the component (inline styling)
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7fafc',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  iconContainer: {
    backgroundColor: '#f56c42',
    padding: '20px',
    borderRadius: '50%',
    marginBottom: '20px',
    display: 'inline-block',
  },
  icon: {
    fontSize: '30px',
    color: '#fff',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3182ce',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Signout;
