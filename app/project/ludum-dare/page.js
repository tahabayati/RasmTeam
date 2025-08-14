import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';
import ludumStyles from './ludum-dare.module.css';

export const dynamic = "force-dynamic";

export default function LudumDareProject() {
  const project = {
    title: 'High-Speed Creativity: Game Development for the Ludum Dare 72-Hour Challenge',
    description: 'Creating a fully playable 3D video game in just 72 hours — from concept to final build.',
    tags: ['Graphic Design', 'Software Development'],
    images: [
      '/projects/ludum-dare-Game-Jam/GAME-JAM-POSTERa.jpg',
      '/projects/ludum-dare-Game-Jam/Brain-Storm-1.jpg',
      '/projects/ludum-dare-Game-Jam/CNA00629-E1.jpg',
      '/projects/ludum-dare-Game-Jam/CNA00637-E1.jpg',
      '/projects/ludum-dare-Game-Jam/MAH00979-E2_202610141031583.jpg',
      '/projects/ludum-dare-Game-Jam/MAH01046-E1.jpg',
      '/projects/ludum-dare-Game-Jam/MAH01056-E1.jpg',
      '/projects/ludum-dare-Game-Jam/MAH01066-E1.jpg'
    ],
    video: '/projects/ludum-dare-Game-Jam/C0002_1.mp4',
    ctaText: 'Experience the thrill for yourself. Step into the driver\'s seat of our Ludum Dare creation and see how we turned a 72-hour challenge into a fast-paced, gold-delivering, enemy-blasting adventure. Play the game through the link below and test your skills — can you keep the train running and the deliveries on time?',
    ctaLink: 'https://itch.io',
    ctaLinkText: 'Mugen Express Game itch.io',
    ctaImage: '/projects/ludum-dare-Game-Jam/Itch.io_logo-1.png'
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
      
      <div className={ludumStyles.fullWidthContent}>
        {/* Introduction */}
        <div className={ludumStyles.introSection}>
          <p className={ludumStyles.largeText}>
            The <strong>Ludum Dare Game Jam</strong> is the world's largest online game creation event, challenging developers to design and build a complete game in just 72 hours. Each edition revolves around a single theme revealed at the start of the competition. In this round, the theme was <strong>"Delivery"</strong>, pushing our team to merge speed, resource management, and creative storytelling into a playable experience.
          </p>
        </div>

        {/* Feature Video */}
        <div className={ludumStyles.videoWrapper}>
          <video 
            src={project.video} 
            controls
            className={ludumStyles.featureVideo} 
            poster="/projects/ludum-dare-Game-Jam/GAME-JAM-POSTERa.jpg"
          />
        </div>
        
        {/* Project Overview */}
        <div className={ludumStyles.section}>
          <div className={ludumStyles.contentWithImage}>
            <div className={ludumStyles.textContent}>
              <h2 className={ludumStyles.sectionHeading}>Project Overview</h2>
              <p className={ludumStyles.largeText}>
                In the intense environment of the Ludum Dare Game Jam, our team created a fully playable 3D video game in just 72 hours — from concept to final build. The year's theme, "Delivery", inspired us to merge fast-paced action with strategic gameplay. The result: a dynamic train-defense game where speed, accuracy, and resource management collide.
              </p>
            </div>
            <div className={ludumStyles.sideImage}>
              <img 
                src="/projects/ludum-dare-Game-Jam/Brain-Storm-1.jpg" 
                alt="Brainstorming session" 
                className={ludumStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Scope of Work */}
        <div className={ludumStyles.section}>
          <div className={ludumStyles.contentWithImage}>
            <div className={ludumStyles.textContent}>
              <h2 className={ludumStyles.sectionHeading}>Scope of Work</h2>
              <ul className={ludumStyles.bulletList}>
                <li>Game Concept & Design</li>
                <li>3D Modeling & Texturing</li>
                <li>Game Development</li>
                <li>Music & Sound Design</li>
                <li>Level Design</li>
              </ul>
            </div>
            <div className={ludumStyles.sideImage}>
              <img 
                src="/projects/ludum-dare-Game-Jam/CNA00629-E1.jpg" 
                alt="Development team at work" 
                className={ludumStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Game Concept & Mechanics */}
        <div className={ludumStyles.section}>
          <div className={ludumStyles.contentWithImage}>
            <div className={ludumStyles.sideImage}>
              <img 
                src="/projects/ludum-dare-Game-Jam/MAH01046-E1.jpg" 
                alt="Game development in progress" 
                className={ludumStyles.contentImage}
              />
            </div>
            <div className={ludumStyles.textContent}>
              <h2 className={ludumStyles.sectionHeading}>Game Concept & Mechanics</h2>
              <p className={ludumStyles.largeText}>
                Set on a high-speed train traveling through hostile territory, the player juggles three core objectives:
                <br/><br/>
                • <strong>Gold Wagon</strong> – Deliver gold packages to allied trucks.
                <br/>
                • <strong>Turret Wagon</strong> – Defend against enemy vehicles using two ammo types: rockets and machine guns.
                <br/>
                • <strong>Fuel Wagon</strong> – Maintain train operation by monitoring and refueling as needed.
                <br/><br/>
                This combination of delivery-based objectives and active defense mechanics created a challenging yet rewarding gameplay loop.
              </p>
            </div>
          </div>
        </div>
        
        {/* Development Process */}
        <div className={ludumStyles.section}>
          <div className={ludumStyles.contentWithImage}>
            <div className={ludumStyles.textContent}>
              <h2 className={ludumStyles.sectionHeading}>Development Process</h2>
              <p className={ludumStyles.largeText}>
                Every element — from 3D models and textures to gameplay programming and music composition — was built in-house by our team. We employed a multi-software production pipeline, using:
                <br/><br/>
                • <strong>Blender & 3ds Max</strong> – 3D modeling and asset creation
                <br/>
                • <strong>Unity Engine</strong> – Game development and programming
                <br/>
                • <strong>Photoshop & Illustrator</strong> – Texture design, UI elements, and promotional graphics
                <br/>
                • Additional in-house tools for sound design and optimization
                <br/><br/>
                The seamless integration of these tools enabled us to achieve a professional-level aesthetic despite the strict 72-hour time frame.
              </p>
            </div>
            <div className={ludumStyles.sideImage}>
              <img 
                src="/projects/ludum-dare-Game-Jam/MAH01056-E1.jpg" 
                alt="Team collaboration" 
                className={ludumStyles.contentImage}
              />
            </div>
          </div>
        </div>
        
        {/* Outcome */}
        <div className={ludumStyles.section}>
          <div className={ludumStyles.contentWithImage}>
            <div className={ludumStyles.sideImage}>
              <img 
                src="/projects/ludum-dare-Game-Jam/MAH01066-E1.jpg" 
                alt="Final game testing" 
                className={ludumStyles.contentImage}
              />
            </div>
            <div className={ludumStyles.textContent}>
              <h2 className={ludumStyles.sectionHeading}>Outcome</h2>
              <p className={ludumStyles.largeText}>
                Our game ranked in the top 20% of all entries worldwide, a testament to our team's ability to execute under pressure while maintaining creativity and polish. The project showcased our expertise in rapid prototyping, cross-discipline collaboration, and cohesive game design — all crucial in modern production.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className={ludumStyles.imageGrid}>
          <div className={ludumStyles.gridImage}>
            <img 
              src="/projects/ludum-dare-Game-Jam/CNA00637-E1.jpg" 
              alt="Team working together" 
              className={ludumStyles.contentImage}
            />
          </div>
          <div className={ludumStyles.gridImage}>
            <img 
              src="/projects/ludum-dare-Game-Jam/MAH00979-E2_202610141031583.jpg" 
              alt="Development environment" 
              className={ludumStyles.contentImage}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className={ludumStyles.ctaSection}>
          <p className={ludumStyles.ctaText}>{project.ctaText}</p>
          
          <a href={project.ctaLink} target="_blank" rel="noopener noreferrer" className={ludumStyles.ctaButton}>
            <img src={project.ctaImage} alt="itch.io" className={ludumStyles.ctaLogo} />
            {project.ctaLinkText}
          </a>
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