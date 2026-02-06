const fs = require('fs');
const payload = JSON.parse(fs.readFileSync('./test_payload.json', 'utf8'));

fetch('http://localhost:4000/register', {
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
