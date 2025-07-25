import React from 'react'
import { DotPattern } from '../ui/dot-pattern'
import { cn } from '@/lib/utils'
import { DemoVideo } from './DemoVideo'

const VideoDemo = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <DotPattern
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <DemoVideo/>
    </div>
  )
}

export default VideoDemo