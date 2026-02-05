import axios from "axios";

export const api = axios.create({
  baseURL: "https://insightboard-backend.vercel.app/api", 
});

export const submitTranscript = (transcript: string) =>
  API.post("/graph", { transcript });

export const getJobStatus = (jobId: string) =>
  API.get(`/graph/${jobId}`);
