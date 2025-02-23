'use client';
import "./styles.css"
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [chartData, setChartData] = useState({});
  const [ratingData, setRatingData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null); // Tracks the open accordion index
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    setFeedbackList(result);
    prepareCharts(result);
  };

  const prepareCharts = (data) => {
    const ratings = data.map(item => item.rating);
    const feedbackCategories = data.map(item => item.feedback);
    const ratingCounts = {};
    ratings.forEach(rating => {
      ratingCounts[rating] = (ratingCounts[rating] || 0) + 1;
    });

    // Set the rating data for the Bar chart
    setRatingData({
      labels: Object.keys(ratingCounts),
      datasets: [{
        label: 'Rating Distribution',
        data: Object.values(ratingCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBorderWidth: 2,  
      }],
    });

    // Categorize feedback as "Positive" or "Negative" based on rating
    const feedbackCount = {
      Positive: 0,
      Negative: 0,
      Medium: 0,
    };

    data.forEach(item => {
      if (item.rating >= 5) {
        feedbackCount.Positive++;
      } else if (item.rating >= 3) {
        feedbackCount.Medium++;
      }
      else {
        feedbackCount.Negative++;
      }
    });

    // Set the chartData for the Pie chart
    setChartData({
      labels: ['Positive Feedback', 'Negative Feedback' , "Medium Feedback"],
      datasets: [{
        data: [feedbackCount.Positive, feedbackCount.Negative , feedbackCount.Medium],
        backgroundColor: ['#33FF57', '#FF5733' , "#2337C6"],
        hoverOffset: 4,
      }],
    });
  };

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if it's already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="feedback-container">
      {feedbackList?.length === 0 ? (
        <h2 className="no-feedback">No Interview feedback record found</h2>
      ) : (
        <>
          <div className="title-section">
            <h2 className="congratulations">Congratulations 🎉!</h2>
            <h2 className="intro-text">Here is your interview feedback.</h2>
            <h2 className="intro-description">
              <strong>Click on the Questions and see all of the details</strong>
            </h2>
          </div>

          <div className="chart-section">
            <div className="pie-chart-container">
              <h3 className="chart-title">Rating Distribution</h3>
              <Bar 
                data={ratingData} 
                options={{
                  responsive: true, 
                  maintainAspectRatio: true, 
                  scales: {
                    x: { beginAtZero: true },
                    y: { beginAtZero: true },
                  },
                }} 
              />
            </div>

            <div className="pie-chart-container">
              <h3 className="chart-title">Feedback Categories</h3>
              <Pie 
                data={chartData} 
                options={{
                  responsive: true, 
                  maintainAspectRatio: true,
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: function(tooltipItem) {
                          return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                      }
                    }
                  }
                }} 
              />
            </div>
          </div>

          <div className="feedback-cards">
            {feedbackList &&
              feedbackList.map((item, index) => (
                <div key={index} className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => toggleDropdown(index)} // Toggle open/close
                  >
                    <span>{item.question}</span>
                    <span className={`icon ${openIndex === index ? 'rotate' : ''}`}>▼</span>
                  </div>

                  <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                    <div className="feedback-details">
                      <div className="rating">
                        <strong>Rating:</strong> {item.rating}
                      </div>
                      <div className="user-answer">
                        <strong>Your Answer:</strong> {item.userAns}
                      </div>
                      <div className="correct-answer">
                        <strong>Correct Answer:</strong> {item.correctAns}
                      </div>
                      <div className="feedback">
                        <strong>Feedback:</strong> {item.feedback}
                      </div>
                      <div className="areas-of-improvement">
                        <strong>Areas of Improvement:</strong> {item.areasOfImprovement}
                      </div>
                      <div className="how-to-improve">
                        <strong>How to Improve:</strong> {item.howToImprove}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="go-home-btn">
            <Button onClick={() => router.replace('/dashboard')}>Go Home</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Feedback;
