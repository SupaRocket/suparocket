import { useColorModeValue } from '@chakra-ui/react';

export default function ChakraLogo() {
  const fill = useColorModeValue(
    'var(--chakra-colors-gray-600)',
    'var(--chakra-colors-gray-400)'
  );

  const bg = useColorModeValue('#fff', 'var(--chakra-colors-gray-800)');

  return (
    <svg
      width='100%'
      height='100%'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 257 257'
    >
      <rect width='100%' height='100%' rx='128.5' fill={fill} />
      <path
        d='m69.56 133.99 87.59-87c1.64-1.62 4.27.36 3.17 2.38l-32.6 59.76a2 2 0 0 0 1.75 2.95h56.34a2 2 0 0 1 1.36 3.47l-98.72 92.14c-1.78 1.65-4.41-.68-2.99-2.64l46.74-64.47a2 2 0 0 0-1.62-3.18H70.97a2 2 0 0 1-1.41-3.41z'
        fill={bg}
      />
    </svg>
  );
}
