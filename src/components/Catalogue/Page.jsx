import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProductList.css";
import products from "../../Categorie";
import "./Page.css";
import { Link } from "react-router-dom";

const ProductListWithCategories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = products
    .map((category) => {
      return {
        ...category,
        souscategories: category.souscategories.filter((subCategory) =>
          subCategory.nom.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      };
    })
    .filter((category) => category.souscategories.length > 0);

  return (
    <div className="products_container">
      <div className="product-list">
        <motion.h2
          className="main-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos Catégories
        </motion.h2>
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.code}
            className="category-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="category-title">{category.nom}</h3>
            <div className="subcategory-grid">
              {category.souscategories.map((subCategory, subIndex) => (
                <motion.div
                  key={subCategory.nom}
                  className="subcategory-card"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                >
                  <img
                    src={
                      subCategory.image && subCategory.image !== "url_interdite"
                        ? subCategory.image
                        : "placeholder.jpg"
                    }
                    alt={subCategory.nom}
                    className="subcategory-image"
                  />
                  <Link to={`/catalogue/${subCategory.idcode}`}>
                    <div className="overlay">
                      <p className="view-details">Voir Détails</p>
                    </div>
                  </Link>
                  <h4 className="subcategory-name">{subCategory.nom}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="products_filters">
        <h2 className="filter-title">Filtres</h2>
        <motion.input
          type="text"
          placeholder="Rechercher une sous-catégorie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          initial={{ width: "80%", opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default ProductListWithCategories;
