const SolutionCard2 = ({ title, description, image}) => (
  <svg
  width="1000"
  height="250"
  viewBox="0 0 1000 250"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>

    <clipPath id="bgblur_clip_path">
      <path d="M950 242C950 258.569 936.569 272 920 272L155.415 272C143.039 272 131.932 264.399 127.451 252.862L52.8721 60.8623C45.2339 41.1978 59.7408 20 80.8366 20L920 20C936.569 20 950 33.4314 950 50V242Z" />
    </clipPath>
    <linearGradient id="paint0_linear" x1="0" y1="0" x2="1000" y2="250" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0.8" />
      <stop offset="1" stopColor="white" stopOpacity="0.2" />
    </linearGradient>
  </defs>

  <foreignObject x="0" y="0" width="1000" height="250">
    <div
      style={{
        backdropFilter: 'blur(15px)',
        clipPath: 'url(#bgblur_clip_path)',
        height: '100%',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
      }}
      xmlns="http://www.w3.org/1999/xhtml"
    >
      <div style={{ color: 'white', fontFamily: 'Arial', fontSize: '20px', padding: '30px' }}>
        <p>Visiting testing on the</p>
        <p>Latest equipment</p>
      </div>
    </div>
  </foreignObject>

  <g style={{ mixBlendMode: 'screen' }} filter="url(#filter0)">
    <path
      d="M950 242C950 258.569 936.569 272 920 272L155.415 272C143.039 272 131.932 264.399 127.451 252.862L52.8721 60.8623C45.2339 41.1978 59.7408 20 80.8366 20L920 20C936.569 20 950 33.4314 950 50V242Z"
      fill="url(#paint0_linear)"
      fillOpacity="0.6"
    />
  </g>
</svg>

);

export default SolutionCard2