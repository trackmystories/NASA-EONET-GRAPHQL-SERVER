module.exports = {
  Query: {
    events: (_, __, { dataSources }) =>
      dataSources.eventsAPI.getAllEvents()
  }
}
