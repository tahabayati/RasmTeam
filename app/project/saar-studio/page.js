import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import saarStyles from './saar-studio.module.css';

export const dynamic = "force-dynamic";

export default function SaarStudioProject() {
  const project = {
    title: 'Saar Studio: Signature Moments, Poured with Prestige',
    description: 'Creating a whimsical and gentle visual identity for a child photography studio specializing in newborn photography.',
    tags: ['Graphic Design'],
    images: [
      '/projects/saar-studio/sign.webp',
      '/projects/saar-studio/bizcard.jpg',
      '/projects/saar-studio/bizcard22.jpg',
      '/projects/saar-studio/bags.jpg',
      '/projects/saar-studio/albumWithBackground.jpg',
      '/projects/saar-studio/book2.jpg',
      '/projects/saar-studio/envelop.jpg',
      '/projects/saar-studio/envelop2.jpg',
      '/projects/saar-studio/letterhead.jpg'
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
      
      <div className={saarStyles.fullWidthContent}>

        <div className={saarStyles.section}>
          <div className={saarStyles.contentWithImage}>
          <div className={saarStyles.sideImage}>
              <img 
                src="/projects/saar-studio/sign.webp" 
                alt="Saar Studio Logo Sign" 
                className={saarStyles.contentImage}
              />
            </div>
            <div className={saarStyles.textContent}>
              <p className={saarStyles.largeText}>
              <strong>Saar Studio</strong>, a child photography studio specializing in newborn photography. Named after the Persian word for "little bird," the brand embodies the essence of new beginnings and gentle care.
              </p>
            </div>
        
          </div>
        </div>
        {/* Project Overview */}
        <div className={saarStyles.section}>
          <div className={saarStyles.contentWithImage}>
          <div className={saarStyles.sideImage}>
              <img 
                src="/projects/saar-studio/bizcard.jpg" 
                alt="Saar Studio Business Card" 
                className={saarStyles.contentImage}
              />
            </div>
            <div className={saarStyles.textContent}>
              <h2 className={saarStyles.sectionHeading}>Project Overview</h2>
              <p className={saarStyles.largeText}>
                Saar Studio approached with a clear vision of creating a brand identity that resonates with the innocence and delicate nature of newborns. The goal was to craft a visual experience that reflected not only the purity of childhood but also the studio's commitment to capturing life's tender moments with elegance and care.
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={saarStyles.section}>
          <div className={saarStyles.contentWithImage}>
            <div className={saarStyles.textContent}>
              <h2 className={saarStyles.sectionHeading}>Scope of Work</h2>
              <ul className={saarStyles.bulletList}>
                <li>Complete Visual Identity System</li>
                <li>Logo Design</li>
                <li>Printables & Packaging Design</li>
              </ul>
            </div>
            <div className={saarStyles.sideImage}>
              <img 
                src="/projects/saar-studio/bizcard22.jpg" 
                alt="Saar Studio Business Cards" 
                className={saarStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Whimsical Identity */}
        <div className={saarStyles.section}>
          <div className={saarStyles.contentWithImage}>
            <div className={saarStyles.sideImage}>
              <img 
                src="/projects/saar-studio/letterhead.jpg" 
                alt="Saar Studio Letterhead" 
                className={saarStyles.contentImage}
              />
            </div>
            <div className={saarStyles.textContent}>
              <h2 className={saarStyles.sectionHeading}>Whimsical Identity & Visual Language</h2>
              <p className={saarStyles.largeText}>
                The logo design for Saar Studio drew inspiration from its name, which translates to "little bird." A minimalistic yet endearing bird illustration became the focal point, symbolizing new beginnings and gentle care—core elements of newborn photography.
                <br/><br/>
                The chosen typeface, "Bonyad-e Koudak," designed by Reza Bakhtiari Fard and Reza Ershadi, was selected for its playful yet sophisticated design. Its gentle curves and readability made it ideal for both print and digital use, enhancing brand consistency.
              </p>
            </div>
          </div>
        </div>
        
        {/* Color Palette */}
        <div className={saarStyles.section}>
          <div className={saarStyles.contentWithImage}>
            <div className={saarStyles.textContent}>
              <h2 className={saarStyles.sectionHeading}>Soft & Playful Color Palette</h2>
              <p className={saarStyles.largeText}>
                A vibrant yet soothing color palette was curated, blending soft pastels with bright accents. These colors were applied across all brand elements to maintain visual harmony and appeal to both children and parents.
                <br/><br/>
                The clean white backgrounds added to the sense of purity and spaciousness, essential for a child-focused brand.
              </p>
            </div>
            <div className={saarStyles.sideImage}>
              <img 
                src="/projects/saar-studio/envelop.jpg" 
                alt="Saar Studio Envelope" 
                className={saarStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Patterns & Printables */}
        <div className={saarStyles.imageGridSection}>
          <h2 className={saarStyles.sectionHeading}>Patterns & Printables: Bringing Brand to Life</h2>
          <p className={saarStyles.largeText}>
            To further enrich the brand's visual presence, a series of playful patterns inspired by the logo and color palette were created. These designs were applied to various print materials, including business cards, letterheads, and packaging. The patterns added a whimsical touch while maintaining brand cohesion across all printed elements.
          </p>
          <div className={saarStyles.imageGrid}>
            <div className={saarStyles.gridImage}>
              <img 
                src="/projects/saar-studio/envelop2.jpg" 
                alt="Saar Studio Envelope Design" 
                className={saarStyles.gridItemImage}
              />
            </div>
            <div className={saarStyles.gridImage}>
              <img 
                src="/projects/saar-studio/book2.jpg" 
                alt="Saar Studio Album" 
                className={saarStyles.gridItemImage}
              />
            </div>
            <div className={saarStyles.gridImage}>
              <img 
                src="/projects/saar-studio/albumWithBackground.jpg" 
                alt="Saar Studio Album with Background" 
                className={saarStyles.gridItemImage}
              />
            </div>
            <div className={saarStyles.gridImage}>
              <img 
                src="/projects/saar-studio/bags.jpg" 
                alt="Saar Studio Packaging" 
                className={saarStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Packaging Design */}
        <div className={saarStyles.section}>
          <div className={saarStyles.contentWithImage}>
            <div className={saarStyles.textContent}>
              <h2 className={saarStyles.sectionHeading}>Purposeful Packaging Design</h2>
              <p className={saarStyles.largeText}>
                Packaging elements, including custom printables, were designed to extend Saar Studio's brand identity. The minimalist bird motif and soft color palette were consistently applied, ensuring a seamless and delightful unboxing experience for clients.
                <br/><br/>
                Each detail was thoughtfully crafted to reflect the studio's gentle and caring nature.
              </p>
            </div>
            <div className={saarStyles.sideImage}>
              <img 
                src="/projects/saar-studio/bags.jpg" 
                alt="Saar Studio Packaging Design" 
                className={saarStyles.contentImage}
              />
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className={saarStyles.outcomeSection}>
          <h2 className={saarStyles.sectionHeading}>Outcome</h2>
          <p className={saarStyles.largeText}>
            Saar Studio now boasts a visual identity that mirrors the innocence and tenderness of its photography. The cohesive design system effectively captures the essence of childhood, providing a memorable experience for clients and setting the stage for lasting memories.
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
