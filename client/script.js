(function () {
  const endpoint = '/api/data-service';
  const loader = document.getElementById('loading');

  async function callRemoteApi(endpoint) {
    const response = await fetch(endpoint);

    return await response.json();
  }

  async function init() {
    const rawData = await callRemoteApi(endpoint);
    console.log(rawData);

    BarChart(rawData['VIC'], 'VIC', 'Victorian Recoveries', timezoneMel);
    BarChart(
      rawData['WA'],
      'WA',
      'Western Australian Recoveries',
      timezonePerth
    );

    loader.style.display = 'none';
  }

  const timezonePerth = moment()
    .tz('Australia/Perth')
    .format('MMMM Do YYYY, h:mm:ss a');
  const timezoneMel = moment()
    .tz('Australia/Melbourne')
    .format('MMMM Do YYYY, h:mm:ss a');

  const bgPalette = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];

  const borderPalette = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const BarChart = (dataForState, containerId, title, timezone) => {
    const ctx = document.getElementById(containerId).getContext('2d');
    const keyArr = Object.keys(dataForState);
    const valueArr = Object.values(dataForState);

    const data = {
      labels: keyArr.map((item, index) => {
        return (item = month[index]);
      }),
      datasets: [
        {
          label: title,
          backgroundColor: bgPalette,
          borderColor: borderPalette,
          borderWidth: 1,
          data: valueArr,
        },
      ],
    };
    const options = {
      legend: { display: false },
      title: {
        display: true,
        text: title + ' (as at: ' + timezone + ')',
      },
    };
    renderChart(ctx, 'bar', data, options);
  };

  init();

  const renderChart = (ctx, type, data, options) => {
    const chart = new Chart(ctx, {
      type: type,
      data: data,
      options: options ? options : {},
    });
  };
})();
