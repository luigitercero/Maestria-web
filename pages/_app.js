import 'semantic-ui-css/semantic.min.css'

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp