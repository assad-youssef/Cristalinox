import React ,{useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../../Categorie";
import "./ProductDetail.css";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();

 
  const product = products
    .flatMap((category) =>
      category.souscategories.flatMap((subCategory) => subCategory.produits)
    )
    .find((prod) => prod.id === id);

  if (!product) {
    return <p className="not-found">Produit non trouvé.</p>;
  }

  return (
    <motion.div
      className="product-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="back-button"
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ← Retour
      </motion.button>

      <motion.div
        className="product-detail-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="product-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={product.images} alt={product.titre}  onContextMenu={(e) => e.preventDefault()} />
        </motion.div>

        <div className="product-info">
          <h2>{product.titre}</h2>
          <p>{product.description}</p>

          <motion.div
            className="contact-details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Contactez-nous pour plus d'informations :</h3>
            <p>📞 Téléphone : +212 661 471 841</p>
            <p>📧 Email : cristal.inox@yahoo.fr</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetail;
