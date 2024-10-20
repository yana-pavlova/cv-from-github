import {Helmet} from 'react-helmet-async';

type SEOProps = {
    title: string
    description: string
    name: string
    type: string
}

export default function SEO({title, description, name, type} : SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            { /* for vk*/}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* for twitter*/}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}