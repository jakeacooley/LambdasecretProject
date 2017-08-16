const {MongoClient} = require('mongodb');
const MONGO_URL = 'mongodb://localhost:27017/LambdaStudents';

module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {
		Projects: db.collection('projects'),
		Students: db.collection('students'),
		Sylabus: db.collection('sylabus'),
		Weeks: db.collection('weeks'),
		Topics: db.collection('topics'),
		Excercises: db.collection('excercises'),
		Lectures: db.collection('lectures'),
	};
}
