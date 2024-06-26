import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import ProductShowcase from '../ProductShowcase/ProductShowcase';

describe('Given a ProductShowcase component', () => {
  const product = {
    title: 'Summer Weight Loss',
    imageUrl: '/images/ebook.svg',
    description: 'A Guide for Women for Effective Weight Loss',
  };

  describe('When it is rendered', () => {
    test('Then it should show product information and special price details', () => {
      render(<ProductShowcase product={product} />);

      const productTitle = screen.getByText('Summer Weight Loss');
      expect(productTitle).toBeTruthy();

      const guideText = screen.getByText(
        'A Guide for Women for Effective Weight Loss'
      );
      expect(guideText).toBeTruthy();

      const specialOfferText = screen.getByText('Special offer!');
      expect(specialOfferText).toBeTruthy();

      const benefitsList = [
        'Embrace the Benefits of Tailored Guidance for Women on Your Wellness Journey!',
        'Discover Dietary Strategies, Effective Exercises, and the Secrets of the Mediterranean Diet.',
        'Gain Tools to Stay Motivated and Overcome Obstacles for a Healthier, Balanced Lifestyle.',
        'Experience the transformative potential of this book and become the best version of yourself!',
        'Empower yourself this summer with our weight loss plan designed for women, achieve your goals in a sustainable and healthy way!',
        'Immerse yourself in the pages of this book and awaken your hidden potential.',
      ];
      benefitsList.forEach((benefit) => {
        const benefitItem = screen.getByText(benefit);
        expect(benefitItem).toBeTruthy();
      });

      const programValueText = screen.getByText('Program value');
      expect(programValueText).toBeTruthy();
      const oldPrice = screen.getByText('$20.99');
      const limitedTimeOfferText = screen.getByText('Limited time offer');
      const salePrice = screen.getByText('$14.99');

      expect(oldPrice).toBeTruthy();
      expect(limitedTimeOfferText).toBeTruthy();
      expect(salePrice).toBeTruthy();

      const buyNowButton = screen.getByRole('button', { name: /buy now/i });
      expect(buyNowButton).toBeTruthy();

      const freeDownloadButton = screen.getByRole('button', {
        name: /free download/i,
      });
      expect(freeDownloadButton).toBeTruthy();
    });

    test('Then the Buy Now button should open the correct URL in a new tab', () => {
      window.open = vi.fn();

      render(<ProductShowcase product={product} />);

      const buyNowButton = screen.getByRole('button', { name: /buy now/i });
      fireEvent.click(buyNowButton);

      expect(window.open).toHaveBeenCalledWith(
        'https://whop.com/checkout/4JuynWz2Y1T772UQed-SG79-35MO-O9wh-1m6cD0wispgn/',
        '_blank'
      );
    });

    test('Then the Free Download button should open the correct URL in a new tab', () => {
      window.open = vi.fn();

      render(<ProductShowcase product={product} />);

      const freeDownloadButton = screen.getByRole('button', {
        name: /free download/i,
      });
      fireEvent.click(freeDownloadButton);

      expect(window.open).toHaveBeenCalledWith(
        'https://rb.gy/bg5jer',
        '_blank'
      );
    });
  });
});
