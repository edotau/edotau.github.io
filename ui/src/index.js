import React from 'react'
import { createRoot, } from 'react-dom/client'
import { Div, StyleReset, ThemeProvider, } from 'atomize'
import { Provider as StyletronProvider, } from 'styletron-react'
import { styletron, } from './styletron'

import App from './App'

const theme = {
    colors: {
        black900: '#1d1d1e',
    },
}

function MyApp() {
    return (
        <StyletronProvider value={styletron}>
        <ThemeProvider theme={theme}>
            <StyleReset />
                <Div
                    textColor="black900"
                    rounded="br1"
                    d="flex"
                    textWeight="500"
                    flexDir="column"
                    h="375px"
                    p={{ x: '1rem', y: '1rem', }}
                >
            <App />
            </Div>
        </ThemeProvider>
        </StyletronProvider>
    )
}

const container = document.getElementById('root', )
const root = createRoot(container, )
root.render(<MyApp />, )
