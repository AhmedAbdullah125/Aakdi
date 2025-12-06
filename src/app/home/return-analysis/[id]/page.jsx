import ReturnedAnalysisWrapper from '@/components/analysis/returned/ReturnedAnalysisWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <ReturnedAnalysisWrapper id={id} />
    )
}