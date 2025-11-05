import React from 'react';
import PreviewScreen from './components/PreviewScreen';

const DOCUMENT_URL = 'https://i.imgur.com/mRdMBZA.png';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans">
      <PreviewScreen documentUrl={DOCUMENT_URL} />
    </div>
  );
};

export default App;
