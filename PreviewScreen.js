import React from 'react';

interface PreviewScreenProps {
  documentUrl: string;
}

const PreviewScreen: React.FC<PreviewScreenProps> = ({ documentUrl }) => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center p-4 z-50">
      <div className="relative max-w-4xl max-h-[95vh] w-full">
        <img
          src={documentUrl}
          alt="Document Preview"
          className="object-contain w-full h-full max-h-[95vh] rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default PreviewScreen;
