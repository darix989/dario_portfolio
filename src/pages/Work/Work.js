import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = (props) => {
  const user = props.user;
  // const hobbies = props.hobbies;
  const init = props.init;

  return (
    <Layout user={user} init={init}>
      <div>
        <PortfolioGrowWrap>
          <SectionTitle>Work</SectionTitle>
        </PortfolioGrowWrap>
        <ul>
          {user.work.map((work, i) => (
            <PortfolioSequencedSlideWrap index={i} key={i}>
              <a href={work.website} target={'_blank'}>
              <WorkItem >
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
              </a>
            </PortfolioSequencedSlideWrap>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;