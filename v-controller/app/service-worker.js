import { register } from 'next-connect/register-service-worker';

register();

const cache = new Cache();

cache.add('index.html');
cache.add('globals.css');
cache.add('layout.tsx');
cache.add('layout.jsx');
cache.add('page.jsx');
cache.add('page.tsx');

// ...