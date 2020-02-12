import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Hobbies = ({ user, hobbies }) => {

    return (
        <Layout user={user}>
        <div>
            <PortfolioGrowWrap >
                <SectionTitle>Hobbies</SectionTitle>
            </PortfolioGrowWrap>
            <PortfolioSequencedSlideWrap index={1}>
                <Paragraph>{hobbies.intro}</Paragraph>
            </PortfolioSequencedSlideWrap>
        </div>
        <div>
            <PortfolioGrowWrap >
                <SectionTitle>Drawings</SectionTitle>
            </PortfolioGrowWrap>
            <PortfolioSequencedSlideWrap index={1}>
                <AwesomeSlider>
                    {hobbies.drawings.map( (drawLink, i) => (
                        <div key={i} data-src={drawLink}></div>
                    ))}
                </AwesomeSlider>
            </PortfolioSequencedSlideWrap>
        </div>

        </Layout>
    );
};

export default Hobbies;