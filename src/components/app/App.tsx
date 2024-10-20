import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import SEO from '../SEO';

const App = () => {

  return (
      <>
        <SEO
          title='Your perfect CV'
          description='CV maker based on your GitHub profile'
          name='Your perfect CV'
          type='website'
        />
        <Header />
        <Main />
        <Footer />
      </>
  )
}

export default App;