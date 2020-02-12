
import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';
import TVGuide from '../../EPG/components/TVGuide';

const TableWrap = (props) => {

  return (
    <div>
      <TVGuide />
    </div>
  );
};

const Timeline = (props) => {
  const user = props.user;
  const init = props.init;

  return (
    <Layout user={user} init={init}>
      <div>
        <PortfolioGrowWrap>
          <SectionTitle>Timeline</SectionTitle>
        </PortfolioGrowWrap>
        <div>
          <TableWrap />
        </div>
      </div>
    </Layout>
  );
};

export default Timeline;