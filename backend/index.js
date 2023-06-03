import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt"

const app = express();
const saltRounds = 10;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quiz_game",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/api/questions", (req, res) => {
  const query = "SELECT * FROM questions";
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
//username, password, role login
app.post("/api/signup", (req, res) => {
  const {username, password } = req.body;

  bcrypt.hash(password, saltRounds, (hashErr, hashedPassword) => {
    if (hashErr) {
      console.error(hashErr);
      return res.status(500).json({ error: 'Internal server error' });
    }
    const role = "User";
    const insertQuery = "INSERT INTO login (username, password, role) VALUES (?, ?, ?)";
    db.query(insertQuery, [username, hashedPassword, role], (insertErr, insertResult) => {
      if (insertErr) {
        console.log(insertErr);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ message: 'User registered successfully' });
    });
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM login WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      res.status(401).send('Invalid username or password');
    } else {
      const storedPassword = results[0].password;
      bcrypt.compare(password, storedPassword, (compareErr, isMatch) => {
        if (compareErr) {
          console.error(compareErr);
          res.status(500).send('Internal Server Error');
        } else if (isMatch) {
          res.sendStatus(200);
        } else {
          res.status(401).send('Oops! Something went wrong.');
        }
      });
    }
  });
});

app.post("/api/questions/add", (req, res) => {
  const {
    category,
    question,
    option1,
    option2,
    option3,
    option4,
    correctOption,
  } = req.body;

  const query =
    "INSERT INTO questions (category, question, option1, option2, option3, option4, correctOption) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    category,
    question,
    option1,
    option2,
    option3,
    option4,
    correctOption,
  ];

  db.query(query, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/api/questions/:id", (req, res) => {
  const questionId = req.params.id;
  const query = " DELETE FROM questions WHERE id = ? ";

  db.query(query, [questionId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/api/questions/:id", (req, res) => {
  const questionId = req.params.id;
  const query = "UPDATE questions SET `category`= ?, `question`= ?, `option1`= ?, `option2`= ?, `option3`= ?, `option4`= ?, `correctOption`= ? WHERE id = ?";
  const values = [
    req.body.category,
    req.body.question,
    req.body.option1,
    req.body.option2,
    req.body.option3,
    req.body.option4,
    req.body.correctOption,
  ];

  db.query(query, [...values, questionId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
