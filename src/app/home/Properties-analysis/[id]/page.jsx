import PropertiesAnalysisWrapper from '@/components/analysis/PropertiesAnalysis/PropertiesAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <PropertiesAnalysisWrapper id={id} />
    )
}