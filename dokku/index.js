const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path')

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'))
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));