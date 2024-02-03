export default {
  logo: <span>Home</span>,
  project: {
    link: '/'
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
    useOptions(light) {
      return {
        dark: 'Dark',
        light: 'Light',
        system: 'System',
      }
    }
  }
  // ... other theme options
}
