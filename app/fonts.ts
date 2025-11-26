// app/fonts.ts
import localFont from 'next/font/local'

// Asegúrate de que las rutas y nombres de archivo coincidan con los tuyos.
// Estos son ejemplos basados en las clases que usas.

export const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    // Agrega más estilos si los tienes (e.g., Italic, Black, etc.)
  ],
  variable: '--font-poppins',
  display: 'swap',
})

export const openSans = localFont({
    src: [
        {
            path: '../public/fonts/OpenSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/OpenSans-Light.ttf',
            weight: '300',
            style: 'normal',
        },
    ],
    variable: '--font-open-sans',
    display: 'swap',
})

export const breathing = localFont({
  src: '../public/fonts/Breathing.ttf', // Asumo el nombre del archivo
  variable: '--font-breathing',
  display: 'swap',
})
