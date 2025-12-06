import FinancialAnalysisWrapper from '@/components/analysis/FinancialAnalysisWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <FinancialAnalysisWrapper id={id} />
    )
}
