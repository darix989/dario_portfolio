import React, {useContext} from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {useScrollPosition} from '../../Hooks'
import {PoiContext, } from "../../PoiContext/PoiContext";

const Hobbies = (props) => {
    const user = props.user;
    const hobbies = props.hobbies;
    const init = props.init;
    const poiHandler = useContext(PoiContext);
  
    useScrollPosition(({prevPos, currPos}) => {
        // console.log('diamine ', Math.abs(currPos.y));
        let newPoi = ({x: poiHandler.getPoi().x, y:  Math.abs(currPos.y)})
        poiHandler.setPoi(newPoi);
      }, [])

    return (
      <Layout user={user} init={init}>
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