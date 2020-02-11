import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <PortfolioGrowWrap>
          <SectionTitle>Work</SectionTitle>
        </PortfolioGrowWrap>
        <ul>
          {user.work.map((work, i) => (
            <PortfolioSequencedSlideWrap index={i}>
              <WorkItem key={i}>
                <WorkTitle>{work.position}</WorkTitle>
                <div>
                  <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                  <span> &sdot; </span>
                  <span>
                    {work.start.year} to {work.end.year}
                  </span>
                </div>
                <Paragraph>{work.summary}</Paragraph>
              </WorkItem>
            </PortfolioSequencedSlideWrap>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;