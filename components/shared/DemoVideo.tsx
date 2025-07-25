import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function DemoVideo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dzi2xi7l4/video/upload/v1753434523/igtfjrosyiqbdl51tjo7.mp4"
        thumbnailSrc="https://res.cloudinary.com/dzi2xi7l4/image/upload/v1753434655/d21ad1d7-2a78-461e-a1c9-6e00651627f1.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dzi2xi7l4/video/upload/v1753434523/igtfjrosyiqbdl51tjo7.mp4"
        thumbnailSrc="https://res.cloudinary.com/dzi2xi7l4/image/upload/v1753434655/d21ad1d7-2a78-461e-a1c9-6e00651627f1.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
