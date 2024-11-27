import React, { useState } from 'react';

// Sample notifications data
const notifications = [
  {
    id: 1,
    title: 'New Message from HR',
    description: 'Please check your inbox for the latest message from HR regarding your performance review.',
    date: '2024-11-18',
    read: false,
  },
  {
    id: 2,
    title: 'System Maintenance Scheduled',
    description: 'The system will undergo maintenance on 20th November from 2 AM to 4 AM. Please plan accordingly.',
    date: '2024-11-17',
    read: false,
  },
  {
    id: 3,
    title: 'Reminder: Weekly Team Meeting',
    description: 'The weekly team meeting is scheduled for tomorrow at 10 AM.',
    date: '2024-11-16',
    read: true,
  },
];

const Notification = () => {
  const [notificationsList, setNotificationsList] = useState(notifications);

  // Mark a notification as read
  const markAsRead = (id) => {
    const updatedNotifications = notificationsList.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotificationsList(updatedNotifications);
  };

  // Inline styles
  const styles = {
    notificationContainer: {
      width: '90%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f4f4f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '28px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    notificationList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    notificationItem: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      marginBottom: '15px',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease',
    },
    notificationItemRead: {
      backgroundColor: '#e1e1e1', // Slightly different color for read notifications
    },
    notificationTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: 0,
      color: '#333',
    },
    notificationDate: {
      fontSize: '12px',
      color: '#888',
      marginTop: '5px',
    },
    notificationDescription: {
      fontSize: '14px',
      color: '#555',
      marginTop: '10px',
    },
    markReadButton: {
      alignSelf: 'flex-end',
      marginTop: '10px',
      padding: '6px 12px',
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    },
    markReadButtonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.notificationContainer}>
      <h1 style={styles.header}>Notification Inbox</h1>
      <ul style={styles.notificationList}>
        {notificationsList.length === 0 ? (
          <p>No notifications available.</p>
        ) : (
          notificationsList.map((notification) => (
            <li
              key={notification.id}
              style={{
                ...styles.notificationItem,
                ...(notification.read ? styles.notificationItemRead : {}),
              }}
            >
              <div style={styles.notificationTitle}>{notification.title}</div>
              <div style={styles.notificationDate}>{notification.date}</div>
              <p style={styles.notificationDescription}>{notification.description}</p>
              {!notification.read && (
                <button
                  style={styles.markReadButton}
                  onClick={() => markAsRead(notification.id)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = styles.markReadButtonHover.backgroundColor)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = styles.markReadButton.backgroundColor)}
                >
                  Mark as Read
                </button>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Notification;
