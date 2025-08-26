import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import healthStyles from './health-company.module.css';

export const dynamic = "force-dynamic";

export default function HealthCompanyProject() {
  const project = {
    title: 'Crafting a Regional Fintech Brand with Local Roots',
    description: 'Creating a modern, friendly, and locally grounded visual identity for a Middle Eastern e-commerce platform.',
    tags: ['Graphic Design'],
    images: [
      '/projects/health-company/Overview-of-digital-brand.jpg',
      '/projects/health-company/Fintech-Company-Logo-App-Version.jpg',
      '/projects/health-company/Fintech-company-pattern-design.jpg',
      '/projects/health-company/Fintech-company-pattern-design2.jpg',
      '/projects/health-company/Fintech-company-app-store-page-design.jpg',
      '/projects/health-company/Fintech-Company-Typography-1024x360.jpg',
      '/projects/health-company/Logo-Design-Concept-for-Fintech-company-2048x719.jpg',
      '/projects/health-company/Untitled-1-1024x1024.jpg'
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
      
      <div className={healthStyles.fullWidthContent}>
        {/* Introduction with side image */}
        <div className={healthStyles.section}>
          <div className={healthStyles.contentWithImage}>
            <div className={healthStyles.textContent}>
              <p className={healthStyles.largeText}>
                <strong>Marfaaa</strong>, a Muscat-based e-commerce brand focused on offering competitive pricing, curating local products, and creating a seamless online shopping experience for Middle Eastern consumers.
              </p>
            </div>
            <div className={healthStyles.sideImage}>
              <img 
                src="/projects/health-company/Overview-of-digital-brand.jpg" 
                alt="Marfaaa Brand Overview" 
                className={healthStyles.contentImage} 
              />
            </div>
          </div>
        </div>
        
        {/* Project Overview */}
        <div className={healthStyles.section}>
          <div className={healthStyles.textContent}>
            <h2 className={healthStyles.sectionHeading}>Project Overview</h2>
            <p className={healthStyles.largeText}>
              Marfaaa is a new e-commerce platform built with a strong regional identity and global ambition. Born in the heart of the Persian Gulf, the brand's mission is to empower local shoppers with <strong>curated, affordable, and high-quality products</strong> — while amplifying the presence of <strong>local brands</strong> and ensuring excellence from global partners.
              <br/><br/>
              Our goal was to translate this business vision into a <strong>modern, friendly, and locally grounded visual identity</strong>. The design needed to speak to both <strong>smart digital behavior</strong> and <strong>cultural familiarity</strong>, while also standing strong in a highly competitive e-commerce landscape.
            </p>
          </div>
        </div>
        <div className={healthStyles.wideImageContainer}>
          <img 
            src="/projects/health-company/Logo-Design-Concept-for-Fintech-company-2048x719.jpg" 
            alt="Logo Design Concept" 
            className={healthStyles.wideImage}
          />
        </div>
              {/* Design Direction & Concept */}
              <div className={healthStyles.section}>
          <div className={healthStyles.contentWithImage}>
           
            <div className={healthStyles.textContent}>
              <h2 className={healthStyles.sectionHeading}>Scope of Work</h2>
              <ul className={healthStyles.bulletList}>
              <li>Logo Design</li>
              <li>Visual Identity System</li>
              <li>Brand Assets & Guidelines</li>
            </ul>
            </div>
            <div className={healthStyles.sideImage}>
              <img 
                src="/projects/health-company/Untitled-1-1024x1024.jpg" 
                alt="Brand Design Concept" 
                className={healthStyles.contentImage}
              />
            </div>
          </div>
        </div>
        {/* Scope of Work */}
        <div className={healthStyles.section}>
          <div className={healthStyles.textContent}>
            <h2 className={healthStyles.sectionHeading}>Design Direction & Concept</h2>
            <p className={healthStyles.largeText}>
                We began by analyzing the <strong>dual nature</strong> of Marfaaa's brand: its <strong>community-centered values</strong> and its <strong>technology-driven retail experience</strong>. The identity had to feel <strong>trustworthy, modern, and regionally inspired</strong> — capable of communicating speed, value, and connection in a single glance.
                <br/><br/>
                The logo reflects a <strong>blend of e-commerce precision and regional charm</strong>, using a warm, approachable style paired with clear digital functionality. We aimed for <strong>strong readability</strong>, mobile-first visibility, and a memorable shape for use across packaging, app icons, and marketing materials.
              </p>
          </div>
        </div>
        <div className={healthStyles.wideImageContainer}>
          <img 
            src="/projects/health-company/Fintech-Company-Logo-App-Version.jpg" 
            alt="Logo App Version" 
            className={healthStyles.wideImage}
          />
        </div>
        
  
        
        {/* Typography - Wide Image */}
        <div className={healthStyles.wideImageContainer}>
          <img 
            src="/projects/health-company/Fintech-Company-Typography-1024x360.jpg" 
            alt="Typography System" 
            className={healthStyles.wideImage} 
          />
        </div>
        
        {/* Color & Typography */}
        <div className={healthStyles.section}>
          <div className={healthStyles.textContent}>
            <h2 className={healthStyles.sectionHeading}>Color & Typography</h2>
            <p className={healthStyles.largeText}>
              For Marfaaa's identity system, we developed a color palette inspired by the <strong>energy and warmth of the Gulf region</strong>, blending modern digital tones with subtle nods to local culture. The palette is flexible enough to support both <strong>interface elements and brand storytelling</strong>, striking a balance between trust, vibrancy, and clarity.
              <br/><br/>
              To ensure a smooth <strong>reading experience for bilingual audiences</strong>, we selected <strong>Vazir-Matn</strong> as the primary typeface. Designed for digital environments and native to the Persian and Arabic script systems, Vazir-Matn delivers high legibility across screen sizes and resolutions — making it a perfect match for a user-focused platform in the region.
            </p>
          </div>
        </div>
        <div className={healthStyles.wideImageContainer}>
          <img 
            src="/projects/health-company/Fintech-company-pattern-design2.jpg" 
            alt="Pattern Design" 
            className={healthStyles.wideImage}
          />
        </div>
        
        {/* Visual Identity System */}
        <div className={healthStyles.section}>
          <div className={healthStyles.textContent}>
            <h2 className={healthStyles.sectionHeading}>Visual Identity System</h2>
            <p className={healthStyles.largeText}>
              To support Marfaaa's mission of <strong>local empowerment and global accessibility</strong>, we designed a full suite of visual assets:
              <br/><br/>
              • Icons and badges for promotions and shopping stages<br/>
              • Flexible color combinations for app UI and marketing<br/>
              • Brand motifs that reflect cultural roots without visual cliché
              <br/><br/>
              The result is a design system that's <strong>lightweight, responsive, and culturally rooted</strong>, ready to scale across digital and print platforms.
            </p>
          </div>
        </div>
        <div className={healthStyles.wideImageContainer}>
          <img 
            src="/projects/health-company/Fintech-company-pattern-design.jpg" 
            alt="Pattern Design" 
            className={healthStyles.wideImage}
          />
        </div>

        {/* App Store Design - Wide Image */}
        <div className={healthStyles.wideImageContainer}>
          <img 
            src="/projects/health-company/Fintech-company-app-store-page-design.jpg" 
            alt="App Store Page Design" 
            className={healthStyles.wideImage} 
          />
        </div>

        {/* Outcome */}
        <div className={healthStyles.outcomeSection}>
          <h2 className={healthStyles.sectionHeading}>Outcome</h2>
          <p className={healthStyles.largeText}>
            The final visual identity provides Marfaaa with a <strong>distinctive, regionally relevant brand</strong> that builds trust and recognition. With its focus on smart purchasing, local pride, and digital ease, Marfaaa now stands equipped with a design language that <strong>bridges community values with e-commerce excellence</strong>.
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