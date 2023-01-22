const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let id = 21
const app = express()
app.use(bodyParser())
app.use(cors())
const PORT = 8080
const products = [
  {
    id: 1,
    name: 'Ruben Carder',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 2,
    name: 'Elnurxo',
    img:"https://avatars.githubusercontent.com/u/87971131?v=4",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 3,
    name: 'RashadXalil',
    img:"https://avatars.githubusercontent.com/u/87971060?v=4",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 4,
    name: 'Suleyman1406',
    img:"https://avatars.githubusercontent.com/u/79119900?v=4",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 5,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-7@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 6,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-8@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 7,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 8,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-17@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 9,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-126@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 10,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-127@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 11,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-128@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 12,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 13,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 14,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 15,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 16,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 17,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 18,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 19,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
  {
    id: 20,
    name: 'lorem',
    img:"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    change:'+1.41%',
    price: 602,
    description: '12.4 ETH',
    isDeleted: false,
  },
]
const NFTs = [
  { 
    id:1,
    name:'Magic Mushroom 0325',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder@2x.png',
    userimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png',
    username:'Ruben Carder',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:2,
    name:'Happy Robot 032',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-65@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/87971131?v=4',
    username:'Elnurxo',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:3,
    name:'Happy Robot 024',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-66@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/87971060?v=4',
    username:'RashadXalil',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:4,
    name:'Designer Bear',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-1@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/79119900?v=4',
    username:'Suleyman1406',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:5,
    name:'Colorful Dog 0356',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-67@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/79119900?v=4',
    username:'Suleyman1406',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:6,
    name:'Dancing Robot 0312',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-68@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/79119900?v=4',
    username:'Suleyman1406',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:7,
    name:'Cherry Blossom Girl 035',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-69@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/79119900?v=4',
    username:'Suleyman1406',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:8,
    name:'Space Travel',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-70@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/79119900?v=4',
    username:'Suleyman1406',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
  { 
    id:9,
    name:'Sunset Dimension',
    nftimg:'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-2@2x.png',
    userimg:'https://avatars.githubusercontent.com/u/79119900?v=4',
    username:'Suleyman1406',
    price:'1.63 ETH',
    highestBid:'0.33 wETH'

  },
 
]
// get all
app.get('/products', (req, res) => {
  res.send(products)
})
app.get('/NFTs',(req,res)=>{
   res.send(NFTs)
})
// get by id
app.get('/products/:id', (req, res) => {
  const id = req.params.id
  const target = products.find((product) => product.id == id)
  res.send(target)
  //   setData(res.data.filter(prod=>prod.isDeleted==false))
  //   prod.isDeleted == false ? <div>In Stock</div> : <div>Out of Stock</div>
})
app.get('/NFTs/:id',(req,res)=>{
  const id = req.params.id
  const target = NFTs.fing((NFT)=>NFT.id==id)
  res.send(target)
})
// add
app.post('/products', (req, res) => {
  const prod = {
    id: id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    img:req.body.img,
    change:req.body.change,
    isDeleted: false,
  }
  products.push(prod)
  id++
  res.send(`prod created : ${prod}`)
})
app.post('/products',(req,res)=>{
  const NFT = {
    id:id,
    name:req.body.name,
    nftimg:req.body.nftimg,
    userimg:req.body.userimg,
    username:req.body.username,
    price:req.body.price,
    highestBid:req.body.highestBid
  }
  NFTs.push(NFT)
  id++
  res.send(`NFT created : ${NFT}`)
})
app.delete('/products/:id', (req, res) => {
  const id = req.params.id
  const target = products.find((product) => product.id == id)
  //   const indexOfTarget = products.indexOf(target)
  target.isDeleted = true
  //   products.splice(indexOfTarget, 1)
  res.status(200).send(`prod deleted ! id:${id}`)
})
app.listen(PORT, () => {
  console.log(`app running on ${PORT}`)
})
