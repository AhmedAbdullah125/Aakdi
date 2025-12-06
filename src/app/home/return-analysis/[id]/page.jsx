import ReturnedAnalysisWrapper from '@/components/analysis/returned/ReturnedAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <ReturnedAnalysisWrapper id={id} />
    )
}