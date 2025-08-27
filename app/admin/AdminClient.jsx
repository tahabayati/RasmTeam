"use client";
import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiCalendar, FiUser, FiMessageSquare, FiEye, FiX } from 'react-icons/fi';
import styles from '../../styles/admin.module.css';

export default function AdminClient() {
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [newsletterSubscribers, setNewsletterSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('contact');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [contactRes, newsletterRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/newsletter')
      ]);
      
      if (contactRes.ok) {
        const contactData = await contactRes.json();
        setContactSubmissions(contactData.submissions || []);
      }
      
      if (newsletterRes.ok) {
        const newsletterData = await newsletterRes.json();
        setNewsletterSubscribers(newsletterData.subscribers || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const openMessage = (message) => {
    setSelectedMessage(message);
  };

  const closeMessage = () => {
    setSelectedMessage(null);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        <p className={styles.subtitle}>Manage contact submissions and newsletter subscribers</p>
      </header>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'contact' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <FiMessageSquare className={styles.tabIcon} />
          Contact Submissions ({contactSubmissions.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'newsletter' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('newsletter')}
        >
          <FiMail className={styles.tabIcon} />
          Newsletter Subscribers ({newsletterSubscribers.length})
        </button>
      </div>

      {activeTab === 'contact' && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Form Submissions</h2>
          {contactSubmissions.length === 0 ? (
            <div className={styles.emptyState}>
              <FiMessageSquare className={styles.emptyIcon} />
              <p>No contact submissions yet</p>
            </div>
          ) : (
            <div className={styles.messagesGrid}>
              {contactSubmissions.map((submission, index) => (
                <div key={index} className={styles.messageCard}>
                  <div className={styles.messageHeader}>
                    <div className={styles.messageInfo}>
                      <div className={styles.messageName}>
                        <FiUser className={styles.messageIcon} />
                        {submission.name}
                      </div>
                      <div className={styles.messageEmail}>
                        <FiMail className={styles.messageIcon} />
                        {submission.email}
                      </div>
                      <div className={styles.messageDate}>
                        <FiCalendar className={styles.messageIcon} />
                        {formatDate(submission.createdAt)}
                      </div>
                    </div>
                    <button 
                      className={styles.viewButton}
                      onClick={() => openMessage(submission)}
                    >
                      <FiEye className={styles.buttonIcon} />
                      View
                    </button>
                  </div>
                  <div className={styles.messagePreview}>
                    {submission.message.substring(0, 100)}
                    {submission.message.length > 100 && '...'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'newsletter' && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Newsletter Subscribers</h2>
          {newsletterSubscribers.length === 0 ? (
            <div className={styles.emptyState}>
              <FiMail className={styles.emptyIcon} />
              <p>No newsletter subscribers yet</p>
            </div>
          ) : (
            <div className={styles.subscribersList}>
              {newsletterSubscribers.map((subscriber, index) => (
                <div key={index} className={styles.subscriberItem}>
                  <div className={styles.subscriberEmail}>
                    <FiMail className={styles.subscriberIcon} />
                    {subscriber.email}
                  </div>
                  <div className={styles.subscriberDate}>
                    <FiCalendar className={styles.subscriberIcon} />
                    {formatDate(subscriber.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Message Modal */}
      {selectedMessage && (
        <div className={styles.modalOverlay} onClick={closeMessage}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Message Details</h3>
              <button className={styles.closeButton} onClick={closeMessage}>
                <FiX className={styles.closeIcon} />
              </button>
            </div>
            <div className={styles.modalContent}>
              <div className={styles.modalField}>
                <label>Name:</label>
                <span>{selectedMessage.name}</span>
              </div>
              <div className={styles.modalField}>
                <label>Email:</label>
                <span>{selectedMessage.email}</span>
              </div>
              <div className={styles.modalField}>
                <label>Date:</label>
                <span>{formatDate(selectedMessage.createdAt)}</span>
              </div>
              <div className={styles.modalField}>
                <label>Message:</label>
                <div className={styles.modalMessage}>{selectedMessage.message}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
