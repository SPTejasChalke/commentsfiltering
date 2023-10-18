const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the public directory (where your index.html is located)
app.use(express.static(path.join(__dirname, 'public')));

app.get("verify", async (req, res) => {
  const text = req.params.text;

  try {
      const response = await fetch(`http://localhost:5000/analyze?text=${comment.value}`)
      const res = res.json();
      
      res.json({score: res});
  } catch (error) {
      console.log(error)
      res.json({score: -1});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});