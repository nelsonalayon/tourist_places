import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={556.6}
      height={122}
      viewBox="-28.3 14 556.6 122"  
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-incredible-gradient"
          x1={-0.4}
          x2={1.4}
          y1={0.1}
          y2={0.9}
        >
          <stop offset={0} stopColor="#ff4" />
          <stop offset={1} stopColor="#f92" />
        </linearGradient>
        <filter
          id="prefix__editing-incredible"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood
            floodColor="#000"
            floodOpacity={0.5}
            result="flood"
            x={10}
            y={10}
            width={480}
            height={130}
          />
          <feFlood floodColor="#921" result="flood-stroke" />
          <feFlood floodColor="#fff" result="flood-outline" />
          <feFlood floodColor="#400" result="flood-shadow" />
          <feImage
            width={500}
            height={150}
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMTUwIj48cmFkaWFsR3JhZGllbnQgaWQ9ImluY3JlZGlibGUtZ3JhZGllbnQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0ZTRlNCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9InVybCgjaW5jcmVkaWJsZS1ncmFkaWVudCkiLz48L3N2Zz4="
            result="image"
          />
          <feImage
            width={10}
            height={10}
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiLz48L3N2Zz4="
            result="dot"
          />
          <feTile in="dot" result="tile" />
          <feGaussianBlur stdDeviation={1.5} result="blur-tile" />
          <feBlend in2="image" in="blur-tile" mode="soft-light" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" />
          <feComponentTransfer result="func">
            <feFuncA type="linear" slope={20} intercept={-10.5} />
          </feComponentTransfer>
          <feComposite operator="out" in="flood" in2="func" result="dots" />
          <feOffset dx={3} dy={1} in="SourceAlpha" />
          <feComposite operator="out" in2="SourceAlpha" />
          <feComponentTransfer result="extrude">
            <feFuncA type="linear" slope={0.7} intercept={-0.1} />
          </feComponentTransfer>
          <feMorphology
            operator="dilate"
            radius={5}
            in="SourceGraphic"
            result="dilate"
          />
          <feComposite
            operator="in"
            in="flood-stroke"
            in2="dilate"
            result="stroke"
          />
          <feOffset dx={1} result="stroke-offset" />
          <feMorphology operator="dilate" radius={2} result="dilate-outline" />
          <feComposite
            operator="in"
            in="flood-outline"
            in2="dilate-outline"
            result="outline"
          />
          <feComposite operator="in" in="flood-shadow" in2="outline" />
          <feGaussianBlur stdDeviation={3} />
          <feComponentTransfer>
            <feFuncA type="linear" slope={0.7} intercept={-0.2} />
          </feComponentTransfer>
          <feOffset dy={4} result="offset-shadow" />
          <feMerge>
            <feMergeNode in="dots" />
            <feMergeNode in="offset-shadow" />
            <feMergeNode in="outline" />
            <feMergeNode in="stroke-offset" />
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="extrude" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-incredible)">
        <path
          d="M33-27q0 3-3 5l-6 1h-2l1-4v-2q0-3-2-3l-2 1-3 5q-3 5-3 11l1 5 4 1q4 0 7-3l1-2q3 1 3 5 0 3-4 6-4 2-11 2Q1 1 1-12q0-11 6-16 5-6 15-6 11 0 11 7zM66-7q0 3 3 4 0 2-3 3l-5 1h-4l-2-2-1-5 1-7 1-5 1-7q0-4-2-4t-4 4l-1 3-4 22-13 1 9-46 13-1-1 2-3 14q3-4 10-4t8 5l1 2-1 3v3l-1 4-1 7-1 3zm22 8Q74 1 74-12q0-9 6-15 5-7 15-7 7 0 10 3 4 3 4 10 0 10-6 16-5 6-15 6zm2-28l-1 5-2 6v12l2 1h3l1-3 2-8 2-8v-4l-1-3-2-1-2 1-2 2zm36 28q-14 0-14-13 0-9 5-15 6-7 15-7 7 0 11 3 3 3 3 10 0 10-5 16-6 6-15 6zm2-28l-1 5-2 6-1 10 1 2 2 1h2l2-3 2-8 1-8 1-4-1-3-2-1-2 1-2 2zm41 5l1-5q0-4-3-4l-3 2-1 3 1 2 5 4 5 4q2 2 2 5l-1 5-4 4q-5 3-12 3-5 0-8-2t-3-4q0-3 2-4l4-2 5 1-1 4q0 4 3 4l3-1 1-3q0-3-5-6l-6-5-2-4q0-3 2-5l3-4q5-4 13-4 4 0 6 2 3 1 3 4t-2 5l-5 1h-3zm38 11q2 1 2 4l-1 4-4 2-8 2-7-1-4-2q-4-4-4-10 0-10 5-16 6-6 16-6 6 0 9 3 2 2 2 5 0 11-19 11l-1 3q0 3 2 4l3 1 5-1 4-3zm-13-7q5 0 7-3 3-2 3-7l-1-2-1-1-2 1-2 2q-3 3-4 10zm64 14l-6 4-7 1h-5l-2 11-13 1 9-46 10-1-1 5q3-5 8-5 7 0 10 4t3 9q0 6-2 10-1 4-4 7zm-14-18l-4 18 3 2 3-1 2-2q2-3 3-14l1-6-1-4-2-1q-4 0-5 8zm39 18q-2 5-8 5-3 0-5-2l-2-4 2-15 5-25 13-1-6 32-2 7q0 3 3 3zm8 2l-2-4-1-7 2-8q1-4 4-7 6-6 15-6l5 1 11-1-4 25-1 2 1 3 2 1q0 2-3 3l-5 1-4-1-2-2-3 2-6 1h-5l-4-3zm14-26l-2 3-1 7-1 9v5l2 1q2 0 3-2 2-2 2-5l4-19-3-1h-3l-1 2zm55 1q0 3-2 5l-6 1h-3l1-4v-2l-1-3-3 1-3 5q-2 5-2 11l1 5 4 1q3 0 6-3l2-2q2 1 2 5 0 3-4 6-4 2-11 2-13 0-13-13 0-11 6-16 6-6 16-6t10 7zm28 16l1 4-1 4-3 2q-4 2-9 2l-7-1-4-2q-4-4-4-10 0-10 6-16 5-6 15-6 6 0 9 3 2 2 2 5 0 11-19 11v3l1 4 4 1 5-1 4-3zm-14-7q5 0 8-3 2-2 2-7v-2l-2-1-2 1-2 2-4 10z"
          fill="url(#prefix__editing-incredible-gradient)"
          transform="translate(53 104)"
        />
      </g>
      <style />
    </svg>
  )
}

export default SvgComponent
