import Card from '../components/Card'

export const getServerSideProps = async () => {
  const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  const res = await data.json()
  return {
    props :{
      categories : res.categories
    }
  }
}


export default function Home({categories}) {
  return (
    <>
      <h2 className="text-3xl">Restaurant Demo</h2>
      <h5 className="text-lg capitalize mt-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
      fuga.
      </h5>
      <div className="container grid grid-cols-1 md:grid-cols-3 justify-items-center">
        {categories.map(category =>(
          <Card key={ category.idCategory} name={category.strCategory} image={category.strCategoryThumb} desc={category.strCategoryDescription} slug={`/category/${category.strCategory}`}/>
          ))}
      </div>
    </>
  )
}
