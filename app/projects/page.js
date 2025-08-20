import styles from '../../styles/projects.module.css';
import ProjectsClient from './ProjectsClient';
import { generatePageMetadata } from '../../lib/metadata';

export const metadata = generatePageMetadata({
  title: "Our Projects - Creative Portfolio & Case Studies",
  description: "Explore RasmTeam's (رسم تیم) diverse portfolio of creative projects including branding, web design, development, and media production. Discover our innovative solutions across various industries.",
  keywords: [
    "creative portfolio",
    "design projects",
    "branding cases",
    "web development portfolio",
    "graphic design showcase",
    "creative agency work",
    "design case studies"
  ],
  path: "/projects",
});

export default function Projects() {

  // Project data with tags for filtering
  const allProjects = [
    {
      id: 'ludum-dare',
      description: 'High-Speed Creativity: Game Development for the Ludum Dare 72-Hour Challenge',
      tags: ['Graphic Design', 'Development', 'Media Production'],
      images: ['/projects/LudumDare.jpg']
    },
    {
      id: 'renzo-cafe',
      description: 'Renzo Cafe: Modern Branding & Digital Experience',
      tags: ['Graphic Design' , 'Web Design'],
      images: ['/selectedworks/renzo.jpg']
    },
    {
      id: 'fintech-brand',
      description: 'Logo, Brand System & Website for a Creative Industry Mentor',
      tags: ['Graphic Design', 'Development'],
      images: ['/selectedworks/harandian.jpg']
    },
    {
      id: 'pishtazbakhtar',
      description: 'Industrial Website Design for Pishtaz Bakhtar',
      tags: ['Graphic Design', "Media Production"],
      images: ['/selectedworks/mok.jpg']
    },
    {
      id: 'manufacturer-branding',
      description: 'Branding Assets Design for a Manufacturer',
      tags: ['Graphic Design', 'Media Production'],
      images: ['/selectedworks/besty.jpg']
    },
    {
      id: 'oko-team',
      description: 'Creative Studio Visual Identity & Website Design',
      tags: ['Graphic Design'],
      images: ['/selectedworks/oko.jpg']
    },
    {
      id: 'electronics-brand',
      description: 'Visual Identity and E-commerce Design for a Youth-Centered Electronics Brand',
      tags: ['Graphic Design', 'Web Design', 'Development'],
      images: ['/selectedworks/buytronics.jpg']
    },
    {
      id: 'health-company',
      description: 'Crafting a Regional Fintech Brand with Local Roots',
      tags: ['Graphic Design'],
      images: ['/selectedworks/marfaaa.jpg']
    },
    {
      id: 'oak-arc',
      description: 'Landscaping & Architecture Company Visual Identity and Website design',
      tags: ['Graphic Design', 'Development'],
      images: ['/projects/OakAndArc.jpg']
    },
    {
      id: 'saar-studio',
      description: 'Photography Studio Visual Identity',
      tags: ['Graphic Design'],
      images: ['/projects/SaarStudio.jpg']
    },
    {
      id: 'creative-studio',
      description: 'Healthy Living Cafe & Meal Plan Brand Design in Muscat (Oman)',
      tags: ['Graphic Design', 'Development'],
      images: ['/selectedworks/BlueDot.jpg']
    },
    {
      id: 'HealthCompanyTrue',
      description: 'Website Design, Visual Identity & Media Production for a Health Company',
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

  return (
    <section className={styles.projectsContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Projects</h1>
        <p className={styles.description}>
          Explore our diverse portfolio of work across different disciplines.
        </p>
      </div>

      <ProjectsClient allProjects={allProjects} filters={filters} />
    </section>
  );
}
