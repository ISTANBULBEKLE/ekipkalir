import { FC } from 'react';
import Head from "next/head"

/**
 * Component for setting meta tags in the head of the document.
 *
 * @param title - The title of the page.
 * @param keywords - The keywords for the page.
 * @param description - The description for the page.
 * @returns The rendered head tag with the meta tags.
 */


interface MetaProps {
    title: string;
    keywords: string;
    description: string;
}

const Meta: FC<MetaProps> = ({ title, keywords, description }): JSX.Element => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};