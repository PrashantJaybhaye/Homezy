import React from 'react'

function Skeleton({ className }) {
    return (
        <div className={`animate-pulse bg-muted rounded-md ${className}`} />
    )
}

export default Skeleton
