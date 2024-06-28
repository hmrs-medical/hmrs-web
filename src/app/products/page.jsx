"use client";
import "@/components/css/product.css";
import { useEffect, useState } from "react";
import { prodCategory } from "@/config_flies/products";
import db from "@/config_flies/firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "./Loader.js";

function Products(props) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (props.minimize) {
      setCategories(prodCategory[props.category]);
      setIsExpanded(false);
    }
  }, [props.category, props.minimize]);
  return (
    <div className="root ">
      <div
        className={
          !isExpanded ? "product-categories minimize" : "product-categories"
        }
      >
        <div
          id="bloodbank"
          style={{ backgroundImage: 'url("/bloodwall.jpeg")' }}
          onClick={() => {
            setCategories(prodCategory.bloodbank);
            if (isExpanded) {
              setIsExpanded(false);
            }
          }}
          className="category-item blood-bank"
        >
          <div className="item-info">
            <h1 className="lg:text-3xl">Bloodbank Equipments & Consumables</h1>
          </div>
        </div>
        <div
          id="laboratory"
          style={{ backgroundImage: 'url("/img2.jpeg")' }}
          onClick={() => {
            setCategories(prodCategory.laboratory);
            if (isExpanded) {
              setIsExpanded(false);
            }
          }}
          className="category-item laboratory"
        >
          <div className="item-info">
            <h1 className="lg:text-3xl">Laboratory Equipments & Consumables</h1>
          </div>
        </div>
        <div
          id="research"
          style={{ backgroundImage: 'url("/img3.jpeg")' }}
          onClick={() => {
            setCategories(prodCategory.research);
            if (isExpanded) {
              setIsExpanded(false);
            }
          }}
          className="category-item research"
        >
          <div className="item-info">
            <h1 className="lg:text-3xl">Research Equipments & Consumables</h1>
          </div>
        </div>
        <div
          id="coldchain"
          style={{ backgroundImage: 'url("/img4.jpeg")' }}
          onClick={() => {
            setCategories(prodCategory.coldchain);
            if (isExpanded) {
              setIsExpanded(false);
            }
          }}
          className="category-item cold-chain"
        >
          <div className="item-info">
            <h1 className="lg:text-3xl">Cold-chain Management Solutions</h1>
          </div>
        </div>
      </div>
      <div className="products-display">
        {categories.map((subcategory) => (
          <div className="product-category">
            <h2 className="product-subcategory text-2xl">{subcategory}</h2>
            <ProdDisp subcategory={subcategory} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProdDisp({ subcategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData(subcategory) {
      const querySnapshot = await getDocs(collection(db, subcategory));
      const docs = querySnapshot.docs;
      let arr = [];
      let index = 0;
      for (let doc of docs) {
        arr[index] = doc.data();
        arr[index].id = doc.id;
        index++;
      }
      setProducts(arr);
    }
    (async () => {
      await fetchData(subcategory);
      setLoading(false);
    })();
  }, [subcategory]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="product-category-display">
      {products.map((item) => (
        <a
          key={item.id}
          className="product-item-brochure"
          href={item.brochureUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div
            style={{ backgroundImage: `url(${item.imgUrl})` }}
            className="product-item"
          >
            <div className="product-item-info">
              <div className="product-item-name text-medium">{item.title}</div>
              <div className="product-item-company text-sm">{item.company}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Products;
