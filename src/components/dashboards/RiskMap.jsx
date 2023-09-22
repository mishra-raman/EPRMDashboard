import React, { Component } from 'react';
import USAMap from 'react-usa-map';
const usStateData = [
  { state: 'AL', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'AK', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'AZ', riskLevel: 'High', geographicRisk: 3 },
  { state: 'AR', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'CA', riskLevel: 'High', geographicRisk: 3 },
  { state: 'CO', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'CT', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'DE', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'FL', riskLevel: 'High', geographicRisk: 3 },
  { state: 'GA', riskLevel: 'High', geographicRisk: 3 },
  { state: 'HI', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'ID', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'IL', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'IN', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'IA', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'KS', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'KY', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'LA', riskLevel: 'High', geographicRisk: 3 },
  { state: 'ME', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'MD', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'MA', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'MI', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'MN', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'MS', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'MO', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'MT', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'NE', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'NV', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'NH', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'NJ', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'NM', riskLevel: 'High', geographicRisk: 3 },
  { state: 'NY', riskLevel: 'High', geographicRisk: 3 },
  { state: 'NC', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'ND', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'OH', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'OK', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'OR', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'PA', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'RI', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'SC', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'SD', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'TN', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'TX', riskLevel: 'High', geographicRisk: 3 },
  { state: 'UT', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'VT', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'VA', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'WA', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'WV', riskLevel: 'Medium', geographicRisk: 2 },
  { state: 'WI', riskLevel: 'Low', geographicRisk: 1 },
  { state: 'WY', riskLevel: 'Low', geographicRisk: 1 },
];
class RiskMap extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '',stateData:null };
  }

  mapHandler = (event) => {
    console.log(event.target.dataset);
    this.setState({ text: event.target.dataset.name });
    const d=usStateData.find(s=>s.state===event.target.dataset.name)
    this.setState({...this.state,stateData:d})
    console.log(this.state)
    // alert(JSON.stringify(event.target));
  };

  statesFilling = () => {
    const obj = {};
    usStateData.forEach((state) => {
      let color;
      switch (state.riskLevel) {
        case 'Low':
          color = '#48BB78'; // Corresponding color code for bg-green-400
          break;
        case 'Medium':
          color = '#ECC94B'; // Corresponding color code for bg-yellow-400
          break;
        case 'High':
          color = '#F56565'; // Corresponding color code for bg-red-400
          break;
        default:
          color = '#CBD5E0'; // Corresponding color code for bg-gray-400
      }
      obj[state.state] = {
        fill: color,
      };
    });
    return obj;
  };

  render() {
    return (
      <div className=''>
        <USAMap
          height={'250px'}
          width={'300px'}
          customize={this.statesFilling()}
          onClick={this.mapHandler}
        />
        <div className=' pb-3 flex justify-center'>
        {this.state.stateData && <div>{`The state ${this.state.stateData?.state} has ${this.state.stateData?.riskLevel} risk associated`}</div>}
        </div>
      </div>
    );
  }
}
export default RiskMap;
