"use client";

import React, { useEffect, useRef } from 'react';

export interface MapMindNode {
  data: {
    text: string;
  }
  children: MapMindNode[];
}


interface MarkMapProps {
  value: MapMindNode | null;
  onChange: (value: MapMindNode) => void;
}

const MarkMap: React.FC<MarkMapProps> = ({ value, onChange }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && typeof window !== 'undefined' && value !== null) {
      import('simple-mind-map').then(MindMap => {
        const mindMap = new MindMap.default({
          el: mapRef.current,
          data: value,
        });
      });
    }
  }, [value]);

  return (
    <div ref={mapRef} className="w-full h-full" />
  );
};

export default MarkMap;
