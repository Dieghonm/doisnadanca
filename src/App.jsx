
import React from 'react';
import './App.css';

function App() {
  const YT_BASE = 'https://www.youtube.com';

  const videoPaths = [
    '/shorts/OSQplXwXgxY?feature=share',
    '/shorts/PBky6g89tIg?feature=share',
    '/shorts/UBoNot_iWMQ?feature=share',
    '/shorts/2OOyx35sK9E?feature=share',
    '/shorts/4ktl56A65_U?feature=share',
    '/shorts/_Eo7_Kte6n8?feature=share',
    'https://youtu.be/UdJboyavXr4'
  ];

  const videoUrls = videoPaths.map((path) => {
    if (path.startsWith('/shorts/')) {
      const id = path.split('/shorts/')[1].split('?')[0];
      return `${YT_BASE}/embed/${id}`;
    }

    if (path.startsWith('https://youtu.be/')) {
      const id = path.split('https://youtu.be/')[1].split('?')[0];
      return `${YT_BASE}/embed/${id}`;
    }

    return `${YT_BASE}${path}`;
  });

  return (
    <div className="app-container">
      <h1>Minha Lista de Vídeos</h1>

      <div className="video-list">
        {videoUrls.map((url, index) => (
          <div key={index} className="video-frame">
            <iframe
              src={url}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
