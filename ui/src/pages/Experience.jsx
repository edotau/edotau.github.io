import React from 'react'
import {
    ThemeProvider,
    StyleReset,
    Div,
} from 'atomize'

const theme = {
    colors: {
        black900: '#1d1d1e',
    },
}

const Experience = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyleReset />
                <Div
                    textColor="black900"
                    w="80%"
                    h="90%"
                    minW="600px"
                    minH="800px"
                    m={{ x: 'auto', y: '2rem', }}
                    p={{ x: '2rem', y: '2rem', }}
                    d="flex"
                    justify="center"
                    flexDir="column"
                >
                <embed src="/files/aueric_resume.pdf" width="90%" height="1050px" />
            </Div>
        </ThemeProvider>
    )
}
export default Experience
