import './App.css';

import ReactSpeedometer from 'react-d3-speedometer';
import Table from './components/Table/Table';

import * as XLSX from 'xlsx';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CompareChart from './components/dashboards/CompareChart';

const usStateData = {
  Alabama: { riskLevel: 'Medium', geographicRisk: 2 },
  Alaska: { riskLevel: 'Low', geographicRisk: 1 },
  Arizona: { riskLevel: 'High', geographicRisk: 3 },
  Arkansas: { riskLevel: 'Medium', geographicRisk: 2 },
  California: { riskLevel: 'High', geographicRisk: 3 },
  Colorado: { riskLevel: 'Medium', geographicRisk: 2 },
  Connecticut: { riskLevel: 'Low', geographicRisk: 1 },
  Delaware: { riskLevel: 'Low', geographicRisk: 1 },
  Florida: { riskLevel: 'High', geographicRisk: 3 },
  Georgia: { riskLevel: 'High', geographicRisk: 3 },
  Hawaii: { riskLevel: 'Low', geographicRisk: 1 },
  Idaho: { riskLevel: 'Low', geographicRisk: 1 },
  Illinois: { riskLevel: 'Medium', geographicRisk: 2 },
  Indiana: { riskLevel: 'Medium', geographicRisk: 2 },
  Iowa: { riskLevel: 'Low', geographicRisk: 1 },
  Kansas: { riskLevel: 'Medium', geographicRisk: 2 },
  Kentucky: { riskLevel: 'Medium', geographicRisk: 2 },
  Louisiana: { riskLevel: 'High', geographicRisk: 3 },
  Maine: { riskLevel: 'Low', geographicRisk: 1 },
  Maryland: { riskLevel: 'Low', geographicRisk: 1 },
  Massachusetts: { riskLevel: 'Low', geographicRisk: 1 },
  Michigan: { riskLevel: 'Medium', geographicRisk: 2 },
  Minnesota: { riskLevel: 'Low', geographicRisk: 1 },
  Mississippi: { riskLevel: 'Medium', geographicRisk: 2 },
  Missouri: { riskLevel: 'Medium', geographicRisk: 2 },
  Montana: { riskLevel: 'Low', geographicRisk: 1 },
  Nebraska: { riskLevel: 'Low', geographicRisk: 1 },
  Nevada: { riskLevel: 'Medium', geographicRisk: 2 },
  New_Hampshire: { riskLevel: 'Low', geographicRisk: 1 },
  New_Jersey: { riskLevel: 'Medium', geographicRisk: 2 },
  New_Mexico: { riskLevel: 'High', geographicRisk: 3 },
  New_York: { riskLevel: 'High', geographicRisk: 3 },
  North_Carolina: { riskLevel: 'Medium', geographicRisk: 2 },
  North_Dakota: { riskLevel: 'Low', geographicRisk: 1 },
  Ohio: { riskLevel: 'Medium', geographicRisk: 2 },
  Oklahoma: { riskLevel: 'Medium', geographicRisk: 2 },
  Oregon: { riskLevel: 'Low', geographicRisk: 1 },
  Pennsylvania: { riskLevel: 'Medium', geographicRisk: 2 },
  Rhode_Island: { riskLevel: 'Low', geographicRisk: 1 },
  South_Carolina: { riskLevel: 'Medium', geographicRisk: 2 },
  South_Dakota: { riskLevel: 'Low', geographicRisk: 1 },
  Tennessee: { riskLevel: 'Medium', geographicRisk: 2 },
  Texas: { riskLevel: 'High', geographicRisk: 3 },
  Utah: { riskLevel: 'Low', geographicRisk: 1 },
  Vermont: { riskLevel: 'Low', geographicRisk: 1 },
  Virginia: { riskLevel: 'Low', geographicRisk: 1 },
  Washington: { riskLevel: 'Medium', geographicRisk: 2 },
  West_Virginia: { riskLevel: 'Medium', geographicRisk: 2 },
  Wisconsin: { riskLevel: 'Low', geographicRisk: 1 },
  Wyoming: { riskLevel: 'Low', geographicRisk: 1 },
};

