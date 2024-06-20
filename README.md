# Fedimint Observer UI

This is the fedimint observer UI. It is a web application that allows users to view collected data about federations.

The fedimint observer UI is built using [Next.js](https://nextjs.org/), a React framework for building server-rendered applications.

It is deployed on [Vercel](https://vercel.com/), a cloud platform for static sites and serverless functions and runs on this url: [https://fedimint-observer-ui.vercel.app/](https://fedimint-observer-ui.vercel.app/).

## Installation

To install the observer UI, you need to have [Node.js](https://nodejs.org/en/) installed on your machine. You can download the installer from the official website.

After installing Node.js, you can clone this repository and run the following commands to install the dependencies:

```bash
npm install
```

Add a `.env.local` file to the root of the project with the following content:

```bash
BACKEND_URL=<URL_TO_YOUR_BACKEND>
```

## Usage

To start the observer UI, run the following command:

```bash
npm start
```

This will start a development server on `http://localhost:3000`. You can open this URL in your browser to view the observer UI.


## Data model 

A federation can be fetched under the following url:
`BACKEND_URL/federation/{federation_id}/config`

The response object will have the following fields:
```{json}
"api_endpoints": {
    "0": {
        "url": string,
        "name": string
    },
    "1": {
        "url": string,
        "name": string
    },
    "2": {
        "url": string,
        "name": string
    },
    "3": {
        "url": string,
        "name": string
    }
}
"consensus_version": {
    "major": int,
    "minor": int
  }
"meta": TODO
"modules": {
    "0": {
      "kind": string,
      "version": {
        "major": int,
        "minor": int
      },
      "config": string
    },
    "1": {
      "kind": string,
      "version": {
        "major": int,
        "minor": int
      },
      "config": string
    },
    "2": {
      "kind": string,
      "version": {
        "major": int,
        "minor": int
      },
      "config": string
    },
    "3": {
      "kind": string,
      "version": {
        "major": int,
        "minor": int
      },
      "config": string
    },
    ...
}
```


## Page structure

The observer UI has the following pages:
- FederationSelection
- FederationOverview