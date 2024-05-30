

const menu =[
  {
    title:"DEAL 01",
  description:"1KG Chicken Pulao,Raita,345ml",
  price:"1200",
  drink:" pepsi",
 img:"45.png"
 },
 {
  title:"DEAL 02",
  description:"1KG Chicken Pulao,Raita,345ml",
  price:"1200",
  drink:" pepsi"
 },
 {
  title:"DEAL 03",
  description:"1KG Chicken Pulao,Raita,345ml",
  price:"1200",
  drink:" pepsi"
 },
 {
  title:"DEAL 04",
  description:"1KG Chicken Pulao,Raita,345ml",
  price:"1200",
  drink:" pepsi"
 },
 {
  title:"DEAL 05",
  description:"1KG Chicken Pulao,Raita,345ml",
  price:"1200",
  drink:" pepsi"
 },
 {
  title:"DEAL 06",
  description:"1KG Chicken Pulao,Raita,345ml",
  price:"1200",
  drink:" pepsi"
 },
]

export default function home(){
  return (
    <main>
    <div className="flex justify-center">
<div className="w-[90%] grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 m-20  cursor-pointer">
  {
    menu.map((item)=>{
      return(
        <div className="border rounded-md p-5 shadow-2xl">
          <p>img:{item.img}</p>
          <p>meun:{item.title}</p>
          <p>order:{item.description}</p>
          <p> price :{item.price}</p>
          <p>Colddrink:{item.drink}</p>
        </div>
    )})}
 
</div>
</div>  

</main>
)}