import styled from 'styled-components';
import { blue } from '@carbon/colors';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import React from 'react';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[20]};
  color: ${blue[70]};
  border: 3px solid ${blue[70]};
  border-radius: 2px;
  font-weight: bold;
`;

export function PortfolioGrowWrap(props) {
  
  return (
    <Grow in={true} timeout={{enter: 1000}}

    addEndListener={(node, done) => {
      // use the css transitionend event to mark the finish of a transition
      node.addEventListener('transitionend', props.onTransitionEnd, false);
    }}
    >
      <div> {props.children} </div>
    </Grow>
  );
}

export function PortfolioSequencedSlideWrap(props) {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={{enter: (props.index+1)*500}}>
      <div> {props.children} </div>
    </Slide>
  );
}

export const ElementBeforeCanvas = styled.div`
  position: relative;
  z-index: 3;
`;