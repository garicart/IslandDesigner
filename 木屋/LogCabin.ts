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
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = '#FAF7F2';
  overlay.style.zIndex = '10000';
  overlay.style.overflow = 'hidden';

  const title = document.createElement('div');

  title.textContent = '紀錄小屋';

  title.style.position = 'absolute';
  title.style.left = '50%';
  title.style.top = '20px';
  title.style.transform = 'translateX(-50%)';
  title.style.fontSize = '24px';
  title.style.fontWeight = 'bold';
  title.style.color = '#2C5F4B';
  title.style.fontFamily = 'Noto Sans TC, sans-serif';

  /*
   * 左上角圓形 SVG 按鈕
   */
  const button = document.createElement('button');

  button.type = 'button';

  button.style.position = 'absolute';
  button.style.left = '45px';
  button.style.top = '20px';
  button.style.width = '44px';
  button.style.height = '44px';
  button.style.padding = '0';
  button.style.margin = '0';
  button.style.border = '0';
  button.style.background = 'transparent';
  button.style.cursor = 'pointer';

  button.innerHTML = `
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22"
        cy="22"
        r="20"
        fill="#2C5F4B"
      />

      <path
        d="M14 22
           L19 27
           L30 16"
        fill="none"
        stroke="#FAF7F2"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;

  /*
   * Log Cabin 內容
   */
  const content = document.createElement('div');

  content.style.position = 'absolute';
  content.style.left = '50%';
  content.style.top = '100px';
  content.style.transform = 'translateX(-50%)';
  content.style.width = 'min(600px, 85vw)';
  content.style.color = '#2C5F4B';
  content.style.fontFamily = 'Noto Sans TC, sans-serif';
  content.style.textAlign = 'center';

  const description = document.createElement('div');

  description.textContent = '這裡可以保存狸端機入口站的紀錄。';

  description.style.fontSize = '18px';
  description.style.lineHeight = '1.7';

  /*
   * 按下左上角按鈕
   */
  button.addEventListener('click', () => {
    description.textContent = '已進入紀錄小屋。';
  });

  overlay.appendChild(button);
  overlay.appendChild(title);

  content.appendChild(description);
  overlay.appendChild(content);

  /*
   * 加入關閉按鈕
   */
  const closeButton = document.createElement('button');

  closeButton.type = 'button';
  closeButton.textContent = '關閉';

  closeButton.style.position = 'absolute';
  closeButton.style.left = '50%';
  closeButton.style.bottom = '30px';
  closeButton.style.transform = 'translateX(-50%)';
  closeButton.style.padding = '10px 28px';
  closeButton.style.border = '2px solid #2C5F4B';
  closeButton.style.borderRadius = '10px';
  closeButton.style.backgroundColor = '#F5F0E8';
  closeButton.style.color = '#2C5F4B';
  closeButton.style.fontSize = '16px';
  closeButton.style.cursor = 'pointer';

  closeButton.addEventListener('click', () => {
    overlay.remove();
  });

  overlay.appendChild(closeButton);

  document.body.appendChild(overlay);
}
