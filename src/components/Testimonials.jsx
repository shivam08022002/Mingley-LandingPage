import testimonialImg from '../assets/testimonial.jpg';

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="testimonials-content">
        <div className="testimonials-left">
          <div className="section-header fade-up" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <div className="section-watermark" style={{ left: '50%' }}>Testimonials</div>
            <h2>
              Awesome Feedbacks
              <span className="emoji">💬</span>
            </h2>
          </div>

          <div className="testimonial-quote fade-up" >
            <p className='testi-text' style={{marginTop:'15%'}}>
              I've been using Amorly for about 3 months now, and I've already
              met so many amazing people! The interface is incredibly smooth,
              and the matching algorithm actually works. I found my partner
              through this app, and we've been inseparable ever since. Highly
              recommend it to anyone looking for genuine connections!
            </p>
            <div className="testimonial-author">
              <div className="testimonial-author-row">
                <img src="/images/profile-woman-2.png" alt="Catherina Moyer" className="testimonial-author-avatar" />
                <div>
                  <strong>Catherina Moyer</strong>
                  <span>Community Head</span>
                </div>
              </div>
              <div className="testimonial-stars">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="testimonial-star">{star}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-right fade-up">
          <div className="testimonial-visual">
            <img src={testimonialImg} alt="Testimonial Match" style={{ width: '100%', height: 'auto', borderRadius: '20px', background: 'transparent' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
