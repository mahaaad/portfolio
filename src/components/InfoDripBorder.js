import React from 'react';

/**
 * Bucket-style mint drip edge (flat top, irregular bottom + offset shadow).
 * Tiled horizontally under the hero .info card.
 */
const TILE_W = 256;
const TILE_H = 72;

// Single tile: flat top; bottom edge = twin thin drips, medium, longer, shallow wave,
// longest bulb, stubby, medium, short (bucket-rim style).
const DRIP_TILE_PATH =
  'M0,0 H' +
  TILE_W +
  ' V4.5 H250' +
  ' C248.5,4.5 248,5.5 247,9 C246,14 245,20 244,15 C243,10 242,5 240,4.5' +
  ' H232' +
  ' C230,4.5 228,5.5 226,9 C224,16 222,28 220,34 C218,40 216,36 214,26 C212,16 210,6 208,4.5' +
  ' H200' +
  ' C198,4.5 196,5.5 194,8 C192,12 190,18 188,14 C186,10 184,5 182,4.5' +
  ' H172' +
  ' C168,4.5 164,6 160,10 C156,20 152,38 148,48 C144,58 140,60 137,50 C134,40 132,26 130,16 C128,8 126,4.5 122,4.5' +
  ' H112' +
  ' C110,4.5 108,4.5 106,5.5 104,7 C102,8.5 100,9.5 98,8.5 C96,7.5 94,5.5 92,4.5' +
  ' H86' +
  ' C84,4.5 82,5.5 80,7 C78,8.5 76,9.5 74,8.5 C72,7.5 70,5.5 68,4.5' +
  ' H62' +
  ' C60,4.5 58,5.5 56,8 C54,14 52,28 50,34 C48,40 46,36 44,24 C42,12 40,6 38,4.5' +
  ' H28' +
  ' C26,4.5 24,5.5 22,8 C20,14 18,24 16,20 C14,16 12,8 10,4.5' +
  ' H8' +
  ' C7.5,4.5 7,5 6.5,9 C6,16 5.5,22 5,18 C4.5,14 4,6 3.5,4.5' +
  ' H2.5' +
  ' C2,4.5 1.5,5 1.2,10 C0.9,16 0.6,20 0.4,16 C0.2,12 0.1,6 0,4.5' +
  ' L0,0 Z';

export default function InfoDripBorder() {
  const patternId = React.useId().replace(/:/g, '');

  const repeats = 5;

  return (
    <svg
      className="info-drip-border"
      viewBox={`0 0 ${TILE_W * repeats} ${TILE_H}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={TILE_W}
          height={TILE_H}
          x={0}
          y={0}
        >
          <g transform="translate(-2.5, 2.5)">
            <path d={DRIP_TILE_PATH} fill="#6BCB8E" fillOpacity="0.85" />
          </g>
          <path d={DRIP_TILE_PATH} fill="#A8E6CF" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
