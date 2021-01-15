const EventsAPI = require('../events');

const mocks = { get: jest.fn()};
const dataStructure = new EventsAPI();
dataStructure.get = mocks.get;





describe('[EventAPI.eventReducer]', () => {
  it('properly transforms event', () => {
    expect(dataStructure.eventReducer(mockEventResponse)).toEqual(mockEvent);
  });
});



const mockEvent = {
    id: "EONET_5199",
    title: "Iceberg A70",
    link: "https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5199",
    categories: [
      {
        id: "seaLakeIce",
        title: "Sea and Lake Ice"
      }
    ],
    sources: [
      {
        id: "NATICE",
        url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv"
      }
    ],
  };

 const mockEventResponse = {
     id: "EONET_5199",
     title: "Iceberg A70",
     link: "https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5199",
     closed: null,
     sources: [
       {
         id: "NATICE",
         url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv"
       }
     ],
     categories: [
       {
         id: "seaLakeIce",
         title: "Sea and Lake Ice"
       }
     ],
     geometry: [
       {
         magnitudeValue: null,
         magnitudeUnit: null,
         date: "2021-01-09T00:00:00Z",
         type: "Point"
       }
     ]
 }


module.exports.mockEventResponse = mockEventResponse;
