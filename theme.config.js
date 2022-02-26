
const YEAR = new Date().getFullYear()

export default {

  footer: (

    <small style={{ alignItems: 'left', display: 'block', marginTop: '4rem' }}>
      © <time>{YEAR}</time>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
