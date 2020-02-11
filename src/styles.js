import styled from 'styled-components';
import { blue } from '@carbon/colors';
import Slide from '@material-ui/core/Slide';
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

export function PortfolioSlotItem(props) {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={{enter: (props.index+1)*500}}>
      <div> {props.children} </div>
    </Slide>
  );
}