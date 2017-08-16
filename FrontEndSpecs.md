### Dev Specs: ###

- Single page app.

  - **Component: Links to Sprints by Week:** (Week 1, Week 2, Week 3). *alternatively: by sprint*
  - **Component: Week/Sprint:** Links to (Mini, Main Sprint).
  - **Component: Mini:** (embedded video mini, mini sprint, embedded mini review video).
  - **Component: Lecture:** (embedded video lecture, main sprint, embedded sprint review video).

```js

  const sprints = [
    {
      week: 1,
      topic: 'Basic JavaScript',
      mini: {
        vidUrl: 'http://youtube.com/sldkfjal?f',
        sprintUrl: 'http://github.com/LambdaSchool/somesprint',
        reviewVidUrl: 'http://youtube.com/alskfjlsdjf',
        solutionUrl: 'http://github.com/LambdaSchool/somesolution',
      },
      main: {
        vidUrl: 'http://youtube.com/sldkfjal?f',
        sprintUrl: 'http://github.com/LambdaSchool/somesprint',
        reviewVidUrl: 'http://youtube.com/alskfjlsdjf',
        solutionUrl: 'http://github.com/LambdaSchool/somesolution',
      },
    }
  ]

```
