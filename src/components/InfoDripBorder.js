import React from 'react';

/**
 * Few separate mint drips under the hero .info card (not one connected blob).
 */
const TILE_W = 400;
const TILE_H = 22;

// Single small teardrop in local coords (~12×19); narrow at rim, rounded tip.
const DRIP_SHAPE = 'M3,4 L11,4 Q11.5,10.5 7,18.5 Q2.5,10.5 3,4 Z';

const DRIP_OFFSETS_X = [38, 138, 238, 338];

function DripTile() {
  return (
    <>
      {DRIP_OFFSETS_X.map((tx) => (
        <g key={tx} transform={`translate(${tx}, 0)`}>
          <g transform="translate(-1.25, 1.25)">
            <path d={DRIP_SHAPE} fill="#5abe7a" fillOpacity="0.85" />
          </g>
          <path d={DRIP_SHAPE} fill="#a8e6cf" />
        </g>
      ))}
    </>
  );
}

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
          <DripTile />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
