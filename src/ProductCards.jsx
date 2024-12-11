import Box from "./Box";
function ProductCards({price,title,image}){

    return(
        <>
          <Box>
            <img src={image} alt={title} width={100} height={100} />
            <h3>{title}</h3>
            <strong>price : {price} $</strong>
          </Box>
        </>
    )
};

export default ProductCards;







// import Box from "./Box";

// function ProductCards({price,image,title,category}){
//     return(
//         <>
//         <Box>
//             <img src={image} alt="title" width={100} height={100}/>
//             <h3>{title}</h3>
//             <p>{category}</p>
//             <strong>price:{price} $</strong>
//         </Box>
//         </>
//     )
// };

// export default ProductCards;