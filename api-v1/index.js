const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session'); // Add this line

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add session middleware
app.use(
  session({
    secret: 'fM#&@xNc2a$!ZbT8gUvWnHqJtVmYp3s6v9y$B&E)H+MbQeThWmZq4t7w!z%C*F-J',
    resave: false,
    saveUninitialized: true,
  })
);

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kwgreen',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  connection.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
      req.session.userData = results[0];

      res.status(200).json({ success: true, message: 'Login successful', data: results });
    }
  );
});

app.post('/reg', async (req, res) => {
  try {
    const { firstname, lastname, username, password, avatar, type } = req.body;

    const existingUser = await new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        (error, results) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });

    if (existingUser.length > 0) {
      return res.status(409).json({ success: false, message: 'Username already exists' });
    }

    await new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO users (firstname, lastname, username, password, avatar, type) VALUES (?, ?, ?, ?, ?, ?)',
        [firstname, lastname, username, password, avatar, type],
        (error) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.post('/adduser', async (req, res) => {
  try {
    const {
      name,
      gender,
      dob,
      address,
      mob,
      email,
      district,
      block,
      cardno,
      panchayat,
    } = req.body;

    await new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO user_details (name, gender, dob, address, mob, email, district, block, cardno, panchayat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [name, gender, dob, address, mob, email, district, block, cardno, panchayat],
        (error) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });

    res.status(201).json({ success: true, message: 'User added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
});

app.post('/get-user-and-type', (req, res) => {
  // Check if the user is logged in
  if (req.session.userData) {
    const { username } = req.session.userData;
    
    // Fetch user type
    connection.query(
      'SELECT type FROM users WHERE username = ?',
      [username],
      (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ success: false, message: 'Internal server error' });
        }

        if (results.length === 0) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }

        const userType = results[0].type;

        // Respond with both user type and user details
        res.status(200).json({ success: true, message: 'User type and current user fetched successfully', userType, currentUser: req.session.userData });
      }
    );
  } else {
    res.status(401).json({ success: false, message: 'User not logged in' });
  }
});





app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
