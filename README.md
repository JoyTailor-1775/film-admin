# film-admin

Admin app for maintaining a library of films. React client-side with REST-ful Node.js api.

To run the project you need to direct to run `npm start`/ `yarn start` in /server folder and in /client folder afterwards.
The project will be started on two different ports.

Regarding the architecture: there was a mini-ux-library was realized in the project, supposing future possible extensions of
the project. All reusable components are complemented by comments, allowing easy and fast understanding of their purpose
and usage requirements.
The author would also like to notion several things about the app:

1. There were additionally getById() and update() routes inmplemented of the back-end. Though, they are out of scope of the
   initial tasks, the update() route is a part of CRUD basic functions, hence it will be inevitably added in future app versions.
   getById() is also a very common method in communication with any api, thus also very likely to be required in future versions.

2. I do not stick to any strict testing principle, and I'd readily accept any approach, that my team will use. So here test
   are added just to show my personal skills in their understanding, no dogmatic or philosophic sences this project's tests
   imply.
