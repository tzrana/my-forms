import React, { useState } from 'react';

// Sample notices data
const notices = [
  {
    title: 'Meeting Reminder',
    description: 'There will be a team meeting at 3 PM tomorrow. Please be on time.',
    date: '2024-11-18',
  },
  {
    title: 'Project Deadline',
    description: 'The project submission deadline is approaching. Please submit your work by 25th November.',
    date: '2024-11-18',
  },
  {
    title: 'Maintenance Downtime',
    description: 'The website will be down for maintenance on 20th November from 1 AM to 3 AM.',
    date: '2024-11-17',
  },
];

const NoticeBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter notices based on search term
  const filteredNotices = notices.filter(
    (notice) =>
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Inline styles
  const styles = {
    noticeBoard: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    h1: {
      fontSize: '32px',
      margin: 0,
    },
    searchInput: {
      padding: '8px 12px',
      fontSize: '16px',
      width: '250px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    noticeList: {
      padding: 0,
      margin: 0,
    },
    noticeItem: {
      backgroundColor: '#f9f9f9',
      margin: '15px 0',
      padding: '20px',
      borderRadius: '6px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    noticeHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    noticeTitle: {
      margin: 0,
      fontSize: '20px',
      color: '#333',
    },
    date: {
      fontSize: '14px',
      color: '#888',
    },
    noticeDescription: {
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.5',
    },
    noticeItemHover: {
      backgroundColor: '#f1f1f1',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.noticeBoard}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Notice Board</h1>
        <input
          type="text"
          placeholder="Search notices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.noticeList}>
        {filteredNotices.length === 0 ? (
          <p>No notices found.</p>
        ) : (
          filteredNotices.map((notice, index) => (
            <div
              key={index}
              style={{ ...styles.noticeItem, ...styles.noticeItemHover }}
            >
              <div style={styles.noticeHeader}>
                <h2 style={styles.noticeTitle}>{notice.title}</h2>
                <span style={styles.date}>{notice.date}</span>
              </div>
              <p style={styles.noticeDescription}>{notice.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
