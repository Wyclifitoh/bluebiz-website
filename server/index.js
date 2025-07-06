import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for demo purposes
const submissions = {
  joinUs: [],
  contact: []
};

// Join Us form endpoint
app.post('/api/join', (req, res) => {
  try {
    const { firstName, lastName, email, phone, county, businessStage, businessType, interests } = req.body;
    
    // Basic validation
    if (!firstName || !lastName || !email || !phone || !county) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Store submission
    const submission = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      county,
      businessStage,
      businessType,
      interests,
      submittedAt: new Date().toISOString()
    };

    submissions.joinUs.push(submission);
    
    console.log('New Join Us submission:', submission);
    
    res.json({ 
      success: true, 
      message: 'Thank you for joining BlueBiz Kenya! We will contact you soon.',
      submissionId: submission.id
    });
  } catch (error) {
    console.log('Join Us submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: `Something went wrong. Please try again. ${error}` 
    });
  }
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all fields' 
      });
    }

    // Store submission
    const submission = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString()
    };

    submissions.contact.push(submission);
    
    console.log('New Contact submission:', submission);
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.',
      submissionId: submission.id
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

// Get all submissions (for admin purposes)
app.get('/api/submissions', (req, res) => {
  res.json(submissions);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`BlueBiz Kenya server running on port ${PORT}`);
});