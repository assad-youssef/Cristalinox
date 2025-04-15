import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductList.css";
import products from "../../Categorie";

const ProductListWithFilters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { idcode } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let selectedSubCategory = null;

    products.forEach((category) => {
      category.souscategories.forEach((subCategory) => {
        if (String(subCategory.idcode) === idcode) {
          selectedSubCategory = subCategory;
        }
      });
    });

    console.log("Sous-catégorie trouvée :", selectedSubCategory);

    if (selectedSubCategory) {
      setFilteredProducts(
        selectedSubCategory.produits.filter((product) =>
          product.titre.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, idcode]);
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="products_container">
      <div className="product-list">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Retour
        </button>
        <h2>Nos Produits</h2>
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product.id)}
              >
                <img src={product.images} alt={product.titre} onContextMenu={(e) => e.preventDefault()} />
                <h3>{product.titre}</h3>
              </div>
            ))
          ) : (
            <p>Aucun produit trouvé pour cette sous-catégorie.</p>
          )}
        </div>
      </div>

      <div className="products_filters">
        <h2>Filtres</h2>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default ProductListWithFilters;
