import AllOrdersWrapper from '@/components/Orders/AllOrdersWrapper'
import React from 'react'
export default async function page({ params }) {
    const { id } = await params
    return (
        <AllOrdersWrapper id={id} />
    )
}