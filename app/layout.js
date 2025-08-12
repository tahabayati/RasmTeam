import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import Navbar from "./components/Navbar";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
