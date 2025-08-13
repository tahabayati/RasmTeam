import VideoHero from "../components/VideoHero";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import TeamCarousel from "../components/TeamCarousel";
import WorkCard from "../components/WorkCard";

export const dynamic = "force-dynamic";

export default function Home() {
  const worksData = [
    { tags: ["Kia Global", "Brand"], description: "Bold brand identity system executed across digital and print touchpoints.", img: "/selectedworks/harandian.jpg" },
    { tags: ["Skincare", "CGI"], description: "Amber: product CGI with realistic lighting and nuanced materials.", img: "/selectedworks/mok.jpg" },

    { tags: ["Aston Martin", "Campaign"], description: "Valour visual campaign: heritage meets modern performance.", img: "/selectedworks/besty.jpg" },
    { tags: ["Architecture", "Case Study"], description: "Copper Stair: a spatial narrative in form and function.", img: "/selectedworks/Storefront.jpg" },

    { tags: ["Rimowa", "Product"], description: "Product imagery highlighting engineering precision and craft.", img: "/selectedworks/marfaaa.jpg" },
    { tags: ["Research", "Material"], description: "Aggregate: a study in texture, weight, and structure.", img: "/selectedworks/oko.jpg" },
    { tags: ["Studio", "Portraits"], description: "Who We Are: portraits capturing the spirit of the team.", img: "/selectedworks/buytronics.jpg" },
    { tags: ["Editorial", "Book"], description: "Timeless / Pleasure: editorial design with a focus on rhythm and pacing.", img: "/selectedworks/renzo.jpg" },
    { tags: ["Industrial", "Photography"], description: "Raw Plate: industrial photography celebrating process.", img: "/selectedworks/BlueDot.jpg" },
   
  ];

  return (
    <section className={styles.wrap}>
      <VideoHero />
      <section className={styles.intro}>
        <p className={styles.postHero}>
          We are rasm, dream weavers and brand architects. Our passionate team blends artistic vision
          with strategic thinking to elevate your brand. Embracing a boutique philosophy, we provide
          personalized, one-on-one service to turn your ideas into impactful realities.
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
        
        we’re not just creators; we’re dream weavers and brand architects. Our team is passionate about blending artistic vision with strategic thinking to elevate your brand’s presence. Embracing a boutique philosophy, we offer tailored, one-on-one service that transforms ideas into reality.
      </p>
    </figcaption>
    <div className={styles.mobileCaption}>
      <p>
        <span><strong>Our Creative Vision</strong><br /></span>

        
        we’re not just creators; we’re dream weavers and brand architects. Our team is passionate about blending artistic vision with strategic thinking to elevate your brand’s presence. Embracing a boutique philosophy, we offer tailored, one-on-one service that transforms ideas into reality.
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

       
        From immersive business consulting to stunning visual identities, industrial photography, videography, and innovative 2D/3D animations, we craft unique solutions that resonate. Join us on a creative journey where your brand’s story unfolds with authenticity and flair.
      </p>
    </figcaption>
    <div className={styles.mobileCaption}>
      <p>
        <strong>Transforming Ideas into Impact</strong><br />
        From immersive business consulting to stunning visual identities, industrial photography, videography, and innovative 2D/3D animations, we craft unique solutions that resonate. Join us on a creative journey where your brand’s story unfolds with authenticity and flair.
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
            We transform the ordinary into the extraordinary through our boutique approach. Imagine a collaboration where your vision takes center stage, and every detail is crafted with precision and passion. We immerse ourselves in your brand story, building a partnership based on trust and creativity. With direct access to our dedicated team, you’re assured swift, seamless communication and bespoke solutions that truly resonate. Discover a creative journey where your ideas come to life in the most vibrant and unique ways.
          </p>
        </div>
        <hr className={styles.rule} />
      </section>

  
      <section className={styles.services}>
        <div className={styles.servicesGrid}>
          <article className={styles.svcCard}>
            <div className={styles.imgWrap}>
              <div className={styles.ph} />
              <div className={styles.chip}>Branding</div>
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
              <div className={styles.ph} />
              <div className={styles.chip}>Software Dev & IT</div>
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
              <div className={styles.ph} />
              <div className={styles.chip}>Digital</div>
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
              <div className={styles.ph} />
              <div className={styles.chip}>Media</div>
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
  <h2 className={styles.selTitle}>Selected Works</h2>

  <div className={styles.masonry}>
    {worksData.map((w, idx) => (
      <WorkCard key={idx} img={w.img} tags={w.tags} description={w.description} />
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

  <hr className={styles.rule} />
</section>

<TeamCarousel />
    </section>
  );
}
