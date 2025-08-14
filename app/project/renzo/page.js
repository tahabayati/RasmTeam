import Link from 'next/link';
import styles from '../../../styles/project-detail.module.css';

export const dynamic = "force-dynamic";

export default function RenzoProject() {
  const project = {
    title: 'Timeless Pleasure',
    description: 'Editorial design with a focus on rhythm and pacing.',
    tags: ['Graphic Design', 'Web Design'],
    images: ['/selectedworks/renzo.jpg'],
    content: 'Timeless Pleasure is an editorial design project that explores the art of visual storytelling through careful consideration of rhythm, pacing, and typographic hierarchy. The layout design creates a journey for the reader, with moments of impact and reflection carefully orchestrated to enhance the narrative flow and reader engagement.'
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
