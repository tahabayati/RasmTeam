'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/projects.module.css';

export default function ProjectsClient({ allProjects, filters }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Filter projects based on active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return allProjects;
    } else {
      return allProjects.filter(project => {
        switch(activeFilter) {
          case 'graphic-design':
            return project.tags.includes('Graphic Design');
          case 'media-production':
            return project.tags.includes('Media Production');
          case 'development':
            return project.tags.includes('Development');
          default:
            return true;
        }
      });
    }
  };
  
  // Get filtered projects
  const filteredProjects = getFilteredProjects();
  
  // Handle filter click
  const handleFilterClick = (filterId) => {
    if (filterId !== activeFilter) {
      setIsAnimating(true);
      setActiveFilter(filterId);
    }
  };
  
  // Handle animation timing
  useEffect(() => {
    // Only run effect when isAnimating is true
    if (!isAnimating) return;
    
    // Set a timer to remove the animation class
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    
    // Clean up the timer if component unmounts or isAnimating changes
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <>
      <div className={styles.filterContainer}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
            onClick={() => handleFilterClick(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={`${styles.projectsGrid} ${isAnimating ? styles.animating : ''}`}>
        {filteredProjects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img 
                src={project.images[0]} 
                alt={project.description} 
                className={styles.projectImage} 
                loading="lazy"
              />
            </div>
            <div className={styles.projectInfo}>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.projectTag}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
