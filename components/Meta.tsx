import React from 'react'
import Head from "next/head"


const Meta = ({title, keywords,description}) => {
  return (
    <Head>
        
        <meta  
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <meta 
            name="description"
            content={description}
        /> 
        <meta 
            name="keywords"
            content={keywords}
        /> 
        <meta 
            charSet='utf-8'
        />
        <link 
            rel="icon"
            href="/favicon.ico"
        />
        <title>{title}</title>
    </Head>
  )
}

export default Meta