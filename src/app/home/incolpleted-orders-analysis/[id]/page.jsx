import InCompletedOrdersAnalysisWrapper from '@/components/analysis/OrderAnalysis/InCompletedOrdersAnalysisWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <InCompletedOrdersAnalysisWrapper id={id} />
    )
}