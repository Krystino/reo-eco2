"use client"

import Image from "next/image"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

interface ProcessStep {
  title: string
  description: string
  description0?: string
  image: string
}

const processSteps: ProcessStep[] = [
  {
    title: "PET Waste + Cutting Waste",
    description0: "Waste is collected through an established partner network from nominated sources.",
    description: "The waste undergoes sophisticated sorting and washing in-house.",
    image: "/P2-1.png",
  },
  {
    title: "Flakes",
    description0: " ",
    description: "The purified waste is converted into high-grade rPET flakes for further processing.",
    image: "/P2-2.png",
  },
  {
    title: "Flakes + Masterbatch",
    description: "These flakes are blended with black masterbatch according to a fixed recipe, preparing the hot melt mix for extrusion.",
    image: "/P2-3.png",
  },
  {
    title: "Black Liquid",
    description: "The mixture is melted in an extruder, forming a uniform black polymer melt, which is then extruded through a spinneret to create black filaments.",
    image: "/P2-4.png",
  },
  {
    title: "Black Yarn",
    description: "The filaments are spun and winded into black yarn cones.",
    image: "/P2-5.png",
  },
  {
    title: "Weaving / Knitting",
    description: "The black yarn is then moved into fabric production, with weaving or knitting processes tailored into various constructions suitable for different applications and end uses.",
    image: "/P2-6.jpg",
  },
  {
    title: "Black Weave",
    description: "The process reduces water, chemical waste, and energy consumption compared to traditional piece dyeing.",
    image: "/P2-7.png",
  },
  {
    title: "Black Fabric",
    description: "Different fabrics using the same FixDye black yarn achieve unbeatable color harmony compared to piece dyeing and can be repetable and adapted for multiple end uses.",
    image: "/P2-8.png",
  },
  {
    title: "Output",
    description: "The final product demonstrates our commitment to sustainable manufacturing practices.",
    image: "/P2-9.png",
  },
]

export default function ProcessGallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full bg-black min-h-screen text-white" ref={containerRef}>
        <div className="fixed top-20 left-0 w-full text-white text-center py-4 z-10 text-5xl">
          Fix Color Recipe
        </div>
      {processSteps.map((step, index) => (
        <Card
          key={index}
          className="border-none rounded-none bg-transparent text-white"
        >
          <CardContent className="relative p-0">
            <div className="relative h-screen">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 p-8">
                <h2 className="text-6xl font-normal tracking-tight" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                  {step.title}
                </h2>
                <p className="absolute text-2xl max-w-xl mb-10" style={{ fontFamily: 'Aeonik, sans-serif', marginTop: "40vw", bottom: "25vh"}}>
                  {step.description0}
                </p>
                <p className="absolute text-2xl max-w-xl" style={{ fontFamily: 'Aeonik, sans-serif', bottom: "15vh" }}>
                  {step.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

