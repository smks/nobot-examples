module.exports = () => {
  // 1) api call to get jira values
  

  // 2) convert jira values into a writable object
  const jiraData = {
    projectId: '234789',
    game: 'december-2018-advent-calendar',
    startDate: '2018-12-01T00:00:00',
    endDate: '2018-12-26T00:00:00'
  };    

  return jiraData;
};
