import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/movies";
import { Movie } from "../../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  netflixOriginals: Movie[]
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  console.log("🚀 ~ file: Banner.tsx ~ line 10 ~ Banner ~ movie", movie)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  return (
    <div className="flex flex-col space-y-2 md:space-y-8 py-16 lg:h-[75vh] lg:justify-end lg:pb-16">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt='' layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl lg:text-7xl md:text-4xl text-white font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-white">{movie?.overview}</p>

      <div className="flex items-center space-x-4">
        <button className="BannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="BannerButton bg-[gray]/70">
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>

    </div>
  )
}
