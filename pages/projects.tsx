import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';

const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectCard}>
        <div className={styles.projectCardImage}>
          <Image
            src="/images/marcus-app.webp"
            width={300}
            height={500}
            alt="marcus-app"
          />
        </div>
        <div className={styles.projectCardText}>
          <h5 className={styles.projectCardHeading}>iOS Mobile Developer</h5>
          <p className={styles.projectCardParagraph}>
            Joined Goldman Sachs Marcus App from the discovery phase, as part of
            the Team recommends full stack microservice architecture solutions.
            Started as an iOS Engineer, and than joined the API integration
            Team.
          </p>
          <ul className={styles.projectCardList}>
            <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
              Joined the project from the discovery phase and focused on iOS App
              code base, and API integration.
            </li>
            <li className={styles.projectCardListItem}>
            <span className={styles.projectCardListItemBullet}>.</span>
              Worked extensively on the backend GraphQL server integration and
              upgrade to Apollo Server v4.
            </li>
            <li className={styles.projectCardListItem}>
            <span className={styles.projectCardListItemBullet}>.</span>
              Refactored the gateway services and downstream services according
              to the upgrade.
            </li>
          </ul>
          <p className={styles.projectCardDate}>
            <small>2022 - 2023</small>
          </p>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectCardImage}>
          <Image
            src="/images/future-step.webp"
            width={300}
            height={500}
            alt="princes-trust"
          />
        </div>
        <div className={styles.projectCardText}>
          <h5 className={styles.projectCardHeading}>Full Stack Mobile Engineer</h5>
          <p className={styles.projectCardParagraph}>
            Joined Princess Trust team as a React Native Engineer. He worked on
            full stack microservice architecture solutions. Started as an React
            Native Engineer, and than participated Cloud solutions and CI/CD.
          </p>
          <ul className={styles.projectCardList}>
            <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
              As a member of agile team, built-up React Native mobile APP that is
              platform agnostic with high volume throughput, and re-structured
              CI & CD pipeline.
            </li>
            <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
              Revised and created the codebase according to the new design
              guideline.
            </li>
            <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
              As a member of the Dev Team, worked on and released the Future
              Steps Mobile App (Prince’s Trust), which is a cross-platform React
              Native mobile app.
            </li>
            <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
              Analysed potential solutions based on evolving client requirements
              and built-up software from the ground up through to completion 
            </li>
            <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
              Trained\experienced in microservices logic for high throughput software applications, 
              both with JavaScript/React and Scala/Play Frameworks.
            </li>
            <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
              Experienced in ‘Software Development Methods’, Agile, Kanban and Scrum.
            </li>
          </ul>
          <p className={styles.projectCardDate}>
            <small>2021 - 2022</small>
          </p>
        </div>
      </div>
      
        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}>
            <Image
              src="/images/operation-planner.png"
              width={300}
              height={500}
              alt="princes-trust"
            />
          </div>
          <div className={styles.projectCardText}>
            <h5 className={styles.projectCardHeading}>
              Business Analyst / Operation Planner
            </h5>
            <p className={styles.projectCardParagraph}>
              Worked in MoD in the command echelon and prepared many Business
              Analyst documents for the higher echelon.
            </p>
            <ul className={styles.projectCardList}>
              <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
                Identified and documented detailed business rules and use cases
                based on requirements analysis.
              </li>
              <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
                Orchestrated smooth and effective flow of data to support high
                echelons users in decision making.
             </li>
              <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
                Identified and documented project constraints, assumptions,
                business impacts, risk and scope exclusions.
              </li>
              <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
                Built library models and reusable knowledge-based assets to
                produce consistent and streamlined business intelligence results.
              </li>
              <li className={styles.projectCardListItem}>
              <span className={styles.projectCardListItemBullet}>.</span>
                Recommended data standardisation and usage to ensure data
                integrity.
              </li>
            </ul>
            <p className={styles.projectCardDate}>
              <small>2002 - 2017</small>
            </p>
          </div>
        </div>
    </div>
  );
};

export default ProjectsPage;
