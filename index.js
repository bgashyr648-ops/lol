// JawadTech

const express = require('express');
const axios = require('axios');
const app = express();
__path = process.cwd();
const PORT = process.env.PORT || 3000;

const serverUrls = {
  "server1": "https://bot-1kanf4su-d89850ffce9f.herokuapp.com",
  "server2": "https://bot-22b8mvri-1041791777cb.herokuapp.com",
  "server3": "https://bot-3354sitg-1e4137525c3b.herokuapp.com",
  "server4": "https://bot-3mx96wbv-b77819aeec0c.herokuapp.com",
  "server5": "https://bot-4h5b9ik1-40ee6084f939.herokuapp.com",
  "server6": "https://bot-62qu0gbq-107fc22cd1ee.herokuapp.com",
  "server7": "https://bot-6zf8cduy-1f42c2c2f1a8.herokuapp.com",
  "server8": "https://bot-8j0ttspr-6b0fd1265d1a.herokuapp.com",
  "server9": "https://bot-bci03ygl-df3bc4b85a80.herokuapp.com",
  "server10": "https://bot-d0l468pr-69f453d01e1b.herokuapp.com",
  "server11": "https://bot-fco7ml87-a9a38c82ecb6.herokuapp.com",
  "server12": "https://bot-fe1i80z5-2c64925f3230.herokuapp.com",
  "server13": "https://bot-fls5x79a-6fd5ffa15596.herokuapp.com",
  "server14": "https://bot-g3xdv74f-ab731c5f4f6d.herokuapp.com",
  "server15": "https://bot-gvtlqsag-0f41414ac25e.herokuapp.com",
  "server16": "https://bot-h420lkmu-280b72f20141.herokuapp.com",
  "server17": "https://bot-i6lfy626-270520cebaac.herokuapp.com",
  "server18": "https://bot-j8bitktm-0ef25ba02d5c.herokuapp.com",
  "server19": "https://bot-jogi35j9-6536c86d7b56.herokuapp.com",
  "server20": "https://bot-jxul1t5o-d3ede78d5f34.herokuapp.com",
  "server21": "https://bot-kn4gzh7j-241b77ebf137.herokuapp.com",
  "server22": "https://bot-mps8b2vg-80e644c77588.herokuapp.com",
  "server23": "https://bot-n0w3t49w-47392c7b35fc.herokuapp.com",
  "server24": "https://bot-nabw1yyl-a0e59375ccba.herokuapp.com",
  "server25": "https://bot-rnm9y3xo-aeebf4308dd1.herokuapp.com",
  "server26": "https://bot-sfl8ipbj-47a92fa0632b.herokuapp.com",
  "server27": "https://bot-v4i2oxu0-7479c80e94c6.herokuapp.com",
  "server28": "https://bot-v97qy68j-0866d5e674ec.herokuapp.com",
  "server29": "https://bot-w54rlr9g-f54966b2f01a.herokuapp.com"
};

// Parse JSON bodies
app.use(express.json());

// Get all servers list
app.get('/servers', (req, res) => {
    const servers = Object.keys(serverUrls).map(key => ({
        id: key,
        name: `Server ${key.replace('server', '')}`,
        url: serverUrls[key]
    }));
    res.json({ servers });
});

// Get server status - direct endpoint like /code
app.get('/active', async (req, res) => {
    try {
        const { server } = req.query;
        
        if (!server) {
            return res.json({ error: 'Server parameter is required' });
        }
        
        const serverUrl = serverUrls[server];
        if (!serverUrl) {
            return res.json({ error: 'Server not found' });
        }
        
        const response = await axios.get(`${serverUrl}/api/active`, {
            timeout: 5000
        });
        
        res.json({
            count: response.data.count || 0,
            limit: response.data.limit || 50
        });
    } catch (error) {
        res.json({
            count: 0,
            limit: 50,
            error: 'Failed to fetch status'
        });
    }
});

// Generate pair code
app.get('/code', async (req, res) => {
    try {
        const { server, number } = req.query;
        
        if (!server || !number) {
            return res.json({ error: 'Server and number are required' });
        }
        
        const serverUrl = serverUrls[server];
        if (!serverUrl) {
            return res.json({ error: 'Server not found' });
        }
        
        const phoneNumber = number.replace(/[^\d]/g, '');
        if (phoneNumber.length < 10 || phoneNumber.length > 15) {
            return res.json({ error: 'Invalid phone number format' });
        }
        
        const response = await axios.get(`${serverUrl}/api/code?number=${phoneNumber}`, {
            timeout: 15000
        });
        
        if (response.data && response.data.code) {
            res.json({ code: response.data.code });
        } else {
            res.json({ error: 'No code received' });
        }
    } catch (error) {
        res.json({ error: 'Failed to generate code' });
    }
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__path + '/mini.html');
});

// Start server
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT} `);
});
