import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import brandStyles from './electronics-brand.module.css';

export const dynamic = "force-dynamic";

export default function ElectronicsBrandProject() {
  const project = {
    title: 'Visual Identity and E-commerce Design for a Youth-Centered Electronics Brand',
    description: 'Creating a cohesive, modern tech brand identity for Buytronics, a growing electronics retailer targeting Gen Z and millennial buyers.',
    tags: ['Graphic Design', 'Website Design', 'Development'],
    images: [
      '/projects/electronics-brand/buytronicsWeb3-1.jpg',
      '/projects/electronics-brand/Ecommerce-Website-Logo_vsriations.jpg',
      '/projects/electronics-brand/website1-1.jpg',
      '/projects/electronics-brand/website2-1.jpg',
      '/projects/electronics-brand/bag1-1.jpg',
      '/projects/electronics-brand/bag2-1.jpg',
      '/projects/electronics-brand/buycards22-2.jpg',
      '/projects/electronics-brand/CODBO6-insta-post.jpg',
      '/projects/electronics-brand/DJI-Mic-2-1024x1024.jpg',
      '/projects/electronics-brand/playstation-30th-anniversary.jpg'
    ],
    gifs: [
      '/projects/electronics-brand/Buytroncis-Typeface.gif',
      '/projects/electronics-brand/Ecommerce-social-media-templates.gif',
      '/projects/electronics-brand/Untitled-1.gif'
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
      
      <div className={brandStyles.fullWidthContent}>
        {/* Introduction with side image */}
        <div className={brandStyles.section}>
          <div className={brandStyles.contentWithImage}>
            <div className={brandStyles.textContent}>
              <p className={brandStyles.largeText}>
                <strong>Buytronics</strong> is a growing electronics and tech accessories brand based in the UAE, offering practical, high-quality tech solutions for consumers across the Gulf — with a growing focus on younger digital-native audiences.
              </p>
            </div>
            <div className={brandStyles.sideImage}>
              <img 
                src="/projects/electronics-brand/buytronicsWeb3-1.jpg" 
                alt="Buytronics Website Overview" 
                className={brandStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Project Overview */}
        <div className={brandStyles.section}>
          <div className={brandStyles.contentWithImage}>
          <div className={brandStyles.sideImage}>
              <img 
                src="/projects/electronics-brand/Ecommerce-Website-Logo_vsriations.jpg" 
                alt="Logo Variations" 
                className={brandStyles.contentImage}
              />
            </div>
            <div className={brandStyles.textContent}>
              <h2 className={brandStyles.sectionHeading}>Project Overview</h2>
              <p className={brandStyles.largeText}>
                Buytronics approached us over two years ago with a clear need: to evolve from a product-based seller into a cohesive, modern tech brand that resonates in a crowded digital landscape. As a rising platform in the Middle East's electronics sector, the company needed a unified identity that could extend across packaging, retail, e-commerce, and digital media — all while speaking fluently to the region's <strong>Gen Z and millennial buyers</strong>.
                <br/><br/>
                We began with brand strategy and logo design, and gradually expanded into a comprehensive visual system covering identity, packaging, digital presence, and branded content for both web and social platforms.
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={brandStyles.section}>
          <div className={brandStyles.contentWithImage}>
            <div className={brandStyles.textContent}>
              <h2 className={brandStyles.sectionHeading}>Scope of Work</h2>
              <ul className={brandStyles.bulletList}>
                <li>Logo Design</li>
                <li>Visual Identity System</li>
                <li>Website Design & Development</li>
                <li>Packaging Design Concepts</li>
                <li>Social Media Branding & Templates</li>
                <li>Crafted Web + Social Graphic Assets</li>
              </ul>
            </div>
            <div className={brandStyles.sideImage}>
              <img 
                src="/projects/electronics-brand/website1-1.jpg" 
                alt="Website Design" 
                className={brandStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
   

        {/* Creative Direction & Design Solutions */}
        <div className={brandStyles.section}>
          <div className={brandStyles.textContent}>
            <h2 className={brandStyles.sectionHeading}>Creative Direction & Design Solutions</h2>
            <p className={brandStyles.largeText}>
              Buytronics needed a <strong>modern, bold, and tech-forward identity</strong> — but it also had to reflect its <strong>regional roots and cross-cultural fluency</strong>. Our design team created a custom logo that fuses the <strong>Arabic and English letter 'B'</strong> into a single, minimal form — a nod to the bilingual, cross-market nature of the brand.
              <br/><br/>
              The color palette was developed with a <strong>youth-centric approach</strong>, designed to resonate with <strong>Gen Z users in Arabic-speaking countries</strong>. It mixes cool modern tones with electric contrasts — a blend of energy, trust, and tech-edge visual appeal.
              <br/><br/>
              We complemented this with a type system that pairs modern legibility with flexibility, allowing for consistent communication across packaging, digital interfaces, and print.
            </p>
          </div>
        </div>
             {/* Creative Direction GIF - Wide container */}
             <div className={brandStyles.wideGifContainer}>
          <img 
            src="/projects/electronics-brand/Buytroncis-Typeface.gif" 
            alt="Buytronics Typeface Animation" 
            className={brandStyles.wideGifImage} 
          />
        </div>
        {/* Packaging Showcase */}
        <div className={brandStyles.imageGridSection}>
          <h2 className={brandStyles.sectionHeading}>Packaging & Printables: Seamless Integration</h2>
          <p className={brandStyles.largeText}>
            Packaging elements and printables were crafted to extend Buytronics' brand identity into the physical space. From product packaging to marketing materials, the use of patterns and the signature purple palette ensured brand cohesion. The designs were created to not only protect the products but also elevate the unboxing experience, adding a layer of sophistication and brand connection.
          </p>
          <div className={brandStyles.imageGrid}>
            <div className={brandStyles.gridImage}>
              <img 
                src="/projects/electronics-brand/bag1-1.jpg" 
                alt="Packaging Design 1" 
                className={brandStyles.gridItemImage}
              />
            </div>
            <div className={brandStyles.gridImage}>
              <img 
                src="/projects/electronics-brand/bag2-1.jpg" 
                alt="Packaging Design 2" 
                className={brandStyles.gridItemImage}
              />
            </div>
            <div className={brandStyles.gridImage}>
              <img 
                src="/projects/electronics-brand/buycards22-2.jpg" 
                alt="Business Cards" 
                className={brandStyles.gridItemImage}
              />
            </div>
            <div className={brandStyles.gridImage}>
              <img 
                src="/projects/electronics-brand/DJI-Mic-2-1024x1024.jpg" 
                alt="Product Packaging" 
                className={brandStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Branded Assets */}
        <div className={brandStyles.section}>
          <div className={brandStyles.contentWithImage}>
          <div className={brandStyles.sideImage}>
          <img 
            src="/projects/electronics-brand/CODBO6-insta-post.jpg" 
            alt="Social Media Post Example" 
            className={brandStyles.contentImage} 
          />
        </div>
            <div className={brandStyles.textContent}>
              <h2 className={brandStyles.sectionHeading}>Branded Assets for Social Media & Web</h2>
              <p className={brandStyles.largeText}>
                Beyond core identity, our work extended into <strong>custom-crafted digital assets</strong> to help Buytronics stand out in the fast-paced world of digital marketing. These included:
                <br/><br/>
                • Icon sets tailored for UI and feature explanation<br/>
                • Instagram templates (feed posts, stories, reels covers)<br/>
                • Horizontal banners and hero visuals for website promotions<br/>
                • Graphic overlays for product launches and discount events
                <br/><br/>
                Every asset was designed with <strong>format responsiveness and brand consistency</strong> in mind — making it easy for the Buytronics team to publish across platforms while maintaining strong visual identity.
              </p>
            </div>
       
          </div>
             {/* Social Media Examples */}
     
        
        </div>

        {/* Branded Assets GIF - Wide container */}
        <div className={brandStyles.wideGifContainer}>
          <img 
            src="/projects/electronics-brand/Ecommerce-social-media-templates.gif" 
            alt="Social Media Templates" 
            className={brandStyles.wideGifImage} 
          />
        </div>
        
     
        {/* E-commerce Website */}
        <div className={brandStyles.section}>
          <div className={brandStyles.contentWithImage}>
            <div className={brandStyles.sideImage}>
              <img 
                src="/projects/electronics-brand/website2-1.jpg" 
                alt="E-commerce Website" 
                className={brandStyles.contentImage}
              />
            </div>
            <div className={brandStyles.textContent}>
              <h2 className={brandStyles.sectionHeading}>E-commerce Website Design & Development</h2>
              <p className={brandStyles.largeText}>
                We designed and developed a fully responsive e-commerce website for Buytronics, using a <strong>mobile-first, user-centric layout</strong> optimized for product discovery and quick conversions. The design reflects the core identity — clean, trustworthy, and efficient — while enabling flexible content updates and seasonal promotions.
                <br/><br/>
                From homepage banners to product category layouts, every visual on the site was aligned with the core branding — making the platform not just functional, but visually memorable.
              </p>
            </div>
          </div>
        </div>
        
        {/* Animation */}
        <div className={brandStyles.wideGifContainer}>
          <img 
            src="/projects/electronics-brand/Untitled-1.gif" 
            alt="Brand Animation" 
            className={brandStyles.wideGifImage} 
          />
        </div>

        {/* Outcome */}
        <div className={brandStyles.outcomeSection}>
          <h2 className={brandStyles.sectionHeading}>Highlights & Outcome</h2>
          <p className={brandStyles.largeText}>
            This two-year collaboration has transformed Buytronics into a <strong>recognized, future-ready tech brand</strong> with a strong visual presence and a growing community of young, digital-native customers. Through strategy, design systems, and platform-specific assets, we positioned the brand for scalable growth across the Gulf region — with a voice that's both local and confidently modern.
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
