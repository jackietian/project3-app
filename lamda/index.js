const { v4: uuidv4 } = require("uuid");

exports.handler = (event) => {
  //   return `response from index.hanlder ${uuidv4()}`;

  if (event.context["http-method"] === "GET") {
    if (event.context["resource-path"] === "/users") {
      return "GET all users";
    }

    if (event.context["resource-path"] === "/users/{userid}") {
      return "GET single user";
    }
  }

  if (event.context["http-method"] === "POST") {
    return "POST response";
  }
};
