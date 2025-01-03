'use client'

import Image from 'next/image'

export default function LoadingCard() {
  const id = 0
  const imageUrl =
    'https://resource.pokemon-home.com/battledata/img/pokei128/icon0000_f00_s0.png'

  return (
    <div>
      <div className="flex flex-col items-center justify-between overflow-hidden rounded-xl bg-white p-2 group-hover:bg-zinc-300 dark:bg-black dark:group-hover:bg-zinc-700">
        <div className="relative flex w-full flex-col items-center rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
          <Image
            src={imageUrl}
            alt="Loading card image"
            width={128}
            height={128}
            priority
            className="h-full object-scale-down"
          />
          <div className="absolute inset-x-0 top-0 flex h-full flex-col items-start justify-between rounded-lg p-2">
            <p
              aria-hidden="true"
              className="font-mono text-sm text-zinc-400 dark:text-zinc-500"
            >
              {id}
            </p>
            <div className="flex flex-row gap-2">
              <div className="size-5 animate-pulse rounded-xs bg-zinc-300 dark:bg-zinc-700"></div>
              <div className="size-5 animate-pulse rounded-xs bg-zinc-300 dark:bg-zinc-700"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row justify-between px-2 pt-2">
          <div className="animate-pulse rounded-xs bg-zinc-300 font-light text-transparent dark:bg-zinc-700">
            Loading...
          </div>
        </div>
      </div>
    </div>
  )
}
