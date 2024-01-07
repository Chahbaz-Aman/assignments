import { useState } from 'react'

function BusinessCard({
  name, 
  short_description,
  socials,
  interests
}) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <div style={styles.description}>{short_description}</div>
      <div style={styles.socialLinks}>{socials}</div>
      <div style={styles.interestItem}>{interests}</div>
    </div>
  )
}

function App() {
  return (
    <>
      <BusinessCard name='Chahbaz' 
      short_description='Data Scientist' 
      socials='none' 
      interests='AI, ML, Programming, EV, Engineeering, Finance, Business, Geopolitics, Philosophy'
      />
    </>
  )
}

// Styles
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa'
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  socialLinks: {
    display: 'flex',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff', // Text color
    padding: '10px 15px', // Padding for the button
    borderRadius: '5px', // Border radius for rounded corners
    backgroundColor: '#007BFF', // Background color for the button
    display: 'inline-block', // Display as inline-block to be side by side
    margin: '10px', // Margin between buttons
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  },
  interestsHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  interestsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#555',
  },
};

export default App
