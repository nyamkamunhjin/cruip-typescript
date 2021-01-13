import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer02';

const LayoutAlternative = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" />
    <main className="site-content">
      {children}
    </main>
    <Footer className="reveal-from-bottom" data-reveal-offset="0" />
    <div className="illustration-section-09"></div>
  </React.Fragment>
);

export default LayoutAlternative;  