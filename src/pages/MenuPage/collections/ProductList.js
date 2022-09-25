import bee from "../../../images/bee.jpg";
import beetle from "../../../images/beetle.jpg";
import ladybug from "../../../images/ladybug.jpg";
const ProductList = [
  {
    id: 1,
    name: "Ladybug",
    image: ladybug,
    price: 0.43,
    description:
      "Ladybugs appear as half-spheres, tiny, spotted, round or oval-shaped domes. They have short legs and antennae. Their distinctive spots and attractive colors are meant to make them unappealing to predators. Ladybugs can secrete a fluid from joints in their legs which gives them a foul taste.",
    status: "available",
    quantity: 32,
    total: 0,
  },

  {
    id: 2,
    name: "Bees",
    image: bee,
    price: 343,
    description: "bees look good and smell good",
    status: "available",
    quantity: 432,
    total: 0,
  },

  {
    id: 3,
    name: "Beetle",
    image: beetle,
    price: 344.3,
    description: "beetle is a good insect",
    status: "available",
    quantity: 43,
    total: 0,
  },
];
export default ProductList;
