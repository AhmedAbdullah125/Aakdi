import FinancialAnalysisWrapper from '@/components/analysis/FinancialAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <FinancialAnalysisWrapper id={id} />
    )
}
