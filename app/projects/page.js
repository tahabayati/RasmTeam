'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/projects.module.css';

export const dynamic = "force-dynamic";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  // Project data with tags for filtering
  const allProjects = [
    {
      id: 'ludum-dare',
      description: 'High-Speed Creativity: Game Development for the Ludum Dare 72-Hour Challenge',
      tags: ['Graphic Design', 'Development', 'Media Production'],
      images: ['/projects/LudumDare.jpg']
    },
    {
      id: 'creative-mentor',
      description: 'Logo, Brand System & Website for a Creative Industry Mentor',
      tags: ['Graphic Design'],
      images: ['/selectedworks/renzo.jpg']
    },
    {
      id: 'fintech-brand',
      description: 'Crafting a Regional Fintech Brand with Local Roots',
      tags: ['Graphic Design'],
      images: ['/selectedworks/harandian.jpg']
    },
    {
      id: 'healthy-living',
      description: 'Healthy Living Cafe & Meal Plan Brand Design in Muscat (Oman)',
      tags: ['Graphic Design'],
      images: ['/selectedworks/mok.jpg']
    },
    {
      id: 'manufacturer-branding',
      description: 'Branding Assets Design for a Manufacturer',
      tags: ['Graphic Design', 'Media Production'],
      images: ['/selectedworks/besty.jpg']
    },
    {
      id: 'casting-factory',
      description: 'Designing a Digital Presence for an Established Casting Factory',
      tags: ['Development'],
      images: ['/selectedworks/oko.jpg']
    },
    {
      id: 'electronics-brand',
      description: 'Visual Identity and E-commerce Design for a Youth-Centered Electronics Brand',
      tags: ['Graphic Design'],
      images: ['/selectedworks/buytronics.jpg']
    },
    {
      id: 'health-company',
      description: 'Website Design, Visual Identity & Media Production for a Health Company',
      tags: ['Graphic Design', 'Media Production'],
      images: ['/selectedworks/marfaaa.jpg']
    },
    {
      id: 'landscaping-architecture',
      description: 'Landscaping & Architecture Company Visual Identity and Website design',
      tags: ['Graphic Design', 'Development'],
      images: ['/projects/OakAndArc.jpg']
    },
    {
      id: 'photography-studio',
      description: 'Photography Studio Visual Identity',
      tags: ['Graphic Design'],
      images: ['/projects/SaarStudio.jpg']
    },
    {
      id: 'creative-studio',
      description: 'Creative Studio Visual Identity & Website Design',
      tags: ['Graphic Design', 'Development'],
      images: ['/selectedworks/BlueDot.jpg']
    },
    {
      id: 'coffee-shop',
      description: 'Visual Identity and Website Design for A Coffee Shop',
      tags: ['Graphic Design'],
      images: ['/selectedworks/Storefront.jpg']
    },
  ];

  // Filter tags
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'media-production', label: 'Media Production' },
    { id: 'development', label: 'Development' }
  ];
  
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
    <section className={styles.projectsContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Projects</h1>
        <p className={styles.description}>
          Explore our diverse portfolio of work across different disciplines.
        </p>
      </div>

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
    </section>
  );
}
