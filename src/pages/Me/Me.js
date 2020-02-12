import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import { ProfileLink } from './styles';


const Me = (props) => {
  const user = props.user;
  // const hobbies = props.hobbies;
  const init = props.init;

  return (
    <Layout user={user} init={init}>
      <div>
        <PortfolioGrowWrap >
          <SectionTitle>About Me</SectionTitle>
        </PortfolioGrowWrap>
        <PortfolioSequencedSlideWrap index={1}>
          <Paragraph>{user.basics.summary}</Paragraph>
        </PortfolioSequencedSlideWrap>
      </div>
      <div>
        <PortfolioGrowWrap >
          <SectionTitle>Skills</SectionTitle>
        </PortfolioGrowWrap>
        <div>
          {user.skills.map( (skill, i) => (
            <PortfolioSequencedSlideWrap index={i} key={skill.name}>
              <Pill>{skill.name}</Pill>
            </PortfolioSequencedSlideWrap>
          ))}
        </div>
      </div>
      <div>
      <PortfolioGrowWrap >
        <SectionTitle>Profiles</SectionTitle>
          <ul>
            {user.basics.profiles.map((profile, i) => (
              <ProfileLink key={profile.network}>
                {i !== 0 && ' | '}
                <a href={profile.url} target="_blank" rel="noreferrer noopener">
                  {profile.network}
                </a>
              </ProfileLink>
            ))}
          </ul>
        </PortfolioGrowWrap>
      </div>
    </Layout>
  );
};

export default Me;