import CategoryList from "components/CategoryList";
import CategoryLoaderList from "components/CategoryLoaderList";
import ProductList from "components/ProductList";
import ProductLoaderList from "components/ProductLoaderList";
import useAppSelector from "hooks/useAppSelector";
import { ICartItem } from "models";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { productsService } from "services";
import { addCartItem } from "store/cart/actions";
import {
  selectCategory,
  setCategories,
  startCategoriesFetching,
} from "store/categories/actions";
import { setProducts, startProductsFetching } from "store/products/actions";
import { AppDispatch } from "store/store";
import Line from "ui/Line";

const Products: React.FC = () => {
  const {
    categories,
    selectedCategoryIndex,
    loading: categoriesIsLoading,
  } = useAppSelector((state) => state.categories);
  const { products, loading: productsIsLoading } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  const fetchCategories = async () => {
    dispatch(startCategoriesFetching());
    const categories = await productsService.getCategories();
    dispatch(setCategories(categories));
  };

  const fetchProducts = async () => {
    dispatch(startProductsFetching());
    const products = await productsService.getProducts();
    dispatch(setProducts(products));
  };

  const fetchData = async () => {
    if (categories.length === 0) {
      await fetchCategories();
    }
    if (products.length === 0) {
      await fetchProducts();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onAddProductToCart = useCallback((cartItem: ICartItem) => {
    dispatch(addCartItem(cartItem));
  }, []);

  const onSelectCategoryIndex = useCallback((index: number) => {
    dispatch(selectCategory(index));
  }, []);

  const productsByCategory =
    categories.length === 0
      ? []
      : products.filter(
          (product) =>
            product.category.id === categories[selectedCategoryIndex].id
        );

  return (
    <main
      className={[
        "grid",
        "gap-[1.25rem]",
        "px-[0rem] ssm:px-[3.625rem] pt-[1.25rem] pb-[2.5rem]",
        "border-[0.125rem] border-[rgba(0, 0, 0, 0.10)] rounded-[1.5625rem]",
      ].join(" ")}
    >
      {categoriesIsLoading ? (
        <CategoryLoaderList />
      ) : (
        <CategoryList
          categories={categories}
          selectedCategoryIndex={selectedCategoryIndex}
          onSelectCategoryIndex={onSelectCategoryIndex}
        />
      )}

      <Line />

      {productsIsLoading ? (
        <ProductLoaderList />
      ) : (
        <ProductList
          products={productsByCategory}
          onAddProduct={onAddProductToCart}
        />
      )}
    </main>
  );
};

export default Products;
