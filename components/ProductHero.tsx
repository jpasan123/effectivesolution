import type React from "react"
import Image from "next/image"

interface ProductHeroProps {
  title: string
  heroImage?: string
  heroVideo?: string
}

const ProductHero: React.FC<ProductHeroProps> = ({ title, heroImage, heroVideo }) => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {heroVideo ? (
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : heroImage ? (
        <Image src={heroImage || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" priority />
      ) : null}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">{title}</h1>
      </div>
    </div>
  )
}

export default ProductHero

