import VideoHero from "../components/VideoHero";
import styles from "../../styles/home.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <section className={styles.wrap}>
      <VideoHero />

      <h2 className={styles.duoTitle}>Who We Are</h2>

      <section className={styles.duo}>
        <figure className={styles.item}>
          <div className={styles.ph} />
          <figcaption className={styles.hover}>
            <p>
              <strong>Our Creative Vision</strong>
              <br />
              we’re not just creators; we’re dream weavers and brand architects. Our team is passionate about blending artistic vision with strategic thinking to elevate your brand’s presence. Embracing a boutique philosophy, we offer tailored, one-on-one service that transforms ideas into reality.
            </p>
          </figcaption>
          <div className={styles.mobileCaption}>
            <p>
              <strong>Our Creative Vision</strong>
              <br />
              we’re not just creators; we’re dream weavers and brand architects. Our team is passionate about blending artistic vision with strategic thinking to elevate your brand’s presence. Embracing a boutique philosophy, we offer tailored, one-on-one service that transforms ideas into reality.
            </p>
          </div>
        </figure>

        <figure className={styles.item}>
          <div className={styles.ph} />
          <figcaption className={styles.hover}>
            <p>
              <strong>Transforming Ideas into Impact</strong>
              <br />
              From immersive business consulting to stunning visual identities, industrial photography, videography, and innovative 2D/3D animations, we craft unique solutions that resonate. Join us on a creative journey where your brand’s story unfolds with authenticity and flair.
            </p>
          </figcaption>
          <div className={styles.mobileCaption}>
            <p>
              <strong>Transforming Ideas into Impact</strong>
              <br />
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

      <hr className={styles.rule} />
      <section className={styles.services}>
        <div className={styles.servicesGrid}>
          <article className={styles.svcCard}>
            <div className={styles.imgWrap}>
              <div className={styles.ph} />
              <div className={styles.chip}>Branding</div>
              <div className={styles.svcFill}>
                <p>
                  <strong>Branding Services</strong><br />
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
                  <strong>Software Development & IT Solutions</strong><br />
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
                  <strong>Digital Services</strong><br />
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
                  <strong>Media Production</strong><br />
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
    <article className={styles.work}>
      <div className={styles.imgWrap}>
        <div className={styles.phA} />
        <div className={styles.chip}>Kia Global</div>
      </div>
      <div className={styles.wmeta}>
        <h3 className={styles.wtitle}>Kia Global</h3>
        <p className={styles.wsub}>Brand Identity</p>
      </div>
    </article>

    <article className={styles.work}>
      <div className={styles.imgWrap}>
        <div className={styles.phB} />
        <div className={styles.chip}>Aston Martin</div>
      </div>
      <div className={styles.wmeta}>
        <h3 className={styles.wtitle}>Valour</h3>
        <p className={styles.wsub}>Campaign Visuals</p>
      </div>
    </article>

    <article className={styles.work}>
      <div className={styles.imgWrap}>
        <div className={styles.phC} />
        <div className={styles.chip}>Rimowa</div>
      </div>
      <div className={styles.wmeta}>
        <h3 className={styles.wtitle}>Ingenieurskunst</h3>
        <p className={styles.wsub}>Product Imagery</p>
      </div>
    </article>

    <article className={styles.work}>
      <div className={styles.imgWrap}>
        <div className={styles.phD} />
        <div className={styles.chip}>Material Study</div>
      </div>
      <div className={styles.wmeta}>
        <h3 className={styles.wtitle}>Aggregate</h3>
        <p className={styles.wsub}>Research</p>
      </div>
    </article>

    <article className={styles.work}>
      <div className={styles.imgWrap}>
        <div className={styles.phB} />
        <div className={styles.chip}>Editorial</div>
      </div>
      <div className={styles.wmeta}>
        <h3 className={styles.wtitle}>Timeless / Pleasure</h3>
        <p className={styles.wsub}>Book Design</p>
      </div>
    </article>

    <article className={styles.work}>
      <div className={styles.imgWrap}>
        <div className={styles.phC} />
        <div className={styles.chip}>Skincare</div>
      </div>
      <div className={styles.wmeta}>
        <h3 className={styles.wtitle}>Amber</h3>
        <p className={styles.wsub}>Product CGI</p>
      </div>
    </article>
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
    </section>
  );
}
