import React from 'react'
import Image from 'next/dist/client/image'
import { useRouter } from 'next/dist/client/router';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getServerSideProps(context) {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+context.params.menu)
    const res = await data.json()
    if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    return {
        props: {
            menu:res.meals[0]
        }
    }
}



const Menu = ({menu}) => {
    return (
        <div className="flex w-full justify-center">

        <div className="text-center w-1/2 grid  justify-items-center">
            <h1 className="text-2xl mb-10">{menu.strMeal}</h1>
            <Image src={menu.strMealThumb} width="300" height="200" />
            <p className="my-4 text-justify">{menu.strInstructions}</p>
            <iframe src={`https://www.youtube.com/embed/${menu.strYoutube.split("=")[1]}`} frameBorder="0" width="500" height="300"></iframe>
        </div>
        </div>
    )
}

export default Menu
