import React, { useState, ChangeEvent, FormEvent } from 'react'; 
import instagramLogo from '@/assets/images/instagram.svg';
import telegramLogo from '@/assets/images/telegram.svg';
import facebookLogo from '@/assets/images/facebook.svg';
import { CONSTANTS } from "../pages/environments/environment";

interface FormData {
  name: string;
  surname: string;
  message: string;
}

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { BOT_TOKEN, CHAT_ID } = CONSTANTS;

    const { name, surname, message } = formData;

    if (!name || !surname || !message) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const textMessage = `Yangi kontakt xabari:\nIsm: ${name}\nFamiliya: ${surname}\nXabar: ${message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: textMessage,
        }),
      });

      const data = await response.json();
      if (data.ok) {
        alert('Xabar muvaffaqiyatli yuborildi!');
        setFormData({ name: '', surname: '', message: '' });
      } else {
        console.error('Telegram API xatosi:', data.description);
        alert(`Xabar yuborishda xato: ${data.description}`);
      }
    } catch (error) {
      console.error('Xatolik:', error);
      alert('Xabar yuborishda kutilmagan xato yuz berdi.');
    }
  };

  return (
    <section className="contacts">
      <div className="container contacts_content">
        <div className="contacts_textbox">
          <h2 className="contacts_title">WRITE TO US</h2>
          <div className="contacts_dev_info">
            <p className="information">SOCIAL MEDIA</p>
            <a href="https://www.instagram.com/firdavskomilov01/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://t.me/firdavs2005_bot" target="_blank" rel="noopener noreferrer">
              <img src={telegramLogo} alt="Telegram" />
            </a>
            <a href="https://www.facebook.com/Фирдавс" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="text-contact">CONTACT FORM</h2>

          <div className="text">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="ism"
            />
          </div>

          <div className="text">
            <label htmlFor="surname">SURNAME</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="surname"
            />
          </div>

          <div className="massage">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="massage"
            />
          </div>

          <button type="submit" className="btn">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;



