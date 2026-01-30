const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/convert', (req, res) => {
    const { source_code } = req.body;

    // Save to temp file
    const tempFile = path.join(__dirname, '.tmp', `input_${Date.now()}.java`);
    fs.writeFileSync(tempFile, source_code);

    // Call python script
    const pythonScript = path.join(__dirname, 'tools', 'converter.py');
    exec(`python "${pythonScript}" "${tempFile}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: error.message });
        }

        // Clean up temp file
        fs.unlinkSync(tempFile);

        res.json({ converted_code: stdout });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
