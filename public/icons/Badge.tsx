import { FC } from 'react';

interface BadgeIconProps {
  className?: string;
  size?: number;
}

const BadgeIcon: FC<BadgeIconProps> = ({ className, size = 20 }) => {
  const svgSize = `${size}px`;
  return (
    <svg
      className={className}
      width="73"
      height="70"
      viewBox="0 0 73 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.58457 5.22266C0.199609 4.67578 0 4.01953 0 3.36328C0 1.50391 1.56836 0 3.50742 0H19.0912C20.6881 0 22.1852 0.806641 22.9979 2.11914L32.7645 17.7188C25.8922 18.5527 19.7471 21.6289 15.1703 26.1816L0.58457 5.22266ZM72.4012 5.22266L57.8297 26.1816C53.2529 21.6289 47.1078 18.5527 40.2355 17.7188L50.0022 2.11914C50.8291 0.806641 52.3119 0 53.9088 0H69.4926C71.4316 0 73 1.50391 73 3.36328C73 4.01953 72.8004 4.67578 72.4154 5.22266H72.4012ZM11.4062 45.9375C11.4062 39.5557 14.05 33.4353 18.756 28.9227C23.462 24.4101 29.8447 21.875 36.5 21.875C43.1553 21.875 49.538 24.4101 54.244 28.9227C58.95 33.4353 61.5938 39.5557 61.5938 45.9375C61.5938 52.3193 58.95 58.4397 54.244 62.9523C49.538 67.4649 43.1553 70 36.5 70C29.8447 70 23.462 67.4649 18.756 62.9523C14.05 58.4397 11.4063 52.3193 11.4062 45.9375ZM37.6977 32.9629C37.2129 32.0059 35.8014 32.0059 35.3023 32.9629L32.1086 39.1699C31.909 39.5527 31.5383 39.8125 31.1105 39.8672L23.9531 40.8652C22.8553 41.0156 22.4275 42.3008 23.2117 43.0527L28.3873 47.8926C28.701 48.1934 28.8436 48.6035 28.7723 49.0273L27.5461 55.8496C27.3607 56.8887 28.5014 57.6953 29.4852 57.2031L35.8727 53.9766C36.2576 53.7852 36.7281 53.7852 37.1131 53.9766L43.5006 57.2031C44.4844 57.6953 45.625 56.9023 45.4397 55.8496L44.2135 49.0273C44.1422 48.6172 44.2848 48.1934 44.5984 47.8926L49.774 43.0527C50.5725 42.3145 50.1305 41.0293 49.0326 40.8652L41.8895 39.8672C41.4617 39.8125 41.0768 39.5391 40.8914 39.1699L37.6977 32.9629Z"
        fill="#17A8B4"
      />
    </svg>
  );
};

export { BadgeIcon };
