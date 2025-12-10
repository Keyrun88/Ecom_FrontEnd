import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice

}) =>{
    const [openViewModal, setOpenViewModal] = useState(false); 
    const buttonLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0; 

    const handleViewProduct = (product) => {
        setSelectedViewProduct(product);
        setOpenViewModal(true);
    }

    return (
      <div className=" border border-gray-400 shadow-2xl rounded-lg hover:scale-105 duration-300">
        <div
          onClick={() => {
            handleViewProduct({
              Id: productId,
              productName,
              image,
              description,
              quantity,
              price,
              discount,
              specialPrice,
            });
          }}
          className="w-full overflow-hidden aspect[3/2]"
        >
          <img
            className="w-full h-full curser-pointer transition-transform duration-300 transform hover:scale-120 rounded-md "
            src={image}
            alt={productName}
          ></img>
        </div>
        <div className="p-4">
          <h2
            onClick={() => {
              handleViewProduct({
                Id: productId,
                productName,
                image,
                description,
                quantity,
                price,
                discount,
                specialPrice,
              });
            }}
            className="text-lg font-semibold mb-2 cursor-pointer"
          >
            {productName}
          </h2>
          <div className="min-h-20 max-h-20">
            <p className="text-gray-700 text-sm mb-4">{description}</p>
          </div>

          <div className="md:flex items-center justify-between flex-col sm:flex-row ">
            {specialPrice ? (
              <div className="flex items-center flex-col space-x-2">
                <span className="text-gray-700 line-through">
                  <span className="mr-0.5 text-gray-">$</span>
                  {Number(price).toFixed(2)}
                </span>
                <span className="text-gray-700 font-bold text-lg text-sla">
                  <span className="mr-0.5">$</span>
                  {Number(specialPrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-gray-700 font-bold text-lg">
                  <span className="mr-0.5 text-gray-">$</span>
                  {Number(price).toFixed(2)}
                </span>
              </div>
            )}
            <button
              onClick={() => {}}
              disabled={!isAvailable || buttonLoader}
              className={`bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-lg mt-4 sm:mt-0 
                ${
                  !isAvailable
                    ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                    : ""
                }`}
            >
              <FaShoppingCart className="inline-block mr-2" />
              {isAvailable ? "Add to cart" : "Out of stock"}
            </button>
            <ProductViewModal
            open={openViewModal}
            setOpen={setOpenViewModal}
            product={selectedViewProduct}
            isAvailable={isAvailable}
            />
          </div>
        </div>
      </div>
    );
}
export default ProductCard;