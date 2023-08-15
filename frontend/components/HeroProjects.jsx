"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
export default function HeroProjects() {
  return (
    <>
      <section className="min-h-screen p-10 bg-base-200">
        <div className="container px-6 m-auto items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}>
            <h1 className="text-5xl font-bold text-center pb-10 text-5xl font-bold text-center bg-gradient-to-r from-emerald-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
              Projects
            </h1>
          </motion.div>

          {/*<!-- Component: Alternative Changelog feed --> */}

          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/ebumdes.webp"
                link="http://ebumdes.enrico.free.nf"
                title="E-BUMDes"
                tech="8.99"
                description="Web dashboard application to input finance data of company owned by village government in Lampung."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/cat-dog.webp"
                link="https://www.kaggle.com/code/enricofindley/cat-dog-classification-using-cnn"
                title="Cat & Dog Classification"
                tech="8.99"
                description="Classifying cat and dog image using Convolutional Neural Network (CNN)."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/books.webp"
                link="https://www.kaggle.com/code/enricofindley/books-recommendation-using-knn"
                title="Books Recommendation"
                tech="8.99"
                description="Books recommendation using K-Nearest Neighbor algorithm."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/sms.webp"
                link="https://www.kaggle.com/code/enricofindley/sms-text-classification-using-bidirectional-lstm"
                title="SMS Text Classification"
                tech="8.99"
                description="Classifying SMS text using Bi-directional LSTM (Long-Short Term Memory)."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/health.webp"
                link="https://www.kaggle.com/code/enricofindley/health-costs-prediction-with-regression"
                title="Health Costs Prediction"
                tech="8.99"
                description="Health costs prediction with dense NN (Neural Network)."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/wine.webp"
                link="https://www.kaggle.com/code/enricofindley/red-wine-quality-prediction-using-regression-tree"
                title="Red Wine Quality Prediction"
                tech="8.99"
                description="Red wine quality prediction using Regression Tree."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/stock.webp"
                link="https://www.kaggle.com/code/enricofindley/stock-and-revenue-analysis"
                title="Stock and Revenue Analysis"
                tech="8.99"
                description="Tesla and GameStop stock and revenue analysis."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/house.webp"
                link="https://www.kaggle.com/code/enricofindley/house-sales-in-king-county-usa-data-analysis"
                title="House Sales Analysis"
                tech="8.99"
                description="House sales in King County, USA data analysis."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/rain.webp"
                link="https://www.kaggle.com/enricofindley/rain-prediction-in-australia"
                title="Rain Prediction in Australia"
                tech="8.99"
                description="Predicting rain in Australia using Logistic Regression, Linear Regression, KNN, Decision Tree, and SVM."
              />
            </div>
            <div className="col-span-4 lg:col-span-3">
              <Card
                imageUrl="/chicago.webp"
                link="https://www.kaggle.com/enricofindley/chicago-etl-using-sqlite"
                title="Chicago ETL using SQLite"
                tech="8.99"
                description="Doing Extract, Transform, and Load (ETL) process using SQLite."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
