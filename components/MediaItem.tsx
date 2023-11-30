import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import { Song } from "@/types";

interface MediaItemProps {
  song: Song;
  onClick?: (id: string) => void;
}

const MediaItem = ({ song, onClick }: MediaItemProps) => {
  const imageUrl = useLoadImage(song);

  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }

    //  Default turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-400/10 p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[50px] min-w-[50px] overflow-hidden">
        <Image
          className="object-cover"
          src={imageUrl || "/images/liked.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow:hidden">
        <div className="font-semibold truncate">{song.title}</div>
        <div className="text-neutral-400 text-sm truncate">
          By {song.author}
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
