import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/socialmedia.module.css';
import { RiChatSmileAiFill } from "react-icons/ri";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Toggle chatbox open/close
  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: "Hi, how can I help you?", sender: 'bot' }]);
    }
  }, [isOpen]);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const reply = generateReply(input);
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    }, 600);
  };

  const generateReply = (msg) => {
    msg = msg.toLowerCase();

    
  const keywords = [
    {
      keys: ['email marketing', 'email', 'emailing', 'mail marketing', 'e mail', 'marketing email'],
      response: 'Email marketing allows you to connect with your audience directly, build relationships, and drive conversions through personalized email campaigns.'
    },
    {
      keys: ['what is email marketing', 'email campaign', 'intro to email'],
      response: 'Email marketing is a digital strategy that involves sending promotional or informative emails to a targeted audience to boost engagement and sales.'
    },
    {
      keys: ['automation', 'automate', 'automated emails'],
      response: 'Email automation helps you send the right message at the right time using workflows, triggers, and personalized logic — all without manual effort.'
    },
    {
      keys: ['open rate', 'email open', 'how many open'],
      response: 'Open rate indicates the percentage of recipients who opened your email. A rate above 20% is generally considered strong, depending on your industry.'
    },
    {
      keys: ['click rate', 'clicks', 'click through'],
      response: 'Click-through rate (CTR) measures how many recipients clicked links in your email. It reflects engagement beyond just opening the message.'
    },
    {
      keys: ['unsubscribe', 'unsubscribe link', 'stop emails', 'opt out'],
      response: 'Each email includes an unsubscribe link in compliance with email marketing laws. This gives recipients full control over their preferences.'
    },
    {
      keys: ['templates', 'template', 'email designs'],
      response: 'Our platform provides a wide variety of professionally designed, fully responsive email templates that you can easily customize.'
    },
    {
      keys: ['newsletter', 'newsletters'],
      response: 'Newsletters allow you to share updates, news, and promotions with your audience. You can schedule and personalize them using our builder.'
    },
    {
      keys: ['drip campaign', 'drip', 'email series'],
      response: 'A drip campaign is a series of automated emails sent at strategic intervals to educate, engage, and convert your leads.'
    },
    {
      keys: ['segmentation', 'segment', 'segmented list'],
      response: 'Segmentation helps you group your contacts based on behavior, location, or interests to deliver more relevant and effective emails.'
    },
    {
      keys: ['personalization', 'personalize', 'customized emails'],
      response: 'You can personalize emails using dynamic tags such as name, company, or past activity to improve engagement and relevance.'
    },
    {
      keys: ['analytics', 'tracking', 'report', 'email stats'],
      response: 'Our analytics dashboard provides real-time insights into opens, clicks, bounces, unsubscribes, and other key campaign metrics.'
    },
    {
      keys: ['a/b testing', 'split testing', 'test campaigns'],
      response: 'A/B testing allows you to compare different versions of your emails to identify what resonates best with your audience.'
    },
    {
      keys: ['deliverability', 'inbox rate', 'delivery'],
      response: 'We maintain excellent deliverability through trusted IP addresses and proper domain authentication to maximize inbox placement.'
    },
    {
      keys: ['pricing', 'price', 'cost', 'subscription fee'],
      response: 'Our pricing is based on the number of contacts and features. Please refer to our pricing page for detailed plan options.'
    },
    {
      keys: ['free trial', 'trial'],
      response: 'We offer a 14-day free trial that includes full access to all features — no credit card required.'
    },
    {
      keys: ['integrations', 'integrate', 'apps'],
      response: 'Our platform integrates with leading tools like Shopify, Salesforce, HubSpot, WordPress, and over 100 others.'
    },
    {
      keys: ['crm', 'customer management'],
      response: 'You can sync your CRM data seamlessly to automate and personalize your email campaigns.'
    },
    {
      keys: ['compliance', 'gdpr', 'can-spam', 'policy'],
      response: 'We are fully compliant with GDPR, CAN-SPAM, and other global email marketing regulations to ensure your campaigns are safe and legal.'
    },
    {
      keys: ['schedule', 'timing', 'send later'],
      response: 'Our scheduler lets you set emails to be delivered at the optimal time for your audience, across time zones.'
    },
    {
      keys: ['mobile responsive', 'responsive', 'mobile friendly'],
      response: 'All of our templates are mobile-responsive and tested across devices to ensure your message looks great everywhere.'
    },
    {
      keys: ['spam', 'junk', 'spam filter'],
      response: 'We follow best practices to avoid spam filters — like using verified senders, minimal links, and clear opt-out options.'
    },
    {
      keys: ['support', 'help', 'assistance'],
      response: 'Our support team is available 24/7 via live chat, email, or phone to assist you with any issues or questions.'
    },
    {
      keys: ['contact', 'reach out'],
      response: 'You can contact our support team anytime at support@example.com or through the live chat in your dashboard.'
    },
    {
      keys: ['how are you', 'how r u', 'how do you do'],
      response: 'Good, I’m just a chat assistant, but I’m here and ready to help you anytime!'
    },
    {
      keys: ['subscription', 'subscribe', 'subscription plans', 'subscription pricing'],
      response: 'Our subscription plans are flexible and scale with your contact list. You can view all available options on our pricing page.'
    },

    {
      keys: ['thank', 'thanks', 'thank you'],
      response: 'I’m glad I could help. Let me know if there’s anything else you’d like to know!'
    },
    {
      keys: ['hi', 'hello', 'hey'],
      response: 'Hello! How can I assist you today with your email marketing needs?'
    },
    {
      keys: ['ok', 'okay', 'cool', 'got it'],
      response: 'Great! If you need anything else, feel free to ask. I’m here to help. 😊'
    }

  ];


    for (const item of keywords) {
      if (item.keys.some(k => msg.includes(k))) return item.response;
    }

    const suggestions = keywords
      .map(item => `• ${item.keys[0].charAt(0).toUpperCase() + item.keys[0].slice(1)}`)
      .slice(0, 10)
      .join('\n');

    return `Sorry, I didn't understand that.`;
    
    // return `Sorry, I didn't understand that.\n\nTry asking about:\n\n${suggestions}`;
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className={styles.chatboxContainer}>
          <div className={styles.chatboxHeader}>
            <span>Chat Support</span>
            <button onClick={handleToggle} className={styles.closeButton}>✕</button>
          </div>

          <div className={styles.chatboxMessages}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${styles.chatboxMessage} ${msg.sender === 'user' ? styles.user : styles.bot}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.chatboxInput}>
            <input
              type="text"
              value={input}
              placeholder="Type a message…"
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className={styles.chatboxInputField}
            />
            <button onClick={handleSend} className={styles.chatboxSendButton}>Send</button>
          </div>
        </div>
      )}

      <button className={styles.toggleButton} onClick={handleToggle}>
        <RiChatSmileAiFill />
      </button>
    </div>
  );
}

export default ChatBox;
