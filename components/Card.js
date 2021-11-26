import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({name,image,desc,slug}) => {
    return (
        <>
            <Link href={slug.toLowerCase()}>
            <a className="card w-80 py-6 bg-gray-5 shadow-md m-4 px-4 fir hover:shadow-xl">
                <Image
                src={image}
                height={2}
                width={3}
                 layout="responsive"
                 quality={75}
                />
                <h2 className="font-medium">{name}</h2>
                <p>{desc && desc.split(".")[0]}</p>
            </a>
            </Link>   
        </>
    )
}

export default Card
