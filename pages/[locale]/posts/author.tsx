import Image from 'next/image'

export default function Author({person, locale}: any) {
  const name = person && person[locale]?.name || '';
  const picture = person?.picture || '/people/no-avatar.png'

  return <>
    <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden inline-block align-middle ml-4">
      <Image
        alt={name}
        src={picture}
        width={80}
        height={80}
        className="duration-700 ease-in-out grayscale-0 blur-0 scale-100"
      />
    </div>
    <div className="inline-block text-md md:text-lg align-middle ml-3">
      <span className="font-semibold">{name}</span>
    </div>
  </>
}
