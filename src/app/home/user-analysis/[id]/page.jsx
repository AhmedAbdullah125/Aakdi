import UsersAnalysisWrapper from '@/components/analysis/UsersAnalysis/UsersAnalysisWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <UsersAnalysisWrapper id={id} />
    )
}