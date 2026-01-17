import styles from "./page.module.css";
import CreateTimeEntrySection from "@/components/CreateTimeEntrySection";
import TimeEntryHistory from "@/components/TimeEntryHistory";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <Box sx={containerStyles}
      >
        <CreateTimeEntrySection />
        <TimeEntryHistory />
      </Box>
    </div>
  );
}

const containerStyles = {
  width: '100%',
  maxWidth: '900px',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  p: 3,
};
