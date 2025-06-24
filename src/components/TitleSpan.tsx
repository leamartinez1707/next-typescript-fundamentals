import React from 'react'

const TitleSpan = ({ title }: { title: string }) => {
    return (
        <span className="text-4xl font-semibold mb-10">{title}</span>
    )
}

export default TitleSpan