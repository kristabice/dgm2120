const { GraphQLServer } = require("graphql-yoga");
let videos = [
  {
    url: "kristabice.com",
    title: "Hello World"
  },
  {
    url: "kristabice.co",
    title: "Hello"
  },
  {
    url: "kristabice.com",
    title: "World"
  }
];
let exampleSidebar = {
  title: "example",
  url: "example.url"
};

let readingSidebar = [
  {
    url: "kristabice.comr",
    title: "Hello World"
  },
  {
    url: "kristabice.cor",
    title: "Hello"
  },
  {
    url: "kristabice.comr",
    title: "World"
  }
];
const resolvers = {
  Query: {
    getSidebar: () => videos,
    getAssignment: () => {
      "this is my assignment";
    }
  },
  Videos: {
    title: videos.map(video => video.title),
    url: videos.map(video => video.url)
  },
  SideBar: {
    videos: () => videos,
    reading: () => readingSidebar,
    example: () => exampleSidebar,
    objectives: () => ["one", "two"],
    due: () => "date"
  },
  Reading: {
    title: readingSidebar.map(reading => reading.title),
    url: readingSidebar.map(reading => reading.url)
  },
  Example: {
    title: () => exampleSidebar.title,
    url: () => exampleSidebar.url
  }
};

const server = new GraphQLServer({
  typeDefs: "./graphQL/schema.graphql",
  resolvers
});

server.start(() => console.log("server is running on http://localhost:4000"));
