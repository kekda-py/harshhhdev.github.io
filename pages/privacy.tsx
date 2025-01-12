import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allInfos } from '@layer/generated'
import components from '@components/MDX'
import Wrapper from '@components/Wrapper'
import { useTranslation } from 'next-i18next'
import Header from '@components/Header'

const Privacy: NextPage<{ privacy: { body: { code: string } } }> = ({
  privacy,
}) => {
  const Component = useMDXComponent(privacy.body.code)
  const { t } = useTranslation('common')

  return (
    <Wrapper
      title='Privacy'
      description="Privacy policy and terms for any projects made under this domain. TLDR; I don't care about your data enough to sell it to companies. Just please don't do act like a doofus."
    >
      <Header head={t('privacyHeader')} bio={t('privacyBio')} />
      <div className='blog'>
        <Component components={components} />
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const privacy = allInfos.find(
    (page: { slug: string }) => page.slug === 'privacy'
  )!

  return {
    props: { privacy, ...(await serverSideTranslations(locale!, ['common'])) },
  }
}

export default Privacy
