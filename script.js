const form = document.getElementById('proxy-form');
const input = document.getElementById('url-input');
const frame = document.getElementById('proxy-frame');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const rawUrl = input.value.trim();

  if (!rawUrl) return;

  // Ensure it has protocol
  const normalizedUrl = rawUrl.startsWith('http://') || rawUrl.startsWith('https://')
    ? rawUrl
    : 'https://' + rawUrl;

  const proxiedUrl = `https://uv.uraverageopdoge.workers.dev/proxy/${btoa(normalizedUrl)}`;

  frame.src = proxiedUrl;
});
