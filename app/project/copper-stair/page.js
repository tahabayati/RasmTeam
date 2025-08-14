import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';

export const dynamic = "force-dynamic";

export default function CopperStairProject() {
  const project = {
    title: 'Copper Stair',
    description: 'A spatial narrative in form and function.',
    tags: ['Graphic Design'],
    images: [
      '/projects/copper-stair/cover.jpg',
      '/projects/copper-stair/01.jpg',
      '/projects/copper-stair/02.jpg'
    ],
    content: 'The Copper Stair project exemplifies the harmonious blend of form and function. Through meticulous design and craftsmanship, we created a sculptural element that serves as both a practical staircase and an artistic centerpiece. The warm copper tones contrast beautifully with the minimalist surroundings, creating a focal point that draws the eye and elevates the entire space.'
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
      
      <div className={styles.content}>
        <p className={styles.projectText}>{project.content}</p>
      </div>
      
      <div className={styles.gallery}>
        {project.images.map((image, idx) => (
          <div key={idx} className={styles.imageWrapper}>
            <img 
              src={image} 
              alt={`${project.title} - Image ${idx + 1}`} 
              className={styles.image} 
              loading="lazy"
            />
          </div>
        ))}
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
