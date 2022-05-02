import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'

const HomeDecor = () => {
  const [HomeDecordata, setHomeDecorData] = useState([])
  console.log(HomeDecordata)
  useEffect(() => {
    fetch("https://movie-fake-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((d) => {
        var z = d.filter((e) => e.category === "homedecor")
        setHomeDecorData(z)
      })
  }, [])

  return (
    <>
      <h1>HomeDecors Data</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "10px" }}>
        {HomeDecordata.map((el) => (
          <ProductCard key={el.id} item={el} />
        ))}

      </div>
    </>
  )
}

export default HomeDecor