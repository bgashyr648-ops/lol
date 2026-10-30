const express = require('express');
const axios = require('axios');
const router = express.Router();

// ==================== NOBITA MD SERVER URLs ====================
const serverUrls = {
  server1: "https://ungtioi1-36790cbf4077.herokuapp.com",
  server2: "https://ungtioi10-853b0fd97786.herokuapp.com",
  server3: "https://ungtioi2-e46307442a97.herokuapp.com",
  server4: "https://ungtioi3-138ebae2f4c9.herokuapp.com",
  server5: "https://ungtioi4-a87a977e3744.herokuapp.com",
  server6: "https://ungtioi5-fa582a872cef.herokuapp.com",
  server7: "https://ungtioi6-93bb5eb41c09.herokuapp.com",
  server8: "https://ungtioi7-4062ef8217d2.herokuapp.com",
  server9: "https://ungtioi8-a2ce15fc7026.herokuapp.com",
  server10: "https://ungtioi9-0f4781f0a09d.herokuapp.com",

  server11: "https://ungtiop1-18b244bfe36d.herokuapp.com",
  server12: "https://ungtiop10-1e41f6801a10.herokuapp.com",
  server13: "https://ungtiop2-c3636fccd92a.herokuapp.com",
  server14: "https://ungtiop3-739ca82f2aaa.herokuapp.com",
  server15: "https://ungtiop4-3478d289521b.herokuapp.com",
  server16: "https://ungtiop5-b7ba6089d0c0.herokuapp.com",
  server17: "https://ungtiop6-93672b3ea1ef.herokuapp.com",
  server18: "https://ungtiop8-878e30038ba5.herokuapp.com",
  server19: "https://ungtiop9-044827cee5f2.herokuapp.com",
  server20: "https://ungtiozx1-166e2e02b4f9.herokuapp.com",

  server21: "https://ungtiozx10-a333b42e80b4.herokuapp.com",
  server22: "https://ungtiozx2-1e7a1daf9825.herokuapp.com",
  server23: "https://ungtiozx3-0a9e53496625.herokuapp.com",
  server24: "https://ungtiozx4-7a6e193b27a6.herokuapp.com",
  server25: "https://ungtiozx5-8daf55abf612.herokuapp.com",
  server26: "https://ungtiozx6-ac36133fcc9d.herokuapp.com",
  server27: "https://ungtiozx7-5a6229044127.herokuapp.com",
  server28: "https://ungtiozx8-a13fe316d0a9.herokuapp.com",
  server29: "https://ungtiozx9-6d40bc1db0fe.herokuapp.com",
  server30: "https://ungtiuioi1-e7be77c6072a.herokuapp.com",

  server31: "https://ungtiuioi10-16e71fcbbc22.herokuapp.com",
  server32: "https://ungtiuioi2-b13b7229468a.herokuapp.com",
  server33: "https://ungtiuioi3-15e31cd94c6b.herokuapp.com",
  server34: "https://ungtiuioi4-8305f33b7d68.herokuapp.com",
  server35: "https://ungtiuioi5-a40e75bc1b0b.herokuapp.com",
  server36: "https://ungtiuioi6-f5454d107af6.herokuapp.com",
  server37: "https://ungtiuioi7-5f4dec1719e3.herokuapp.com",
  server38: "https://ungtiuioi8-3b128492392d.herokuapp.com",
  server39: "https://ungtiuioi9-a4d2cfb9169d.herokuapp.com",
  server40: "https://ungtiuiop1-dba6ad757ab7.herokuapp.com",

  server41: "https://ungtiuiop10-4264ee4f3967.herokuapp.com",
  server42: "https://ungtiuiop2-c92d0acd8526.herokuapp.com",
  server43: "https://ungtiuiop3-a6b1107304e1.herokuapp.com",
  server44: "https://ungtiuiop4-3b652a22bcf7.herokuapp.com",
  server45: "https://ungtiuiop5-5a80ec915155.herokuapp.com",
  server46: "https://ungtiuiop6-d5995cfb841d.herokuapp.com",
  server47: "https://ungtiuiop7-57a6176e142f.herokuapp.com",
  server48: "https://ungtiuiop8-fba1ad3cba36.herokuapp.com",
  server49: "https://ungtiuiop9-3e8005de7000.herokuapp.com",
  server50: "https://ungtiuiopl1-bb12e0fa0737.herokuapp.com"
};

