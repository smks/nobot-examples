const randomSelection = arr => arr[Math.floor(Math.random() * arr.length)];

// Imagine this data being retrieved from Jira and transformed
const fetchDataFromJira = (ticketNumber) => {
  console.log(`fetching data from ${ticketNumber}...`);

  const randomProjects = ['apple-orchards', 'blueberry-burst', 'cherry-chaser', 'damson-in-distress'];
  const randomLiveDates = [
    { startDate: '2018-09-01T00:00:00', endDate: '2018-09-20T00:00:00' },
    { startDate: '2018-10-01T00:00:00', endDate: '2018-10-04T00:00:00' },
    { startDate: '2018-11-01T00:00:00', endDate: '2018-11-12T00:00:00' },
    { startDate: '2018-12-01T00:00:00', endDate: '2018-12-25T00:00:00' },
  ];

  const { startDate, endDate } = randomSelection(randomLiveDates);

  // transform to the format we need
  return {
    projectId: Math.floor(Math.random() * 10000000),
    game: randomSelection(randomProjects),
    startDate,
    endDate,
  };
};

module.exports = fetchDataFromJira;
