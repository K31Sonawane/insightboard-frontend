import axios from "axios";

export const API = axios.create({
  baseURL: "https://insightboard-backend-do45.vercel.app/"
});

export const submitTranscript = (transcript: string) =>
  API.post("/graph", { transcript });

export const getJobStatus = (jobId: string) =>
  API.get(`/graph/${jobId}`);
