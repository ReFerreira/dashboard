/* eslint-disable react/state-in-constructor */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import api from '../../services/api';

import { Loading } from './styles';

export default class Charts extends Component {
  state = {
    dados: {},
    labels: [],
    datasets: [],
    meta: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('security');
    const { data } = response;
    const datas = [];
    const valores = [];
    const meta = [];

    data.map((d) => {
      datas.push(d.data);
      valores.push(d.valor_1);
      meta.push(d.meta);
    });

    this.setState({
      dados: data,
      labels: datas,
      datasets: valores,
      meta,
      loading: false,
    });
  }

  render() {
    const { labels, datasets, loading, meta } = this.state;

    if (loading) {
      return <Loading> Carregando... </Loading>;
    }
    return (
      <div>
        <Line
          data={{
            labels,
            datasets: [
              {
                label: 'Segurança',
                data: datasets,
                backgroundColor: '#ffb3b3',
              },
              {
                label: 'Meta 0',
                data: meta,
                backgroundColor: 'rgb(153, 255, 153)',
              },
            ],
          }}
          options={{
            legend: {
              display: true,
              position: 'bottom',
              text: 'meta 0',
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    suggestedMax: 10,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
