# [External Party Risk Analysis Dashboard](https://eprmdashboard.netlify.ap))

This project is a Vendor Risk Dashboard built using React.js. It provides a comprehensive view of various risk factors associated with vendors and allows users to compare these factors between different vendors.

## Features

1. **Risk Score Analysis**: The dashboard provides a risk score analysis for selected vendors. The risk score is calculated based on various factors such as geographic risk, inventory visibility, dependency risk, supply chain incidents, and annual revenue.

2. **Risk Factor Comparison**: Users can compare the risk factors of two vendors side by side. This feature helps users to make informed decisions when choosing vendors.

3. **Interactive Charts**: The dashboard includes various interactive charts (bar chart, pie chart, donut chart) to visualize the risk factors.

4. **Geographic Risk Map**: The dashboard includes a geographic risk map that shows the geographic risk associated with each state.

5. **FAQ Section**: The dashboard includes a FAQ section to answer common questions about the dashboard.

## Components

The project is structured into various React components. Here are some of the main components:

- `App.js`: This is the main component of the application. It manages the state of the application and renders other components.

- `CompareChart.jsx`: This component displays the comparison of risk factors between two vendors.

- `BarChart.jsx` and `RevenueBarChart.jsx`: These components display the risk factors in a bar chart format.

- `DependencyPieChart.jsx` and `InventoryDonutChart.jsx`: These components display the dependency risk and inventory visibility in a pie chart and donut chart format respectively.

- `RiskMap.jsx`: This component displays the geographic risk map.

- `Card.jsx` and `BarChartCard.jsx`: These components are used to wrap other components and provide a consistent style.

## Styles

The project uses Tailwind CSS for styling. The styles are defined in `src/App.css` and `src/index.css`.

## Data

The data for the dashboard is provided by the user through a file upload. The data is then processed and displayed in the dashboard.

## Dependencies

The project uses several libraries such as `chart.js`, `react-chartjs-2`, `react-d3-speedometer`, `react-svg-worldmap`, `react-usa-map`, `react-vis`, `recharts`, and `xlsx` for various features.

## Development

To run the project locally, you need to have Node.js and npm installed. After cloning the repository, you can install the dependencies using `npm install` and start the development server using `npm start`.

## Future Enhancements

Future enhancements could include adding more risk factors, improving the user interface, and adding more interactive features.

For questions or collaborations, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/raman-mishra/).
