import localFont from '@next/font/local'

const CoFoSansMono = localFont({
  // src: './fonts/cofosansmonovf.ttf',
  src: [
    {
      path: './CoFoSansMono-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './CoFoSansMono-Bold.otf',
      weight: '700',
      style: 'bold'
    }
  ],
  style: "font-feature-settings: 'aalt' 5;",
  variable: '--font-cofo-sans-mono',
})

export default CoFoSansMono;