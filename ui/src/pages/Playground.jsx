import React from 'react'
import Terminal from 'terminal-in-react'
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin'
import {
    ThemeProvider,
    StyleReset,
    Text,
    Div,
} from 'atomize'

const theme = {
    colors: {
        black900: '#1d1d1e',
    },
}

const Playground = () => {

    const FileSystemPlugin = pseudoFileSystemPlugin()

    return (
        <ThemeProvider theme={theme}>
            <StyleReset />
                <Div
                    textColor="black900"
                    w="80%"
                    h="100vh"
                    maxW="800px"
                    minW="600px"
                    p={{ x: '2rem', y: '2rem', }}
                    d="flex"
                    align="center"
                    justify="center"
                    flexDir="column"
                >
                <Text
                    tag="h1"
                    textSize="display1"
                    fontFamily="secondary"
                    textWeight="500"
                    p={{ x: '1rem', y: '1rem', }}
                    >
                    Terminal Playground
                </Text>
                <Terminal
                    msg="Welcome! The bash terminal playground is currently under construction... Coming soon!"
                    color='white'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: 'bold', fontSize: '1em', }}
                    plugins={[
                        FileSystemPlugin,
                    ]}
                    shortcuts={{
                        'darwin,win,linux': {
                            'ctrl + a': 'echo whoo',
                        },
                        'linux': {
                            'ctrl + a': 'echo hi linux',
                        },
                    }}
                    
                />
            </Div>
        </ThemeProvider>
    )
}

export default Playground