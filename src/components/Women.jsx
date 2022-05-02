import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'

const Women = () => {
  const [Womendata, setWomenData] = useState([])
  console.log(Womendata)
  useEffect(() => {
    fetch("https://movie-fake-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((d) => {
        var z = d.filter((e) => e.category === "women")
        setWomenData(z)
      })
  }, [])

  return (
    <>
      <h1>Womens Data</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "10px" }}>

        {Womendata.map((el) => (
          <ProductCard key={el.id} item={el} />
        ))}
      </div>

    </>
  )
}

export default Women