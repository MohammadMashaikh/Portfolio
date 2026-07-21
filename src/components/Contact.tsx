import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

/* ── Custom Notification ─────────────────────────────── */
type NotifType = 'success' | 'error';

interface NotifProps {
  type: NotifType;
  visible: boolean;
  senderName: string;
  onClose: () => void;
}

const Notification = ({ type, visible, senderName, onClose }: NotifProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (visible) {
      timerRef.current = setTimeout(onClose, 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visible, onClose]);

  return (
    <div className={`notif-wrapper ${visible ? 'notif-show' : ''} notif-${type}`}>
      <div className="notif-glow" />

      {/* Icon */}
      <div className="notif-icon-ring">
        {type === 'success' ? (
          <svg className="notif-icon" viewBox="0 0 52 52">
            <circle className="notif-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="notif-check" fill="none" d="M14 27l8 8 16-16" />
          </svg>
        ) : (
          <svg className="notif-icon" viewBox="0 0 52 52">
            <circle className="notif-circle notif-circle-err" cx="26" cy="26" r="25" fill="none" />
            <path className="notif-cross" fill="none" d="M16 16 36 36 M36 16 16 36" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div className="notif-text">
        {type === 'success' ? (
          <>
            <p className="notif-title">Message Delivered! 🎉</p>
            <p className="notif-desc">
              Thanks <strong>{senderName || 'there'}</strong>! I'll get back to you very soon.
            </p>
          </>
        ) : (
          <>
            <p className="notif-title">Something went wrong</p>
            <p className="notif-desc">Please try again or reach me directly via email.</p>
          </>
        )}
      </div>

      {/* Close */}
      <button className="notif-close" onClick={onClose} aria-label="Dismiss">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Progress bar */}
      <div className={`notif-progress ${visible ? 'notif-progress-run' : ''}`} />
    </div>
  );
};

/* ── Contact Section ─────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState<{ visible: boolean; type: NotifType }>({ visible: false, type: 'success' });

  const closeNotif = () => setNotif(n => ({ ...n, visible: false }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      name: formData.name,
      email: formData.email,
    };

    emailjs.send('service_8dluq1w', 'template_5kbxylb', templateParams, '-08J8OTZy12fiPVAH')
      .then(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
        setNotif({ visible: true, type: 'success' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
        setNotif({ visible: true, type: 'error' });
      });
  };

  const SendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      {/* ── Custom notification ── */}
      <Notification
        type={notif.type}
        visible={notif.visible}
        senderName={formData.name}
        onClose={closeNotif}
      />

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
              visions. Feel free to reach out!
            </p>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} disabled={loading} />
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} disabled={loading} />
                </div>
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} disabled={loading} />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" rows={6} placeholder="Your Message" required value={formData.message} onChange={handleChange} disabled={loading} />
              </div>
              <button type="submit" className="btn btn-primary btn-send" disabled={loading}>
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Social Footer */}
      <div className="social-footer" id="socialFooter">
        <a href="mailto:mohammadmashaikh@outlook.com" className="social-link" title="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="https://github.com/MohammadMashaikh" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2773 21.0497 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-mashaikh/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
          </svg>
        </a>
      </div>

      {/* WhatsApp Chat Button */}
      <a href="https://wa.me/+962789447358?text=Hello%20Mohammad!" target="_blank" rel="noopener noreferrer" className="whatsapp-button" title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.713 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Mohammad Al-Mashaikh. Built with passion and code.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
