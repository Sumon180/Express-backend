import axios from "axios";
const data = {
  contact_id: "xvnGLEjJ9RBKdxt8UKMN",
  first_name: "Khadya",
  last_name: "Smith",
  full_name: "Khadya Smith",
  email: "email-placeholder-for-1490097811@mailplaceholder.com",
};

export const axiosConfig = {
  method: "POST",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/contacts",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IkNJWTBRY0l2UDdtOVR4VldsdnkzIiwiY29tcGFueV9pZCI6ImlFN3U0Yk1yaENwbjFVaXVjSWpYIiwidmVyc2lvbiI6MSwiaWF0IjoxNjc0NzcwNTQ2NDUxLCJzdWIiOiJ1c2VyX2lkIn0.oUxIHBnAPNQJe01PUFMO3kXL4n0jqR78cg9acYly_qk",
  },
  data: data,
};

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