const calculateRiskScore = (vendor) => {
  if (vendor) {
    const {
      Geographic_Risk,
      Inventory_Visibility,
      Dependency_Risk,
      Supply_Chain_Incidents,
      Annual_Revenue,
    } = vendor;

    const riskScore =
      0.1 * Geographic_Risk +
      0.1 * (100 - Inventory_Visibility) +
      0.3 * (100 - Dependency_Risk) +
      0.2 * Supply_Chain_Incidents +
      0.3 * Annual_Revenue;

    return riskScore;
  }
  return 0;
};

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelectedData] = useState({});
  const [compare, setCompare] = useState({});
  const selectedRiskScore = calculateRiskScore(selected);
  const compareRiskScore = calculateRiskScore(compare);

  const normalizedSelectedRiskScore = (selectedRiskScore / 47.3) * 100;
  const normalizedCompareRiskScore = (compareRiskScore / 47.3) * 100;
  useEffect(() => {
    document.title = 'External Party Risk Analysis';
  }, []);

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        try {
          const json = XLSX.utils.sheet_to_json(worksheet);
          console.log(json);
          setData(json);
        } catch (error) {
          console.error('Error converting worksheet to JSON:', error);
        }
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  const calcualtestatment = () => {
    if (selected && compare) {
      if (Number(selected?.Risk_Score) > Number(compare?.Risk_Score)) {
        return `Company ${compare.Company_Name} has lower risk associated`;
      }
      return ``;
    }
  };

  return (
    <div className='mx-auto max-w-screen-xl'>
      <header
        className='flex justify-between items-center mb-4'
      
      >
        <h1 className='text-2xl font-bold my-4'>
          External Party Risk Dashboard
        </h1>
        <div className='flex space-x-4'>
          <a
            href='https://github.com/mishra-raman'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://linkedin.com/in/raman-mishra/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </header>

      <div className='mt-10 w-full flex justify-between items-center mb-4'>
        <div className='w-1/2 flex-col rounded-xl h-80 flex justify-between items-center relative mr-5'>
          {/* File Upload Section */}
          <div className='mb-4'>
            <form>
              <label htmlFor='upload'>Upload File </label>
              <input
                type='file'
                name='upload'
                id='upload'
                onChange={readUploadFile}
              />
            </form>
          </div>
          
          {/* User Inputs Section */}
          <div className='flex justify-center'>
            <div className='vendor-container text-center'>
              <h1>
                <strong>Vendor 1</strong>
              </h1>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='companyName'>Company Name</label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='companyName'
                  id='companyName'
                  value={selected?.Company_Name || ''}
                  onChange={(e) =>
                    setSelectedData({
                      ...selected,
                      Company_Name: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='annualRevenue'>Annual Revenue</label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='annualRevenue'
                  id='annualRevenue'
                  value={selected?.Annual_Revenue || ''}
                  onChange={(e) =>
                    setSelectedData({
                      ...selected,
                      Annual_Revenue: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='supplyChainIncidents'>
                  Supply Chain Incidents
                </label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='supplyChainIncidents'
                  id='supplyChainIncidents'
                  value={selected?.Supply_Chain_Incidents || ''}
                  onChange={(e) =>
                    setSelectedData({
                      ...selected,
                      Supply_Chain_Incidents: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='inventoryVisibility'>
                  Inventory Visibility
                </label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='inventoryVisibility'
                  id='inventoryVisibility'
                  value={selected?.Inventory_Visibility || ''}
                  onChange={(e) =>
                    setSelectedData({
                      ...selected,
                      Inventory_Visibility: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='dependencyRisk'>Dependency Risk</label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='dependencyRisk'
                  id='dependencyRisk'
                  value={selected?.Dependency_Risk || ''}
                  onChange={(e) =>
                    setSelectedData({
                      ...selected,
                      Dependency_Risk: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='geographicRisk'>Geographic Risk</label>
                <select
                  name='geographicRisk'
                  id='geographicRisk'
                  value={selected?.Geographic_Risk || ''}
                  onChange={(e) =>
                    setSelectedData({
                      ...selected,
                      Geographic_Risk:
                        usStateData[e.target.value].geographicRisk,
                    })
                  }
                >
                  <option value=''>Select a state</option>
                  {Object.keys(usStateData).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='vendor-container text-center'>
              <h1>
                <strong>Vendor 2</strong>
              </h1>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='companyName2'>Company Name</label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='companyName2'
                  id='companyName2'
                  value={compare?.Company_Name || ''}
                  onChange={(e) =>
                    setCompare({ ...compare, Company_Name: e.target.value })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='annualRevenue2'>Annual Revenue</label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='annualRevenue2'
                  id='annualRevenue2'
                  value={compare?.Annual_Revenue || ''}
                  onChange={(e) =>
                    setCompare({ ...compare, Annual_Revenue: e.target.value })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='supplyChainIncidents2'>
                  Supply Chain Incidents
                </label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='supplyChainIncidents2'
                  id='supplyChainIncidents2'
                  value={compare?.Supply_Chain_Incidents || ''}
                  onChange={(e) =>
                    setCompare({
                      ...compare,
                      Supply_Chain_Incidents: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='inventoryVisibility2'>
                  Inventory Visibility
                </label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='inventoryVisibility2'
                  id='inventoryVisibility2'
                  value={compare?.Inventory_Visibility || ''}
                  onChange={(e) =>
                    setCompare({
                      ...compare,
                      Inventory_Visibility: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='dependencyRisk2'>Dependency Risk</label>
                <input
                  type='text'
                  className='py-2 border border-gray-200 text-center'
                  name='dependencyRisk2'
                  id='dependencyRisk2'
                  value={compare?.Dependency_Risk || ''}
                  onChange={(e) =>
                    setCompare({ ...compare, Dependency_Risk: e.target.value })
                  }
                />
              </div>
              <div className='flex justify-between items-center mb-2 mx-2'>
                <label htmlFor='geographicRisk2'>Geographic Risk</label>
                <select
                  
                  name='geographicRisk2'
                  id='geographicRisk2'
                  value={compare?.Geographic_Risk || ''}
                  onChange={(e) =>
                    setCompare({
                      ...compare,
                      Geographic_Risk:
                        usStateData[e.target.value].geographicRisk,
                      State_Name: e.target.value,
                    })
                  }
                >
                  <option value=''>Select a state</option>
                  {Object.keys(usStateData).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div
          className='w-1/2 flex-col rounded-xl h-80 flex justify-between items-center relative'
          style={{ backgroundColor: '#a5f1ff' }}
        >
          <div>
            <strong>Risk Score</strong>
          </div>
          <div>
            <div className='w-full rounded-2xl mx-2 flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='px-5'>
                <ReactSpeedometer
                  fluidWidth={false}
                  value={Math.round(normalizedSelectedRiskScore) || 0}
                  maxValue={0}
                  minValue={100}
                  height={200}
                  title={selected && selected?.Company_Name}
                />
                <div className='text-center'>
                  {selected && selected?.Company_Name}
                </div>
              </div>
              {compare && compare.Risk_Score ? (
                <div>
                  <ReactSpeedometer
                    fluidWidth={false}
                    value={Math.round(normalizedCompareRiskScore) || 0}
                    maxValue={0}
                    minValue={100}
                    height={200}
                  />
                  <div className='text-center'>
                    {compare && compare.Company_Name}
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
            <div>{calcualtestatment()} </div>
          </div>
        </div>
      </div>

      {selected?.Company_Name && (
        <CompareChart selected={selected} compare={compare} />
      )}

      <div className='mb-4'>
        <Table
          table={data}
          selected={selected}
          setCompare={setCompare}
          setData={setSelectedData}
        />
      </div>

      <div className='faq-section'>
        <h2 className='table-title'>Frequently Asked Questions</h2>
        <table className='faq-table'>
          <tbody>
            <tr>
              <td>
                <details>
                  <summary>
                    Question 1: What is the purpose of this dashboard?
                  </summary>
                  <p>
                    Answer 1: The purpose of this dashboard is to analyze
                    external party risk and provide insights based on various
                    data points.
                  </p>
                </details>
              </td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>
                    Question 2: How can I upload a file for analysis?
                  </summary>
                  <p>
                    Answer 2: To upload a file, click on the "Choose File"
                    button and select the file you want to upload. The data from
                    the file will be processed and displayed in the dashboard.
                  </p>
                </details>
              </td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Question 3: How am I calculating Risk Score?</summary>
                  <p>
                  Answer 3: The Risk Score is calculated based on several factors including Geographic Risk, Inventory Visibility, Dependency Risk, Supply Chain Incidents, and Annual Revenue. Each factor is given a certain weight and the total Risk Score is the sum of these weighted factors.</p>
                </details>
              </td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Question 4: What is the range of values in Input box?</summary>
                  <p>
                  Answer 4: The range of values in the input box depends on the specific input field. For example, 
                  for Annual Revenue, the range could be only within 0 to 20 Million for better result. For Supply Chain Incidents, the range could be from 0 to 4. For Inventory Visibility, the range could be from 0 to 100%. For Dependency Risk, the range could be from 0 to 100%.</p>
  </details>
              </td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Question 5: What does the color coding in the charts represent?</summary>
                  <p>
                  Answer 5: The color coding in the charts provides a visual representation of risk levels. For example, red represent high risk, yellow medium risk, and green low risk.</p>
  </details>
              </td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Question 6: How often is the data updated?</summary>
                  <p>
                  Answer 6: The data in the dashboard is updated in real-time
                    or based on the frequency of data source updates.
                  </p>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className='footer'>
        <p>
          Designed by{' '}
          <a
            href='https://www.linkedin.com/in/raman-mishra/'
            className='footer-link'
          >
            Raman Mishra
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;