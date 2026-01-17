import styles from "./page.module.css";
import CreateTimeEntrySection from "@/components/CreateTimeEntrySection";

export default function Home() {
  return (
    <div className={styles.page}>
      <CreateTimeEntrySection />
    </div>
  );
}
