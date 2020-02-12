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
                <Paragraph>{'akjs dkjasb kjdaskjas ddasdkjas adkjasbakd ajkbsdk abdsha adkbaksljashndj jasdnjkasnjd jasndkjas ajsa ajnsas asj asdas  djljal.'}</Paragraph>
            </PortfolioSequencedSlideWrap>
        </div>
        <div>
            <PortfolioGrowWrap >
                <SectionTitle>Drawings</SectionTitle>
            </PortfolioGrowWrap>
            <div>
                <AwesomeSlider>
                    {hobbies.drawings.map( (drawLink, i) => (
                        <div key={i} data-src={drawLink}></div>
                    ))}
                </AwesomeSlider>
            </div>
        </div>

        </Layout>
    );
};

export default Hobbies;