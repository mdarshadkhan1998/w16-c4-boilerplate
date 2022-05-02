import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'

const Men = () => {
  const [mendata, setMenData] = useState([])
  console.log(mendata)
  useEffect(() => {
    fetch("https://movie-fake-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((d) => {
        var z = d.filter((e) => e.category === "men")
        setMenData(z)
      })
  }, [])

  return (
    <>
      <h1>Mens Data</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "10px" }}>
        {mendata.map((el) => (
          <ProductCard key={el.id} item={el} />
        ))}
      </div>

    </>
  )
}

export default Men