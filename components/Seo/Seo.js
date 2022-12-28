import React from 'react'
import { NextSeo } from 'next-seo';
export default function Seo({ seoData }) {
    const {title_seo, meta_description_seo} = seoData
  return (
    <>
        <NextSeo
                title={title_seo}
                description={meta_description_seo}
        />
    </>
  )
}
