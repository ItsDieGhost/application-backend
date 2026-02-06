const fetch = require('node-fetch');
const payload = { email: 'juan@example.com', password: 'secret' };

fetch('http://localhost:4000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
  .then(async res => {
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Body:', text);
  })
  .catch(err => console.error('Error:', err));
