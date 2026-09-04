
const ThemeOne = ({ attributes = {}, setAttributes, RichTextEl, isBackend = false }) => {
  return (
    <div className="gbb-pricing-container">
      <div className="gbb-pricing-grid">
        {/* Starter Plan */}
        <div className="gbb-pricing-card">
          <div className="gbb-pricing-card-top">
            <h2 className="gbb-pricing-name">
              Starter
              <span className="sr-only">Plan</span>
            </h2>
            <p className="gbb-pricing-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="gbb-pricing-price-wrap">
              <strong className="gbb-pricing-price">$20</strong>
              <span className="gbb-pricing-period">/month</span>
            </p>
            <a className="gbb-pricing-button" href="#">
              Get Started
            </a>
          </div>

          <div className="gbb-pricing-card-bottom">
            <p className="gbb-features-title">What's included:</p>
            <ul className="gbb-features-list">
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">10 users</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">2GB of storage</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">Email support</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-error">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="gbb-feature-text">Help center access</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-error">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="gbb-feature-text">Phone support</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-error">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="gbb-feature-text">Community access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="gbb-pricing-card">
          <div className="gbb-pricing-card-top">
            <h2 className="gbb-pricing-name">
              Pro
              <span className="sr-only">Plan</span>
            </h2>
            <p className="gbb-pricing-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="gbb-pricing-price-wrap">
              <strong className="gbb-pricing-price">$30</strong>
              <span className="gbb-pricing-period">/month</span>
            </p>
            <a className="gbb-pricing-button" href="#">
              Get Started
            </a>
          </div>

          <div className="gbb-pricing-card-bottom">
            <p className="gbb-features-title">What's included:</p>
            <ul className="gbb-features-list">
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">20 users</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">5GB of storage</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">Email support</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">Help center access</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-error">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="gbb-feature-text">Phone support</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-error">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="gbb-feature-text">Community access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="gbb-pricing-card">
          <div className="gbb-pricing-card-top">
            <h2 className="gbb-pricing-name">
              Enterprise
              <span className="sr-only">Plan</span>
            </h2>
            <p className="gbb-pricing-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="gbb-pricing-price-wrap">
              <strong className="gbb-pricing-price">$100</strong>
              <span className="gbb-pricing-period">/month</span>
            </p>
            <a className="gbb-pricing-button" href="#">
              Get Started
            </a>
          </div>

          <div className="gbb-pricing-card-bottom">
            <p className="gbb-features-title">What's included:</p>
            <ul className="gbb-features-list">
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">50 users</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">20GB of storage</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">Email support</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">Help center access</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">Phone support</span>
              </li>
              <li className="gbb-feature-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gbb-icon-success">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="gbb-feature-text">Community access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeOne;
