import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

const StyledWorksFooterSection = styled.section`
  position: relative;
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 4vw;
    font-weight: 600;
    letter-spacing: -2px;
    color: var(--blue);

    @media ${media.small} {
      font-size: 6vw;
      letter-spacing: -1px;
    }
  }
`;

const WorksFooter = () => {
  return (
    <StyledWorksFooterSection>
      <p>More projects coming soon ...</p>
    </StyledWorksFooterSection>
  );
};

export default WorksFooter;
