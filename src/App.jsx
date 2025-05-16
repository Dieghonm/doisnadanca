import './App.css';

function App() {
  const videos = [
    { id: 'tuilYm37J0I', isShort: true },
    { id: '5rly86OQWZI', isShort: true },
    { id: 'MjODAu7xgio', isShort: true },
    { id: 'KyxG7DDd9As', isShort: true },
    { id: '2OOyx35sK9E', isShort: true },
    { id: 'OSQplXwXgxY', isShort: true },
    { id: 'PBky6g89tIg', isShort: true },
    { id: 'UBoNot_iWMQ', isShort: true },
    { id: '4ktl56A65_U', isShort: true },
    { id: '_Eo7_Kte6n8', isShort: true },
    { id: 'UdJboyavXr4', isShort: false }
  ];

  return (
    <div className="app-container dark-mode">
      <div className="content-wrapper">
        <h1>YouTube Collection</h1>
        
        <div className="videos-grid-compact">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="video-item-compact"
              data-type={video.isShort ? 'short' : 'video'}
            >
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?modestbranding=1`}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-label">
                <span>#{index + 1}</span>
                <a 
                  href={`https://youtube.com/${video.isShort ? 'shorts' : 'watch?v='}${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;