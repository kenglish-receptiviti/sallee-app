# SALLEE App

## Requirements

* Node.js v14+ (we recommend using [nvm](https://github.com/nvm-sh/nvm))
* A Receptiviti API key pair, which you can obtain by signing up for a trial account here: [https://dashboard.receptiviti.com/](https://dashboard.receptiviti.com/)

## Development

First run:

```
npm install
```

Then run:

```
npm start
```

The app will then be available on `http://localhost:3000/`.

## Instructions

This exercise consists of two parts:

* Setting up an API to proxy requests to the Receptiviti API.
* Completing the `TODO` sections in the TypeScript code.

### Backend API

In order for the app to work, you will need to set up an API to handle requests from the SALLEE App. This API can be done in whatever language you like (Python, Node.js, Go, etc.). It needs to:

* Accept a `POST` request with a payload that looks like:

```json:
{
  "key": "<Receptiviti API key>",
  "secret": "<Receptiviti API secret>",
  "content": "<Text to be scored>"
}
```

* Validate that all three fields are non-empty.
* Send the request to the Receptiviti API. Code samples are available on [https://dashboard.receptiviti.com/docs/api](https://dashboard.receptiviti.com/docs/api).

Hint: Your API will need to have CORS enabled to accept requests from the JS frontend.

### TypeScript TODO Sections

There are five `TODO` sections (one of which is trivial) spread across the following two files:

* `src/App.tsx`
* `src/SentimentChart.tsx`

They will need to be completed for the app to run properly. Once complete it should look something like the following (although the form does need to look exactly the same):

![SALLEE App](sallee-app.gif)
