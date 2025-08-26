import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import pishtazStyles from './pishtazbakhtar.module.css';

export const dynamic = "force-dynamic";

export default function PishtazBakhtarProject() {
  const project = {
    title: 'Industrial Website Design for Pishtaz Bakhtar',
    description: 'Creating a bilingual website for an established casting factory with over 40 years of industrial expertise.',
    tags: ['Website Design', 'Industrial Photography'],
    images: [
      '/projects/pishtazbakhtar/mok.jpg',
      '/projects/pishtazbakhtar/IMG_0098.jpg',
      '/projects/pishtazbakhtar/IMG_0099.jpg',
      '/projects/pishtazbakhtar/IMG_0114.jpg',
      '/projects/pishtazbakhtar/IMG_0115.jpg',
      '/projects/pishtazbakhtar/IMG_0116.jpg',
      '/projects/pishtazbakhtar/IMG_0140.jpg',
      '/projects/pishtazbakhtar/IMG_0141.jpg',
      '/projects/pishtazbakhtar/IMG_0145.jpg',
      '/projects/pishtazbakhtar/IMG_0146.jpg',
      '/projects/pishtazbakhtar/Modern_Neutral_Mockup_Website_Design_Services_Promotion_Instagram2.jpg',
      '/projects/pishtazbakhtar/Simple_Clean_Screen_Mockup_Fashion_New_Season_Instagram_Post_12.jpg'
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
      
      <div className={pishtazStyles.fullWidthContent}>
        {/* Introduction (Desktop: side image larger; Mobile: stacked) */}
        <div className={pishtazStyles.introSideLayout}>
          <div className={pishtazStyles.introTextCompact}>
            <p className={pishtazStyles.largeText}>
              <strong>Pishtaz Bakhtar</strong> is a leading casting factory with over four decades of experience in producing industrial components for various sectors including oil, gas, and automotive industries.
            </p>
          </div>
          <div className={pishtazStyles.introHeroImage}>
            <img 
              src="/projects/pishtazbakhtar/mok.jpg" 
              alt="Pishtaz Bakhtar Website Overview" 
              className={pishtazStyles.introHeroImageEl}
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className={pishtazStyles.section}>
          <div className={pishtazStyles.contentWithImage}>
            <div className={pishtazStyles.textContent}>
              <h2 className={pishtazStyles.sectionHeading}>Project Overview</h2>
              <p className={pishtazStyles.largeText}>
                Pishtaz Bakhtar approached us to develop a professional bilingual website that would showcase their extensive industrial capabilities and establish their digital presence. As an established manufacturer with decades of experience, they needed a platform that would reflect their reliability, technical expertise, and industrial scale.
                <br/><br/>
                The project required not only web design and development but also industrial photography and video production to accurately represent the factory's scale and credibility to potential B2B clients.
              </p>
            </div>
            <div className={pishtazStyles.sideImage}>
              <img 
                src="/projects/pishtazbakhtar/Modern_Neutral_Mockup_Website_Design_Services_Promotion_Instagram2.jpg" 
                alt="Website Mockup" 
                className={pishtazStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={pishtazStyles.section}>
          <div className={pishtazStyles.contentWithImage}>
            <div className={pishtazStyles.textContent}>
              <h2 className={pishtazStyles.sectionHeading}>Scope of Work</h2>
              <ul className={pishtazStyles.bulletList}>
                <li>Bilingual Website Design & Development (Persian & English)</li>
                <li>Industrial Photography</li>
                <li>Content Strategy & Copywriting</li>
                <li>Responsive Design Implementation</li>
                <li>SEO Optimization</li>
                <li>User Experience Design for B2B Audience</li>
              </ul>
            </div>
            <div className={pishtazStyles.sideImage}>
              <img 
                src="/projects/pishtazbakhtar/Simple_Clean_Screen_Mockup_Fashion_New_Season_Instagram_Post_12.jpg" 
                alt="Responsive Design" 
                className={pishtazStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Industrial Photography */}
        <div className={pishtazStyles.imageGridSection}>
          <h2 className={pishtazStyles.sectionHeading}>Industrial Photography</h2>
          <div className={pishtazStyles.imageGrid}>
            <div className={pishtazStyles.gridImage}>
              <img 
                src="/projects/pishtazbakhtar/IMG_0098.jpg" 
                alt="Industrial Photography 1" 
                className={pishtazStyles.gridItemImage}
              />
            </div>
            <div className={pishtazStyles.gridImage}>
              <img 
                src="/projects/pishtazbakhtar/IMG_0099.jpg" 
                alt="Industrial Photography 2" 
                className={pishtazStyles.gridItemImage}
              />
            </div>
            <div className={pishtazStyles.gridImage}>
              <img 
                src="/projects/pishtazbakhtar/IMG_0114.jpg" 
                alt="Industrial Photography 3" 
                className={pishtazStyles.gridItemImage}
              />
            </div>
            <div className={pishtazStyles.gridImage}>
              <img 
                src="/projects/pishtazbakhtar/IMG_0115.jpg" 
                alt="Industrial Photography 4" 
                className={pishtazStyles.gridItemImage}
              />
            </div>
          </div>
        </div>
        
        {/* Design Approach */}
        <div className={pishtazStyles.section}>
          <div className={pishtazStyles.contentWithImage}>
            <div className={pishtazStyles.sideImage}>
              <img 
                src="/projects/pishtazbakhtar/IMG_0140.jpg" 
                alt="Factory Equipment" 
                className={pishtazStyles.contentImage}
              />
            </div>
            <div className={pishtazStyles.textContent}>
              <h2 className={pishtazStyles.sectionHeading}>Design Approach</h2>
              <p className={pishtazStyles.largeText}>
                For Pishtaz Bakhtar's website, we developed a visual language that reflects the industrial strength and technical precision of their operations. The design features a strong dark blue base with brushed metal textures and orange highlights, creating a color palette that communicates reliability and industrial energy.
                <br/><br/>
                Typography was carefully selected to be clean and highly legible in both Persian and English, addressing the brand's bilingual communication needs. The layout prioritizes services, machinery capabilities, experience, and contact accessibility—all designed with a B2B logic that helps potential clients quickly find the information they need.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Factory Images */}
        <div className={pishtazStyles.wideImageContainer}>
          <img 
            src="/projects/pishtazbakhtar/IMG_0146.jpg" 
            alt="Factory Interior" 
            className={pishtazStyles.wideImage} 
          />
        </div>
        
        {/* Technical Implementation */}
        <div className={pishtazStyles.section}>
          <div className={pishtazStyles.contentWithImage}>
            <div className={pishtazStyles.textContent}>
              <h2 className={pishtazStyles.sectionHeading}>Technical Implementation</h2>
              <p className={pishtazStyles.largeText}>
                The website was built with a focus on performance and accessibility, ensuring fast loading times even with the heavy use of industrial imagery. We implemented a responsive design that works seamlessly across devices, from desktop workstations to mobile phones.
                <br/><br/>
                Special attention was given to the bilingual implementation, creating a seamless language switching experience that maintains consistent navigation and user experience regardless of the selected language. The content management system was customized to make updating product specifications and technical information straightforward for the client's team.
              </p>
            </div>
            <div className={pishtazStyles.sideImage}>
              <img 
                src="/projects/pishtazbakhtar/IMG_0141.jpg" 
                alt="Technical Implementation" 
                className={pishtazStyles.contentImage}
              />
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className={pishtazStyles.outcomeSection}>
          <h2 className={pishtazStyles.sectionHeading}>Outcome</h2>
          <p className={pishtazStyles.largeText}>
            The completed website successfully established Pishtaz Bakhtar's digital presence, providing them with a professional platform that accurately represents their industrial capabilities and decades of expertise. The site is fully responsive, SEO-ready, and built with scalability in mind to grow with the company as they expand their services and reach.
            <br/><br/>
            Since launch, the client has reported increased inquiries from international prospects who discovered their services through the new website, helping them expand their business beyond traditional markets.
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
