const {RESTDataSource} = require('apollo-datasource-rest');

class EventsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://eonet.sci.gsfc.nasa.gov/api/v3/';
  }

  async queryAllEvents() {
    const response = await this.get('events');
    return response.events;
  }

  async getAllEvents() {
    const response = await this.queryAllEvents();
    return Array.isArray(response)
      ? response.map(item => this.eventReducer(item))
      : [];
  }

  eventReducer(item) {
    return {
      id: item.id || 0,
      title: item.title,
      link: item.link,
      categories: item.categories.map(i => ({
        id: i.id,
        title: i.title,
      })),
      sources: item.sources.map(i => ({
        id: i.id,
        url: i.url,
      })),
      geometry: item.geometry.map(i => ({
        date: i.date,
        type: i.type,
        coordinates: i.coordinates,
      })),
    };
  }
}

module.exports = EventsAPI;
