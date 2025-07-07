import React from 'react';

interface TrafficLightsProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

const TrafficLights: React.FC<TrafficLightsProps> = ({ onClose, onMinimize, onMaximize }) => {
  return (
    <div className="flex space-x-1">
      <button 
        aria-label="Close window"
        onClick={onClose} 
        className="w-4 h-4 border border-mac-os8-border-color bg-white hover:bg-gray-200 focus:outline-none"
        style={{
          boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #777777'
        }}
      >
        <span className="block w-2 h-2 mx-auto bg-black"></span>
      </button>
      <button 
        aria-label="Minimize window"
        onClick={onMinimize}
        className="w-4 h-4 border border-mac-os8-border-color bg-white hover:bg-gray-200 focus:outline-none"
        style={{
          boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #777777'
        }}
      >
        <span className="block w-2 h-0.5 mx-auto bg-black mt-1.5"></span>
      </button>
      <button 
        aria-label="Maximize window"
        onClick={onMaximize}
        className="w-4 h-4 border border-mac-os8-border-color bg-white hover:bg-gray-200 focus:outline-none"
        style={{
          boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #777777'
        }}
      >
        <span className="block w-2 h-2 mx-auto border border-black"></span>
      </button>
    </div>
  );
};

export default TrafficLights;
