"use client"
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";
import Testimonials from "./_components/Testimonials";
import FAQ from "./_components/FAQ";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, [])

  /**
   * Used to get All Category List
   */
  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories);
    })
  }

  /**
   * Used to get All Business List
   */
  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then(resp => {
      setBusinessList(resp.businessLists)
    })
  }

  return (
    <div className="pb-10">
      <Hero />

      <div className="my-8">
        <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center">
          Browse by <span className="text-primary">Category</span>
        </h2>
        <CategoryList categoryList={categoryList} />
      </div>

      <BusinessList 
        businessList={businessList}
        title={'Popular Services'} 
      />

      <Testimonials />

      <FAQ />
    </div>
  );
}
