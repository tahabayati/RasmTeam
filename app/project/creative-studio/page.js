import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import healthyStyles from './healthy-living.module.css';

export const dynamic = "force-dynamic";

export default function HealthyLivingProject() {
  const project = {
    title: 'Healthy Cafe Brand Design in Muscat, Oman',
    description: 'Creating a visual identity for a health-focused café and meal plan brand that balances nutrition with community.',
    tags: ['Graphic Design', 'Website Design'],
    images: [
      '/projects/healthy-living/1.jpg',
      '/projects/healthy-living/0-1024x683.jpg',
      '/projects/healthy-living/2-2-1024x896.jpg',
      '/projects/healthy-living/5-768x768.jpg',
      '/projects/healthy-living/original-153907859da11dc4a0f48965e4ca0e69.webp',
      '/projects/healthy-living/original-7490764d221f01928617ea244e847e45-2.webp'
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
      
      <div className={healthyStyles.fullWidthContent}>
        {/* Introduction */}
        <div className={healthyStyles.introSection}>
          <p className={healthyStyles.largeText}>
            <strong>Blue Dot</strong> is a health-focused café and meal plan brand based in Muscat, Oman, offering curated diet plans alongside an in-store café experience centered on community.
          </p>
        </div>

        {/* Feature Image */}
        <div className={healthyStyles.wideImageContainer}>
          <img 
            src="/projects/healthy-living/1.jpg" 
            alt="Blue Dot Brand Overview" 
            className={healthyStyles.wideImage} 
          />
        </div>
        
        {/* Project Overview */}
        <div className={healthyStyles.section}>
          <div className={healthyStyles.contentWithImage}>
            <div className={healthyStyles.textContent}>
              <h2 className={healthyStyles.sectionHeading}>Project Overview</h2>
              <p className={healthyStyles.largeText}>
                The brand approached us to develop a visual identity and packaging system that reflects both their nutritional integrity and their desire to build a health-conscious social space.
                <br/><br/>
                The challenge was to create a brand that could speak to both personal wellness and collective connection. From a logo that cleverly merges a bold dot, a "B", and a coffee cup, to a nostalgic yet premium type system, we built a visual language that resonates with trust, quality, and lifestyle.
              </p>
            </div>
            <div className={healthyStyles.sideImage}>
              <img 
                src="/projects/healthy-living/0-1024x683.jpg" 
                alt="Brand Identity" 
                className={healthyStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={healthyStyles.section}>
          <div className={healthyStyles.contentWithImage}>
            <div className={healthyStyles.textContent}>
              <h2 className={healthyStyles.sectionHeading}>Scope of Work</h2>
              <ul className={healthyStyles.bulletList}>
                <li>Logo design</li>
                <li>Visual identity and brand system</li>
                <li>Packaging design for health meal plans and café service</li>
                <li>Brand language aligned with local Omani design trends</li>
                <li>Visual storytelling centered on wellness and community</li>
              </ul>
            </div>
            <div className={healthyStyles.sideImage}>
              <img 
                src="/projects/healthy-living/original-153907859da11dc4a0f48965e4ca0e69.webp" 
                alt="Brand Elements" 
                className={healthyStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Process & Execution */}
        <div className={healthyStyles.section}>
          <div className={healthyStyles.contentWithImage}>
            <div className={healthyStyles.sideImage}>
              <img 
                src="/projects/healthy-living/2-2-1024x896.jpg" 
                alt="Brand Application" 
                className={healthyStyles.contentImage}
              />
            </div>
            <div className={healthyStyles.textContent}>
              <h2 className={healthyStyles.sectionHeading}>Process & Execution</h2>
              <p className={healthyStyles.largeText}>
                Blue Dot entered the market with a dual focus: healthy lifestyle meal subscriptions and a café experience designed to build community. Their brand vision wasn't just about nutrition — it was about fostering a space where like-minded individuals connect through health and conversation. This philosophy deeply informed our approach to visual identity.
                <br/><br/>
                We began by anchoring the brand in a symbol that unites its three pillars: wellness, identity, and connection. The logo design brought together a bold blue dot, the letter B, and the subtle shape of a coffee cup. More than just a stylistic choice, this composition positioned coffee as a core symbol of the brand's community-building values.
              </p>
            </div>
          </div>
        </div>
        
        {/* Wide Image - Packaging */}
        <div className={healthyStyles.wideImageContainer}>
          <img 
            src="/projects/healthy-living/5-768x768.jpg" 
            alt="Blue Dot Packaging" 
            className={healthyStyles.wideImage} 
          />
        </div>
        
        {/* Visual Language */}
        <div className={healthyStyles.section}>
          <div className={healthyStyles.contentWithImage}>
            <div className={healthyStyles.textContent}>
              <h2 className={healthyStyles.sectionHeading}>Visual Language</h2>
              <p className={healthyStyles.largeText}>
                The visual language extended this narrative into every aspect of the brand, from the clean, calming color palette to packaging that balanced functional quality with emotional resonance. Since the brand offered daily-delivered diet plans, it was critical to design packaging that met strict food safety and logistics standards — while still feeling personalized and high-end.
                <br/><br/>
                The café space itself was envisioned as a hub, and we created visual assets that could carry the brand's spirit across signage, merchandise, and interior cues — reinforcing the message that this is more than a café — it's a lifestyle space.
              </p>
            </div>
            <div className={healthyStyles.sideImage}>
              <img 
                src="/projects/healthy-living/original-7490764d221f01928617ea244e847e45-2.webp" 
                alt="Visual Elements" 
                className={healthyStyles.contentImage}
              />
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className={healthyStyles.outcomeSection}>
          <h2 className={healthyStyles.sectionHeading}>Outcome</h2>
          <p className={healthyStyles.largeText}>
            Our design process resulted in a brand that is not only practical and professional but also deeply human. The visual identity system we created reflects both the precision of health-focused service and the warmth of social connection. Today, Blue Dot stands as a community-driven health brand, where the act of sharing a cup of coffee becomes an entry point into a healthier, more connected life.
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
