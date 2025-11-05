
import React from 'react';
import { QrCodeIcon } from './icons/QrCodeIcon';

interface ScannerScreenProps {
  onScan: () => void;
}

const ScannerScreen: React.FC<ScannerScreenProps> = ({ onScan }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-900">
      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-slate-800 rounded-full">
            <QrCodeIcon className="w-16 h-16 text-cyan-400" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Document Previewer</h1>
        <p className="text-slate-400 mb-8">
          Scan the QR code to securely view the document in full screen.
        </p>
        <button
          onClick={onScan}
          className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg shadow-cyan-500/30"
        >
          Scan QR Code
        </button>
      </div>
    </div>
  );
};

export default ScannerScreen;
