import OrdersAnalysisWrapper from '@/components/analysis/OrderAnalysis/OrdersAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <OrdersAnalysisWrapper id={id} />
    )
}