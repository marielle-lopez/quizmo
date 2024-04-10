import { decode } from 'html-entities';

export const convertHtmlEntities = (input: string): string => {
  const htmlEntities: string[] = input.match(/&[#a-zA-Z0-9]+;/g) || [];

  htmlEntities.map(
    (htmlEntity) => (input = input.replace(htmlEntity, decode(htmlEntity)))
  );

  return input;
};
