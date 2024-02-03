export default {
  logo: <span>Home</span>,
  project: {
    link: 'https://github.com/edotau'
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
  darkMode: false,
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
      }
    },
  },
  gitTimestamp: null,
  footer: {
    text: (
      <span>
        edotau et. al. © {new Date().getFullYear()} 
      </span>
    )
  },
  // ... other theme options
}