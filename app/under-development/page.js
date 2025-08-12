import styles from "./page.module.css";

export const metadata = {
  title: "Under Development",
  description: "This page is currently under development.",
};

export default function UnderDevelopmentPage() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <span className={styles.badge}>WIP</span>
        <h1 className={styles.title}>Under Development</h1>
        <p className={styles.subtitle}>This page is under development.</p>
      </section>
    </main>
  );
}


