import Head from 'next/head'
import AdviceBox from '../components/advice-box'
import Footer from '../components/footer'

const Page = () => {
  return (
    <div>
      <Head>
        <title>Advice Generator | Manuel Pöll</title>
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '95vh'
        }}
      >
        <AdviceBox />
      </div>
      <Footer />
    </div>
  )
}

export default Page
