import styles from "./page.module.css";
import CreateTimeEntrySection from "@/components/CreateTimeEntrySection";
import TimeEntryHistory from "@/components/TimeEntryHistory";
import PageContainer from "@/components/PageContainer";

export default function Home() {
  return (
    <div className={styles.page}>
      <PageContainer>
        <CreateTimeEntrySection />
        <TimeEntryHistory />
      </PageContainer>
    </div>
  );
}
