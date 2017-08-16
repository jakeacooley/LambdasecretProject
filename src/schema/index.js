const {makeExecutableSchema} = require('graphql-tools');

const typeDefs = `
  type Project{
    id: ID!
    solutionUrl: String
    excerciseUrl: String
		description: String!
  }
  type Sylabus{
		id: ID!
		description: String
	}
	type Week{
		id: ID!
		description: String
	}
  type Classe {
		id: ID!
		description: String!
	}
  type Student {
		id: ID!
		name: String!
		age: Int
	}
	type Topic {
		id: ID!
		description: String!
	}
	type Excercise {
		id: ID!
		description: String!
	}
	type Lecture {
		id: ID!
		description: String
	}
	
	type Query {
		allProjects: [Project!]!
		allSylabus: [Sylabus!]!
		allClasses: [Classe!]!
		allStudents: [Student!]!
		allTopics: [Topic!]!
		allExcercises: [Excercise!]!
		allLectures: [Lecture!]!
	}

 	type Mutation {
		createProject(description: String!): Project
		createSylabus(description: String!): Sylabus
		createWeek(description: String!): Week
		createClasse(description: String!): Classe
		createStudent(name: String!, age: Int): Student
		createTopic(description: String!): Topic
		createExcercise(description: String!): Excercise
		createLecture(description: String!): Lecture
	}
`;
module.exports = makeExecutableSchema({typeDefs});
