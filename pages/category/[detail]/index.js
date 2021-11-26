import React from 'react'
import Card from '../../../components/Card';

export const getStaticPaths = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  const posts = await res.json()

  const paths = posts.categories.map((post) => ({
    params: { detail: post.strCategory.toLowerCase() },
  }))

  return { paths, fallback: false }
};

export const getStaticProps = async ({params}) => {
  const  res  = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + params.detail)
  const  items = await res.json()
  return {
    props: { details: items.meals,slugDetails:params.detail },
    revalidate: 1,
  };
};


const Detail = ({details,slugDetails}) => {
    return (
      <>
      <h2 className="text-3xl capitalize">All {slugDetails} menus</h2>
      <h5 className="text-lg capitalize mt-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
      fuga.
      </h5>
       <div className="container grid grid-cols-1 md:grid-cols-3 justify-items-center">
            {details.map(details =>(
              <Card key={ details.idMeal} name={details.strMeal} image={details.strMealThumb} slug={`/category/${slugDetails}/${details.idMeal}`}/>
              ))}
        </div>
      </>
    )
}

export default Detail
