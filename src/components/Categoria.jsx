// import React from 'react'

// const Categoria = ({ props }) => {
//   const { name, img, items, type } = props.values;

//   const componentes = {
//     "1": async() => return ({<></>}),
//     "2": async() => return ({<></>}),
//     "3": async() => return ({<></>}),
//   }

//   return componentes[type]

//   return (
//     <div className='content'>
//       <div>
//         {name}
//         { img ? <img src={img} /> : null }
//       </div>
//       <div>
//         { items.map(item => {
//           item.name === 'coffee' ? item.type = 2 : item.type = 1;
//           return (<CategoriaItem values={item} />)
//         }) }
//       </div>
//     </div>
//   )
// }

// export default Categoria