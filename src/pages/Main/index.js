import React from 'react';
import Chart from '../../components/Charts';

import { Container, Graph } from './styles';

export default function Main() {
  return (
    <Container>
      <Graph>
        <section className="security">
          <h3>S</h3>
          <li>
            <div>
              <strong>Ops disponibilizadas</strong>
              <p>Metrica</p>
              <Chart />
            </div>
          </li>
        </section>
        <section className="quality">
          <h3>Q</h3>
          <li>
            <div>
              <strong>Ops disponibilizadas</strong>
              <p>Metrica</p>
              <Chart />
            </div>
          </li>
        </section>
        <section className="delivery">
          <h3>D</h3>
          <li>
            <div>
              <strong>Ops disponibilizadas</strong>
              <p>Metrica</p>
              <Chart />
            </div>
          </li>
        </section>
        <section className="coast">
          <h3>C</h3>
          <li>
            <div>
              <strong>Ops disponibilizadas</strong>
              <p>Metrica</p>
              <Chart />
            </div>
          </li>
        </section>
      </Graph>
    </Container>
  );
}
