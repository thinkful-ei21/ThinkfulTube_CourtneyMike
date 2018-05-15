/* global $ */
'use strict';

const API_KEY = 'AIzaSyBRV3a7Jt4G9xf641cQ5apffxOB17AUPl8';


/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {

  $.getJSON(
    BASE_URL,
    {
      key: 'AIzaSyBRV3a7Jt4G9xf641cQ5apffxOB17AUPl8',
      maxResults: 5,
      part: 'snippet',
      q: `${searchTerm}`,
      type: 'playlist'
    },
    callback
  );
};


// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  let jsonObject = response.items.map(data => {
    return {
      id: data.id.playlistId,
      title: data.snippet.title,
      thumbnail: data.snippet.thumbnails.default.url
    };
  });
  return jsonObject;
};
fetchVideos('squirrels', decorateResponse);

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
  //console.log(video);
  return `
    <li data-id="${video.id}">
      <h3>${video.title}</h3>
      <img src="${video.thumbnail}">
    </li>
    `;

};

const test = {
 "kind": "youtube#searchListResponse",
 "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/5_DOI3jJTkzwBmx_0NaUdfHPQAg\"",
 "nextPageToken": "CAUQAA",
 "regionCode": "US",
 "pageInfo": {
  "totalResults": 1000000,
  "resultsPerPage": 5
 },
 "items": [
  {
   "kind": "youtube#searchResult",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/DU4JSa1AzCZpQOAVvc-qC8enxwc\"",
   "id": {
    "kind": "youtube#playlist",
    "playlistId": "PLwlF1uffYtXrBWkdhf9AJtrSws-djZ_aX"
   },
   "snippet": {
    "publishedAt": "2014-01-16T14:34:54.000Z",
    "channelId": "UC9egiwuJsQZ0Cy2to5fvSIQ",
    "title": "Popular Videos - Cats",
    "description": "",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Cats - Topic",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/YUL6MN3-w1Gn1gLT-JYi4jf-yVg\"",
   "id": {
    "kind": "youtube#playlist",
    "playlistId": "PLSRCVBPKRukyZLOyvyErIuZ8wgjmV9SUP"
   },
   "snippet": {
    "publishedAt": "2017-04-27T16:02:26.000Z",
    "channelId": "UCYfybUu1hUKRZl3r7FYAgHg",
    "title": "CATS | Crash Arena Turbo Stars",
    "description": "",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/_om6dgiJrXQ/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/_om6dgiJrXQ/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/_om6dgiJrXQ/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "MasterOv",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/wseArcT39_V_ufIxWVJS3DPaW4U\"",
   "id": {
    "kind": "youtube#playlist",
    "playlistId": "PLY16C4iibn03WJLpo2S2yVNF8LdQ7_JFh"
   },
   "snippet": {
    "publishedAt": "2017-05-12T06:10:51.000Z",
    "channelId": "UCOynRdpGiTCNFhCgD0RTe1w",
    "title": "CATS: Crash Arena Turbo Stars",
    "description": "",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/DBl-lM7_Eks/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/DBl-lM7_Eks/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/DBl-lM7_Eks/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "SHIMOROSHOW",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/ltV-m-CY9b4x60wha2NqfS5a_Zo\"",
   "id": {
    "kind": "youtube#playlist",
    "playlistId": "PLowDmDC45ckeogLUkkDG8AfLcNVc0QUqk"
   },
   "snippet": {
    "publishedAt": "2014-10-25T18:28:03.000Z",
    "channelId": "UCZKyD9ZfVpUqSrha0PdUaLQ",
    "title": "Cats 101 - Alphabetical Order",
    "description": "",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/7jZ9CGARwEs/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/7jZ9CGARwEs/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/7jZ9CGARwEs/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "MetalGoddess",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/8ATAlyL5mLycDob2dILHeaDXbzo\"",
   "id": {
    "kind": "youtube#playlist",
    "playlistId": "PLQwzoMe7r8I8C__qarBs92gWGhat6BaNY"
   },
   "snippet": {
    "publishedAt": "2014-06-19T11:48:36.000Z",
    "channelId": "UCJ67yr9lbEAbf7-z4xFzlGw",
    "title": "All Tracks - The Cats",
    "description": "",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/PF9sS-WZvaU/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/PF9sS-WZvaU/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/PF9sS-WZvaU/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "The Cats - Topic",
    "liveBroadcastContent": "none"
   }
  }
 ]
};

// const decorate = decorateResponse(test);
// console.log(decorate);
// console.log(generateVideoItemHtml(decorate[0]));

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
