import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;
export const Graph = styled.div`
  section {
    display: flex;
    align-items: center;

    h3 {
      margin: 2rem;
    }

    li {
      display: grid;
      grid-template-columns: repeat(3, minmax(25rem, 1fr));
      list-style: none;
      width: 100%;
      grid-gap: 2rem;
      div {
        width: 100%;
        strong {
          font-size: 3.6rem;
        }
        p {
          margin-top: 0.5rem;
          font-size: 1.6rem;
        }
      }
    }
  }
`;
