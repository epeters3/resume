import styled from "styled-components";

const Split = styled.div`
  margin-top: ${p => p.theme.size.lg};
  display: grid;
  @media (min-width: 768px) {
    flex-direction: column;
    grid-template-columns: 60% 40%;
    column-gap: ${p => p.theme.size.md};
  }
`;

export default Split;
