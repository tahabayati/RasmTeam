import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import okoStyles from './oko-team.module.css';

export const dynamic = "force-dynamic";

export default function OkoTeamProject() {
  const project = {
    title: 'Creative Studio Visual Identity & Website Design',
    description: 'Developing a distinctive brand identity and digital presence for OKO Team, a creative studio specializing in visual communication and digital design.',
    tags: ['Graphic Design', 'Website Design'],
    images: [
      '/projects/oko-team/mascot.jpg',
      '/projects/oko-team/02.-Laptop-Mockup-New-Style-Bundle-copy.jpg',
      '/projects/oko-team/businessCard-1024x1024.jpg',
      '/projects/oko-team/bag.jpg',
      '/projects/oko-team/cd-1.jpg',
      '/projects/oko-team/cd-2048x2048.jpg',
      '/projects/oko-team/envelope-2048x2048.jpg',
      '/projects/oko-team/folder-2048x2048.jpg',
      '/projects/oko-team/sticker-2048x2048.jpg',
      '/projects/oko-team/03.jpg',
      '/projects/oko-team/4-scaled.jpg'
    ]
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
      
      <div className={okoStyles.fullWidthContent}>
        {/* Introduction and Feature Image side-by-side */}
        <div className={okoStyles.introHeader}>
          <div className={okoStyles.introText}>
            <div className={okoStyles.introSection}>
              <p className={okoStyles.largeText}>
                <strong>OKO Team</strong> is a creative studio specializing in visual communication, digital design, and creative direction for brands across various industries.
              </p>
            </div>
          </div>
          <div className={okoStyles.wideImageContainer}>
            <img 
              src="/projects/oko-team/mascot.jpg" 
              alt="OKO Team Mascot" 
              className={okoStyles.wideImage} 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className={okoStyles.section}>
          <div className={okoStyles.contentWithImage}>
          <div className={okoStyles.sideImage}>
              <img 
                src="/projects/oko-team/02.-Laptop-Mockup-New-Style-Bundle-copy.jpg" 
                alt="OKO Team Website Mockup" 
                className={okoStyles.contentImage}
              />
            </div>
            <div className={okoStyles.textContent}>
              <h2 className={okoStyles.sectionHeading}>Project Overview</h2>
              <p className={okoStyles.largeText}>
                OKO Team approached us with a need to establish a distinctive brand identity that would reflect their creative expertise and unique approach to design. As a studio focused on visual communication, they needed a brand that would showcase their capabilities while standing out in the competitive creative industry.
                <br/><br/>
                Our task was to develop a comprehensive visual identity system and website that would position OKO Team as a forward-thinking creative partner for potential clients.
              </p>
            </div>
         
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={okoStyles.section}>
          <div className={okoStyles.contentWithImage}>
            <div className={okoStyles.textContent}>
              <h2 className={okoStyles.sectionHeading}>Scope of Work</h2>
              <ul className={okoStyles.bulletList}>
                <li>Brand Strategy & Positioning</li>
                <li>Logo & Visual Identity System</li>
                <li>Custom Mascot Design</li>
                <li>Website Design & Development</li>
                <li>Brand Collateral & Stationery</li>
                <li>Digital Assets & Social Media Templates</li>
              </ul>
            </div>
            <div className={okoStyles.sideImage}>
              <img 
                src="/projects/oko-team/businessCard-1024x1024.jpg" 
                alt="OKO Team Business Cards" 
                className={okoStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Brand Identity */}
        <div className={okoStyles.section}>
          <div className={okoStyles.contentWithImage}>
            <div className={okoStyles.sideImage}>
              <img 
                src="/projects/oko-team/cd-1.jpg" 
                alt="OKO Team Brand Identity" 
                className={okoStyles.contentImage}
              />
            </div>
            <div className={okoStyles.textContent}>
              <h2 className={okoStyles.sectionHeading}>Distinctive Brand Identity</h2>
              <p className={okoStyles.largeText}>
                For OKO Team's visual identity, we created a bold, contemporary design system centered around a distinctive mascot character that embodies the studio's creative personality. The mascot serves as both a memorable brand mark and a versatile design element that can be adapted across various applications.
                <br/><br/>
                The color palette combines vibrant accent colors with sophisticated neutrals, reflecting the balance between creativity and professionalism that defines OKO Team's approach to their work.
              </p>
            </div>
          </div>
        </div>
        
        {/* Brand Collateral */}
        <div className={okoStyles.imageGridSection}>
          <h2 className={okoStyles.sectionHeading}>Brand Collateral & Applications</h2>
          <p className={okoStyles.largeText}>
            We developed a comprehensive set of brand applications including stationery, promotional materials, and digital assets. Each item was designed to maintain consistent brand expression while showcasing the versatility of the visual system.
          </p>
          <div className={okoStyles.imageGrid}>
            <div className={okoStyles.gridImage}>
              <img 
                src="/projects/oko-team/envelope-2048x2048.jpg" 
                alt="OKO Team Envelope" 
                className={okoStyles.gridItemImage}
              />
            </div>
            <div className={okoStyles.gridImage}>
              <img 
                src="/projects/oko-team/folder-2048x2048.jpg" 
                alt="OKO Team Folder" 
                className={okoStyles.gridItemImage}
              />
            </div>
            <div className={okoStyles.gridImage}>
              <img 
                src="/projects/oko-team/sticker-2048x2048.jpg" 
                alt="OKO Team Stickers" 
                className={okoStyles.gridItemImage}
              />
            </div>
            <div className={okoStyles.gridImage}>
              <img 
                src="/projects/oko-team/bag.jpg" 
                alt="OKO Team Bag" 
                className={okoStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Website Design */}
        <div className={okoStyles.wideImageContainer}>
          <img 
            src="/projects/oko-team/03.jpg" 
            alt="OKO Team Website" 
            className={okoStyles.wideImage} 
          />
        </div>
        
        <div className={okoStyles.section}>
          <div className={okoStyles.contentWithImage}>
          <div className={okoStyles.sideImage}>
              <img 
                src="/projects/oko-team/4-scaled.jpg" 
                alt="OKO Team Digital Presence" 
                className={okoStyles.contentImage}
              />
            </div>
            <div className={okoStyles.textContent}>
              <h2 className={okoStyles.sectionHeading}>Website Design & Digital Presence</h2>
              <p className={okoStyles.largeText}>
                The OKO Team website was designed to serve as a dynamic portfolio and brand showcase. With a focus on visual impact and intuitive navigation, the site features a bold, grid-based layout that highlights the studio's work while incorporating playful brand elements.
                <br/><br/>
                We implemented smooth animations and interactive elements to create an engaging user experience that reflects OKO Team's creative capabilities. The responsive design ensures optimal viewing across all devices, maintaining visual integrity from desktop to mobile.
              </p>
            </div>
          
          </div>
        </div>

        {/* Outcome */}
        <div className={okoStyles.outcomeSection}>
          <h2 className={okoStyles.sectionHeading}>Outcome</h2>
          <p className={okoStyles.largeText}>
            The final result is a sophisticated, future-forward identity that resonates with OKO Team's strategic and artistic ethos. With a clean digital presence and a flexible brand system, OKO is now equipped to scale its reputation — communicating confidence, clarity, and creativity through every visual touchpoint.
            <br/><br/>
            Since launching their new brand and website, OKO Team has reported increased client inquiries and improved brand recognition in their target market.
          </p>
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