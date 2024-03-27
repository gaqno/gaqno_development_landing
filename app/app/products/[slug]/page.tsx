interface ProductProps {
  params: {
    slug: string
  }
}

export default async function Product({ params }: ProductProps) {
  return (
    <div>
      <h1>Produto: {params.slug}</h1>
    </div>
  )
}