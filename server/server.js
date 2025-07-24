const app = require('./app');
const startJobs = require('./jobs');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    startJobs(); // Start scheduled jobs
});
