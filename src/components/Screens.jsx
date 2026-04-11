import { StoreButton } from './Hero';

export default function Screens() {
  return (
    <section className="section screens" id="screens">
      <div className="section-header fade-up">
        <div className="section-watermark">Screens</div>
        <h2>
          Few Awesome Screens
          <span className="emoji">💖</span>
        </h2>
      </div>

      <div className="screens-showcase fade-up">
        <img
          src="/images/app-screens.png"
          alt="Dating app screen showcases including messaging, profile browsing, subscription plans, match notifications, events, and detailed profiles"
          loading="lazy"
        />
      </div>

      <div className="section-buttons fade-up">
        <StoreButton type="apple" />
        <StoreButton type="google" />
      </div>
    </section>
  );
}
