"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface SongItemProps {
  song: Song;
  onClick: (id: string) => void;
}

const SongItem = ({ song, onClick }: SongItemProps) => {
  const imagePath = useLoadImage(song);

  return (
    <div
      onClick={() => onClick(song.id)}
      className="relative group flex flex-col gap-x-4 items-center justify-center rounded-md cursor-pointer bg-neutral-400/5 hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative w-full h-full aspect-square rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm pb-3 w-full truncate">
          By {song.author}
        </p>
      </div>

      <button className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 bottom-24 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </button>
    </div>
  );
};

export default SongItem;
