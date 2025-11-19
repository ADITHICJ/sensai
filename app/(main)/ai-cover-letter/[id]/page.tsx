import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const CoverLetter = async ({ params }: Props) => {
  const { id } = await params; // ✅ required in Next.js 16

  return <div>CoverLetter: {id}</div>;
};

export default CoverLetter;
