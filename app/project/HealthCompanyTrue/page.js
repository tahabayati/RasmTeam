import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import healthStyles from './HealthCompanyTrue.module.css';

export const dynamic = "force-dynamic";

export default function HealthCompanyTrueProject() {
  const project = {
    title: 'Website Design, Visual Identity & Media Production for a Health Company',
    description: 'Creating a professional, trusted, and modern brand presence for DKC, a leading provider of dental equipment in the UAE and Iran.',
    tags: ['Graphic Design', 'Website Design', 'Media Production'],
    images: [
      '/projects/HealthCompanyTrue/webdkc.jpg',
      '/projects/HealthCompanyTrue/Storefront-Light-Box-Display-Mockup_2-copy-1024x768.jpg',
      '/projects/HealthCompanyTrue/bagdkc.jpg',
      '/projects/HealthCompanyTrue/carddkc.jpg',
      '/projects/HealthCompanyTrue/cataloguedkc2.jpg',
      '/projects/HealthCompanyTrue/envdkc.jpg',
      '/projects/HealthCompanyTrue/invite3dkc.jpg',
      '/projects/HealthCompanyTrue/lighter.jpg',
      '/projects/HealthCompanyTrue/paperdkc.jpg',
      '/projects/HealthCompanyTrue/photo_2025-05-20_14-38-27-1024x576.jpg',
      '/projects/HealthCompanyTrue/postersdkc.jpg'
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


        {/* Project Overview */}
        <div className={healthStyles.section}>
          <div className={healthStyles.contentWithImage}>
          <div className={healthStyles.sideImage}>
              <img 
                src="/projects/HealthCompanyTrue/lighter.jpg" 
                alt="DKC Branded Item" 
                className={healthStyles.contentImage}
              />
            </div>
            <div className={healthStyles.textContent}>
              <p className={healthStyles.largeText}>
              <strong>DKC</strong> is a leading provider of dental equipment in both the UAE and Iran, distributing high-quality products from world-renowned manufacturers, including Dentis.
              </p>
            </div>
        
          </div>
        </div>
        
        {/* Project Overview */}
        <div className={healthStyles.section}>
          <div className={healthStyles.contentWithImage}>
          <div className={healthStyles.sideImage}>
              <img 
                src="/projects/HealthCompanyTrue/Storefront-Light-Box-Display-Mockup_2-copy-1024x768.jpg" 
                alt="DKC Storefront Display" 
                className={healthStyles.contentImage}
              />
            </div>
            <div className={healthStyles.textContent}>
              <h2 className={healthStyles.sectionHeading}>Project Overview</h2>
              <p className={healthStyles.largeText}>
                This project focused on establishing a professional, trusted, and modern brand presence for DKC in the UAE's healthcare sector. As an official partner of Korea's Dentis brand, DKC needed a visual identity and communication system that aligned with international medical standards while speaking directly to regional dental professionals.
                <br/><br/>
                Our work extended across branding, digital design, marketing materials, video production, and event support — ensuring a fully integrated and highly professional presence for both online and offline platforms.
              </p>
            </div>
        
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={healthStyles.section}>
          <div className={healthStyles.contentWithImage}>
            <div className={healthStyles.textContent}>
              <h2 className={healthStyles.sectionHeading}>Scope of Work</h2>
              <ul className={healthStyles.bulletList}>
                <li>Complete Visual Identity System</li>
                <li>Logo Design</li>
                <li>Brand Pattern System</li>
                <li>Product Videography</li>
                <li>Packaging Design</li>
                <li>Marketing Materials Design (Brochures, Catalogues, Posters, Flyers, Invitations, ID Cards)</li>
                <li>Website Design & Technical Support</li>
              </ul>
            </div>
            <div className={healthStyles.sideImage}>
              <img 
                src="/projects/HealthCompanyTrue/carddkc.jpg" 
                alt="DKC Business Cards" 
                className={healthStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Visual Identity */}
        <div className={healthStyles.section}>
          <div className={healthStyles.contentWithImage}>
            <div className={healthStyles.sideImage}>
              <img 
                src="/projects/HealthCompanyTrue/envdkc.jpg" 
                alt="DKC Stationery" 
                className={healthStyles.contentImage}
              />
            </div>
            <div className={healthStyles.textContent}>
              <h2 className={healthStyles.sectionHeading}>Solid Identity & Visual Language</h2>
              <p className={healthStyles.largeText}>
                The visual identity for DKC was inspired by the elegance and precision required in the dental field. A gradient-centric color palette was introduced, with flowing circular shapes and curved lines that originated from the brand's logo.
                <br/><br/>
                These elements not only symbolized the smoothness of high-quality dental procedures but also highlighted the brand's modernity and technological focus.
              </p>
            </div>
          </div>
        </div>
        
        {/* Marketing Materials Grid */}
        <div className={healthStyles.imageGridSection}>
          <h2 className={healthStyles.sectionHeading}>Marketing Materials: Cohesive Brand Messaging</h2>
          <p className={healthStyles.largeText}>
            Brochures, catalogs, and various advertisement materials, including posters, flyers, invitations, and ID cards, were designed to strengthen DKC's brand visibility. Each piece was thoughtfully crafted to reflect DKC's luxurious and professional image while providing clear, engaging information.
          </p>
          <div className={healthStyles.imageGrid}>
            <div className={healthStyles.gridImage}>
              <img 
                src="/projects/HealthCompanyTrue/cataloguedkc2.jpg" 
                alt="DKC Catalogue" 
                className={healthStyles.gridItemImage}
              />
            </div>
            <div className={healthStyles.gridImage}>
              <img 
                src="/projects/HealthCompanyTrue/postersdkc.jpg" 
                alt="DKC Posters" 
                className={healthStyles.gridItemImage}
              />
            </div>
            <div className={healthStyles.gridImage}>
              <img 
                src="/projects/HealthCompanyTrue/invite3dkc.jpg" 
                alt="DKC Invitation" 
                className={healthStyles.gridItemImage}
              />
            </div>
            <div className={healthStyles.gridImage}>
              <img 
                src="/projects/HealthCompanyTrue/paperdkc.jpg" 
                alt="DKC Stationery" 
                className={healthStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Packaging */}
        <div className={healthStyles.section}>
          <div className={healthStyles.textContent}>
            <h2 className={healthStyles.sectionHeading}>Packaging & Printables: A Reflection of Quality</h2>
            <p className={healthStyles.largeText}>
              Packaging and print materials were designed to maintain DKC's premium image. The gradients and curves established in the visual identity were seamlessly integrated into the packaging design, adding a sense of luxury and sophistication.
              <br/><br/>
              This cohesive approach extended to all print materials, ensuring a consistent brand message at every customer touchpoint.
            </p>
          </div>
        </div>

        <div className={healthStyles.twoImageRowUnequal}>
          <div className={healthStyles.twoImageSmall}>
            <img 
              src="/projects/HealthCompanyTrue/bagdkc.jpg" 
              alt="DKC Packaging" 
              className={healthStyles.rowImage}
            />
          </div>
          <div className={healthStyles.twoImageLarge}>
            <img 
              src="/projects/HealthCompanyTrue/photo_2025-05-20_14-38-27-1024x576.jpg" 
              alt="DKC Website" 
              className={healthStyles.rowImage}
            />
          </div>
        </div>
        
        <div className={healthStyles.section}>
          <div className={healthStyles.contentWithImage}>
            <div className={healthStyles.sideImage}>
              <img 
                src="/projects/HealthCompanyTrue/webdkc.jpg" 
                alt="DKC Website Design" 
                className={healthStyles.contentImage}
              />
            </div>
            <div className={healthStyles.textContent}>
              <h2 className={healthStyles.sectionHeading}>Website Development & Design</h2>
              <p className={healthStyles.largeText}>
                The website for DKC was built to echo its commitment to excellence. With a focus on user experience and clean navigation, the site allows visitors to explore DKC's extensive range of dental products effortlessly.
                <br/><br/>
                Visual elements from the brand identity, including gradients and smooth curves, were woven into the digital interface, ensuring brand cohesion. The design emphasized accessibility and ease of information, allowing users to find detailed specifications, product benefits, and service offerings quickly and efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className={healthStyles.outcomeSection}>
          <h2 className={healthStyles.sectionHeading}>Outcome</h2>
          <p className={healthStyles.largeText}>
            DKC now stands as a hallmark of quality and reliability in the dental equipment industry, with a visual and digital presence that reflects its market leadership. Through a unified visual identity, luxury packaging, engaging product photography and videography, and an intuitive website, DKC continues to inspire trust and professionalism in every interaction.
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
