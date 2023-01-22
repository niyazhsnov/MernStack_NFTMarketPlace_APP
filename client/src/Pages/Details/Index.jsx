import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Index.module.css'

function Index() {
  let [card, setCards] = useState([])
  let { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setCards(res.data)
    })
  }, [])
  console.log(card)
  return (
    <>
      <div className={styles.cardCont}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img
            style={{ borderTopLeftRadius: '50px',
              borderTopRightRadius: '50px'}}
              src={card.img}
              alt=""
            />
          </div>

        <div className={styles.texts}>
        {'Name:'}{card.name}
        </div>
        <div className={styles.texts}>
        {'Change:'}{card.change}
        </div>
          <div
          className={styles.texts}
          >
            {'Price:'} {card.price}
          </div>
          <div
          className={styles.texts}
          >
            {'Desc: '} {card.description}
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
