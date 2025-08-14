import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import brandingStyles from './manufacturer-branding.module.css';

export const dynamic = "force-dynamic";

export default function ManufacturerBrandingProject() {
  const project = {
    title: 'Branding Assets Design for a Home Appliance E-commerce',
    description: 'Creating a modern, trustworthy visual identity for an online home appliance retailer.',
    tags: ['Graphic Design', 'Website Design'],
    images: [
      '/projects/manufacturer-branding/BESTY.jpg',
      '/projects/manufacturer-branding/ecommerce-website-tablet-responsive-design.jpg',
      '/projects/manufacturer-branding/Untitled-1080-x-1080-px.jpg',
      '/projects/manufacturer-branding/2.jpg',
      '/projects/manufacturer-branding/61yBwmYnw8L._AC_SL1500_-768x768.jpg',
      '/projects/manufacturer-branding/71of1Jbh9EL._AC_SL1500_-768x768.jpg',
      '/projects/manufacturer-branding/81bp4JLv1PL._AC_SL1500_-768x768.jpg',
      '/projects/manufacturer-branding/81h3bCYSvgL._AC_SL1500_-768x768.jpg',
      '/projects/manufacturer-branding/Untitled-design-768x768.png'
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
      
      <div className={brandingStyles.fullWidthContent}>
        {/* Introduction */}
        <div className={brandingStyles.introSection}>
          <p className={brandingStyles.largeText}>
            <strong>Besty Home</strong> is an e-commerce platform specializing in home appliances and electronics, with a focus on delivering quality products with exceptional customer service.
          </p>
        </div>

        {/* Feature Image - Using controlled height */}
        <div className={brandingStyles.wideImageContainer}>
          <img 
            src="/projects/manufacturer-branding/BESTY.jpg" 
            alt="Besty Home Brand Overview" 
            className={brandingStyles.wideImage} 
          />
        </div>
        
        {/* Project Overview */}
        <div className={brandingStyles.section}>
          <div className={brandingStyles.contentWithImage}>
            <div className={brandingStyles.textContent}>
              <h2 className={brandingStyles.sectionHeading}>Project Overview</h2>
              <p className={brandingStyles.largeText}>
                Besty Home approached us to develop a comprehensive brand identity that would establish trust with customers in the competitive home appliance market. They needed a visual language that would communicate reliability, quality, and excellent customer service.
                <br/><br/>
                Our challenge was to create a brand system that would work across their e-commerce platform, product packaging, marketing materials, and customer touchpoints, while differentiating them from competitors.
              </p>
            </div>
            <div className={brandingStyles.sideImage}>
              <img 
                src="/projects/manufacturer-branding/ecommerce-website-tablet-responsive-design.jpg" 
                alt="Responsive Website Design" 
                className={brandingStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={brandingStyles.section}>
          <div className={brandingStyles.contentWithImage}>
            <div className={brandingStyles.textContent}>
              <h2 className={brandingStyles.sectionHeading}>Scope of Work</h2>
              <ul className={brandingStyles.bulletList}>
                <li>Brand Strategy & Positioning</li>
                <li>Logo Design & Visual Identity</li>
                <li>E-commerce Website Design</li>
                <li>Product Photography Direction</li>
                <li>Packaging Design Guidelines</li>
                <li>Marketing Materials & Social Media Templates</li>
              </ul>
            </div>
            <div className={brandingStyles.sideImage}>
              <img 
                src="/projects/manufacturer-branding/Untitled-1080-x-1080-px.jpg" 
                alt="Brand Identity Elements" 
                className={brandingStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Brand Strategy */}
        <div className={brandingStyles.section}>
          <div className={brandingStyles.contentWithImage}>
            <div className={brandingStyles.sideImage}>
              <img 
                src="/projects/manufacturer-branding/2.jpg" 
                alt="Brand Strategy" 
                className={brandingStyles.contentImage}
              />
            </div>
            <div className={brandingStyles.textContent}>
              <h2 className={brandingStyles.sectionHeading}>Brand Strategy</h2>
              <p className={brandingStyles.largeText}>
                We began by conducting market research to understand the competitive landscape and identify opportunities for differentiation. Through stakeholder interviews and customer surveys, we uncovered that reliability, ease of use, and customer support were key decision factors for consumers.
                <br/><br/>
                Based on these insights, we positioned Besty Home as "Your Trusted Home Partner" — emphasizing reliability, quality, and exceptional customer service as core brand values. This positioning informed every aspect of the visual identity and communication strategy.
              </p>
            </div>
          </div>
        </div>
        
        {/* Product Showcase - Grid of Images */}
        <div className={brandingStyles.imageGridSection}>
          <h2 className={brandingStyles.sectionHeading}>Product Showcase</h2>
          <div className={brandingStyles.imageGrid}>
            <div className={brandingStyles.gridImage}>
              <img 
                src="/projects/manufacturer-branding/61yBwmYnw8L._AC_SL1500_-768x768.jpg" 
                alt="Product Showcase 1" 
                className={brandingStyles.gridItemImage}
              />
            </div>
            <div className={brandingStyles.gridImage}>
              <img 
                src="/projects/manufacturer-branding/71of1Jbh9EL._AC_SL1500_-768x768.jpg" 
                alt="Product Showcase 2" 
                className={brandingStyles.gridItemImage}
              />
            </div>
            <div className={brandingStyles.gridImage}>
              <img 
                src="/projects/manufacturer-branding/81bp4JLv1PL._AC_SL1500_-768x768.jpg" 
                alt="Product Showcase 3" 
                className={brandingStyles.gridItemImage}
              />
            </div>
            <div className={brandingStyles.gridImage}>
              <img 
                src="/projects/manufacturer-branding/81h3bCYSvgL._AC_SL1500_-768x768.jpg" 
                alt="Product Showcase 4" 
                className={brandingStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Visual Identity */}
        <div className={brandingStyles.section}>
          <div className={brandingStyles.contentWithImage}>
            <div className={brandingStyles.textContent}>
              <h2 className={brandingStyles.sectionHeading}>Visual Identity</h2>
              <p className={brandingStyles.largeText}>
                The visual identity we created for Besty Home centers around clarity, trust, and accessibility. We selected a color palette dominated by blue tones to convey reliability and trustworthiness, complemented by warm accent colors that add a sense of home comfort.
                <br/><br/>
                The typography system features clean, highly legible fonts that work well across digital and print applications. We created a comprehensive set of icons and visual elements that help customers navigate product categories and features intuitively.
              </p>
            </div>
            <div className={brandingStyles.sideImage}>
              <img 
                src="/projects/manufacturer-branding/Untitled-design-768x768.png" 
                alt="Visual Identity Elements" 
                className={brandingStyles.contentImage}
              />
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className={brandingStyles.outcomeSection}>
          <h2 className={brandingStyles.sectionHeading}>Outcome</h2>
          <p className={brandingStyles.largeText}>
            Since launching the new brand identity, Besty Home has reported a 45% increase in customer engagement and a 28% improvement in conversion rates. The clear, trustworthy visual language has helped establish the brand as a reliable choice in the competitive home appliance market.
          </p>
          <blockquote className={brandingStyles.testimonial}>
            "I had the chance to work with Rasm Team for our website designs and other branding assets at different occasions. We are really satisfied with the team performance as they pay attention to details and they try to understand your needs properly before they start the work. They take an extra step to make suggestions and improvements along the way."
            <cite>— M. Hajipour, Founder of bestyhome.ae</cite>
          </blockquote>
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
