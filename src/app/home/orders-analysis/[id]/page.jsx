import OrdersAnalysisWrapper from '@/components/analysis/OrderAnalysis/OrdersAnalysisWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <OrdersAnalysisWrapper id={id} />
    )
}