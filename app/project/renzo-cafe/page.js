import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import renzoStyles from './renzo-cafe.module.css';

export const dynamic = "force-dynamic";

export default function RenzoCafeProject() {
  const project = {
    title: 'Renzo Cafe: Modern Branding & Digital Experience',
    description: 'Creating a sophisticated brand identity and digital presence for a premium coffee shop and bakery.',
    tags: ['Graphic Design', 'Website Design'],
    images: [
      '/projects/renzo-cafe/logosPng2.png',
      '/projects/renzo-cafe/newlaptop2.jpg',
      '/projects/renzo-cafe/newMenu1.jpg',
      '/projects/renzo-cafe/newMenu2.jpg',
      '/projects/renzo-cafe/patterns22.jpg',
      '/projects/renzo-cafe/renzo4.jpg',
      '/projects/renzo-cafe/renzo7.jpg',
      '/projects/renzo-cafe/renzo8.jpg',
      '/projects/renzo-cafe/renzo9.jpg',
      '/projects/renzo-cafe/renzo10.jpg',
      '/projects/renzo-cafe/typefacePng2.png'
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
      
      <div className={renzoStyles.fullWidthContent}>
        {/* Introduction and Feature Image side-by-side */}
        <div className={renzoStyles.introHeader}>
          <div className={renzoStyles.introText}>
            <div className={renzoStyles.introSection}>
              <p className={renzoStyles.largeText}>
                <strong>Renzo Cafe</strong> is a premium coffee shop and bakery that combines artisanal coffee culture with a sophisticated dining experience, catering to discerning urban customers.
              </p>
            </div>
          </div>
          <div className={renzoStyles.wideImageContainer}>
            <img 
              src="/projects/renzo-cafe/logosPng2.png" 
              alt="Renzo Cafe Logo System" 
              className={renzoStyles.wideImage} 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className={renzoStyles.section}>
          <div className={renzoStyles.contentWithImage}>
            <div className={renzoStyles.textContent}>
              <h2 className={renzoStyles.sectionHeading}>Project Overview</h2>
              <p className={renzoStyles.largeText}>
                Renzo Cafe approached us to develop a brand identity that would reflect their commitment to quality, craftsmanship, and a refined coffee experience. The goal was to create a visual language that would position them as a premium destination in a competitive market.
                <br/><br/>
                Our challenge was to balance contemporary design elements with timeless sophistication, creating a brand that would appeal to coffee enthusiasts while establishing a distinct presence in the cafe landscape.
              </p>
            </div>
            <div className={renzoStyles.sideImage}>
              <img 
                src="/projects/renzo-cafe/renzo4.jpg" 
                alt="Renzo Cafe Interior" 
                className={renzoStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={renzoStyles.section}>
          <div className={renzoStyles.contentWithImage}>
            <div className={renzoStyles.textContent}>
              <h2 className={renzoStyles.sectionHeading}>Scope of Work</h2>
              <ul className={renzoStyles.bulletList}>
                <li>Brand Strategy & Positioning</li>
                <li>Logo Design & Visual Identity System</li>
                <li>Menu Design & In-store Graphics</li>
                <li>Packaging Design</li>
                <li>Website Design & Development</li>
                <li>Digital Marketing Assets</li>
              </ul>
            </div>
            <div className={renzoStyles.sideImage}>
              <img 
                src="/projects/renzo-cafe/renzo7.jpg" 
                alt="Renzo Cafe Experience" 
                className={renzoStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Brand Identity */}
        <div className={renzoStyles.section}>
          <div className={renzoStyles.contentWithImage}>
            <div className={renzoStyles.sideImage}>
              <img 
                src="/projects/renzo-cafe/typefacePng2.png" 
                alt="Renzo Cafe Typography" 
                className={renzoStyles.contentImage}
              />
            </div>
            <div className={renzoStyles.textContent}>
              <h2 className={renzoStyles.sectionHeading}>Sophisticated Brand Identity</h2>
              <p className={renzoStyles.largeText}>
                For Renzo Cafe's visual identity, we created an elegant system centered around a refined wordmark that conveys both quality and accessibility. The logo combines modern typography with subtle details that reference traditional coffee craftsmanship.
                <br/><br/>
                The color palette features rich, warm tones complemented by neutral backgrounds, creating an inviting yet sophisticated atmosphere that translates well across both physical and digital touchpoints.
              </p>
            </div>
          </div>
        </div>
        
        {/* Menu Design */}
        <div className={renzoStyles.imageGridSection}>
          <h2 className={renzoStyles.sectionHeading}>Menu Design & Print Materials</h2>
          <p className={renzoStyles.largeText}>
            The menu design for Renzo Cafe was a critical component of the brand experience. We created a system that not only presented their offerings clearly but also reinforced the premium positioning of the cafe. The typography, layout, and material choices all contribute to a tactile experience that enhances the customer journey.
          </p>
          <div className={renzoStyles.imageGrid}>
            <div className={renzoStyles.gridImage}>
              <img 
                src="/projects/renzo-cafe/newMenu1.jpg" 
                alt="Renzo Cafe Menu Design" 
                className={renzoStyles.gridItemImage}
              />
            </div>
            <div className={renzoStyles.gridImage}>
              <img 
                src="/projects/renzo-cafe/newMenu2.jpg" 
                alt="Renzo Cafe Menu Pages" 
                className={renzoStyles.gridItemImage}
              />
            </div>
            <div className={renzoStyles.gridImage}>
              <img 
                src="/projects/renzo-cafe/renzo8.jpg" 
                alt="Renzo Cafe Print Materials" 
                className={renzoStyles.gridItemImage}
              />
            </div>
            <div className={renzoStyles.gridImage}>
              <img 
                src="/projects/renzo-cafe/renzo9.jpg" 
                alt="Renzo Cafe Stationery" 
                className={renzoStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Pattern System */}
        <div className={renzoStyles.wideImageContainer}>
          <img 
            src="/projects/renzo-cafe/patterns22.jpg" 
            alt="Renzo Cafe Pattern System" 
            className={renzoStyles.wideImage} 
          />
        </div>
        
        <div className={renzoStyles.section}>
          <div className={renzoStyles.contentWithImage}>
            <div className={renzoStyles.textContent}>
              <h2 className={renzoStyles.sectionHeading}>Pattern System & Visual Language</h2>
              <p className={renzoStyles.largeText}>
                To extend the brand's visual language, we developed a custom pattern system inspired by coffee culture and artisanal craftsmanship. These patterns add depth and texture to the brand, appearing across packaging, environmental graphics, and digital touchpoints.
                <br/><br/>
                The pattern system is versatile enough to be applied in various contexts while maintaining a consistent brand expression, creating a cohesive experience across all customer interactions.
              </p>
            </div>
            <div className={renzoStyles.sideImage}>
              <img 
                src="/projects/renzo-cafe/renzo10.jpg" 
                alt="Renzo Cafe Brand Applications" 
                className={renzoStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Digital Experience */}
        <div className={renzoStyles.section}>
          <div className={renzoStyles.contentWithImage}>
            <div className={renzoStyles.sideImage}>
              <img 
                src="/projects/renzo-cafe/newlaptop2.jpg" 
                alt="Renzo Cafe Website" 
                className={renzoStyles.contentImage}
              />
            </div>
            <div className={renzoStyles.textContent}>
              <h2 className={renzoStyles.sectionHeading}>Digital Experience & Website</h2>
              <p className={renzoStyles.largeText}>
                The Renzo Cafe website was designed to extend the premium in-store experience to the digital realm. With a focus on rich imagery, elegant typography, and intuitive navigation, the site showcases the cafe's offerings while providing practical information for visitors.
                <br/><br/>
                We implemented subtle animations and interactive elements that reflect the care and attention to detail that defines the Renzo Cafe experience, ensuring that the digital presence was as thoughtfully crafted as their physical space.
              </p>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className={renzoStyles.outcomeSection}>
          <h2 className={renzoStyles.sectionHeading}>Outcome</h2>
          <p className={renzoStyles.largeText}>
            Since launching their new brand identity and digital presence, Renzo Cafe has established itself as a destination for coffee enthusiasts and discerning diners. The cohesive brand experience across physical and digital touchpoints has helped them build strong customer loyalty and differentiate themselves in a competitive market.
            <br/><br/>
            The brand system we developed has proven to be flexible and enduring, supporting Renzo Cafe's growth and evolution while maintaining a consistent expression of their core values and premium positioning.
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