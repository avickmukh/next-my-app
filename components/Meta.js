import Head from 'next/head';

export default function Meta(props) {
  return (
    <Head>
        <title>{props.title}</title>
        <meta name='keywords' content={props.keywords} />
        <meta name='description' content={props.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
  );
}

Meta.defaultProps = {
    title: 'web development',
    description:'web development, latest news, technology',
    keywords:'coding, news'
}