import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import oakStyles from './oak-arc.module.css';

export const dynamic = "force-dynamic";

export default function OakArcProject() {
  const project = {
    title: 'Oak & Arc: Signature Moments, Poured with Prestige',
    description: 'Creating a cohesive visual identity for a well-established landscaping and plant retail company.',
    tags: ['Graphic Design', 'Website Design'],
    images: [
      '/projects/oak-arc/GREEN-OAK-LOGO-05-1.jpg',
      '/projects/oak-arc/06-1024x891.jpg',
      '/projects/oak-arc/bags-1.jpg',
      '/projects/oak-arc/cardss.jpg',
      '/projects/oak-arc/notebook.jpg',
      '/projects/oak-arc/paperss.jpg',
      '/projects/oak-arc/sign.jpg',
      '/projects/oak-arc/socialmedi.jpg',
      '/projects/oak-arc/socialmedi2.jpg'
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
      
      <div className={oakStyles.fullWidthContent}>
      
        <div className={oakStyles.section}>
          <div className={oakStyles.contentWithImage}>
          
            <div className={oakStyles.sideImage}>
              <img 
                src="/projects/oak-arc/GREEN-OAK-LOGO-05-1.jpg" 
                alt="Oak & Arc Logo" 
                className={oakStyles.contentImage}
              />
            </div>
            <div className={oakStyles.textContent}>
              <p className={oakStyles.largeText}>
              <strong>Oak & Arc</strong>, a well-established company specializing in landscaping and plant retail, recognized for its commitment to quality and sustainable green solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Project Overview */}
        <div className={oakStyles.section}>
          <div className={oakStyles.contentWithImage}>
            <div className={oakStyles.textContent}>
              <h2 className={oakStyles.sectionHeading}>Project Overview</h2>
              <p className={oakStyles.largeText}>
                Oak & Arc approached with a vision to redefine its brand presence in the landscaping and plant retail sector. The objective was to create a cohesive visual identity that not only captured the essence of nature but also reflected the company's dedication to quality and sustainable design.
              </p>
            </div>
            <div className={oakStyles.sideImage}>
              <img 
                src="/projects/oak-arc/06-1024x891.jpg" 
                alt="Oak & Arc Brand Identity" 
                className={oakStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={oakStyles.section}>
          <div className={oakStyles.contentWithImage}>
            <div className={oakStyles.textContent}>
              <h2 className={oakStyles.sectionHeading}>Scope of Work</h2>
              <ul className={oakStyles.bulletList}>
                <li>Complete Visual Identity System</li>
                <li>Logo Design</li>
                <li>Brand Pattern System</li>
                <li>Packaging Design</li>
                <li>Website Design & Technical Support</li>
              </ul>
            </div>
            <div className={oakStyles.sideImage}>
              <img 
                src="/projects/oak-arc/cardss.jpg" 
                alt="Oak & Arc Business Cards" 
                className={oakStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Natural Identity */}
        <div className={oakStyles.section}>
          <div className={oakStyles.contentWithImage}>
            <div className={oakStyles.sideImage}>
              <img 
                src="/projects/oak-arc/sign.jpg" 
                alt="Oak & Arc Signage" 
                className={oakStyles.contentImage}
              />
            </div>
            <div className={oakStyles.textContent}>
              <h2 className={oakStyles.sectionHeading}>Natural Identity & Visual Language</h2>
              <p className={oakStyles.largeText}>
                The visual identity for Oak & Arc was inspired by the elegance and resilience of oak trees. The logo design combined elements of an oak leaf and a stylized oak tree, symbolizing strength, growth, and nature's harmony.
                <br/><br/>
                The chosen color palette of green and gold represented lush landscapes and premium quality, while white space was intentionally integrated into the design to reflect Oak & Arc's minimalist approach to space and design.
              </p>
            </div>
          </div>
        </div>
        
        {/* Packaging & Printables */}
        <div className={oakStyles.imageGridSection}>
          <h2 className={oakStyles.sectionHeading}>Packaging & Printables: Sustainable & Elegant</h2>
          <p className={oakStyles.largeText}>
            Packaging and printables were designed with eco-friendly materials, keeping Oak & Arc's commitment to sustainability at the forefront. Patterns inspired by natural elements like leaves and plant silhouettes were used across various print materials, enhancing brand consistency and visual appeal.
          </p>
          <div className={oakStyles.imageGrid}>
            <div className={oakStyles.gridImage}>
              <img 
                src="/projects/oak-arc/bags-1.jpg" 
                alt="Oak & Arc Packaging" 
                className={oakStyles.gridItemImage}
              />
            </div>
            <div className={oakStyles.gridImage}>
              <img 
                src="/projects/oak-arc/notebook.jpg" 
                alt="Oak & Arc Notebook" 
                className={oakStyles.gridItemImage}
              />
            </div>
            <div className={oakStyles.gridImage}>
              <img 
                src="/projects/oak-arc/paperss.jpg" 
                alt="Oak & Arc Stationery" 
                className={oakStyles.gridItemImage}
              />
            </div>
            <div className={oakStyles.gridImage}>
              <img 
                src="/projects/oak-arc/cardss.jpg" 
                alt="Oak & Arc Business Cards" 
                className={oakStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Website Design */}
        <div className={oakStyles.section}>
          <div className={oakStyles.contentWithImage}>
            <div className={oakStyles.textContent}>
              <h2 className={oakStyles.sectionHeading}>Website Design & Development</h2>
              <p className={oakStyles.largeText}>
                A modern, UI-driven website was designed for Oak & Arc, with an emphasis on clean lines and expansive white space to reflect the brand's philosophy. Best UX practices were implemented to ensure seamless navigation, offering users a curated experience as they explore Oak & Arc's landscaping services and plant offerings.
                <br/><br/>
                The design maintained strong visual coherence with the brand's identity, reinforcing its presence in the digital landscape.
              </p>
            </div>
            <div className={oakStyles.sideImage}>
              <img 
                src="/projects/oak-arc/06-1024x891.jpg" 
                alt="Oak & Arc Website" 
                className={oakStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Social Media Design */}
        <div className={oakStyles.section}>
          <div className={oakStyles.textContent}>
            <h2 className={oakStyles.sectionHeading}>Social Media Design</h2>
            <p className={oakStyles.largeText}>
              Instagram templates for posts and stories were created based on Oak & Arc's visual identity. These templates ensured consistency and brand recognition across social platforms while enhancing user engagement.
              <br/><br/>
              Designed with the same natural patterns, elegant typography, and color palette, the social media content upheld the brand's aesthetic and messaging in every interaction.
            </p>
          </div>
        </div>

        <div className={oakStyles.twoImageRow}>
          <div className={oakStyles.twoImage}>
            <img 
              src="/projects/oak-arc/socialmedi.jpg" 
              alt="Oak & Arc Social Media" 
              className={oakStyles.rowImage} 
            />
          </div>
          <div className={oakStyles.twoImage}>
            <img 
              src="/projects/oak-arc/socialmedi2.jpg" 
              alt="Oak & Arc Social Media Templates" 
              className={oakStyles.rowImage}
            />
          </div>
        </div>

        {/* Outcome */}
        <div className={oakStyles.outcomeSection}>
          <h2 className={oakStyles.sectionHeading}>Outcome</h2>
          <p className={oakStyles.largeText}>
            The final result is a sophisticated, future-forward identity that resonates with Oak & Arc's strategic and artistic ethos. With a clean digital presence and a flexible brand system, Oak & Arc is now equipped to scale its reputation — communicating confidence, clarity, and creativity through every visual touchpoint.
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
