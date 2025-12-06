import PropertiesAnalysisWrapper from '@/components/analysis/PropertiesAnalysis/PropertiesAnalysisWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <PropertiesAnalysisWrapper id={id} />
    )
}