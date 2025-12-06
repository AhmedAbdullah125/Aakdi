import UnitsAnalysisWrapper from '@/components/analysis/UnitsAnalysis/UnitsAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <UnitsAnalysisWrapper id={id} />
    )
}