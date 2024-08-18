// src/dashboardData.js

const dashboardData = {
    categories: [
      {
        id: "cspm_exec_dashboard",
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            id: "cloud_accounts",
            name: "Cloud Accounts",
            type: "graph",
            data: {
              connected: 2,
              not_connected: 2,
            },
          },
          {
            id: "cloud_risk_assessment",
            name: "Cloud Account Risk Assessment",
            type: "chart",
            data: {
              failed: 1689,
              warning: 681,
              not_available: 36,
              passed: 7253,
            },
          },
        ],
      },
      {
        id: "cwpp_dashboard",
        name: "CWPP Dashboard",
        widgets: [
          {
            id: "namespace_alerts",
            name: "Top 5 Namespace Specific Alerts",
            type: "text",
            data: "No Graph data available!",
          },
        ],
      },
    ],
  };
  
  export default dashboardData;
  