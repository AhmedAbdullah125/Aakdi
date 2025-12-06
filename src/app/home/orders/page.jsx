import AllOrdersWrapper from '@/components/Orders/AllOrdersWrapper'
import React from 'react'
export default function page({ params }) {
    const { id } = params
    return (
        <AllOrdersWrapper id={id} />
    )
}