import './style.css';

document.querySelector('#app').innerHTML = `
<header class="header">
  <div class="container nav-container">
    <a href="#" class="logo">Prosperix</a>

    <nav class="nav">
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </nav>

    <div class="nav-actions">
      <a href="#" class="signin-link">Sign In</a>
      <a href="#" class="btn btn-primary">Get Started</a>
    </div>

    <button class="mobile-toggle">☰</button>
  </div>
</header>

<section class="hero">
  <div class="container hero-grid">

    <div class="hero-content">
      <h1>
        Navigating the <span>Global</span><br>
        Financial Landscape
      </h1>

      <p>
        Empowering your journey to global financial success
        through customized financial consulting.
      </p>

      <form class="hero-form">
        <input type="email" placeholder="Your email address">
        <button class="btn btn-primary">
          Get Started
        </button>
      </form>
    </div>

    <div class="hero-image">
      <img
        src="https://placehold.co/600x450"
        alt="Dashboard"
      />
    </div>

  </div>
</section>

<section class="clients">
  <div class="container">
    <div class="client-logos">
      <span>Walmart</span>
      <span>FedEx</span>
      <span>Amazon</span>
      <span>Stripe</span>
      <span>Airbnb</span>
      <span>Ripple</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="container two-column">

    <div>
      <span class="section-tag">
        OUR EXPERTISE
      </span>

      <h2>
        Transforming Finances With Strategic Wealth Management
      </h2>

      <p>
        Guiding you on your financial success journey
        through personalized advisory services.
      </p>

      <br>

      <a href="#" class="btn btn-outline">
        Explore Services
      </a>
    </div>

    <div>
      <img
        src="https://placehold.co/600x450"
        alt=""
      />
    </div>

  </div>
</section>

<section class="section">
  <div class="container">

    <h2>What Our Customers Say</h2>

    <div class="testimonial-grid">

      <div class="testimonial-card">
        <h3>Grace Turner</h3>
        <p>
          Financial expertise has made a significant impact.
        </p>
      </div>

      <div class="testimonial-card featured">
        <h3>Linda Carter</h3>
        <p>
          Financial planning transformed my future.
        </p>
      </div>

      <div class="testimonial-card">
        <h3>Alex Walker</h3>
        <p>
          Estate planning was seamless and stress-free.
        </p>
      </div>

    </div>

  </div>
</section>

<section class="section">
  <div class="container">

    <div class="cta-wrapper">

      <div>

        <h2>
          Get Started For Free
        </h2>

        <p>
          No credit card required.
        </p>

        <form class="cta-form">
          <input
            type="email"
            placeholder="Email Address"
          >
          <button class="btn btn-light">
            Get Started
          </button>
        </form>

      </div>

      <div>
        <img
          src="https://placehold.co/500x400"
          alt=""
        >
      </div>

    </div>

  </div>
</section>

<footer class="footer">
  <div class="container footer-grid">

    <div>
      <h3>Prosperix</h3>
      <p>
        Helping clients achieve financial success.
      </p>
    </div>

    <div>
      <h4>Services</h4>
      <ul>
        <li>Insurance Planning</li>
        <li>Estate Planning</li>
        <li>Tax Optimization</li>
      </ul>
    </div>

    <div>
      <h4>Explore</h4>
      <ul>
        <li>About</li>
        <li>Blog</li>
        <li>Privacy</li>
      </ul>
    </div>

    <div>
      <h4>Contact</h4>
      <p>contact@prosperix.com</p>
    </div>

  </div>

  <div class="footer-bottom">
    <div class="container">
      © 2025 Prosperix. All Rights Reserved.
    </div>
  </div>
</footer>
`;

const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('active');
});