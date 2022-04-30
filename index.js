const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello bk!");
});

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
];

// app.get("/users", (req, res) => {
// res.send("hello users");
//   res.send({ id: 1, name: "bk", job: "studend" });
// });

app.get("/users", (req, res) => {
  // console.log("query ",req.query)
  //filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  // console.log(req.params);
  // type 1
  // const id = req.params.id;
  // const user = users[id];
  //type 2
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id == id); //for 2 equal it's work. for triple equal must convert id into intger
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request ", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

// app.get("/fruits",(req, res)=>{
//   res.send(['mango','apple','orange']);
// })
// app.get("/fruits/mango/fazle",(req, res)=>{
//   res.send("mango fazle");
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
