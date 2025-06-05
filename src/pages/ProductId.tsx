import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductById } from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";

const ProductId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productId = Number(id);
  const { data: product, isLoading, error } = useProductById(productId);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (isNaN(productId)) {
    return (
      <div className="container">
        ID noto‘g‘ri. Asosiy sahifaga yo‘naltirilmoqda...
      </div>
    );
  }

  if (isLoading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error loading product.</div>;
  if (!product) return <div className="container">Product not found.</div>;

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate("/basket");
  };

  const ratingValue =
    typeof product.rating === "number"
      ? product.rating
      : product.rating?.rate || 0;

  const images =
    product.images && product.images.length > 0
      ? product.images
      : ["/placeholder.jpg"];
  const mainImage = selectedImage || images[0];

  return (
    <div className="container">
      <div className="product">
        <div className="product_images">
          {/* Kichik rasmlar (thumbnail) */}
          <div className="product_thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className={`thumb ${img === mainImage ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Asosiy rasm */}
          <img
            src={mainImage}
            alt={product.title || "Product image"}
            className="main_product_image"
          />
        </div>

        <div className="product_info">
          <h2 className="product_title">{product.title}</h2>
          <p className="recipt_card_price">
            {ratingValue ? ratingValue.toFixed(1) + " ★" : "N/A"}
          </p>
          <p className="product_price">{product.price} $</p>
          <p className="product_text">Description: {product.description}</p>

          <button className="product_buy" onClick={handleBuyNow}>
            BUY NOW
          </button>
          <button className="product_back" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
