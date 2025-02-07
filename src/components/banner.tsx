'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from './ui/card'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import Image from 'next/image'

export const Banner = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }))

  return (
    <div className=" w-full flex items-center justify-center">
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        //onMouseEnter={plugin.current.stop}
        //onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className="py-4">
            <CardContent className="flex h-[500px] items-center justify-center p-6 bg-[url(/imagens/banner1.jpg)] bg-cover"></CardContent>
          </CarouselItem>
          <CarouselItem className="py-4">
            <CardContent className="flex h-[500px] items-center justify-center p-6 bg-[url(/imagens/banner2.jpg)] bg-cover"></CardContent>
          </CarouselItem>
          <CarouselItem className="py-4">
            <CardContent className="flex h-[500px] items-center justify-center p-6 bg-[url(/imagens/banner3.jpg)] bg-cover"></CardContent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
