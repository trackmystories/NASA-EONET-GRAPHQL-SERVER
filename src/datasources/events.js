const { RESTDataSource } = require('apollo-datasource-rest');


class EventsAPI extends RESTDataSource {
  constructor(){
    super();
    this.baseURL = 'https://eonet.sci.gsfc.nasa.gov/api/v3/';
  }

  async queryAllEvents(){
    const response = await this.get('events');
    return response.events;
  }

  async getAllEvents() {
    const  response = await this.queryAllEvents();
    return Array.isArray(response)
    ? response.map((item) => this.eventReducer(item))
    : []
  }

  async getEventById({ eventId }){
    const res = await this.get('events', {id: eventId});
    return this.eventReducer(res[0]);
  }




 eventReducer(item){
    return {
        id: item.id || 0,
        title: item.title,
        link: item.link,
        categories : item.categories.map(i => ({
         id : i.id,
         title: i.title,
        })),
        sources :  item.sources.map(i => ({
         id : i.id,
         url: i.url,
        })),
       }
    }
}

module.exports = EventsAPI;
