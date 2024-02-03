export default {
  logo: <span></span>,
  project: {
    link: 'https://edotau.github.io/'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="e]" />
      <meta property="og:description" content="" />
    </>
  ),
  feedback: {
    content: null,
    labels: "",
  },
  editLink: {
    component: null
  },
  search: {
    component: false,
  },
  gitTimestamp: null,
  footer: {
    text: (
      <span>
        edotau et. al. © {new Date().getFullYear()} 
      </span>
    )
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  }
  // ... other theme options
}
