'use client';

import { useState } from 'react';

export default function Home() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'websites',
      title: 'Custom Landing Page — built to turn traffic into leads',
      why: 'Most websites don’t convert.',
      what: 'We build custom landing pages.',
      how: 'Designed to turn visitors into customers with coxnversion-focused layouts.',
    },
    {
      id: 'followups',
      title: 'Automated Messaging — email + SMS follow-ups',
      why: 'Leads forget fast.',
      what: 'Automated messages, emails, SMS.',
      how: 'We set up triggers to follow up instantly and nurture leads.',
    },
    {
      id: 'nolead',
      title: 'No Lead Left Behind — qualify, tag, and schedule clients',
      why: 'Manual tracking loses leads.',
      what: 'CRM-integrated dashboards.',
      how: 'Organize, tag, and track leads in one place.',
    },
    
  ];

  return (
    <main>
      <div className="spirals">
        <div className="spiral" />
      </div>

      <section className="hero">
        <h1>Nawara Labs</h1>
        <h2>We believe small businesses shouldn’t be doing everything manually.</h2>
       
        <p>
        That’s why we build systems that take care of the boring stuff — like lead capture, follow-ups, and bookings — so you can focus on what matters most: serving your customers.
        </p>
        <a href="#contact" className="cta-button">
          Book Your Free Demo
        </a>
      </section>

      <section className="services-section">
        <div className="services-list">
          <h3>Client Launch Offer</h3>
          <p>
          We believe growth should be smarter — not harder.
          If you're one of our first 5 , we’ll build your full client acquisition system to prove it.”
          </p>
          <ul className="offer-highlights">
            <li>Custom Landing Page</li>
            <li>Automated Messaging </li>
            <li>Lead & Booking Flow </li>
          </ul>
          <p>
            <strong>
             All done in 7 days. Apply now to claim your spot.
            </strong>
          </p>
          <a href="#contact" className="cta-button">Apply Now</a>
        </div>

        <div className="services-detail">
          <h4>Founder's Note</h4>
          <p>
          At Nawara Labs, we believe great businesses shouldn't be held back by complexity and chaos.
          We're here to fix that — with systems that simplify, automate, and grow with you.
          </p>
          <p>
          Only 5 launch clients.
          
         
          </p>
          <p>
          A full system — landing page, automations, and lead flow — built to convert, done-for-you.
          Start with us from day one.
          
         
          </p>
          <p>Don’t work more. Build smarter systems. That’s the Nawara way.</p>
          <p>— Nawara Labs Team</p>
        </div>
      </section>

      <div style={{ marginBottom: '3rem' }}></div> {/* Add spacing between sections */}

      <section className="services-section">
        <div className="services-list">
          <h3>Offer Breakdown</h3>
          <ul>
            {services.map((service) => (
              <li
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className={activeService?.id === service.id ? 'active' : ''}
              >
                {service.title}
              </li>
              
            ))}
          <section className="start-now-cta">
          <h3>Ready to Get Started?</h3>
          <p>Let’s launch your client-generation system in 7 days or less.</p>
          <a href="#contact" className="cta-button">Start Growing Now</a>
          </section>
          </ul>
        </div>
        


        <div className="services-detail">
          {activeService ? (
            <>
              <h4>{activeService.title}</h4>
              <p>
                <strong>Why:</strong> {activeService.why}
              </p>
              <p>
                <strong>What:</strong> {activeService.what}
              </p>
              <p>
                <strong>How:</strong> {activeService.how}
              </p>
            </>
          ) : (
            <p>Hover over an offer to learn more.</p>
          )}
        </div>
      </section>
    </main>
  );
}
