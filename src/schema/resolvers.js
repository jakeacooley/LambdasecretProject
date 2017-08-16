module.exports = {
  Query: {
    AllProjects: async (root, data, {mongo: {Projects}}) => {
      return await Projects.find({}).toArray(); 
    },
    AllStudents: async (root, data, {mongo: {Students}}) => {
      return await Students.find({}).toArray(); 
    },
    AllSylabus: async (root, data, {mongo: {Sylabus}}) => {
      return await Sylabus.find({}).toArray(); 
    },
    AllWeeks: async (root, data, {mongo: {Weeks}}) => {
      return await Weeks.find({}).toArray(); 
    },
    AllTopics: async (root, data, {mongo: {Topics}}) => {
      return await Topics.find({}).toArray(); 
    },
    AllExcercises: async (root, data, {mongo: {Excercises}}) => {
      return await Excercises.find({}).toArray(); 
    },
    AllLectures: async (root, data, {mongo: {Lectures}}) => {
      return await Lectures.find({}).toArray(); 
    },
  },
  Mutation: {
    createProject: async (root, data, {mongo: {Project}}) => {
      const response = await Project.insert(data); 
      return Object.assign({id: response.insertedIds[0]}, data); 
    },
    createStudent: async (root, data, {mongo: {Student}}) => {
      const response = await Student.insert(data); 
      return Object.assign({id: response.insertedIds[0]}, data); 
    },
    createSylabus: async (root, data, {mongo: {Sylabus}}) => {
      const response = await Sylabus.insert(data); 
      return Object.assign({id: response.insertedIds[0]}, data); 
    },
    createWeeks: async (root, data, {mongo: {Weeks}}) => {
      const response = await Weeks.insert(data); 
      return Object.assign({id: response.insertedIds[0]}, data); 
    },
    createTopics: async (root, data, {mongo: {Topics}}) => {
      const response = await Topics.insert(data); 
      return Object.assign({id: response.insertedIds[0]}, data); 
    },
    createExcercise: async (root, data, {mongo: {Excercise}}) => {
      const response = await Excercise.insert(data); 
      return Object.assign({id: response.insertedIds[0]}, data); 
    },
    createLecture: async (root, data, {mongo: {Lecture}}) => {
      const response = await Lecture.insert(data); 
      return Object.assign({id: response.insertedIds[0]}, data); 
    },
  },

  Project: {
    id: root => root._id || root.id, 
  },
  Sylabus: {
    id: root => root._id || root.id, 
  },
  Week: {
    id: root => root._id || root.id, 
  },
  Classe: {
    id: root => root._id || root.id, 
  },
  Student: {
    id: root => root._id || root.id, 
  },
  Topic: {
    id: root => root._id || root.id, 
  },
  Excercise: {
    id: root => root._id || root.id, 
  },
	Lecture: {
		id: root => root._id || root.id,
	},
};
