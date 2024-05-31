'use client';

import React from 'react';
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import { BadgeIcon } from '../../../public/icons/Badge';
import { CheckIcon } from '../../../public/icons/Check';
import { ShoppingIcon } from '../../../public/icons/Shopping-cart';

interface Product {
  title: string;
  imageUrl: string;
  description: string;
}

interface ProductShowcaseProps {
  product: Product;
  onBuyNowClick?: () => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onBuyNowClick }) => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 4);

  const handleBuyNowClick = () => {
    if (onBuyNowClick) {
      onBuyNowClick();
    } else {
      window.open('https://whop.com/hub/mindbody/', '_blank');
    }
  };

  return (
    <section
      id="product-section"
      className="bg-main-bg-color p-5 shadow-md rounded-lg text-center text-white pt-2"
    >
      <h1 className="text-main-title text-3xl font-bold sm:text-4xl mt-2">
        Summer Weight Loss
      </h1>
      <h2 className="text-xl font-semibold text-main-title mt-1 mb-2 sm:text-2xl">
        A Guide for Women for Effective Weight Loss
      </h2>
      <div className="flex justify-center mt-4">
        <Image
          src="/images/ebook.svg"
          alt="ebook cover"
          width={300}
          height={100}
          className="mt-4 lg:mt-0"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <p className="text-paragraph text-2xl font-semibold mt-5">
        What&apos;s inside?
      </p>
      <span className="flex flex-col items-center justify-center mt-4">
        <BadgeIcon className="w-10 h-10 text-paragraph" />
        <span className="text-main-title font-semibold text-2xl mt-2">
          Unlock Your Potential: Empower Your Mind with Knowledge!
        </span>
      </span>
      <div className="bg-main-bg-color text-color p-5 shadow-md rounded-lg mt-5 max-w-4xl mx-auto lg:flex lg:justify-center lg:items-center">
        <ul className="list-none p-0 m-0 space-y-4 flex flex-col items-start justify-center w-full lg:w-3/4">
          {[
            'Embrace the Benefits of Tailored Guidance for Women on Your Wellness Journey!',
            'Discover Dietary Strategies, Effective Exercises, and the Secrets of the Mediterranean Diet.',
            'Gain Tools to Stay Motivated and Overcome Obstacles for a Healthier, Balanced Lifestyle.',
            'Experience the transformative potential of this book and become the best version of yourself!',
            'Empower yourself this summer with our weight loss plan designed for women, achieve your goals in a sustainable and healthy way!',
            'Immerse yourself in the pages of this book and awaken your hidden potential.',
          ].map((text, index) => (
            <li key={index} className="flex items-center justify-start w-full">
              <CheckIcon className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
              <span className="text-left">{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 text-center">
        <span className="text-offer text-4xl font-semibold sm:text-lg uppercase">
          Special offer!
        </span>
        <div>
          <span className="block text-offer text-2xl leading-relaxed sm:text-lg">
            Program value
          </span>
          <div className="flex items-baseline justify-center">
            <span className="text-gray text-2xl font-medium line-through ml-2">
              $20.99
            </span>
          </div>
          <span className="block text-offer text-2xl leading-relaxed sm:text-lg mt-2">
            Limited time offer
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-main-title text-2xl font-semibold sm:text-2xl md:text-xl mt-0">
            <CountdownTimer targetDate={targetDate} />
          </div>
          <span className="text-5xl text-red-500 font-semibold sm:text-3xl mt-4">
            $14.99
          </span>
        </div>
        <button
          onClick={handleBuyNowClick}
          className="bg-paragraph hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center justify-center mt-2 transition duration-300 ease-in-out text-xxs sm:text-xs"
        >
          <ShoppingIcon className="hidden sm:inline mr-2 text-white h-6 w-6 sm:h-4 sm:w-4" />
          <span>Buy Now</span>
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
