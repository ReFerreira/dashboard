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
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('security');
    const { data } = response;
    const datas = [];
    const valores = [];

    data.map((d) => {
      datas.push(d.data);
      valores.push(d.valor_1);
    });

    this.setState({
      dados: data,
      labels: datas,
      datasets: valores,
      loading: false,
    });
  }

  render() {
    const { labels, datasets, loading } = this.state;

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
                data: datasets,
                backgroundColor: '#ffb3b3',
              },
            ],
          }}
          options={{
            legend: {
              display: true,
              position: 'bottom',
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
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
