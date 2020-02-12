import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = (props) => {
  const user = props.user;
  // const hobbies = props.hobbies;
  const init = props.init;

  return (
    <Layout user={user} init={init}>
          <div>
            <PortfolioGrowWrap>
              <SectionTitle>Projects</SectionTitle>
            </PortfolioGrowWrap>
            <ul>
              {user.projects.map((project, i) => (
                <PortfolioSequencedSlideWrap index={i} key={i}>
                  <a href={project.website} target={'_blank'}>
                    <ProjectItem >
                      <ProjectTitle>{project.displayName}</ProjectTitle>
                      <p>{project.summary}</p>
                      <SkillContainer>
                        {[...project.languages, ...project.libraries].map((item, j) => (
                          <Pill key={j}>{item}</Pill>
                        ))}
                      </SkillContainer>
                    </ProjectItem>
                  </a>
                </PortfolioSequencedSlideWrap>
              ))}
            </ul>
          </div>
        </Layout>
  );
};

export default Projects;
