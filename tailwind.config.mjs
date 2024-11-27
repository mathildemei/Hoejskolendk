/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj din egen farvepalette nedenfor */
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'Orange': {
                50: '#FFEFE5',     
                100: '#FFDFCB',
                200: '#FFBE9A',
                300: '#FF9D66',
                400: '#FF7E34',
                500: '#FF5E04',
                600: '#CC4B00',
                700: '#993701',
                800: '#662500',
                900: '#331300',
                950: '#190900',
            },

            'Green': {
                50: '#EFF8EC',     
                100: '#DEF2D9',
                200: '#BDE5B3',
                300: '#99D789',
                400: '#78C963',
                500: '#58BA40',
                600: '#469433',
                700: '#346E26',
                800: '#244C1A',
                900: '#12270D',
                950: '#091307',
            },

            'Purple': {
                50: '#ECEBEF',     
                100: '#D6D4DE',
                200: '#ADA9BC',
                300: '#87809D',
                400: '#615B76',
                500: '#3E3A4B',
                600: '#312F3C',
                700: '#26242E',
                800: '#18161C',
                900: '#0C0B0E',
                950: '#070709',
            },     
            
            'Grey': {
                50: '#FFFFFF',     
                100: '#FCFCFC',
                200: '#FAFAFA',
                300: '#F7F7F7',
                400: '#F7F7F7',
                500: '#F4F4F4',
                600: '#C4C4C4',
                700: '#919191',
                800: '#616161',
                900: '#303030',
                950: '#000',
            },
            'white': '#fff',
            'black': '#000',
        },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        fontFamily: {
            'primary-book': ['futura-pt-book', 'sans-serif'],
            'primary-medium': ['futura-pt-medium', 'sans-serif'],
            'display': ['futura-pt-cond', 'sans-serif'], /* eksempel på ekstra font */
            'secondary': ['la-belle-aurora'] /* eksempel på ekstra font */
        },


		extend: {

            fontSize: {
                // Desktop størrelser
                "display-h1": "172px",
                "display-h2": "126px",
                "display-h3": "64px",
                "display-h4": "52px",
                "display-h5": "32px",
                "display-quote": "48px",

                "primary-h1": "32px",
                "primary-h2": "24px",
                "primary-p-lg": "20px",
                "primary-p-md": "18px",
                "primary-p-sm": "16px",

                "secondary-d1": "338px",
                "secondary-d2": "114px",
                "secondary-d3": "48px",
    
              },

                 /* Tilføj din egen spacing nedenfor */
                 spacing: {
                    '3xs': '8px',
                    '2xs': '16px',
                    'xs': '24px',
                    'sm': '32px',
                    'md': '40px',
                    'lg': '48px',
                    '2xl': '56px',
                    '3xl': '64px',
                    '4xl': '72px',
                    '5xl': '80px',
                    '6xl': '116px',
                    '7xl': '164px',
                    '8xl': '228px',
                    '9xl': '228px',
                    '10xl': '344px',
                },

        /* Tilføj dit typografiske hierarki herunder */
        fontSize: {
            konsultativ: ['0.688rem', { lineHeight: '1rem' }],
            body: ['0.813rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            small: ['1.5rem', { lineHeight: '2.25rem' }],
            medium: ['2rem', { lineHeight: '3rem' }],
            large: ['2.5rem', { lineHeight: '3.75rem' }],
            xlarge: ['3rem', { lineHeight: '4.5rem' }],
          },

        /* Tilføj dit fontvægt-hierarki nedenfor */
          fontWeight: {
            light: '300',
            regular: '400',
            semibold: '600',
          },

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },
  
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}