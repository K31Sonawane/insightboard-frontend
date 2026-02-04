import { useEffect, useState } from "react";
import { getJobStatus } from "../api/graphApi";

export default function JobStatus({ jobId, onDone }: any) {
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getJobStatus(jobId);
      setStatus(res.data.status);

      if (res.data.status === "done") {
        clearInterval(interval);
        onDone(res.data.result.tasks);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [jobId]);

  return <p>Status: {status}</p>;
}
