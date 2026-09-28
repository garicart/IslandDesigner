export function openLogCabin(): void {
  const old = document.getElementById('log-cabin-overlay');

  if (old) {
    old.remove();
  }

  const overlay = document.createElement('div');
  overlay.id = 'log-cabin-overlay';

  overlay.style.position = 'fixed';
  overlay.style.left = '0';
  overlay.style.top = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.45)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '10000';

  const windowBox = document.createElement('div');

  windowBox.style.width = 'min(500px, 90vw)';
  windowBox.style.maxHeight = '80vh';
  windowBox.style.backgroundColor = '#FAF7F2';
  windowBox.style.borderRadius = '18px';
  windowBox.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.25)';
  windowBox.style.overflow = 'hidden';
  windowBox.style.fontFamily = 'Noto Sans TC, sans-serif';

  const header = document.createElement('div');

  header.style.backgroundColor = '#2C5F4B';
  header.style.color = '#FAF7F2';
  header.style.padding = '18px 20px';
  header.style.fontSize = '22px';
  header.style.fontWeight = 'bold';

  header.textContent = 'Log Cabin';

  const content = document.createElement('div');

  content.style.padding = '24px';
  content.style.color = '#333';
  content.style.fontSize = '16px';
  content.style.lineHeight = '1.7';

  const title = document.createElement('div');

  title.style.fontSize = '20px';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '12px';

  title.textContent = '紀錄小屋';

  const description = document.createElement('div');

  description.textContent =
    '這裡可以用來保存狸端機入口站的紀錄。';

  const closeButton = document.createElement('button');

  closeButton.type = 'button';
  closeButton.textContent = '關閉';

  closeButton.style.marginTop = '24px';
  closeButton.style.width = '100%';
  closeButton.style.padding = '12px';
  closeButton.style.border = '0';
  closeButton.style.borderRadius = '10px';
  closeButton.style.backgroundColor = '#2C5F4B';
  closeButton.style.color = '#FAF7F2';
  closeButton.style.fontSize = '16px';
  closeButton.style.cursor = 'pointer';

  closeButton.addEventListener('click', () => {
    overlay.remove();
  });

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(closeButton);

  windowBox.appendChild(header);
  windowBox.appendChild(content);

  overlay.appendChild(windowBox);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.remove();
    }
  });

  document.body.appendChild(overlay);
}
