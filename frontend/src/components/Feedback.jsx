import React, { useState } from 'react';

function FeedbackForm() {
  const [customerName, setCustomerName] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedbackMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (customerName.trim() !== '' && feedbackMessage.trim() !== '') {
      const newFeedback = { customerName, feedbackMessage };
      setFeedbackList([...feedbackList, newFeedback]);
      setCustomerName('');
      setFeedbackMessage('');
    }
  };

  return (
    <div className="container">
      <h1>Add Customer Feedback</h1>
      
      <div className="feedback-form">
        <label htmlFor="customerName">Your Name:</label>
        <input 
          type="text" 
          id="customerName" 
          value={customerName} 
          onChange={handleNameChange} 
          required 
        />
        
        <label htmlFor="feedbackMessage">Your Feedback:</label>
        <textarea 
          id="feedbackMessage" 
          value={feedbackMessage} 
          onChange={handleFeedbackChange} 
          required 
        ></textarea>
        
        <button className="submit-button" onClick={handleSubmit}>Submit Feedback</button>
      </div>

      <div className="container">
        <h1>Customer Feedback</h1>
        
        {feedbackList.map((feedback, index) => (
          <div className="feedback-item" key={index}>
            <p><span className="customer-name">{feedback.customerName}:</span> {feedback.feedbackMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackForm;
