import ExpenseAnalysisWrapper from '@/components/analysis/expense/ExpenseAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <ExpenseAnalysisWrapper id={id} />
    )
}