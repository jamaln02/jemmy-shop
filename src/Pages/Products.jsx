import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import React from "react";

const Products = ({ product, addToCart }) => {
  return (
    <Card className="w-[17rem] h-[25rem] md:w-[20rem] md:h-[30rem]">
      <CardHeader shadow={false} floated={false} className="h-full">
        <img
          src={product.image}
          alt="card-image"
          className="h-full w-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between ">
          <Typography
            color="blue-gray"
            variant="paragraph"
            className=" font-bold h-5 w-48 overflow-hidden"
          >
            {product.title}
          </Typography>
          <Typography
            variant="h6"
            className=" font-bold text-nowrap text-orange-700"
          >
            {product.price}$
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 h-10 overflow-hidden"
        >
          {product.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Products;
