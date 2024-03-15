import { useColorModeValue } from '@chakra-ui/react';

export default function SupabaseLogo() {
  const fill = useColorModeValue(
    'var(--chakra-colors-gray-600)',
    'var(--chakra-colors-gray-400)'
  );

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 109 113'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
        fill={fill}
      />
      <path
        d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
        fill={fill}
        fillOpacity='0.2'
      />
      <path
        d='M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z'
        fill={fill}
      />
    </svg>
  );
}