// ==================== TIGER MD SERVER URLS ====================
// Replace placeholders with your Tiger MD server base URLs.
// Example: server1: "https://your-tiger-server-1.herokuapp.com"
// Unused placeholders are automatically ignored.
const tigerServerUrls = {
  server1: "ADD_TIGER_MD_SERVER_1_LINK_HERE",
  server2: "ADD_TIGER_MD_SERVER_2_LINK_HERE",
  server3: "ADD_TIGER_MD_SERVER_3_LINK_HERE",
  server4: "ADD_TIGER_MD_SERVER_4_LINK_HERE",
  server5: "ADD_TIGER_MD_SERVER_5_LINK_HERE",
  server6: "ADD_TIGER_MD_SERVER_6_LINK_HERE",
  server7: "ADD_TIGER_MD_SERVER_7_LINK_HERE",
  server8: "ADD_TIGER_MD_SERVER_8_LINK_HERE",
  server9: "ADD_TIGER_MD_SERVER_9_LINK_HERE",
  server10: "ADD_TIGER_MD_SERVER_10_LINK_HERE",
  server11: "ADD_TIGER_MD_SERVER_11_LINK_HERE",
  server12: "ADD_TIGER_MD_SERVER_12_LINK_HERE",
  server13: "ADD_TIGER_MD_SERVER_13_LINK_HERE",
  server14: "ADD_TIGER_MD_SERVER_14_LINK_HERE",
  server15: "ADD_TIGER_MD_SERVER_15_LINK_HERE",
  server16: "ADD_TIGER_MD_SERVER_16_LINK_HERE",
  server17: "ADD_TIGER_MD_SERVER_17_LINK_HERE",
  server18: "ADD_TIGER_MD_SERVER_18_LINK_HERE",
  server19: "ADD_TIGER_MD_SERVER_19_LINK_HERE",
  server20: "ADD_TIGER_MD_SERVER_20_LINK_HERE",
  server21: "ADD_TIGER_MD_SERVER_21_LINK_HERE",
  server22: "ADD_TIGER_MD_SERVER_22_LINK_HERE",
  server23: "ADD_TIGER_MD_SERVER_23_LINK_HERE",
  server24: "ADD_TIGER_MD_SERVER_24_LINK_HERE",
  server25: "ADD_TIGER_MD_SERVER_25_LINK_HERE",
  server26: "ADD_TIGER_MD_SERVER_26_LINK_HERE",
  server27: "ADD_TIGER_MD_SERVER_27_LINK_HERE",
  server28: "ADD_TIGER_MD_SERVER_28_LINK_HERE",
  server29: "ADD_TIGER_MD_SERVER_29_LINK_HERE",
  server30: "ADD_TIGER_MD_SERVER_30_LINK_HERE",
  server31: "ADD_TIGER_MD_SERVER_31_LINK_HERE",
  server32: "ADD_TIGER_MD_SERVER_32_LINK_HERE",
  server33: "ADD_TIGER_MD_SERVER_33_LINK_HERE",
  server34: "ADD_TIGER_MD_SERVER_34_LINK_HERE",
  server35: "ADD_TIGER_MD_SERVER_35_LINK_HERE",
  server36: "ADD_TIGER_MD_SERVER_36_LINK_HERE",
  server37: "ADD_TIGER_MD_SERVER_37_LINK_HERE",
  server38: "ADD_TIGER_MD_SERVER_38_LINK_HERE",
  server39: "ADD_TIGER_MD_SERVER_39_LINK_HERE",
  server40: "ADD_TIGER_MD_SERVER_40_LINK_HERE",
  server41: "ADD_TIGER_MD_SERVER_41_LINK_HERE",
  server42: "ADD_TIGER_MD_SERVER_42_LINK_HERE",
  server43: "ADD_TIGER_MD_SERVER_43_LINK_HERE",
  server44: "ADD_TIGER_MD_SERVER_44_LINK_HERE",
  server45: "ADD_TIGER_MD_SERVER_45_LINK_HERE",
  server46: "ADD_TIGER_MD_SERVER_46_LINK_HERE",
  server47: "ADD_TIGER_MD_SERVER_47_LINK_HERE",
  server48: "ADD_TIGER_MD_SERVER_48_LINK_HERE",
  server49: "ADD_TIGER_MD_SERVER_49_LINK_HERE",
  server50: "ADD_TIGER_MD_SERVER_50_LINK_HERE"
};

