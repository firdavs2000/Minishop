import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  setProducts,
  setSearchTerm,
  setSort,
  setPage,
} from "../store/products";
import { useProducts } from "../services/api";
import Skeleton from "../Components/Skleton";
import Qidiruv from "../Components/qidiruv";
import Sort from "../Components/sort";

import Paginate from "../Components/Paginate";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { page, products, searchTerm, sort } = useSelector(
    (state: RootState) => state.products
  );

  const { data: pagedData, isLoading: isPagedLoading } = useProducts({
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
    limit: 12,
    search: searchTerm,
    sort,
  });

  const isSearchActive = searchTerm.trim().length > 0;

  useEffect(() => {
    const currentData = pagedData?.products.map((product) => ({
      ...product,
      stock: product.stock ?? 0,
      rate: product.rate ?? 0,
    }));
    if (Array.isArray(currentData)) {
      dispatch(setProducts(currentData));
    }
  }, [searchTerm, sort, pagedData, dispatch]);

  const handleSearch = (value: string) => {
    handeSelectPage(1);
    dispatch(setSearchTerm(value));
  };

  const handeSelect = (value: string) => {
    handeSelectPage(1);
    dispatch(setSort(value));
  };

  const handeSelectPage = (value: number) => {
    setSearchParams({ page: value.toString() });
    dispatch(setPage(value));
  };

  const filteredProducts = !isSearchActive
    ? products
    : products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="recipt">
      <div className="container">
        <div className="top">
          <Sort setSort={handeSelect} />
          <Qidiruv search={searchTerm} setSearch={handleSearch} />
        </div>

        <div className="recipt_box">
          {isPagedLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div className="recipt_card" key={i}>
                <Skeleton />
              </div>
            ))
          ) : pagedData && pagedData.products.length > 0 ? (
            pagedData.products.map((item) => (
              <div className="recipt_card" key={item.id}>
                <Link to={`/products/${item.id}`} className="recipt_link">
                  <div className="recipt_card_img_wrapper">
                    <img
                      src={
                        item.images?.[0] || "https://via.placeholder.com/150"
                      }
                      alt={item.title}
                    />
                    <span className="discount_badge">
                      -{item.discountPercentage ?? "0"}%
                    </span>
                  </div>
                  <div className="recipt_card_info">
                    <h3 className="recipt_card_title">{item.title}</h3>
                    <p className="recipt_card_price">{item.price}$</p>
                    <p className="recipt_card_rating">
                      {item.rating ?? "N/A"} ★
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Mahsulotlar topilmadi</p>
          )}
        </div>

        {pagedData && pagedData.total >= 1 ? (
          <Paginate
            totalPages={pagedData && pagedData.total ? pagedData.total : 1}
            currenPage={
              searchParams.get("page") ? Number(searchParams.get("page")) : 1
            }
            setParamPage={handeSelectPage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
