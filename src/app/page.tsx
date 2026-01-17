import Image from "next/image";
import styles from "./page.module.css";
import TimeEntryForm from "@/components/TimeEntryForm";

export default function Home() {
  return (
    <div className={styles.page}>

      <div className="mb-12 flex justify-center">
          <TimeEntryForm  />
      </div>

     
    </div>
  );
}
