const { RESTDataSource } = require('apollo-datasource-rest');


class EventsAPI extends RESTDataSource {
  constructor(){
    super();
    this.baseURL = 'https://eonet.sci.gsfc.nasa.gov/api/v3/';
  }

  eventReducer(item){
    return {

    }
  }



  async getAllEvents(){
    const response = await this.get('events');
    return response.events;
  }

}

module.exports = EventsAPI;
