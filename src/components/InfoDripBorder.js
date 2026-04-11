import React from 'react';

/**
 * Bucket-style mint drip: flat rim + heavy teardrop drips (deeper + more fluid).
 * Tiled horizontally under the hero .info card.
 */
const TILE_W = 440;
const TILE_H = 118;

// Rim at y≈5; drip tips reach y≈96–108 for a clearly “hanging” read.
const DRIP_TILE_PATH =
  'M0,0 H' +
  TILE_W +
  ' V5 H410' +
  ' C407,5 405,7 403,14 C401,26 399,52 397,72 C395,92 392,106 388,108 C384,110 380,106 378,96 C376,82 375,55 374,34 C373,18 372,8 370,5' +
  ' H348' +
  ' C346,5 344,6 342,11 C340,20 338,42 336,58 C334,74 332,80 329,74 C326,64 325,42 324,24 C323,12 322,6 320,5' +
  ' H298' +
  ' C295,5 293,7 291,14 C289,28 287,58 285,78 C283,98 280,110 276,112 C272,114 268,110 266,98 C264,80 263,48 262,26 C261,12 260,6 258,5' +
  ' H232' +
  ' C230,5 228,6 226,10 C224,16 222,24 220,20 C218,16 217,9 215,6 C213,5 211,5 208,5' +
  ' H188' +
  ' C186,5 184,7 182,14 C180,26 178,48 176,62 C174,74 172,76 169,70 C166,60 165,40 164,22 C163,10 162,6 160,5' +
  ' H138' +
  ' C136,5 134,6 132,10 C130,18 128,38 126,54 C124,70 122,76 119,70 C116,60 115,38 114,20 C113,10 112,6 110,5' +
  ' H88' +
  ' C86,5 84,7 82,14 C80,28 78,58 76,80 C74,100 71,112 67,114 C63,116 59,112 57,100 C55,82 54,50 53,28 C52,12 51,6 49,5' +
  ' H28' +
  ' C26,5 24,6 22,10 C20,18 18,32 16,40 C14,46 12,44 10,34 C8,22 7,12 6,8 C5,6 4,5 2,5' +
  ' H0' +
  ' L0,0 Z';

export default function InfoDripBorder() {
  const patternId = React.useId().replace(/:/g, '');
  const repeats = 2;

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
          <g transform="translate(-4, 3.5)">
            <path d={DRIP_TILE_PATH} fill="#4fb56f" fillOpacity="0.88" />
          </g>
          <path d={DRIP_TILE_PATH} fill="#9fe8c8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
