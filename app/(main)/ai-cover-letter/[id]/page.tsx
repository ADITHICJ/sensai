import React from 'react'

type Props = { params: { id: string } }

const CoverLetter = async ({ params }: Props) => {
    const id = params.id;
  return (
    <div>CoverLetter: {id}</div>
  )
}

export default CoverLetter