function getBotConfig(bot) {
    return String(bot || 'nobita').toLowerCase() === 'tiger'
        ? { name: 'Tiger MD', urls: tigerServerUrls }
        : { name: 'Nobita MD', urls: serverUrls };
}

// ==================== GET SERVER LIST ====================
router.get('/servers', (req, res) => {
    const botConfig = getBotConfig(req.query.bot);
    const servers = Object.keys(botConfig.urls)
        .filter(key => /^https?:\/\//i.test(botConfig.urls[key]))
        .map(key => ({ id: key, name: `Server ${key.replace('server', '')}`, url: botConfig.urls[key] }));
    res.json({ bot: botConfig.name, servers });
});

// ==================== GET SERVER STATUS ====================
router.get('/status/:serverId', async (req, res) => {
    try {
        const { serverId } = req.params;
        const botConfig = getBotConfig(req.query.bot);
        const serverUrl = botConfig.urls[serverId];

        if (!serverUrl) {
            return res.json({
                error: 'Server not found'
            });
        }

        const response = await axios.get(`${serverUrl}/active`, {
            timeout: 5000
        });

        return res.json({
            count: response.data.count || 0,
            limit: response.data.limit || 50
        });

    } catch (error) {
        return res.json({
            count: 0,
            limit: 50,
            error: 'Failed to fetch status'
        });
    }
});

// ==================== GENERATE PAIR CODE ====================
router.get('/code', async (req, res) => {
    try {
        const { server, number, bot } = req.query;
        const botConfig = getBotConfig(bot);

        if (!server || !number) {
            return res.json({
                error: 'Server and number are required'
            });
        }

        const serverUrl = botConfig.urls[server];

        if (!serverUrl) {
            return res.json({
                error: 'Server not found'
            });
        }

        const phoneNumber = number.replace(/[^\d]/g, '');

        if (phoneNumber.length < 10 || phoneNumber.length > 15) {
            return res.json({
                error: 'Invalid phone number format'
            });
        }

        const response = await axios.get(
            `${serverUrl}/code?number=${phoneNumber}`,
            {
                timeout: 15000,
                headers: {
                    'User-Agent': 'Mozilla/5.0',
                    'Accept': 'application/json'
                }
            }
        );

        if (response.data && response.data.code) {
            return res.json({
                code: response.data.code
            });
        }

        return res.json({
            error: 'No code received'
        });

    } catch (error) {
        console.log(
            error.response?.data || error.message
        );

        return res.json({
            error: error.response?.data || 'Failed to generate code'
        });
    }
});

// ==================== RANDOM SERVER ====================
router.get('/random', (req, res) => {
    const botConfig = getBotConfig(req.query.bot);
    const servers = Object.keys(botConfig.urls).filter(key => /^https?:\/\//i.test(botConfig.urls[key]));
    if (!servers.length) return res.json({ error: `No ${botConfig.name} server links configured yet` });
    const randomServer = servers[Math.floor(Math.random() * servers.length)];
    res.json({ server: randomServer, url: botConfig.urls[randomServer] });
});

module.exports = router;
