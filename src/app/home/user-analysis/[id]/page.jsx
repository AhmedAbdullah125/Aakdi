import UsersAnalysisWrapper from '@/components/analysis/UsersAnalysis/UsersAnalysisWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <UsersAnalysisWrapper id={id} />
    )
}