"use client";
import React from "react";
import { Header } from "../page";
const HiringTables = () => {
  return (
    <div style={styles.container}>
      <Header />
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <h2 style={styles.header}>For Companies:</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Choosing Us</th>
            <th style={styles.th}>Not Choosing Us</th>
          </tr>
        </thead>
        <tbody>
          <tr style={styles.row}>
            <td style={styles.td}>
              🚀 Faster Hiring Process – AI automates first-round interviews &
              shortlisting.
            </td>
            <td style={styles.td}>
              ⏳ Slow & Time-Consuming Hiring – HR teams spend hours filtering
              candidates.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              🎯 Accurate Candidate Selection – AI analyzes soft skills,
              confidence & technical knowledge.
            </td>
            <td style={styles.td}>
              ❌ Higher Risk of Hiring Wrong Candidates – No AI-backed
              evaluations.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              📊 Consistent & Objective Evaluation – Standardized AI-driven
              assessments.
            </td>
            <td style={styles.td}>
              ❌ Inconsistent Evaluations – Manual assessments may be biased or
              unstructured.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              🗣️ Voice & Facial Analysis – AI assesses communication, confidence
              & professionalism.
            </td>
            <td style={styles.td}>
              ❌ No AI Insights – No way to gauge a candidate’s soft skills
              in-depth.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              💬 AI Chatbot for Assistance – Helps recruiters with instant
              candidate insights.
            </td>
            <td style={styles.td}>
              ❌ Manual Workload on HR – Screening and assessments require extra
              effort.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              🔑 Access to Pre-Screened Talent – Find job-ready candidates
              efficiently.
            </td>
            <td style={styles.td}>
              ❌ Limited Talent Pool – Harder to filter out top-quality
              candidates.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style={styles.header}>For Freshers:</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Choosing Us</th>
            <th style={styles.th}>Not Choosing Us</th>
          </tr>
        </thead>
        <tbody>
          <tr style={styles.row}>
            <td style={styles.td}>
              🎯 Real AI Mock Interviews – Get hands-on experience before real
              interviews.
            </td>
            <td style={styles.td}>
              ❌ No Interview Practice – You may struggle with confidence &
              real-world questions.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              📊 Instant AI Feedback – Know your strengths & weaknesses
              immediately.
            </td>
            <td style={styles.td}>
              ❌ No AI Feedback – You won’t know where to improve.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              📄 Smart Resume Builder – Create ATS-friendly resumes with AI
              suggestions.
            </td>
            <td style={styles.td}>
              ❌ Weak Resume – Your resume may not be optimized for
              shortlisting.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              📚 Question-Wise Improvements – Get specific insights for each
              question.
            </td>
            <td style={styles.td}>
              ❌ No Personalized Tips – You won’t get structured improvement
              guidance.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              💬 AI Chatbot Assistance – Get 24/7 support for doubts & career
              guidance.
            </td>
            <td style={styles.td}>
              ❌ No AI Support – No quick answers or career roadmap suggestions.
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.td}>
              🚀 Better Job Opportunities – AI pre-screening increases recruiter
              attention.
            </td>
            <td style={styles.td}>
              ❌ Fewer Job Chances – Companies may overlook you due to lack of
              preparation.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    margin: "30px",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
    fontSize: "16px",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
    fontSize: "2rem",
    marginTop: "20px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    animation: "fadeIn 1s ease-in-out",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  th: {
    padding: "15px",
    backgroundColor: "#007bff",
    color: "#fff",
    textAlign: "left",
    fontSize: "1.1rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    transition: "all 0.3s ease",
  },
  td: {
    padding: "20px",
    textAlign: "left",
    borderBottom: "2px solid #f1f1f1",
    fontSize: "1rem",
    lineHeight: "1.6",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  row: {
    animation: "fadeIn 1.5s ease-in-out",
  },
};

export default HiringTables;
