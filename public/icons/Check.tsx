import { FC } from 'react';

interface CheckIconProps {
  className?: string;
  size?: number;
}

const CheckIcon: FC<CheckIconProps> = ({ className, size = 20 }) => {
  const svgSize = `${size}px`;
  return (
    <svg
      className={className}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 44 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 4.6346C26.7407 4.6346 31.2873 6.75052 34.6395 10.5169C37.9917 14.2832 39.875 19.3915 39.875 24.7179C39.875 30.0443 37.9917 35.1526 34.6395 38.9189C31.2873 42.6853 26.7407 44.8012 22 44.8012C17.2593 44.8012 12.7127 42.6853 9.36047 38.9189C6.00825 35.1526 4.125 30.0443 4.125 24.7179C4.125 19.3915 6.00825 14.2832 9.36047 10.5169C12.7127 6.75052 17.2593 4.6346 22 4.6346ZM22 49.4358C27.8348 49.4358 33.4305 46.8316 37.5564 42.1961C41.6822 37.5606 44 31.2735 44 24.7179C44 18.1623 41.6822 11.8752 37.5564 7.2397C33.4305 2.6042 27.8348 0 22 0C16.1652 0 10.5695 2.6042 6.44365 7.2397C2.31785 11.8752 0 18.1623 0 24.7179C0 31.2735 2.31785 37.5606 6.44365 42.1961C10.5695 46.8316 16.1652 49.4358 22 49.4358ZM31.7109 20.1798C32.5187 19.2722 32.5187 17.8046 31.7109 16.9067C30.9031 16.0087 29.5969 15.999 28.7977 16.9067L19.2586 27.6242L15.2195 23.0861C14.4117 22.1785 13.1055 22.1785 12.3062 23.0861C11.507 23.9937 11.4984 25.4614 12.3062 26.3593L17.8062 32.5388C18.6141 33.4464 19.9203 33.4464 20.7195 32.5388L31.7109 20.1798Z"
        fill="#17A8B4"
      />
    </svg>
  );
};

export { CheckIcon };
