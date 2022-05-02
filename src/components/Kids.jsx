import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'

const Kids = () => {
  const [Kidsdata, setKidsData] = useState([])
  console.log(Kidsdata)
  useEffect(() => {
    fetch("https://movie-fake-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((d) => {
        var z = d.filter((e) => e.category === "kids")
        setKidsData(z)
      })
  }, [])

  return (
    <>

      <h1>Kidss Data</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "10px" }}>

        {Kidsdata.map((el) => (
          <ProductCard key={el.id} item={el} />
        ))}
      </div>
    </>
  )
}

export default Kids