# NASA API's : The Earth Observatory Natural Event Tracker (EONET) GRAPHQL

<img src="./screen.png" width="750" alt="screen.png">

##### Setup node modules

```
npm install
```

##### Compiles and runs at http://localhost:4000/

```
npm start
```

The Earth Observatory Natural Event Tracker (EONET) API with graphql, query the following categories:

• events
• volcanoes
• wildfires
• seaLakeIce
• severeStorms

##### Query in graphql playground

```
query Query {
 events {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
     categories {
        id
        title

      }
    }
}


```

##### Query Wildfires

```
query Query {
 wildfires {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
     categories {
        id
        title

      }
    }
}


```

##### Query Volcanoes

```
query Query {
 volcanoes {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
     categories {
        id
        title

      }
    }
}


```

##### Query Sea Lake Ice

```
query Query {
 seaLakeIce {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
     categories {
        id
        title

      }
    }
}


```

##### Query Severe Storms

```
query Query {
 severeStorms {
      id
      title
      link
      geometry {
        date
        type
        coordinates
      }
      sources {
        id
        url
      }
     categories {
        id
        title

      }
    }
}


```

## NASA API's : The Earth Observatory Natural Event Tracker (EONET)

https://api.nasa.gov/

The Earth Observatory Natural Event Tracker (EONET) is a prototype web service with the goal of:

providing a curated source of continuously updated natural event metadata; providing a service that links those natural events to thematically-related web service-enabled image sources (e.g., via WMS, WMTS, etc.). Please see our API documentation to learn more about how to use the EONET web services.

Development of EONET began in 2015 and has been supported by NASA’s Earth Observatory and Earth Science Data and Information System (ESDIS) Project.
