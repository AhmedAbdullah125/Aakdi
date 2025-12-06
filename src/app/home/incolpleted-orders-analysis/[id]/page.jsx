import InCompletedOrdersAnalysisWrapper from '@/components/analysis/OrderAnalysis/InCompletedOrdersAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <InCompletedOrdersAnalysisWrapper id={id} />
    )
}