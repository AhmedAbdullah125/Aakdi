import ExpenseAnalysisWrapper from '@/components/analysis/expense/ExpenseAnalysisWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <ExpenseAnalysisWrapper id={id} />
    )
}