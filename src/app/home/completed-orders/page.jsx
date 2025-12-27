import CompletedOrdersWrapper from '@/components/Orders/CompletedOrdersWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <CompletedOrdersWrapper id={id} />
    )
}