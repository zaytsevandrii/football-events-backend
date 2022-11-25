'use strict';

/**
 * event router
 */

 /* module.exports = {
    routes: [
        {
          method: "GET",
          path: "/events",
          handler: "events.find",
          config: {
            policies: []
          }
        },
        {
          method: "GET",
          path: "/events/me",
          handler: "events.me",
          config: {
            policies: []
          }
        },
        {
          method: "GET",
          path: "/events/count",
          handler: "events.count",
          config: {
            policies: []
          }
        },
        {
          method: "GET",
          path: "/events/:id",
          handler: "events.findOne",
          config: {
            policies: []
          }
        },
        {
          method: "POST",
          path: "/events",
          handler: "events.create",
          config: {
            policies: []
          }
        },
        {
          method: "PUT",
          path: "/events/:id",
          handler: "events.update",
          config: {
            policies: []
          }
        },
        {
          method: "DELETE",
          path: "/events/:id",
          handler: "events.delete",
          config: {
            policies: []
          }
        }
      ]
  } */





const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event.event');
