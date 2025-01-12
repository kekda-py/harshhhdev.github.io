import { FC, ReactNode, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Nav/Nav'
import Footer from './Footer'
import BackToTop from './Top'

export const meta = {
  root: 'https://hxrsh.in',
  title: 'Harsh Singh',
  description:
    "Passionate developer and speaker who's interested in frontend, databases and design",
  image: 'https://hxrsh.in/banner.png',
  type: 'website',
}

const Wrapper: FC<{
  children: ReactNode
  title?: string
  description?: string
  image?: string
}> = ({ children, title, description, image }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>{title ? title : meta.title}</title>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>'
        />
        <meta name='robots' content='follow, index' />
        <meta
          content={description ? description : meta.description}
          name='description'
        />
        <meta property='og:url' content={`${meta.root}${router.asPath}`} />
        <link rel='canonical' href={`${meta.root}${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Harsh Singh' />
        <meta
          property='og:description'
          content={description ? description : meta.description}
        />
        <meta property='og:title' content={title ? title : meta.title} />
        <meta property='og:image' content={image ? image : meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@harshhhdev' />
        <meta name='theme-color' content='#FF70C6' />
        <meta name='twitter:title' content={title ? title : meta.title} />
        <meta
          name='twitter:description'
          content={description ? description : meta.description}
        />
        <meta name='twitter:image' content={image ? image : meta.image} />
      </Head>
      <div className='flex flex-col items-center'>
        <div className='w-95 lg:w-60 2xl:w-40 xl:w-30 mt-10'>
          <Navbar navOpen={open} setNavOpen={setOpen} />
          {!open && <main id='main'>{children}</main>}
          <Footer />
          <BackToTop />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
