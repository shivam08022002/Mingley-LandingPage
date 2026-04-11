import loveAndArrow from '../assets/love&arrow.jpg';
import ringImage from '../assets/ring.jpg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-title-wrapper" style={{ position: 'relative' }}>
          <img src={loveAndArrow} alt="" className="hero-love-arrow" />
          <h1>
            Need a <span>Dating App?</span>
          </h1>
        </div>
        <p>
          Are you looking for a cool dating platform where you can chat, meet other people,
          register immediately for free without having to provide an email address? Trying to find
          somebody to date, flirt or chat with? Download the app Now.
        </p>
        <div className="hero-buttons">
          <StoreButton type="apple" />
          <StoreButton type="google" />
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-ring-container">
          <img src={ringImage} alt="" className="hero-ring-img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        {/* Chat message card - Sara Brown */}
        <div className="hero-chat-card hero-chat-sara">
          <div className="hero-chat-header">
            <img src="/images/profile-woman-1.png" alt="Sara Brown" className="hero-chat-avatar" />
            <div className="hero-chat-name">
              <strong>Sara Brown</strong>
            </div>
          </div>
          <p className="hero-chat-msg">Hi Mathew, have you seen the new movie featuring Daniel...</p>
        </div>

        {/* Chat bubble - You */}
        <div className="hero-chat-bubble hero-chat-you">
          <div className="hero-chat-bubble-header">
            <span className="hero-chat-sender">You</span>
            <span className="hero-chat-time">09:37 AM</span>
          </div>
          <p>Good Morning, any plan for today?</p>
        </div>

        {/* Chat message card - Belle Benson */}
        <div className="hero-chat-card hero-chat-belle">
          <div className="hero-chat-header">
            <img src="/images/profile-woman-2.png" alt="Belle Benson" className="hero-chat-avatar" />
            <div className="hero-chat-name">
              <strong>Belle Benson</strong>
              <span className="hero-online-dot"></span>
            </div>
            <span className="hero-chat-time">3:45 PM</span>
          </div>
          <p className="hero-chat-msg">Hi, How are you? Nice to meet you? Free now, You?</p>
          <span className="hero-chat-badge">2</span>
        </div>

        {/* Pricing card */}
        <div className="hero-pricing-card">
          <div className="hero-pricing-icon">★</div>
          <div className="hero-pricing-info">
            <strong>Starter X</strong>
            <span>3 Months</span>
          </div>
          <div className="hero-pricing-amount">$33.00</div>
        </div>

        {/* Profile card snippet */}
        <div className="hero-profile-card">
          <img src="/images/profile-man-1.png" alt="Profile" className="hero-profile-card-img" />
          <div className="hero-profile-card-nav">
            <span className="hero-nav-icon hero-nav-active">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </span>
            <span className="hero-nav-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
            </span>
            <span className="hero-nav-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            </span>
            <span className="hero-nav-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="hero-action-btn hero-action-phone">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
        <div className="hero-action-btn hero-action-heart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="hero-action-btn hero-action-like">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export function StoreButton({ type }) {
  if (type === 'apple') {
    return (
      <a href="#" className="btn-store">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="btn-store-text">
          <span>Download on the</span>
          <strong>App Store</strong>
        </div>
      </a>
    );
  }

  return (
    <a href="#" className="btn-store">
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
      <div className="btn-store-text">
        <span>Get it on</span>
        <strong>Google Play</strong>
      </div>
    </a>
  );
}
