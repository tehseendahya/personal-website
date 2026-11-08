import Image from "next/image";

// A photo taped into the notebook, with an optional caption written in pen underneath.
export default function Print({
  src,
  alt,
  width,
  height,
  caption,
  tilt = -1.75,
  priority = false,
  sizes = "(min-width: 1024px) 360px, 80vw",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: React.ReactNode;
  tilt?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="print" style={{ transform: `rotate(${tilt}deg)` }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="pen mt-4 pl-2 text-[21px] leading-[26px]">{caption}</figcaption>
      )}
    </figure>
  );
}
