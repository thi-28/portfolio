import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  // Get computed styles based on Theme
  const getThemeColors = () => {
    const root = document.documentElement;
    const isDarkMode = document.querySelector('.main-container')?.classList.contains('dark-mode');
    
    if (isDarkMode) {
      return {
        surface: '#162030',
        text: '#dce8f4',
        accent: '#7090b8',
      };
    } else {
      return {
        surface: '#ffffff',
        text: '#1e3058',
        accent: '#3a5880',
      };
    }
  };

  const colors = getThemeColors();

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.surface, color: colors.text }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.surface}` }}
            date="Aug 2024 - Jul 2025"
            iconStyle={{ background: colors.accent, color: colors.text }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Deals Technology and Data Solutions Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">PricewaterhouseCoopers, Bangalore, India</h4>
            <p>
              Deployed LLM solutions for financial document processing; Engineered SQL validation pipelines; Architected automated financial alerting systems using AWS Lambda
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.surface, color: colors.text }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.surface}` }}
            date="Feb 2024 - Aug 2024"
            iconStyle={{ background: colors.accent, color: colors.text }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Deals Technology and Data Solutions Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">PricewaterhouseCoopers, Bangalore, India</h4>
            <p>
              Streamlined data workflows with Docker on AWS; Designed 5+ Power BI dashboards for executive reporting
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.surface, color: colors.text }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.surface}` }}
            date="Jun 2023 - Jul 2023"
            iconStyle={{ background: colors.accent, color: colors.text }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Generative AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Personifwy, Bangalore, India</h4>
            <p>
              Engineered NLP system with GPT-3.5 for job description generation; Optimized FastAPI performance; Developed semantic resume-job matching engine
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;