import { seoConfig } from '../config/seo';

export type OpenGraphType = 'website' | 'article' | 'profile';
export type PageSchemaType =
  | 'WebPage'
  | 'ProfilePage'
  | 'CollectionPage'
  | 'ItemPage'
  | 'AboutPage'
  | 'ContactPage';

export type StructuredData = Record<string, unknown>;

export interface SeoImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: string;
}

export interface SeoProps {
  title?: string;
  titleTemplate?: boolean;
  description?: string;
  canonical?: string | URL;
  image?: SeoImage;
  type?: OpenGraphType;
  pageSchemaType?: PageSchemaType;
  noindex?: boolean;
  nofollow?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: readonly string[];
  prev?: string;
  next?: string;
  mainEntityId?: string;
  structuredData?: StructuredData | readonly StructuredData[];
}

export const toAbsoluteUrl = (value: string | URL, base = seoConfig.site.url) =>
  new URL(value, base).href;

export const seoIds = {
  person: toAbsoluteUrl('/#person'),
  website: toAbsoluteUrl('/#website'),
} as const;

export const createBreadcrumbSchema = (
  items: readonly { name: string; url: string }[],
): StructuredData => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.url),
  })),
});

export const createArticleSchema = ({
  title,
  description,
  path,
  publishedAt,
  tags,
  image,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  tags: readonly string[];
  image?: string | null;
}): StructuredData => {
  const url = toAbsoluteUrl(path);

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    url,
    headline: title,
    description,
    datePublished: publishedAt,
    inLanguage: seoConfig.site.languageTag,
    author: { '@id': seoIds.person },
    publisher: { '@id': seoIds.person },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    ...(tags.length > 0 && { keywords: tags.join(', ') }),
    ...(image && { image: toAbsoluteUrl(image) }),
  };
};

export const createProjectSchema = ({
  title,
  description,
  path,
  category,
  stack,
  externalUrls,
}: {
  title: string;
  description: string;
  path: string;
  category: string;
  stack: readonly string[];
  externalUrls: readonly string[];
}): StructuredData => {
  const url = toAbsoluteUrl(path);

  return {
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    url,
    name: title,
    description,
    genre: category,
    inLanguage: seoConfig.site.languageTag,
    creator: { '@id': seoIds.person },
    keywords: stack.join(', '),
    mainEntityOfPage: { '@id': `${url}#webpage` },
    ...(externalUrls.length > 0 && { sameAs: externalUrls }),
  };
};

export const createItemListSchema = (
  items: readonly { name: string; url: string }[],
): StructuredData => ({
  '@type': 'ItemList',
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: toAbsoluteUrl(item.url),
  })),
});
