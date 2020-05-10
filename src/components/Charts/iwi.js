// import React, { Component } from 'react';
// import { Line } from 'react-chartjs-2';
// // import api from '../../services/api';
// // import { Container } from './styles';
// class Chart extends Component {
//   state = {
//     chartData: [],
//   };

//   async componentDidMount() {
//     const response = await api.get('security');
//     console.log(response.data);
//     this.setState({ chartData: response.data });
//   }

//   render() {
//     const { chartData } = this.setState;

//     return (
//       <div>
//         <Line
//           data={chartData}
//           options={{
//             legend: {
//               display: true,
//               position: 'bottom',
//             },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     beginAtZero: true,
//                   },
//                 },
//               ],
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }
