import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import harandianStyles from './Hirad-Harandian.module.css';

export const dynamic = "force-dynamic";

export default function HiradHarandianProject() {
  const project = {
    title: 'Logo, Brand System & Website for a Creative Industry Mentor',
    description: 'Creating a distinctive personal brand for a games business expert and startup consultant.',
    tags: ['Graphic Design', 'Website Design'],
    images: [
      '/Harandian/Consultant-Personal-Logo.jpg',
      '/Harandian/Consultant-Personal-Logo (1).jpg',
      '/Harandian/Untitled-1.jpg',
      '/Harandian/Untitled-2.jpg',
      '/Harandian/Untitled-13.jpg',
      '/Harandian/Untitled-144.jpg'
    ],
    ctaText: 'We had the pleasure of working with Hirad Harandian to create a brand identity that truly represents his unique position in the gaming and creative industry. The result is a versatile, modern brand system that works across digital and physical touchpoints.',
    ctaLink: 'https://hiradharandian.com',
    ctaLinkText: 'Visit Hirad Harandian\'s Website'
  };
  
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Link href="/projects" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </Link>
        
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.tags}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      
      <div className={harandianStyles.fullWidthContent}>
        {/* Introduction */}
        <div className={harandianStyles.introSection}>
          <p className={harandianStyles.largeText}>
            Hirad Harandian is a games business expert, startup consultant, and creative entrepreneur with over a decade of experience in the global and regional video game industry. His work spans from game production to mentorship, startup fundraising, and educational content creation.
          </p>
        </div>

        {/* Feature Image */}
        <div className={harandianStyles.featureImageWrapper}>
          <img 
            src="/Harandian/Consultant-Personal-Logo.jpg" 
            alt="Hirad Harandian Logo" 
            className={harandianStyles.featureImage} 
          />
        </div>
        
        {/* Project Overview */}
        <div className={harandianStyles.section}>
          <div className={harandianStyles.contentWithImage}>
            <div className={harandianStyles.textContent}>
              <h2 className={harandianStyles.sectionHeading}>Project Overview</h2>
              <p className={harandianStyles.largeText}>
                As a leading voice in the Middle Eastern game development and interactive media ecosystem, Hirad needed a strong personal brand and digital presence that would resonate with investors, startups, game developers, and thought leadership platforms alike.
                <br/><br/>
                We were tasked with designing a complete visual identity, a distinctive logo, and a modern, responsive website that reflects his consulting authority while carrying creative energy and subtle references to the gaming culture he champions.
              </p>
            </div>
            <div className={harandianStyles.sideImage}>
              <img 
                src="/Harandian/Untitled-1.jpg" 
                alt="Brand Identity Design" 
                className={harandianStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={harandianStyles.section}>
          <div className={harandianStyles.contentWithImage}>
            <div className={harandianStyles.textContent}>
              <h2 className={harandianStyles.sectionHeading}>Scope of Work</h2>
              <ul className={harandianStyles.bulletList}>
                <li>Logo Design</li>
                <li>Visual Identity System</li>
                <li>Web Design (UI/UX + Responsive Development)</li>
              </ul>
            </div>
            <div className={harandianStyles.sideImage}>
              <img 
                src="/Harandian/Untitled-2.jpg" 
                alt="Brand elements" 
                className={harandianStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Creative Direction */}
        <div className={harandianStyles.section}>
          <div className={harandianStyles.contentWithImage}>
            <div className={harandianStyles.sideImage}>
              <img 
                src="/Harandian/Consultant-Personal-Logo (1).jpg" 
                alt="Logo design process" 
                className={harandianStyles.contentImage}
              />
            </div>
            <div className={harandianStyles.textContent}>
              <h2 className={harandianStyles.sectionHeading}>Creative Direction & Design Language</h2>
              <p className={harandianStyles.largeText}>
                To bridge consulting professionalism with gaming heritage, we created a modular logo formed from two stylized "H" letters. The structure references Tetris game mechanics, symbolizing strategic thinking, precision, and creative problem-solving—the core of Hirad's work.
                <br/><br/>
                The website interface was designed with a clean, minimalist layout, structured for clarity and high readability. A tech-forward aesthetic paired with generous white space ensures his message is both approachable and authoritative.
              </p>
            </div>
          </div>
        </div>
        
        {/* Website & Graphic Assets */}
        <div className={harandianStyles.section}>
          <div className={harandianStyles.contentWithImage}>
            <div className={harandianStyles.textContent}>
              <h2 className={harandianStyles.sectionHeading}>Website & Graphic Assets</h2>
              <p className={harandianStyles.largeText}>
                The website was designed fully responsive for seamless viewing across all devices. We also crafted a library of icons and adaptable banners to maintain visual consistency across:
                <br/><br/>
                • Service showcases<br/>
                • Podcast promotion<br/>
                • Speaking engagement highlights<br/>
                • Social media formats from Instagram Stories to web hero banners
                <br/><br/>
                This modular asset system empowers the client to communicate effectively across platforms.
              </p>
            </div>
            <div className={harandianStyles.sideImage}>
              <img 
                src="/Harandian/Untitled-13.jpg" 
                alt="Website design" 
                className={harandianStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Outcome */}
        <div className={harandianStyles.section}>
          <div className={harandianStyles.contentWithImage}>
            <div className={harandianStyles.sideImage}>
              <img 
                src="/Harandian/Untitled-144.jpg" 
                alt="Final brand implementation" 
                className={harandianStyles.contentImage}
              />
            </div>
            <div className={harandianStyles.textContent}>
              <h2 className={harandianStyles.sectionHeading}>Outcome</h2>
              <p className={harandianStyles.largeText}>
                The result is a future-proof personal brand that balances technical expertise, regional pride, and creative depth. Hirad Harandian's new identity establishes him as both a strategic consultant and an industry mentor, equipped to lead conversations in gaming, startups, and interactive media for years to come.
              </p>
              <blockquote className={harandianStyles.testimonial}>
                "I had the chance to work with Rasm Team for our website designs and other branding assets at different occasions. We are really satisfied with the team performance as they pay attention to details and they try to understand your needs properly before they start the work. They take an extra step to make suggestions and improvements along the way."
                <cite>— M. Hajipour, Founder of bestyhome.ae</cite>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={harandianStyles.ctaSection}>
          <p className={harandianStyles.ctaText}>{project.ctaText}</p>
          
          <a href={project.ctaLink} target="_blank" rel="noopener noreferrer" className={harandianStyles.ctaButton}>
            {project.ctaLinkText}
          </a>
        </div>
      </div>
      
      <div className={styles.navigation}>
        <Link href="/projects" className={styles.viewAllLink}>
          View All Projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
