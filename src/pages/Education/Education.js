
import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = (props) => {
  const user = props.user;
  const init = props.init;

  return (
    <Layout user={user} init={init}>
      <div>
        <PortfolioGrowWrap>
          <SectionTitle>Education</SectionTitle>
        </PortfolioGrowWrap>
        <ul>
          {user.education.map((education, i) => (
            <PortfolioSequencedSlideWrap index={i} key={i}>
              <EducationItem>
                <Institution>{education.position}</Institution>
                <div>
                  <Degree>
                    {education.studyType}, {education.area}
                  </Degree>{' '}
                  <span> &sdot; </span>
                  <span>
                    {education.start.year} to {education.end.year}
                  </span>
                </div>
                <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
              </EducationItem>
            </PortfolioSequencedSlideWrap>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;