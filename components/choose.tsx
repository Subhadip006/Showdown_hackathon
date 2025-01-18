import React from 'react';

const SelectionPage: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome! Please Select Your Best Role</h1>
        <div style={styles.buttonGroup}>
          <a href="#" style={{ ...styles.button, ...styles.supplier }}>Supplier</a>
          <a href="#" style={{ ...styles.button, ...styles.investor }}>Investor</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    textAlign: 'center',
    background: '#fff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    padding: '50px',
    maxWidth: '600px',
    width: '100%',
    animation: 'fadeIn 1s ease-in-out',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#444',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  button: {
    textDecoration: 'none',
    display: 'inline-block',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: '8px',
    transition: 'transform 0.3s, background-color 0.3s',
    background: 'linear-gradient(90deg, #007bff, #0056d8)',
  },
  supplier: {
    background: 'linear-gradient(90deg, #28a745, #218838)',
    height: '70px',
    width: '90px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  investor: {
    background: 'linear-gradient(90deg, #ffc107, #e0a800)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@media (max-width: 480px)': {
    buttonGroup: {
      flexDirection: 'column',
      gap: '15px',
    },
  },
};

export default SelectionPage;
