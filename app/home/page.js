import VideoHero from "../components/VideoHero";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import TeamCarousel from "../components/TeamCarousel";
import SkeletonLoader from "../components/SkeletonLoader";
import HomeClient from "./HomeClient";
import { generatePageMetadata } from "../../lib/metadata";

export const metadata = generatePageMetadata({
  title: "Rasm - Creative Design & Development Agency",
  description: "Welcome to RasmTeam (رسم تیم) - Your premier creative agency for branding, digital design, software development, and media production. Discover our innovative solutions and creative excellence.",
  keywords: [
    "creative agency",
    "design studio",
    "branding agency",
    "digital solutions",
    "creative team",
    "innovative design",
    "Persian design agency"
  ],
  path: "/home",
});

export default function Home() {
  const worksData = [
    { tags: ["Graphic Design", "Web Design", "Development"], description: "Branding Assets Design for a Home Appliance E-commerce", img: "/selectedworks/besty.jpg", link: "/project/manufacturer-branding" },
    { tags: ["Graphic Design", "Media Production"], description: "Industrial Website Design for Pishtaz Bakhtar", img: "/selectedworks/mok.jpg", link: "/project/pishtazbakhtar" },
    { tags: ["Graphic Design", "Development"], description: "Logo, Brand System & Website for a Creative Industry Mentor", img: "/selectedworks/harandian.jpg", link: "/project/fintech-brand" },
  
    { tags: ["Graphic Design"], description: "Website Design, Visual Identity & Media Production for a Health Company", img: "/selectedworks/Storefront.jpg", link: "/project/HealthCompanyTrue" },

    { tags: ["Rimowa", "Product"], description: "Crafting a Regional Fintech Brand with Local Roots", img: "/selectedworks/marfaaa.jpg", link: "/project/health-company" },
    { tags: ["Graphic Design", "Web Design", "Development"], description: "Visual Identity and E-commerce Design for a Youth-Centered Electronics Brand", img: "/selectedworks/buytronics.jpg", link: "/project/electronics-brand" },
    { tags: ["Graphic Design" , "Development"], description: "Creative Studio Visual Identity & Website Design", img: "/selectedworks/oko.jpg", link: "/project/oko-team" },

    { tags: ["Graphic Design"], description: "Healthy Cafe Brand Design in Muscat, Oman", img: "/selectedworks/BlueDot.jpg", link: "/project/creative-studio" },

    { tags: ["Graphic Design", "Web Design"], description: "Renzo Cafe: Modern Branding & Digital Experience", img: "/selectedworks/renzo.jpg", link: "/project/renzo-cafe" },
   
  ];

  return (
    <HomeClient>
      <section className={styles.wrap}>
      <VideoHero />
      <section id="intro" className={styles.intro}>
        <p className={styles.postHero}>
          We are Rasm — builders of powerful solutions and seamless experiences. Our team combines deep technical expertise with a strong design sensibility, delivering platforms, apps, and websites that are both robust and visually compelling. With a focus on precision, reliability, and user-centric design, we turn complex challenges into scalable, impactful digital products.
        </p>
        <div className={styles.tagsRow}>
          <button className={styles.tag}>WEB DESIGN</button>
          <button className={styles.tag}>UX / UI</button>
          <button className={styles.tag}>Development</button>
          <button className={styles.tag}>GRAPHIC DESIGN</button>
          <button className={styles.tag}>MEDIA PRODUCTION</button>
        </div>


      </section>
  

      <section className={styles.duo}>
  <figure className={styles.item}>
    <div className={styles.imgBox}>
      <img
        className={styles.duoImg}
        src="/whoweare/whoweare1.jpg"
        alt="Our Creative Vision — RASM"
      />
    </div>
    <figcaption className={styles.hover}>
      <p>
       <span className={styles.captionTitle}><strong>Our Creative Vision</strong><br /></span>
        
       Our vision is to be the trusted partner for businesses and industries seeking future-ready digital solutions. By combining cutting-edge technology, creative design, and a boutique approach, we shape a digital landscape where functionality, aesthetics, and personalized service thrive in harmony.
      </p>
    </figcaption>
    <div className={styles.mobileCaption}>
      <p>
        <span><strong>Our Creative Vision</strong><br /></span>

        
        Our vision is to be the trusted partner for businesses and industries seeking future-ready digital solutions. By combining cutting-edge technology, creative design, and a boutique approach, we shape a digital landscape where functionality, aesthetics, and personalized service thrive in harmony.
      </p>
    </div>
  </figure>

  <figure className={styles.item}>
    <div className={styles.imgBox}>
      <img
        className={styles.duoImg}
        src="/whoweare/whoweare2.jpg"
        alt="Transforming Ideas into Impact — RASM"
      />
    </div>
    <figcaption className={styles.hover}>
      <p>
        <span className={styles.captionTitle}> <strong>Transforming Ideas into Impact</strong><br /></span>

       
        we have to fix the signin page and sign in problem. the code is not being sent when i deploy it in the web.
        what should be done?
      </p>
    </figcaption>
    <div className={styles.mobileCaption}>
      <p>
        <strong>Transforming Ideas into Impact</strong><br />
        we have to fix the signin page and sign in problem. the code is not being sent when i deploy it in the web.
        what should be done?
      </p>
    </div>
  </figure>
</section>


      <section className={styles.boutique}>
        <div className={styles.boutiqueGrid}>
          <div className={styles.boutiqueHead}>
          
            <h2 className={styles.stack}>
              <span>Boutique</span>
              <span>Experience</span>
            </h2>
            <div className={styles.kickerRow}>
              <span className={styles.kicker}>A SOLUTION JUST FOR</span>
              <span className={styles.kickerYou}>you</span>
            </div>
          </div>
          <p className={styles.boutiqueCopy}>
            We transform the ordinary into the extraordinary through our boutique approach. Imagine a collaboration where your vision takes center stage, and every detail is crafted with precision and passion. We immerse ourselves in your project&apos;s story, building a partnership based on trust and creativity. With direct access to our dedicated team, you&apos;re assured swift, seamless communication and bespoke solutions that truly resonate. Discover a creative journey where your ideas come to life in the most vibrant and unique ways.
          </p>
        </div>
        <hr className={styles.rule} />
      </section>

  
      <section className={styles.services}>
        <div className={styles.servicesGrid}>
          

          <article className={styles.svcCard}>
            <div className={styles.imgWrap}>
              <img className={styles.svcImg} src="/OurServices/SoftwareDevelopment&ITSolutions.jpg" alt="Software Development & IT" loading="lazy" />
              <div className={styles.svcLabel}>Software Dev & IT</div>
              <div className={styles.svcFill}>
                <p>
                  <span className={styles.captionTitle}><strong>Software Development & IT Solutions</strong><br /></span>
                  From developing your needed apps to designing exclusive IT solutions for your corporate workflows.
                </p>
              </div>
            </div>
            <div className={styles.svcText}>
              <h3 className={styles.svcHeading}><span>Software Development</span> <span>& IT Solutions</span></h3>
              <p>
                From developing your needed apps to designing exclusive IT solutions for your corporate workflows.
              </p>
            </div>
          </article>

          <article className={styles.svcCard}>
            <div className={styles.imgWrap}>
              <img className={styles.svcImg} src="/OurServices/DigitalServices.jpg" alt="Digital Services" loading="lazy" />
              <div className={styles.svcLabel}>Digital Services</div>
              <div className={styles.svcFill}>
                <p>
                  <span className={styles.captionTitle}><strong>Digital Services</strong><br /></span>
                  Website Design: UI/UX, development, maintenance. 2D/3D Animations: motion graphics, explainers, ads.
                </p>
              </div>
            </div>
            <div className={styles.svcText}>
              <h3 className={styles.svcHeading}><span>Digital</span> <span>Services</span></h3>
              <p>
                Website Design: UI/UX design, web development, and maintenance.<br />
                2D/3D Animations: motion graphics, explainer videos, and animated advertisements.
              </p>
            </div>
          </article>
          <article className={styles.svcCard}>
            <div className={styles.imgWrap}>
              <img className={styles.svcImg} src="/OurServices/BrandinServices.jpg" alt="Branding" loading="lazy" />
              <div className={styles.svcLabel}>Branding Services</div>
              <div className={styles.svcFill}>
                <p>
                  <span className={styles.captionTitle}><strong>Branding Services</strong><br /></span>
                  Visual Identity Design: Brand strategy, logo design, and corporate identity.
                  Graphic Design: Print materials, packaging design, and promotional graphics.
                </p>
              </div>
            </div>
            <div className={styles.svcText}>
              <h3 className={styles.svcHeading}><span>Branding</span> <span>Services</span></h3>
              <p>
                Visual Identity Design: Brand strategy, logo design, and corporate identity.<br />
                Graphic Design: Print materials, packaging design, and promotional graphics.
              </p>
            </div>
          </article>
          <article className={styles.svcCard}>
            <div className={styles.imgWrap}>
              <img className={styles.svcImg} src="/OurServices/MediaProduction.jpg" alt="Media Production" loading="lazy" />
              <div className={styles.svcLabel}>Media Production</div>
              <div className={styles.svcFill}>
                <p>
                  <span className={styles.captionTitle}><strong>Media Production</strong><br /></span>
                  Industrial Photography: product, corporate, and event. Videography: corporate, promotional, and events.
                </p>
              </div>
            </div>
            <div className={styles.svcText}>
              <h3 className={styles.svcHeading}><span>Media</span> <span>Production</span></h3>
              <p>
                Industrial Photography: product photography, corporate photography, and event photography.<br />
                Videography: corporate videos, promotional videos, and event videography.
              </p>
            </div>
          </article>
        </div>

        <hr className={styles.rule} />
      </section>
<section className={styles.works}>
  <h2 className={styles.selTitle} aria-label="Selected Works" role="heading">SELECTED WORKS</h2>

  <div className={styles.masonry}>
    {worksData.map((w, idx) => (
      <article className={styles.work} key={idx}>
        <Link href={w.link} className={styles.workLink}>
          <div className={styles.imgWrap}>
            <SkeletonLoader>
              <img className={styles.workImg} src={w.img} alt={w.description} loading="lazy" />
            </SkeletonLoader>
            <div className={styles.overlayMeta}>
              <span className={styles.workDesc}>{w.description}</span>
              {w.tags && w.tags.length > 0 && (
                <div className={styles.workTags}>
                  {w.tags.map((t, i) => (
                    <span key={i} className={styles.workTag}>{t}</span>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.hoverOverlay}>
              <span className={styles.viewProject}>View Project</span>
            </div>
          </div>
        </Link>
      </article>
    ))}
  </div>

  <div className={styles.moreWrap}>
    <Link href="/projects" className={styles.moreBtn}>
      More
      <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  </div>

  
</section>

  <section className={styles.Collaborators}>
    
    <div className={styles.collaboratorsGrid}>
      {/* Placeholder logos - replace with actual collaborator logos */}
      <img 
        src="/collaborators/Shabloun.png" 
        alt="Collaborator 1" 
        className={styles.collaboratorLogo}
        loading="lazy"
      />
      <img 
        src="/collaborators/Harandian.png" 
        alt="Collaborator 2" 
        className={styles.collaboratorLogo}
        loading="lazy"
      />
      <img 
        src="/collaborators/Ng.png" 
        alt="Collaborator 3" 
        className={styles.collaboratorLogo}
        loading="lazy"
      />
      <img 
        src="/collaborators/MountWay.png" 
        alt="Collaborator 4" 
        className={styles.collaboratorLogo}
        loading="lazy"
      />
    </div>
  </section>
  <TeamCarousel />
    </section>
    </HomeClient>
  );
}