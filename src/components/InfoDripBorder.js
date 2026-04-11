import React from 'react';

/**
 * Subtle mint drip under the hero .info card: flat rim + a few small drips.
 */
const TILE_W = 400;
const TILE_H = 26;

// Rim y≈4; only four short teardrops (tips ~y14–17), long flat runs between.
const DRIP_TILE_PATH =
  'M0,0 H' +
  TILE_W +
  ' V4 H375' +
  ' C374,4 373,5 372,7 C371,10 370,15 369,16 C368,17 366,16 365,13 C364,10 363,6 362,4' +
  ' H295' +
  ' C294,4 293,5 292,8 C291,12 290,16 289,17 C288,18 286,16 285,13 C284,9 283,5 282,4' +
  ' H195' +
  ' C194,4 193,5 192,8 C191,12 190,15 189,16 C188,17 186,15 185,12 C184,8 183,5 182,4' +
  ' H88' +
  ' C87,4 86,5 85,7 C84,10 83,13 82,14 C81,15 79,14 78,11 C77,8 76,5 75,4' +
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
          <g transform="translate(-1.5, 1.5)">
            <path d={DRIP_TILE_PATH} fill="#5abe7a" fillOpacity="0.85" />
          </g>
          <path d={DRIP_TILE_PATH} fill="#a8e6cf" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
