/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly flags: Maybe<SiteFlags>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteFlags = {
  readonly FAST_DEV: Maybe<Scalars['Boolean']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  readonly fluid: Maybe<ContentfulFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp';

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ContentfulImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulCategory = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly icon: Maybe<ContentfulAsset>;
  readonly heroImage: Maybe<ContentfulAsset>;
  readonly product: Maybe<ReadonlyArray<Maybe<ContentfulProduct>>>;
  readonly title: Maybe<contentfulCategoryTitleTextNode>;
  readonly categoryDescription: Maybe<contentfulCategoryCategoryDescriptionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulCategorySys>;
  /** Returns all children nodes filtered by type contentfulCategoryCategoryDescriptionTextNode */
  readonly childrenContentfulCategoryCategoryDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulCategoryCategoryDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulCategoryCategoryDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulCategoryCategoryDescriptionTextNode: Maybe<contentfulCategoryCategoryDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulCategoryTitleTextNode */
  readonly childrenContentfulCategoryTitleTextNode: Maybe<ReadonlyArray<Maybe<contentfulCategoryTitleTextNode>>>;
  /** Returns the first child node of type contentfulCategoryTitleTextNode or null if there are no children of given type on this node */
  readonly childContentfulCategoryTitleTextNode: Maybe<contentfulCategoryTitleTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulCategory_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulCategory_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulCategorySys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulCategorySysContentType>;
};

type ContentfulCategorySysContentType = {
  readonly sys: Maybe<ContentfulCategorySysContentTypeSys>;
};

type ContentfulCategorySysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulBrand = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly website: Maybe<Scalars['String']>;
  readonly product: Maybe<ReadonlyArray<Maybe<ContentfulProduct>>>;
  readonly companyName: Maybe<contentfulBrandCompanyNameTextNode>;
  readonly companyDescription: Maybe<contentfulBrandCompanyDescriptionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulBrandSys>;
  readonly email: Maybe<Scalars['String']>;
  readonly phone: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly twitter: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulBrandCompanyDescriptionTextNode */
  readonly childrenContentfulBrandCompanyDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulBrandCompanyDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulBrandCompanyDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulBrandCompanyDescriptionTextNode: Maybe<contentfulBrandCompanyDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulBrandCompanyNameTextNode */
  readonly childrenContentfulBrandCompanyNameTextNode: Maybe<ReadonlyArray<Maybe<contentfulBrandCompanyNameTextNode>>>;
  /** Returns the first child node of type contentfulBrandCompanyNameTextNode or null if there are no children of given type on this node */
  readonly childContentfulBrandCompanyNameTextNode: Maybe<contentfulBrandCompanyNameTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulBrand_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBrand_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulBrandSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulBrandSysContentType>;
};

type ContentfulBrandSysContentType = {
  readonly sys: Maybe<ContentfulBrandSysContentTypeSys>;
};

type ContentfulBrandSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulProduct = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly slug: Maybe<Scalars['String']>;
  readonly sizetypecolor: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly price: Maybe<Scalars['Int']>;
  readonly quantity: Maybe<Scalars['Int']>;
  readonly sku: Maybe<Scalars['String']>;
  readonly website: Maybe<Scalars['String']>;
  readonly categories: Maybe<ReadonlyArray<Maybe<ContentfulCategory>>>;
  readonly brand: Maybe<ContentfulBrand>;
  readonly productName: Maybe<contentfulProductProductNameTextNode>;
  readonly productDescription: Maybe<contentfulProductProductDescriptionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulProductSys>;
  /** Returns all children nodes filtered by type contentfulProductProductDescriptionTextNode */
  readonly childrenContentfulProductProductDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulProductProductDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulProductProductDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulProductProductDescriptionTextNode: Maybe<contentfulProductProductDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulProductProductNameTextNode */
  readonly childrenContentfulProductProductNameTextNode: Maybe<ReadonlyArray<Maybe<contentfulProductProductNameTextNode>>>;
  /** Returns the first child node of type contentfulProductProductNameTextNode or null if there are no children of given type on this node */
  readonly childContentfulProductProductNameTextNode: Maybe<contentfulProductProductNameTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulProduct_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulProduct_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulProductSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulProductSysContentType>;
};

type ContentfulProductSysContentType = {
  readonly sys: Maybe<ContentfulProductSysContentTypeSys>;
};

type ContentfulProductSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPage = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly subheading: Maybe<contentfulPageSubheadingTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPageSys>;
  /** Returns all children nodes filtered by type contentfulPageSubheadingTextNode */
  readonly childrenContentfulPageSubheadingTextNode: Maybe<ReadonlyArray<Maybe<contentfulPageSubheadingTextNode>>>;
  /** Returns the first child node of type contentfulPageSubheadingTextNode or null if there are no children of given type on this node */
  readonly childContentfulPageSubheadingTextNode: Maybe<contentfulPageSubheadingTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPage_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPage_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPageSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPageSysContentType>;
};

type ContentfulPageSysContentType = {
  readonly sys: Maybe<ContentfulPageSysContentTypeSys>;
};

type ContentfulPageSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type contentfulPageSubheadingTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly subheading: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPageSubheadingTextNodeSys>;
};

type contentfulPageSubheadingTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulProductProductDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly productDescription: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulProductProductDescriptionTextNodeSys>;
};

type contentfulProductProductDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulProductProductNameTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly productName: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulProductProductNameTextNodeSys>;
};

type contentfulProductProductNameTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBrandCompanyDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly companyDescription: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBrandCompanyDescriptionTextNodeSys>;
};

type contentfulBrandCompanyDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBrandCompanyNameTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly companyName: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBrandCompanyNameTextNodeSys>;
};

type contentfulBrandCompanyNameTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulCategoryCategoryDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly categoryDescription: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulCategoryCategoryDescriptionTextNodeSys>;
};

type contentfulCategoryCategoryDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulCategoryTitleTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulCategoryTitleTextNodeSys>;
};

type contentfulCategoryTitleTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly accessToken: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_schema_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulCategory: Maybe<ContentfulCategory>;
  readonly allContentfulCategory: ContentfulCategoryConnection;
  readonly contentfulBrand: Maybe<ContentfulBrand>;
  readonly allContentfulBrand: ContentfulBrandConnection;
  readonly contentfulProduct: Maybe<ContentfulProduct>;
  readonly allContentfulProduct: ContentfulProductConnection;
  readonly contentfulPage: Maybe<ContentfulPage>;
  readonly allContentfulPage: ContentfulPageConnection;
  readonly contentfulPageSubheadingTextNode: Maybe<contentfulPageSubheadingTextNode>;
  readonly allContentfulPageSubheadingTextNode: contentfulPageSubheadingTextNodeConnection;
  readonly contentfulProductProductDescriptionTextNode: Maybe<contentfulProductProductDescriptionTextNode>;
  readonly allContentfulProductProductDescriptionTextNode: contentfulProductProductDescriptionTextNodeConnection;
  readonly contentfulProductProductNameTextNode: Maybe<contentfulProductProductNameTextNode>;
  readonly allContentfulProductProductNameTextNode: contentfulProductProductNameTextNodeConnection;
  readonly contentfulBrandCompanyDescriptionTextNode: Maybe<contentfulBrandCompanyDescriptionTextNode>;
  readonly allContentfulBrandCompanyDescriptionTextNode: contentfulBrandCompanyDescriptionTextNodeConnection;
  readonly contentfulBrandCompanyNameTextNode: Maybe<contentfulBrandCompanyNameTextNode>;
  readonly allContentfulBrandCompanyNameTextNode: contentfulBrandCompanyNameTextNodeConnection;
  readonly contentfulCategoryCategoryDescriptionTextNode: Maybe<contentfulCategoryCategoryDescriptionTextNode>;
  readonly allContentfulCategoryCategoryDescriptionTextNode: contentfulCategoryCategoryDescriptionTextNodeConnection;
  readonly contentfulCategoryTitleTextNode: Maybe<contentfulCategoryTitleTextNode>;
  readonly allContentfulCategoryTitleTextNode: contentfulCategoryTitleTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulCategoryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  icon: Maybe<ContentfulAssetFilterInput>;
  heroImage: Maybe<ContentfulAssetFilterInput>;
  product: Maybe<ContentfulProductFilterListInput>;
  title: Maybe<contentfulCategoryTitleTextNodeFilterInput>;
  categoryDescription: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulCategorySysFilterInput>;
  childrenContentfulCategoryCategoryDescriptionTextNode: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterListInput>;
  childContentfulCategoryCategoryDescriptionTextNode: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterInput>;
  childrenContentfulCategoryTitleTextNode: Maybe<contentfulCategoryTitleTextNodeFilterListInput>;
  childContentfulCategoryTitleTextNode: Maybe<contentfulCategoryTitleTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulCategoryArgs = {
  filter: Maybe<ContentfulCategoryFilterInput>;
  sort: Maybe<ContentfulCategorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBrandArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  website: Maybe<StringQueryOperatorInput>;
  product: Maybe<ContentfulProductFilterListInput>;
  companyName: Maybe<contentfulBrandCompanyNameTextNodeFilterInput>;
  companyDescription: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulBrandSysFilterInput>;
  email: Maybe<StringQueryOperatorInput>;
  phone: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  childrenContentfulBrandCompanyDescriptionTextNode: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterListInput>;
  childContentfulBrandCompanyDescriptionTextNode: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterInput>;
  childrenContentfulBrandCompanyNameTextNode: Maybe<contentfulBrandCompanyNameTextNodeFilterListInput>;
  childContentfulBrandCompanyNameTextNode: Maybe<contentfulBrandCompanyNameTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulBrandArgs = {
  filter: Maybe<ContentfulBrandFilterInput>;
  sort: Maybe<ContentfulBrandSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulProductArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  sizetypecolor: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  price: Maybe<IntQueryOperatorInput>;
  quantity: Maybe<IntQueryOperatorInput>;
  sku: Maybe<StringQueryOperatorInput>;
  website: Maybe<StringQueryOperatorInput>;
  categories: Maybe<ContentfulCategoryFilterListInput>;
  brand: Maybe<ContentfulBrandFilterInput>;
  productName: Maybe<contentfulProductProductNameTextNodeFilterInput>;
  productDescription: Maybe<contentfulProductProductDescriptionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulProductSysFilterInput>;
  childrenContentfulProductProductDescriptionTextNode: Maybe<contentfulProductProductDescriptionTextNodeFilterListInput>;
  childContentfulProductProductDescriptionTextNode: Maybe<contentfulProductProductDescriptionTextNodeFilterInput>;
  childrenContentfulProductProductNameTextNode: Maybe<contentfulProductProductNameTextNodeFilterListInput>;
  childContentfulProductProductNameTextNode: Maybe<contentfulProductProductNameTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulProductArgs = {
  filter: Maybe<ContentfulProductFilterInput>;
  sort: Maybe<ContentfulProductSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  subheading: Maybe<contentfulPageSubheadingTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPageSysFilterInput>;
  childrenContentfulPageSubheadingTextNode: Maybe<contentfulPageSubheadingTextNodeFilterListInput>;
  childContentfulPageSubheadingTextNode: Maybe<contentfulPageSubheadingTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPageArgs = {
  filter: Maybe<ContentfulPageFilterInput>;
  sort: Maybe<ContentfulPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageSubheadingTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  subheading: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPageSubheadingTextNodeSysFilterInput>;
};


type Query_allContentfulPageSubheadingTextNodeArgs = {
  filter: Maybe<contentfulPageSubheadingTextNodeFilterInput>;
  sort: Maybe<contentfulPageSubheadingTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulProductProductDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  productDescription: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulProductProductDescriptionTextNodeSysFilterInput>;
};


type Query_allContentfulProductProductDescriptionTextNodeArgs = {
  filter: Maybe<contentfulProductProductDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulProductProductDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulProductProductNameTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  productName: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulProductProductNameTextNodeSysFilterInput>;
};


type Query_allContentfulProductProductNameTextNodeArgs = {
  filter: Maybe<contentfulProductProductNameTextNodeFilterInput>;
  sort: Maybe<contentfulProductProductNameTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBrandCompanyDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  companyDescription: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBrandCompanyDescriptionTextNodeSysFilterInput>;
};


type Query_allContentfulBrandCompanyDescriptionTextNodeArgs = {
  filter: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulBrandCompanyDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBrandCompanyNameTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  companyName: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBrandCompanyNameTextNodeSysFilterInput>;
};


type Query_allContentfulBrandCompanyNameTextNodeArgs = {
  filter: Maybe<contentfulBrandCompanyNameTextNodeFilterInput>;
  sort: Maybe<contentfulBrandCompanyNameTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulCategoryCategoryDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  categoryDescription: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulCategoryCategoryDescriptionTextNodeSysFilterInput>;
};


type Query_allContentfulCategoryCategoryDescriptionTextNodeArgs = {
  filter: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulCategoryCategoryDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulCategoryTitleTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulCategoryTitleTextNodeSysFilterInput>;
};


type Query_allContentfulCategoryTitleTextNodeArgs = {
  filter: Maybe<contentfulCategoryTitleTextNodeFilterInput>;
  sort: Maybe<contentfulCategoryTitleTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteFlagsFilterInput = {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'flags.FAST_DEV'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_schema_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.accessToken'
  | 'pluginCreator.pluginOptions.spaceId'
  | 'pluginCreator.pluginOptions.host'
  | 'pluginCreator.pluginOptions.environment'
  | 'pluginCreator.pluginOptions.downloadLocal'
  | 'pluginCreator.pluginOptions.forceFullSync'
  | 'pluginCreator.pluginOptions.pageLimit'
  | 'pluginCreator.pluginOptions.assetDownloadWorkers'
  | 'pluginCreator.pluginOptions.useNameForId'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'gatsbyImageData'
  | 'resize.base64'
  | 'resize.tracedSVG'
  | 'resize.src'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulProductFilterListInput = {
  readonly elemMatch: Maybe<ContentfulProductFilterInput>;
};

type ContentfulProductFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly sizetypecolor: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly price: Maybe<IntQueryOperatorInput>;
  readonly quantity: Maybe<IntQueryOperatorInput>;
  readonly sku: Maybe<StringQueryOperatorInput>;
  readonly website: Maybe<StringQueryOperatorInput>;
  readonly categories: Maybe<ContentfulCategoryFilterListInput>;
  readonly brand: Maybe<ContentfulBrandFilterInput>;
  readonly productName: Maybe<contentfulProductProductNameTextNodeFilterInput>;
  readonly productDescription: Maybe<contentfulProductProductDescriptionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulProductSysFilterInput>;
  readonly childrenContentfulProductProductDescriptionTextNode: Maybe<contentfulProductProductDescriptionTextNodeFilterListInput>;
  readonly childContentfulProductProductDescriptionTextNode: Maybe<contentfulProductProductDescriptionTextNodeFilterInput>;
  readonly childrenContentfulProductProductNameTextNode: Maybe<contentfulProductProductNameTextNodeFilterListInput>;
  readonly childContentfulProductProductNameTextNode: Maybe<contentfulProductProductNameTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulCategoryFilterListInput = {
  readonly elemMatch: Maybe<ContentfulCategoryFilterInput>;
};

type ContentfulCategoryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<ContentfulAssetFilterInput>;
  readonly heroImage: Maybe<ContentfulAssetFilterInput>;
  readonly product: Maybe<ContentfulProductFilterListInput>;
  readonly title: Maybe<contentfulCategoryTitleTextNodeFilterInput>;
  readonly categoryDescription: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulCategorySysFilterInput>;
  readonly childrenContentfulCategoryCategoryDescriptionTextNode: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterListInput>;
  readonly childContentfulCategoryCategoryDescriptionTextNode: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterInput>;
  readonly childrenContentfulCategoryTitleTextNode: Maybe<contentfulCategoryTitleTextNodeFilterListInput>;
  readonly childContentfulCategoryTitleTextNode: Maybe<contentfulCategoryTitleTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulCategoryTitleTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulCategoryTitleTextNodeSysFilterInput>;
};

type contentfulCategoryTitleTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulCategoryCategoryDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly categoryDescription: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulCategoryCategoryDescriptionTextNodeSysFilterInput>;
};

type contentfulCategoryCategoryDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulCategorySysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulCategorySysContentTypeFilterInput>;
};

type ContentfulCategorySysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

type ContentfulCategorySysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulCategoryCategoryDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulCategoryCategoryDescriptionTextNodeFilterInput>;
};

type contentfulCategoryTitleTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulCategoryTitleTextNodeFilterInput>;
};

type ContentfulBrandFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly website: Maybe<StringQueryOperatorInput>;
  readonly product: Maybe<ContentfulProductFilterListInput>;
  readonly companyName: Maybe<contentfulBrandCompanyNameTextNodeFilterInput>;
  readonly companyDescription: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulBrandSysFilterInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly phone: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly childrenContentfulBrandCompanyDescriptionTextNode: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterListInput>;
  readonly childContentfulBrandCompanyDescriptionTextNode: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterInput>;
  readonly childrenContentfulBrandCompanyNameTextNode: Maybe<contentfulBrandCompanyNameTextNodeFilterListInput>;
  readonly childContentfulBrandCompanyNameTextNode: Maybe<contentfulBrandCompanyNameTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulBrandCompanyNameTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly companyName: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBrandCompanyNameTextNodeSysFilterInput>;
};

type contentfulBrandCompanyNameTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulBrandCompanyDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly companyDescription: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBrandCompanyDescriptionTextNodeSysFilterInput>;
};

type contentfulBrandCompanyDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulBrandSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulBrandSysContentTypeFilterInput>;
};

type ContentfulBrandSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulBrandSysContentTypeSysFilterInput>;
};

type ContentfulBrandSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulBrandCompanyDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBrandCompanyDescriptionTextNodeFilterInput>;
};

type contentfulBrandCompanyNameTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBrandCompanyNameTextNodeFilterInput>;
};

type contentfulProductProductNameTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly productName: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulProductProductNameTextNodeSysFilterInput>;
};

type contentfulProductProductNameTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulProductProductDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly productDescription: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulProductProductDescriptionTextNodeSysFilterInput>;
};

type contentfulProductProductDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulProductSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulProductSysContentTypeFilterInput>;
};

type ContentfulProductSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulProductSysContentTypeSysFilterInput>;
};

type ContentfulProductSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulProductProductDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulProductProductDescriptionTextNodeFilterInput>;
};

type contentfulProductProductNameTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulProductProductNameTextNodeFilterInput>;
};

type ContentfulCategoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulCategoryGroupConnection>;
};


type ContentfulCategoryConnection_distinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


type ContentfulCategoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

type ContentfulCategoryEdge = {
  readonly next: Maybe<ContentfulCategory>;
  readonly node: ContentfulCategory;
  readonly previous: Maybe<ContentfulCategory>;
};

type ContentfulCategoryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'icon.contentful_id'
  | 'icon.id'
  | 'icon.spaceId'
  | 'icon.createdAt'
  | 'icon.updatedAt'
  | 'icon.file.url'
  | 'icon.file.details.size'
  | 'icon.file.fileName'
  | 'icon.file.contentType'
  | 'icon.title'
  | 'icon.description'
  | 'icon.node_locale'
  | 'icon.sys.type'
  | 'icon.sys.revision'
  | 'icon.fixed.base64'
  | 'icon.fixed.tracedSVG'
  | 'icon.fixed.aspectRatio'
  | 'icon.fixed.width'
  | 'icon.fixed.height'
  | 'icon.fixed.src'
  | 'icon.fixed.srcSet'
  | 'icon.fixed.srcWebp'
  | 'icon.fixed.srcSetWebp'
  | 'icon.fluid.base64'
  | 'icon.fluid.tracedSVG'
  | 'icon.fluid.aspectRatio'
  | 'icon.fluid.src'
  | 'icon.fluid.srcSet'
  | 'icon.fluid.srcWebp'
  | 'icon.fluid.srcSetWebp'
  | 'icon.fluid.sizes'
  | 'icon.gatsbyImageData'
  | 'icon.resize.base64'
  | 'icon.resize.tracedSVG'
  | 'icon.resize.src'
  | 'icon.resize.width'
  | 'icon.resize.height'
  | 'icon.resize.aspectRatio'
  | 'icon.parent.id'
  | 'icon.parent.parent.id'
  | 'icon.parent.parent.children'
  | 'icon.parent.children'
  | 'icon.parent.children.id'
  | 'icon.parent.children.children'
  | 'icon.parent.internal.content'
  | 'icon.parent.internal.contentDigest'
  | 'icon.parent.internal.description'
  | 'icon.parent.internal.fieldOwners'
  | 'icon.parent.internal.ignoreType'
  | 'icon.parent.internal.mediaType'
  | 'icon.parent.internal.owner'
  | 'icon.parent.internal.type'
  | 'icon.children'
  | 'icon.children.id'
  | 'icon.children.parent.id'
  | 'icon.children.parent.children'
  | 'icon.children.children'
  | 'icon.children.children.id'
  | 'icon.children.children.children'
  | 'icon.children.internal.content'
  | 'icon.children.internal.contentDigest'
  | 'icon.children.internal.description'
  | 'icon.children.internal.fieldOwners'
  | 'icon.children.internal.ignoreType'
  | 'icon.children.internal.mediaType'
  | 'icon.children.internal.owner'
  | 'icon.children.internal.type'
  | 'icon.internal.content'
  | 'icon.internal.contentDigest'
  | 'icon.internal.description'
  | 'icon.internal.fieldOwners'
  | 'icon.internal.ignoreType'
  | 'icon.internal.mediaType'
  | 'icon.internal.owner'
  | 'icon.internal.type'
  | 'heroImage.contentful_id'
  | 'heroImage.id'
  | 'heroImage.spaceId'
  | 'heroImage.createdAt'
  | 'heroImage.updatedAt'
  | 'heroImage.file.url'
  | 'heroImage.file.details.size'
  | 'heroImage.file.fileName'
  | 'heroImage.file.contentType'
  | 'heroImage.title'
  | 'heroImage.description'
  | 'heroImage.node_locale'
  | 'heroImage.sys.type'
  | 'heroImage.sys.revision'
  | 'heroImage.fixed.base64'
  | 'heroImage.fixed.tracedSVG'
  | 'heroImage.fixed.aspectRatio'
  | 'heroImage.fixed.width'
  | 'heroImage.fixed.height'
  | 'heroImage.fixed.src'
  | 'heroImage.fixed.srcSet'
  | 'heroImage.fixed.srcWebp'
  | 'heroImage.fixed.srcSetWebp'
  | 'heroImage.fluid.base64'
  | 'heroImage.fluid.tracedSVG'
  | 'heroImage.fluid.aspectRatio'
  | 'heroImage.fluid.src'
  | 'heroImage.fluid.srcSet'
  | 'heroImage.fluid.srcWebp'
  | 'heroImage.fluid.srcSetWebp'
  | 'heroImage.fluid.sizes'
  | 'heroImage.gatsbyImageData'
  | 'heroImage.resize.base64'
  | 'heroImage.resize.tracedSVG'
  | 'heroImage.resize.src'
  | 'heroImage.resize.width'
  | 'heroImage.resize.height'
  | 'heroImage.resize.aspectRatio'
  | 'heroImage.parent.id'
  | 'heroImage.parent.parent.id'
  | 'heroImage.parent.parent.children'
  | 'heroImage.parent.children'
  | 'heroImage.parent.children.id'
  | 'heroImage.parent.children.children'
  | 'heroImage.parent.internal.content'
  | 'heroImage.parent.internal.contentDigest'
  | 'heroImage.parent.internal.description'
  | 'heroImage.parent.internal.fieldOwners'
  | 'heroImage.parent.internal.ignoreType'
  | 'heroImage.parent.internal.mediaType'
  | 'heroImage.parent.internal.owner'
  | 'heroImage.parent.internal.type'
  | 'heroImage.children'
  | 'heroImage.children.id'
  | 'heroImage.children.parent.id'
  | 'heroImage.children.parent.children'
  | 'heroImage.children.children'
  | 'heroImage.children.children.id'
  | 'heroImage.children.children.children'
  | 'heroImage.children.internal.content'
  | 'heroImage.children.internal.contentDigest'
  | 'heroImage.children.internal.description'
  | 'heroImage.children.internal.fieldOwners'
  | 'heroImage.children.internal.ignoreType'
  | 'heroImage.children.internal.mediaType'
  | 'heroImage.children.internal.owner'
  | 'heroImage.children.internal.type'
  | 'heroImage.internal.content'
  | 'heroImage.internal.contentDigest'
  | 'heroImage.internal.description'
  | 'heroImage.internal.fieldOwners'
  | 'heroImage.internal.ignoreType'
  | 'heroImage.internal.mediaType'
  | 'heroImage.internal.owner'
  | 'heroImage.internal.type'
  | 'product'
  | 'product.contentful_id'
  | 'product.id'
  | 'product.node_locale'
  | 'product.slug'
  | 'product.sizetypecolor'
  | 'product.tags'
  | 'product.price'
  | 'product.quantity'
  | 'product.sku'
  | 'product.website'
  | 'product.categories'
  | 'product.categories.contentful_id'
  | 'product.categories.id'
  | 'product.categories.node_locale'
  | 'product.categories.icon.contentful_id'
  | 'product.categories.icon.id'
  | 'product.categories.icon.spaceId'
  | 'product.categories.icon.createdAt'
  | 'product.categories.icon.updatedAt'
  | 'product.categories.icon.title'
  | 'product.categories.icon.description'
  | 'product.categories.icon.node_locale'
  | 'product.categories.icon.gatsbyImageData'
  | 'product.categories.icon.children'
  | 'product.categories.heroImage.contentful_id'
  | 'product.categories.heroImage.id'
  | 'product.categories.heroImage.spaceId'
  | 'product.categories.heroImage.createdAt'
  | 'product.categories.heroImage.updatedAt'
  | 'product.categories.heroImage.title'
  | 'product.categories.heroImage.description'
  | 'product.categories.heroImage.node_locale'
  | 'product.categories.heroImage.gatsbyImageData'
  | 'product.categories.heroImage.children'
  | 'product.categories.product'
  | 'product.categories.product.contentful_id'
  | 'product.categories.product.id'
  | 'product.categories.product.node_locale'
  | 'product.categories.product.slug'
  | 'product.categories.product.sizetypecolor'
  | 'product.categories.product.tags'
  | 'product.categories.product.price'
  | 'product.categories.product.quantity'
  | 'product.categories.product.sku'
  | 'product.categories.product.website'
  | 'product.categories.product.categories'
  | 'product.categories.product.spaceId'
  | 'product.categories.product.createdAt'
  | 'product.categories.product.updatedAt'
  | 'product.categories.product.childrenContentfulProductProductDescriptionTextNode'
  | 'product.categories.product.childrenContentfulProductProductNameTextNode'
  | 'product.categories.product.children'
  | 'product.categories.title.id'
  | 'product.categories.title.children'
  | 'product.categories.title.title'
  | 'product.categories.categoryDescription.id'
  | 'product.categories.categoryDescription.children'
  | 'product.categories.categoryDescription.categoryDescription'
  | 'product.categories.spaceId'
  | 'product.categories.createdAt'
  | 'product.categories.updatedAt'
  | 'product.categories.sys.type'
  | 'product.categories.sys.revision'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode.id'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode.children'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'product.categories.childContentfulCategoryCategoryDescriptionTextNode.id'
  | 'product.categories.childContentfulCategoryCategoryDescriptionTextNode.children'
  | 'product.categories.childContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'product.categories.childrenContentfulCategoryTitleTextNode'
  | 'product.categories.childrenContentfulCategoryTitleTextNode.id'
  | 'product.categories.childrenContentfulCategoryTitleTextNode.children'
  | 'product.categories.childrenContentfulCategoryTitleTextNode.title'
  | 'product.categories.childContentfulCategoryTitleTextNode.id'
  | 'product.categories.childContentfulCategoryTitleTextNode.children'
  | 'product.categories.childContentfulCategoryTitleTextNode.title'
  | 'product.categories.parent.id'
  | 'product.categories.parent.children'
  | 'product.categories.children'
  | 'product.categories.children.id'
  | 'product.categories.children.children'
  | 'product.categories.internal.content'
  | 'product.categories.internal.contentDigest'
  | 'product.categories.internal.description'
  | 'product.categories.internal.fieldOwners'
  | 'product.categories.internal.ignoreType'
  | 'product.categories.internal.mediaType'
  | 'product.categories.internal.owner'
  | 'product.categories.internal.type'
  | 'product.brand.contentful_id'
  | 'product.brand.id'
  | 'product.brand.node_locale'
  | 'product.brand.website'
  | 'product.brand.product'
  | 'product.brand.product.contentful_id'
  | 'product.brand.product.id'
  | 'product.brand.product.node_locale'
  | 'product.brand.product.slug'
  | 'product.brand.product.sizetypecolor'
  | 'product.brand.product.tags'
  | 'product.brand.product.price'
  | 'product.brand.product.quantity'
  | 'product.brand.product.sku'
  | 'product.brand.product.website'
  | 'product.brand.product.categories'
  | 'product.brand.product.spaceId'
  | 'product.brand.product.createdAt'
  | 'product.brand.product.updatedAt'
  | 'product.brand.product.childrenContentfulProductProductDescriptionTextNode'
  | 'product.brand.product.childrenContentfulProductProductNameTextNode'
  | 'product.brand.product.children'
  | 'product.brand.companyName.id'
  | 'product.brand.companyName.children'
  | 'product.brand.companyName.companyName'
  | 'product.brand.companyDescription.id'
  | 'product.brand.companyDescription.children'
  | 'product.brand.companyDescription.companyDescription'
  | 'product.brand.spaceId'
  | 'product.brand.createdAt'
  | 'product.brand.updatedAt'
  | 'product.brand.sys.type'
  | 'product.brand.sys.revision'
  | 'product.brand.email'
  | 'product.brand.phone'
  | 'product.brand.twitter'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode.id'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode.children'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'product.brand.childContentfulBrandCompanyDescriptionTextNode.id'
  | 'product.brand.childContentfulBrandCompanyDescriptionTextNode.children'
  | 'product.brand.childContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode.id'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode.children'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode.companyName'
  | 'product.brand.childContentfulBrandCompanyNameTextNode.id'
  | 'product.brand.childContentfulBrandCompanyNameTextNode.children'
  | 'product.brand.childContentfulBrandCompanyNameTextNode.companyName'
  | 'product.brand.parent.id'
  | 'product.brand.parent.children'
  | 'product.brand.children'
  | 'product.brand.children.id'
  | 'product.brand.children.children'
  | 'product.brand.internal.content'
  | 'product.brand.internal.contentDigest'
  | 'product.brand.internal.description'
  | 'product.brand.internal.fieldOwners'
  | 'product.brand.internal.ignoreType'
  | 'product.brand.internal.mediaType'
  | 'product.brand.internal.owner'
  | 'product.brand.internal.type'
  | 'product.productName.id'
  | 'product.productName.parent.id'
  | 'product.productName.parent.children'
  | 'product.productName.children'
  | 'product.productName.children.id'
  | 'product.productName.children.children'
  | 'product.productName.internal.content'
  | 'product.productName.internal.contentDigest'
  | 'product.productName.internal.description'
  | 'product.productName.internal.fieldOwners'
  | 'product.productName.internal.ignoreType'
  | 'product.productName.internal.mediaType'
  | 'product.productName.internal.owner'
  | 'product.productName.internal.type'
  | 'product.productName.productName'
  | 'product.productName.sys.type'
  | 'product.productDescription.id'
  | 'product.productDescription.parent.id'
  | 'product.productDescription.parent.children'
  | 'product.productDescription.children'
  | 'product.productDescription.children.id'
  | 'product.productDescription.children.children'
  | 'product.productDescription.internal.content'
  | 'product.productDescription.internal.contentDigest'
  | 'product.productDescription.internal.description'
  | 'product.productDescription.internal.fieldOwners'
  | 'product.productDescription.internal.ignoreType'
  | 'product.productDescription.internal.mediaType'
  | 'product.productDescription.internal.owner'
  | 'product.productDescription.internal.type'
  | 'product.productDescription.productDescription'
  | 'product.productDescription.sys.type'
  | 'product.spaceId'
  | 'product.createdAt'
  | 'product.updatedAt'
  | 'product.sys.type'
  | 'product.sys.revision'
  | 'product.childrenContentfulProductProductDescriptionTextNode'
  | 'product.childrenContentfulProductProductDescriptionTextNode.id'
  | 'product.childrenContentfulProductProductDescriptionTextNode.parent.id'
  | 'product.childrenContentfulProductProductDescriptionTextNode.parent.children'
  | 'product.childrenContentfulProductProductDescriptionTextNode.children'
  | 'product.childrenContentfulProductProductDescriptionTextNode.children.id'
  | 'product.childrenContentfulProductProductDescriptionTextNode.children.children'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.content'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.contentDigest'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.description'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.fieldOwners'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.ignoreType'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.mediaType'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.owner'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.type'
  | 'product.childrenContentfulProductProductDescriptionTextNode.productDescription'
  | 'product.childrenContentfulProductProductDescriptionTextNode.sys.type'
  | 'product.childContentfulProductProductDescriptionTextNode.id'
  | 'product.childContentfulProductProductDescriptionTextNode.parent.id'
  | 'product.childContentfulProductProductDescriptionTextNode.parent.children'
  | 'product.childContentfulProductProductDescriptionTextNode.children'
  | 'product.childContentfulProductProductDescriptionTextNode.children.id'
  | 'product.childContentfulProductProductDescriptionTextNode.children.children'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.content'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.contentDigest'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.description'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.fieldOwners'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.ignoreType'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.mediaType'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.owner'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.type'
  | 'product.childContentfulProductProductDescriptionTextNode.productDescription'
  | 'product.childContentfulProductProductDescriptionTextNode.sys.type'
  | 'product.childrenContentfulProductProductNameTextNode'
  | 'product.childrenContentfulProductProductNameTextNode.id'
  | 'product.childrenContentfulProductProductNameTextNode.parent.id'
  | 'product.childrenContentfulProductProductNameTextNode.parent.children'
  | 'product.childrenContentfulProductProductNameTextNode.children'
  | 'product.childrenContentfulProductProductNameTextNode.children.id'
  | 'product.childrenContentfulProductProductNameTextNode.children.children'
  | 'product.childrenContentfulProductProductNameTextNode.internal.content'
  | 'product.childrenContentfulProductProductNameTextNode.internal.contentDigest'
  | 'product.childrenContentfulProductProductNameTextNode.internal.description'
  | 'product.childrenContentfulProductProductNameTextNode.internal.fieldOwners'
  | 'product.childrenContentfulProductProductNameTextNode.internal.ignoreType'
  | 'product.childrenContentfulProductProductNameTextNode.internal.mediaType'
  | 'product.childrenContentfulProductProductNameTextNode.internal.owner'
  | 'product.childrenContentfulProductProductNameTextNode.internal.type'
  | 'product.childrenContentfulProductProductNameTextNode.productName'
  | 'product.childrenContentfulProductProductNameTextNode.sys.type'
  | 'product.childContentfulProductProductNameTextNode.id'
  | 'product.childContentfulProductProductNameTextNode.parent.id'
  | 'product.childContentfulProductProductNameTextNode.parent.children'
  | 'product.childContentfulProductProductNameTextNode.children'
  | 'product.childContentfulProductProductNameTextNode.children.id'
  | 'product.childContentfulProductProductNameTextNode.children.children'
  | 'product.childContentfulProductProductNameTextNode.internal.content'
  | 'product.childContentfulProductProductNameTextNode.internal.contentDigest'
  | 'product.childContentfulProductProductNameTextNode.internal.description'
  | 'product.childContentfulProductProductNameTextNode.internal.fieldOwners'
  | 'product.childContentfulProductProductNameTextNode.internal.ignoreType'
  | 'product.childContentfulProductProductNameTextNode.internal.mediaType'
  | 'product.childContentfulProductProductNameTextNode.internal.owner'
  | 'product.childContentfulProductProductNameTextNode.internal.type'
  | 'product.childContentfulProductProductNameTextNode.productName'
  | 'product.childContentfulProductProductNameTextNode.sys.type'
  | 'product.parent.id'
  | 'product.parent.parent.id'
  | 'product.parent.parent.children'
  | 'product.parent.children'
  | 'product.parent.children.id'
  | 'product.parent.children.children'
  | 'product.parent.internal.content'
  | 'product.parent.internal.contentDigest'
  | 'product.parent.internal.description'
  | 'product.parent.internal.fieldOwners'
  | 'product.parent.internal.ignoreType'
  | 'product.parent.internal.mediaType'
  | 'product.parent.internal.owner'
  | 'product.parent.internal.type'
  | 'product.children'
  | 'product.children.id'
  | 'product.children.parent.id'
  | 'product.children.parent.children'
  | 'product.children.children'
  | 'product.children.children.id'
  | 'product.children.children.children'
  | 'product.children.internal.content'
  | 'product.children.internal.contentDigest'
  | 'product.children.internal.description'
  | 'product.children.internal.fieldOwners'
  | 'product.children.internal.ignoreType'
  | 'product.children.internal.mediaType'
  | 'product.children.internal.owner'
  | 'product.children.internal.type'
  | 'product.internal.content'
  | 'product.internal.contentDigest'
  | 'product.internal.description'
  | 'product.internal.fieldOwners'
  | 'product.internal.ignoreType'
  | 'product.internal.mediaType'
  | 'product.internal.owner'
  | 'product.internal.type'
  | 'title.id'
  | 'title.parent.id'
  | 'title.parent.parent.id'
  | 'title.parent.parent.children'
  | 'title.parent.children'
  | 'title.parent.children.id'
  | 'title.parent.children.children'
  | 'title.parent.internal.content'
  | 'title.parent.internal.contentDigest'
  | 'title.parent.internal.description'
  | 'title.parent.internal.fieldOwners'
  | 'title.parent.internal.ignoreType'
  | 'title.parent.internal.mediaType'
  | 'title.parent.internal.owner'
  | 'title.parent.internal.type'
  | 'title.children'
  | 'title.children.id'
  | 'title.children.parent.id'
  | 'title.children.parent.children'
  | 'title.children.children'
  | 'title.children.children.id'
  | 'title.children.children.children'
  | 'title.children.internal.content'
  | 'title.children.internal.contentDigest'
  | 'title.children.internal.description'
  | 'title.children.internal.fieldOwners'
  | 'title.children.internal.ignoreType'
  | 'title.children.internal.mediaType'
  | 'title.children.internal.owner'
  | 'title.children.internal.type'
  | 'title.internal.content'
  | 'title.internal.contentDigest'
  | 'title.internal.description'
  | 'title.internal.fieldOwners'
  | 'title.internal.ignoreType'
  | 'title.internal.mediaType'
  | 'title.internal.owner'
  | 'title.internal.type'
  | 'title.title'
  | 'title.sys.type'
  | 'categoryDescription.id'
  | 'categoryDescription.parent.id'
  | 'categoryDescription.parent.parent.id'
  | 'categoryDescription.parent.parent.children'
  | 'categoryDescription.parent.children'
  | 'categoryDescription.parent.children.id'
  | 'categoryDescription.parent.children.children'
  | 'categoryDescription.parent.internal.content'
  | 'categoryDescription.parent.internal.contentDigest'
  | 'categoryDescription.parent.internal.description'
  | 'categoryDescription.parent.internal.fieldOwners'
  | 'categoryDescription.parent.internal.ignoreType'
  | 'categoryDescription.parent.internal.mediaType'
  | 'categoryDescription.parent.internal.owner'
  | 'categoryDescription.parent.internal.type'
  | 'categoryDescription.children'
  | 'categoryDescription.children.id'
  | 'categoryDescription.children.parent.id'
  | 'categoryDescription.children.parent.children'
  | 'categoryDescription.children.children'
  | 'categoryDescription.children.children.id'
  | 'categoryDescription.children.children.children'
  | 'categoryDescription.children.internal.content'
  | 'categoryDescription.children.internal.contentDigest'
  | 'categoryDescription.children.internal.description'
  | 'categoryDescription.children.internal.fieldOwners'
  | 'categoryDescription.children.internal.ignoreType'
  | 'categoryDescription.children.internal.mediaType'
  | 'categoryDescription.children.internal.owner'
  | 'categoryDescription.children.internal.type'
  | 'categoryDescription.internal.content'
  | 'categoryDescription.internal.contentDigest'
  | 'categoryDescription.internal.description'
  | 'categoryDescription.internal.fieldOwners'
  | 'categoryDescription.internal.ignoreType'
  | 'categoryDescription.internal.mediaType'
  | 'categoryDescription.internal.owner'
  | 'categoryDescription.internal.type'
  | 'categoryDescription.categoryDescription'
  | 'categoryDescription.sys.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.children'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.children.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.children.children'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.parent.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.parent.children'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.children'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.children.id'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.children.children'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.content'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.description'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.children.internal.type'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.content'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.description'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.owner'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.internal.type'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'childrenContentfulCategoryCategoryDescriptionTextNode.sys.type'
  | 'childContentfulCategoryCategoryDescriptionTextNode.id'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.id'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.parent.id'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.parent.children'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.children'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.children.id'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.children.children'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.content'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.description'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.owner'
  | 'childContentfulCategoryCategoryDescriptionTextNode.parent.internal.type'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.id'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.parent.id'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.parent.children'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.children'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.children.id'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.children.children'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.content'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.description'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.owner'
  | 'childContentfulCategoryCategoryDescriptionTextNode.children.internal.type'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.content'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.contentDigest'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.description'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.ignoreType'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.mediaType'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.owner'
  | 'childContentfulCategoryCategoryDescriptionTextNode.internal.type'
  | 'childContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'childContentfulCategoryCategoryDescriptionTextNode.sys.type'
  | 'childrenContentfulCategoryTitleTextNode'
  | 'childrenContentfulCategoryTitleTextNode.id'
  | 'childrenContentfulCategoryTitleTextNode.parent.id'
  | 'childrenContentfulCategoryTitleTextNode.parent.parent.id'
  | 'childrenContentfulCategoryTitleTextNode.parent.parent.children'
  | 'childrenContentfulCategoryTitleTextNode.parent.children'
  | 'childrenContentfulCategoryTitleTextNode.parent.children.id'
  | 'childrenContentfulCategoryTitleTextNode.parent.children.children'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.content'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.contentDigest'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.description'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.ignoreType'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.mediaType'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.owner'
  | 'childrenContentfulCategoryTitleTextNode.parent.internal.type'
  | 'childrenContentfulCategoryTitleTextNode.children'
  | 'childrenContentfulCategoryTitleTextNode.children.id'
  | 'childrenContentfulCategoryTitleTextNode.children.parent.id'
  | 'childrenContentfulCategoryTitleTextNode.children.parent.children'
  | 'childrenContentfulCategoryTitleTextNode.children.children'
  | 'childrenContentfulCategoryTitleTextNode.children.children.id'
  | 'childrenContentfulCategoryTitleTextNode.children.children.children'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.content'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.contentDigest'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.description'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.fieldOwners'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.ignoreType'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.mediaType'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.owner'
  | 'childrenContentfulCategoryTitleTextNode.children.internal.type'
  | 'childrenContentfulCategoryTitleTextNode.internal.content'
  | 'childrenContentfulCategoryTitleTextNode.internal.contentDigest'
  | 'childrenContentfulCategoryTitleTextNode.internal.description'
  | 'childrenContentfulCategoryTitleTextNode.internal.fieldOwners'
  | 'childrenContentfulCategoryTitleTextNode.internal.ignoreType'
  | 'childrenContentfulCategoryTitleTextNode.internal.mediaType'
  | 'childrenContentfulCategoryTitleTextNode.internal.owner'
  | 'childrenContentfulCategoryTitleTextNode.internal.type'
  | 'childrenContentfulCategoryTitleTextNode.title'
  | 'childrenContentfulCategoryTitleTextNode.sys.type'
  | 'childContentfulCategoryTitleTextNode.id'
  | 'childContentfulCategoryTitleTextNode.parent.id'
  | 'childContentfulCategoryTitleTextNode.parent.parent.id'
  | 'childContentfulCategoryTitleTextNode.parent.parent.children'
  | 'childContentfulCategoryTitleTextNode.parent.children'
  | 'childContentfulCategoryTitleTextNode.parent.children.id'
  | 'childContentfulCategoryTitleTextNode.parent.children.children'
  | 'childContentfulCategoryTitleTextNode.parent.internal.content'
  | 'childContentfulCategoryTitleTextNode.parent.internal.contentDigest'
  | 'childContentfulCategoryTitleTextNode.parent.internal.description'
  | 'childContentfulCategoryTitleTextNode.parent.internal.fieldOwners'
  | 'childContentfulCategoryTitleTextNode.parent.internal.ignoreType'
  | 'childContentfulCategoryTitleTextNode.parent.internal.mediaType'
  | 'childContentfulCategoryTitleTextNode.parent.internal.owner'
  | 'childContentfulCategoryTitleTextNode.parent.internal.type'
  | 'childContentfulCategoryTitleTextNode.children'
  | 'childContentfulCategoryTitleTextNode.children.id'
  | 'childContentfulCategoryTitleTextNode.children.parent.id'
  | 'childContentfulCategoryTitleTextNode.children.parent.children'
  | 'childContentfulCategoryTitleTextNode.children.children'
  | 'childContentfulCategoryTitleTextNode.children.children.id'
  | 'childContentfulCategoryTitleTextNode.children.children.children'
  | 'childContentfulCategoryTitleTextNode.children.internal.content'
  | 'childContentfulCategoryTitleTextNode.children.internal.contentDigest'
  | 'childContentfulCategoryTitleTextNode.children.internal.description'
  | 'childContentfulCategoryTitleTextNode.children.internal.fieldOwners'
  | 'childContentfulCategoryTitleTextNode.children.internal.ignoreType'
  | 'childContentfulCategoryTitleTextNode.children.internal.mediaType'
  | 'childContentfulCategoryTitleTextNode.children.internal.owner'
  | 'childContentfulCategoryTitleTextNode.children.internal.type'
  | 'childContentfulCategoryTitleTextNode.internal.content'
  | 'childContentfulCategoryTitleTextNode.internal.contentDigest'
  | 'childContentfulCategoryTitleTextNode.internal.description'
  | 'childContentfulCategoryTitleTextNode.internal.fieldOwners'
  | 'childContentfulCategoryTitleTextNode.internal.ignoreType'
  | 'childContentfulCategoryTitleTextNode.internal.mediaType'
  | 'childContentfulCategoryTitleTextNode.internal.owner'
  | 'childContentfulCategoryTitleTextNode.internal.type'
  | 'childContentfulCategoryTitleTextNode.title'
  | 'childContentfulCategoryTitleTextNode.sys.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulCategoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulCategorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulCategoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulBrandConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBrandEdge>;
  readonly nodes: ReadonlyArray<ContentfulBrand>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulBrandGroupConnection>;
};


type ContentfulBrandConnection_distinctArgs = {
  field: ContentfulBrandFieldsEnum;
};


type ContentfulBrandConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBrandFieldsEnum;
};

type ContentfulBrandEdge = {
  readonly next: Maybe<ContentfulBrand>;
  readonly node: ContentfulBrand;
  readonly previous: Maybe<ContentfulBrand>;
};

type ContentfulBrandFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'website'
  | 'product'
  | 'product.contentful_id'
  | 'product.id'
  | 'product.node_locale'
  | 'product.slug'
  | 'product.sizetypecolor'
  | 'product.tags'
  | 'product.price'
  | 'product.quantity'
  | 'product.sku'
  | 'product.website'
  | 'product.categories'
  | 'product.categories.contentful_id'
  | 'product.categories.id'
  | 'product.categories.node_locale'
  | 'product.categories.icon.contentful_id'
  | 'product.categories.icon.id'
  | 'product.categories.icon.spaceId'
  | 'product.categories.icon.createdAt'
  | 'product.categories.icon.updatedAt'
  | 'product.categories.icon.title'
  | 'product.categories.icon.description'
  | 'product.categories.icon.node_locale'
  | 'product.categories.icon.gatsbyImageData'
  | 'product.categories.icon.children'
  | 'product.categories.heroImage.contentful_id'
  | 'product.categories.heroImage.id'
  | 'product.categories.heroImage.spaceId'
  | 'product.categories.heroImage.createdAt'
  | 'product.categories.heroImage.updatedAt'
  | 'product.categories.heroImage.title'
  | 'product.categories.heroImage.description'
  | 'product.categories.heroImage.node_locale'
  | 'product.categories.heroImage.gatsbyImageData'
  | 'product.categories.heroImage.children'
  | 'product.categories.product'
  | 'product.categories.product.contentful_id'
  | 'product.categories.product.id'
  | 'product.categories.product.node_locale'
  | 'product.categories.product.slug'
  | 'product.categories.product.sizetypecolor'
  | 'product.categories.product.tags'
  | 'product.categories.product.price'
  | 'product.categories.product.quantity'
  | 'product.categories.product.sku'
  | 'product.categories.product.website'
  | 'product.categories.product.categories'
  | 'product.categories.product.spaceId'
  | 'product.categories.product.createdAt'
  | 'product.categories.product.updatedAt'
  | 'product.categories.product.childrenContentfulProductProductDescriptionTextNode'
  | 'product.categories.product.childrenContentfulProductProductNameTextNode'
  | 'product.categories.product.children'
  | 'product.categories.title.id'
  | 'product.categories.title.children'
  | 'product.categories.title.title'
  | 'product.categories.categoryDescription.id'
  | 'product.categories.categoryDescription.children'
  | 'product.categories.categoryDescription.categoryDescription'
  | 'product.categories.spaceId'
  | 'product.categories.createdAt'
  | 'product.categories.updatedAt'
  | 'product.categories.sys.type'
  | 'product.categories.sys.revision'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode.id'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode.children'
  | 'product.categories.childrenContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'product.categories.childContentfulCategoryCategoryDescriptionTextNode.id'
  | 'product.categories.childContentfulCategoryCategoryDescriptionTextNode.children'
  | 'product.categories.childContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'product.categories.childrenContentfulCategoryTitleTextNode'
  | 'product.categories.childrenContentfulCategoryTitleTextNode.id'
  | 'product.categories.childrenContentfulCategoryTitleTextNode.children'
  | 'product.categories.childrenContentfulCategoryTitleTextNode.title'
  | 'product.categories.childContentfulCategoryTitleTextNode.id'
  | 'product.categories.childContentfulCategoryTitleTextNode.children'
  | 'product.categories.childContentfulCategoryTitleTextNode.title'
  | 'product.categories.parent.id'
  | 'product.categories.parent.children'
  | 'product.categories.children'
  | 'product.categories.children.id'
  | 'product.categories.children.children'
  | 'product.categories.internal.content'
  | 'product.categories.internal.contentDigest'
  | 'product.categories.internal.description'
  | 'product.categories.internal.fieldOwners'
  | 'product.categories.internal.ignoreType'
  | 'product.categories.internal.mediaType'
  | 'product.categories.internal.owner'
  | 'product.categories.internal.type'
  | 'product.brand.contentful_id'
  | 'product.brand.id'
  | 'product.brand.node_locale'
  | 'product.brand.website'
  | 'product.brand.product'
  | 'product.brand.product.contentful_id'
  | 'product.brand.product.id'
  | 'product.brand.product.node_locale'
  | 'product.brand.product.slug'
  | 'product.brand.product.sizetypecolor'
  | 'product.brand.product.tags'
  | 'product.brand.product.price'
  | 'product.brand.product.quantity'
  | 'product.brand.product.sku'
  | 'product.brand.product.website'
  | 'product.brand.product.categories'
  | 'product.brand.product.spaceId'
  | 'product.brand.product.createdAt'
  | 'product.brand.product.updatedAt'
  | 'product.brand.product.childrenContentfulProductProductDescriptionTextNode'
  | 'product.brand.product.childrenContentfulProductProductNameTextNode'
  | 'product.brand.product.children'
  | 'product.brand.companyName.id'
  | 'product.brand.companyName.children'
  | 'product.brand.companyName.companyName'
  | 'product.brand.companyDescription.id'
  | 'product.brand.companyDescription.children'
  | 'product.brand.companyDescription.companyDescription'
  | 'product.brand.spaceId'
  | 'product.brand.createdAt'
  | 'product.brand.updatedAt'
  | 'product.brand.sys.type'
  | 'product.brand.sys.revision'
  | 'product.brand.email'
  | 'product.brand.phone'
  | 'product.brand.twitter'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode.id'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode.children'
  | 'product.brand.childrenContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'product.brand.childContentfulBrandCompanyDescriptionTextNode.id'
  | 'product.brand.childContentfulBrandCompanyDescriptionTextNode.children'
  | 'product.brand.childContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode.id'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode.children'
  | 'product.brand.childrenContentfulBrandCompanyNameTextNode.companyName'
  | 'product.brand.childContentfulBrandCompanyNameTextNode.id'
  | 'product.brand.childContentfulBrandCompanyNameTextNode.children'
  | 'product.brand.childContentfulBrandCompanyNameTextNode.companyName'
  | 'product.brand.parent.id'
  | 'product.brand.parent.children'
  | 'product.brand.children'
  | 'product.brand.children.id'
  | 'product.brand.children.children'
  | 'product.brand.internal.content'
  | 'product.brand.internal.contentDigest'
  | 'product.brand.internal.description'
  | 'product.brand.internal.fieldOwners'
  | 'product.brand.internal.ignoreType'
  | 'product.brand.internal.mediaType'
  | 'product.brand.internal.owner'
  | 'product.brand.internal.type'
  | 'product.productName.id'
  | 'product.productName.parent.id'
  | 'product.productName.parent.children'
  | 'product.productName.children'
  | 'product.productName.children.id'
  | 'product.productName.children.children'
  | 'product.productName.internal.content'
  | 'product.productName.internal.contentDigest'
  | 'product.productName.internal.description'
  | 'product.productName.internal.fieldOwners'
  | 'product.productName.internal.ignoreType'
  | 'product.productName.internal.mediaType'
  | 'product.productName.internal.owner'
  | 'product.productName.internal.type'
  | 'product.productName.productName'
  | 'product.productName.sys.type'
  | 'product.productDescription.id'
  | 'product.productDescription.parent.id'
  | 'product.productDescription.parent.children'
  | 'product.productDescription.children'
  | 'product.productDescription.children.id'
  | 'product.productDescription.children.children'
  | 'product.productDescription.internal.content'
  | 'product.productDescription.internal.contentDigest'
  | 'product.productDescription.internal.description'
  | 'product.productDescription.internal.fieldOwners'
  | 'product.productDescription.internal.ignoreType'
  | 'product.productDescription.internal.mediaType'
  | 'product.productDescription.internal.owner'
  | 'product.productDescription.internal.type'
  | 'product.productDescription.productDescription'
  | 'product.productDescription.sys.type'
  | 'product.spaceId'
  | 'product.createdAt'
  | 'product.updatedAt'
  | 'product.sys.type'
  | 'product.sys.revision'
  | 'product.childrenContentfulProductProductDescriptionTextNode'
  | 'product.childrenContentfulProductProductDescriptionTextNode.id'
  | 'product.childrenContentfulProductProductDescriptionTextNode.parent.id'
  | 'product.childrenContentfulProductProductDescriptionTextNode.parent.children'
  | 'product.childrenContentfulProductProductDescriptionTextNode.children'
  | 'product.childrenContentfulProductProductDescriptionTextNode.children.id'
  | 'product.childrenContentfulProductProductDescriptionTextNode.children.children'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.content'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.contentDigest'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.description'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.fieldOwners'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.ignoreType'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.mediaType'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.owner'
  | 'product.childrenContentfulProductProductDescriptionTextNode.internal.type'
  | 'product.childrenContentfulProductProductDescriptionTextNode.productDescription'
  | 'product.childrenContentfulProductProductDescriptionTextNode.sys.type'
  | 'product.childContentfulProductProductDescriptionTextNode.id'
  | 'product.childContentfulProductProductDescriptionTextNode.parent.id'
  | 'product.childContentfulProductProductDescriptionTextNode.parent.children'
  | 'product.childContentfulProductProductDescriptionTextNode.children'
  | 'product.childContentfulProductProductDescriptionTextNode.children.id'
  | 'product.childContentfulProductProductDescriptionTextNode.children.children'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.content'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.contentDigest'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.description'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.fieldOwners'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.ignoreType'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.mediaType'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.owner'
  | 'product.childContentfulProductProductDescriptionTextNode.internal.type'
  | 'product.childContentfulProductProductDescriptionTextNode.productDescription'
  | 'product.childContentfulProductProductDescriptionTextNode.sys.type'
  | 'product.childrenContentfulProductProductNameTextNode'
  | 'product.childrenContentfulProductProductNameTextNode.id'
  | 'product.childrenContentfulProductProductNameTextNode.parent.id'
  | 'product.childrenContentfulProductProductNameTextNode.parent.children'
  | 'product.childrenContentfulProductProductNameTextNode.children'
  | 'product.childrenContentfulProductProductNameTextNode.children.id'
  | 'product.childrenContentfulProductProductNameTextNode.children.children'
  | 'product.childrenContentfulProductProductNameTextNode.internal.content'
  | 'product.childrenContentfulProductProductNameTextNode.internal.contentDigest'
  | 'product.childrenContentfulProductProductNameTextNode.internal.description'
  | 'product.childrenContentfulProductProductNameTextNode.internal.fieldOwners'
  | 'product.childrenContentfulProductProductNameTextNode.internal.ignoreType'
  | 'product.childrenContentfulProductProductNameTextNode.internal.mediaType'
  | 'product.childrenContentfulProductProductNameTextNode.internal.owner'
  | 'product.childrenContentfulProductProductNameTextNode.internal.type'
  | 'product.childrenContentfulProductProductNameTextNode.productName'
  | 'product.childrenContentfulProductProductNameTextNode.sys.type'
  | 'product.childContentfulProductProductNameTextNode.id'
  | 'product.childContentfulProductProductNameTextNode.parent.id'
  | 'product.childContentfulProductProductNameTextNode.parent.children'
  | 'product.childContentfulProductProductNameTextNode.children'
  | 'product.childContentfulProductProductNameTextNode.children.id'
  | 'product.childContentfulProductProductNameTextNode.children.children'
  | 'product.childContentfulProductProductNameTextNode.internal.content'
  | 'product.childContentfulProductProductNameTextNode.internal.contentDigest'
  | 'product.childContentfulProductProductNameTextNode.internal.description'
  | 'product.childContentfulProductProductNameTextNode.internal.fieldOwners'
  | 'product.childContentfulProductProductNameTextNode.internal.ignoreType'
  | 'product.childContentfulProductProductNameTextNode.internal.mediaType'
  | 'product.childContentfulProductProductNameTextNode.internal.owner'
  | 'product.childContentfulProductProductNameTextNode.internal.type'
  | 'product.childContentfulProductProductNameTextNode.productName'
  | 'product.childContentfulProductProductNameTextNode.sys.type'
  | 'product.parent.id'
  | 'product.parent.parent.id'
  | 'product.parent.parent.children'
  | 'product.parent.children'
  | 'product.parent.children.id'
  | 'product.parent.children.children'
  | 'product.parent.internal.content'
  | 'product.parent.internal.contentDigest'
  | 'product.parent.internal.description'
  | 'product.parent.internal.fieldOwners'
  | 'product.parent.internal.ignoreType'
  | 'product.parent.internal.mediaType'
  | 'product.parent.internal.owner'
  | 'product.parent.internal.type'
  | 'product.children'
  | 'product.children.id'
  | 'product.children.parent.id'
  | 'product.children.parent.children'
  | 'product.children.children'
  | 'product.children.children.id'
  | 'product.children.children.children'
  | 'product.children.internal.content'
  | 'product.children.internal.contentDigest'
  | 'product.children.internal.description'
  | 'product.children.internal.fieldOwners'
  | 'product.children.internal.ignoreType'
  | 'product.children.internal.mediaType'
  | 'product.children.internal.owner'
  | 'product.children.internal.type'
  | 'product.internal.content'
  | 'product.internal.contentDigest'
  | 'product.internal.description'
  | 'product.internal.fieldOwners'
  | 'product.internal.ignoreType'
  | 'product.internal.mediaType'
  | 'product.internal.owner'
  | 'product.internal.type'
  | 'companyName.id'
  | 'companyName.parent.id'
  | 'companyName.parent.parent.id'
  | 'companyName.parent.parent.children'
  | 'companyName.parent.children'
  | 'companyName.parent.children.id'
  | 'companyName.parent.children.children'
  | 'companyName.parent.internal.content'
  | 'companyName.parent.internal.contentDigest'
  | 'companyName.parent.internal.description'
  | 'companyName.parent.internal.fieldOwners'
  | 'companyName.parent.internal.ignoreType'
  | 'companyName.parent.internal.mediaType'
  | 'companyName.parent.internal.owner'
  | 'companyName.parent.internal.type'
  | 'companyName.children'
  | 'companyName.children.id'
  | 'companyName.children.parent.id'
  | 'companyName.children.parent.children'
  | 'companyName.children.children'
  | 'companyName.children.children.id'
  | 'companyName.children.children.children'
  | 'companyName.children.internal.content'
  | 'companyName.children.internal.contentDigest'
  | 'companyName.children.internal.description'
  | 'companyName.children.internal.fieldOwners'
  | 'companyName.children.internal.ignoreType'
  | 'companyName.children.internal.mediaType'
  | 'companyName.children.internal.owner'
  | 'companyName.children.internal.type'
  | 'companyName.internal.content'
  | 'companyName.internal.contentDigest'
  | 'companyName.internal.description'
  | 'companyName.internal.fieldOwners'
  | 'companyName.internal.ignoreType'
  | 'companyName.internal.mediaType'
  | 'companyName.internal.owner'
  | 'companyName.internal.type'
  | 'companyName.companyName'
  | 'companyName.sys.type'
  | 'companyDescription.id'
  | 'companyDescription.parent.id'
  | 'companyDescription.parent.parent.id'
  | 'companyDescription.parent.parent.children'
  | 'companyDescription.parent.children'
  | 'companyDescription.parent.children.id'
  | 'companyDescription.parent.children.children'
  | 'companyDescription.parent.internal.content'
  | 'companyDescription.parent.internal.contentDigest'
  | 'companyDescription.parent.internal.description'
  | 'companyDescription.parent.internal.fieldOwners'
  | 'companyDescription.parent.internal.ignoreType'
  | 'companyDescription.parent.internal.mediaType'
  | 'companyDescription.parent.internal.owner'
  | 'companyDescription.parent.internal.type'
  | 'companyDescription.children'
  | 'companyDescription.children.id'
  | 'companyDescription.children.parent.id'
  | 'companyDescription.children.parent.children'
  | 'companyDescription.children.children'
  | 'companyDescription.children.children.id'
  | 'companyDescription.children.children.children'
  | 'companyDescription.children.internal.content'
  | 'companyDescription.children.internal.contentDigest'
  | 'companyDescription.children.internal.description'
  | 'companyDescription.children.internal.fieldOwners'
  | 'companyDescription.children.internal.ignoreType'
  | 'companyDescription.children.internal.mediaType'
  | 'companyDescription.children.internal.owner'
  | 'companyDescription.children.internal.type'
  | 'companyDescription.internal.content'
  | 'companyDescription.internal.contentDigest'
  | 'companyDescription.internal.description'
  | 'companyDescription.internal.fieldOwners'
  | 'companyDescription.internal.ignoreType'
  | 'companyDescription.internal.mediaType'
  | 'companyDescription.internal.owner'
  | 'companyDescription.internal.type'
  | 'companyDescription.companyDescription'
  | 'companyDescription.sys.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'email'
  | 'phone'
  | 'twitter'
  | 'childrenContentfulBrandCompanyDescriptionTextNode'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.id'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.id'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.children'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.children.id'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.children.children'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.id'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.parent.id'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.parent.children'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.children'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.children.id'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.children.children'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.content'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.description'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.children.internal.type'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.content'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.description'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.owner'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.internal.type'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'childrenContentfulBrandCompanyDescriptionTextNode.sys.type'
  | 'childContentfulBrandCompanyDescriptionTextNode.id'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.id'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.parent.id'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.parent.children'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.children'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.children.id'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.children.children'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.content'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.description'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.owner'
  | 'childContentfulBrandCompanyDescriptionTextNode.parent.internal.type'
  | 'childContentfulBrandCompanyDescriptionTextNode.children'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.id'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.parent.id'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.parent.children'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.children'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.children.id'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.children.children'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.content'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.description'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.owner'
  | 'childContentfulBrandCompanyDescriptionTextNode.children.internal.type'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.content'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.contentDigest'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.description'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.ignoreType'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.mediaType'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.owner'
  | 'childContentfulBrandCompanyDescriptionTextNode.internal.type'
  | 'childContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'childContentfulBrandCompanyDescriptionTextNode.sys.type'
  | 'childrenContentfulBrandCompanyNameTextNode'
  | 'childrenContentfulBrandCompanyNameTextNode.id'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.id'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.parent.id'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.parent.children'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.children'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.children.id'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.children.children'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.content'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.contentDigest'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.description'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.ignoreType'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.mediaType'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.owner'
  | 'childrenContentfulBrandCompanyNameTextNode.parent.internal.type'
  | 'childrenContentfulBrandCompanyNameTextNode.children'
  | 'childrenContentfulBrandCompanyNameTextNode.children.id'
  | 'childrenContentfulBrandCompanyNameTextNode.children.parent.id'
  | 'childrenContentfulBrandCompanyNameTextNode.children.parent.children'
  | 'childrenContentfulBrandCompanyNameTextNode.children.children'
  | 'childrenContentfulBrandCompanyNameTextNode.children.children.id'
  | 'childrenContentfulBrandCompanyNameTextNode.children.children.children'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.content'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.contentDigest'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.description'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.fieldOwners'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.ignoreType'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.mediaType'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.owner'
  | 'childrenContentfulBrandCompanyNameTextNode.children.internal.type'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.content'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.contentDigest'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.description'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.fieldOwners'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.ignoreType'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.mediaType'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.owner'
  | 'childrenContentfulBrandCompanyNameTextNode.internal.type'
  | 'childrenContentfulBrandCompanyNameTextNode.companyName'
  | 'childrenContentfulBrandCompanyNameTextNode.sys.type'
  | 'childContentfulBrandCompanyNameTextNode.id'
  | 'childContentfulBrandCompanyNameTextNode.parent.id'
  | 'childContentfulBrandCompanyNameTextNode.parent.parent.id'
  | 'childContentfulBrandCompanyNameTextNode.parent.parent.children'
  | 'childContentfulBrandCompanyNameTextNode.parent.children'
  | 'childContentfulBrandCompanyNameTextNode.parent.children.id'
  | 'childContentfulBrandCompanyNameTextNode.parent.children.children'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.content'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.contentDigest'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.description'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.fieldOwners'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.ignoreType'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.mediaType'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.owner'
  | 'childContentfulBrandCompanyNameTextNode.parent.internal.type'
  | 'childContentfulBrandCompanyNameTextNode.children'
  | 'childContentfulBrandCompanyNameTextNode.children.id'
  | 'childContentfulBrandCompanyNameTextNode.children.parent.id'
  | 'childContentfulBrandCompanyNameTextNode.children.parent.children'
  | 'childContentfulBrandCompanyNameTextNode.children.children'
  | 'childContentfulBrandCompanyNameTextNode.children.children.id'
  | 'childContentfulBrandCompanyNameTextNode.children.children.children'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.content'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.contentDigest'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.description'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.fieldOwners'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.ignoreType'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.mediaType'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.owner'
  | 'childContentfulBrandCompanyNameTextNode.children.internal.type'
  | 'childContentfulBrandCompanyNameTextNode.internal.content'
  | 'childContentfulBrandCompanyNameTextNode.internal.contentDigest'
  | 'childContentfulBrandCompanyNameTextNode.internal.description'
  | 'childContentfulBrandCompanyNameTextNode.internal.fieldOwners'
  | 'childContentfulBrandCompanyNameTextNode.internal.ignoreType'
  | 'childContentfulBrandCompanyNameTextNode.internal.mediaType'
  | 'childContentfulBrandCompanyNameTextNode.internal.owner'
  | 'childContentfulBrandCompanyNameTextNode.internal.type'
  | 'childContentfulBrandCompanyNameTextNode.companyName'
  | 'childContentfulBrandCompanyNameTextNode.sys.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulBrandGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBrandEdge>;
  readonly nodes: ReadonlyArray<ContentfulBrand>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulBrandSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulBrandFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulProductConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulProductEdge>;
  readonly nodes: ReadonlyArray<ContentfulProduct>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulProductGroupConnection>;
};


type ContentfulProductConnection_distinctArgs = {
  field: ContentfulProductFieldsEnum;
};


type ContentfulProductConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulProductFieldsEnum;
};

type ContentfulProductEdge = {
  readonly next: Maybe<ContentfulProduct>;
  readonly node: ContentfulProduct;
  readonly previous: Maybe<ContentfulProduct>;
};

type ContentfulProductFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'slug'
  | 'sizetypecolor'
  | 'tags'
  | 'price'
  | 'quantity'
  | 'sku'
  | 'website'
  | 'categories'
  | 'categories.contentful_id'
  | 'categories.id'
  | 'categories.node_locale'
  | 'categories.icon.contentful_id'
  | 'categories.icon.id'
  | 'categories.icon.spaceId'
  | 'categories.icon.createdAt'
  | 'categories.icon.updatedAt'
  | 'categories.icon.file.url'
  | 'categories.icon.file.fileName'
  | 'categories.icon.file.contentType'
  | 'categories.icon.title'
  | 'categories.icon.description'
  | 'categories.icon.node_locale'
  | 'categories.icon.sys.type'
  | 'categories.icon.sys.revision'
  | 'categories.icon.fixed.base64'
  | 'categories.icon.fixed.tracedSVG'
  | 'categories.icon.fixed.aspectRatio'
  | 'categories.icon.fixed.width'
  | 'categories.icon.fixed.height'
  | 'categories.icon.fixed.src'
  | 'categories.icon.fixed.srcSet'
  | 'categories.icon.fixed.srcWebp'
  | 'categories.icon.fixed.srcSetWebp'
  | 'categories.icon.fluid.base64'
  | 'categories.icon.fluid.tracedSVG'
  | 'categories.icon.fluid.aspectRatio'
  | 'categories.icon.fluid.src'
  | 'categories.icon.fluid.srcSet'
  | 'categories.icon.fluid.srcWebp'
  | 'categories.icon.fluid.srcSetWebp'
  | 'categories.icon.fluid.sizes'
  | 'categories.icon.gatsbyImageData'
  | 'categories.icon.resize.base64'
  | 'categories.icon.resize.tracedSVG'
  | 'categories.icon.resize.src'
  | 'categories.icon.resize.width'
  | 'categories.icon.resize.height'
  | 'categories.icon.resize.aspectRatio'
  | 'categories.icon.parent.id'
  | 'categories.icon.parent.children'
  | 'categories.icon.children'
  | 'categories.icon.children.id'
  | 'categories.icon.children.children'
  | 'categories.icon.internal.content'
  | 'categories.icon.internal.contentDigest'
  | 'categories.icon.internal.description'
  | 'categories.icon.internal.fieldOwners'
  | 'categories.icon.internal.ignoreType'
  | 'categories.icon.internal.mediaType'
  | 'categories.icon.internal.owner'
  | 'categories.icon.internal.type'
  | 'categories.heroImage.contentful_id'
  | 'categories.heroImage.id'
  | 'categories.heroImage.spaceId'
  | 'categories.heroImage.createdAt'
  | 'categories.heroImage.updatedAt'
  | 'categories.heroImage.file.url'
  | 'categories.heroImage.file.fileName'
  | 'categories.heroImage.file.contentType'
  | 'categories.heroImage.title'
  | 'categories.heroImage.description'
  | 'categories.heroImage.node_locale'
  | 'categories.heroImage.sys.type'
  | 'categories.heroImage.sys.revision'
  | 'categories.heroImage.fixed.base64'
  | 'categories.heroImage.fixed.tracedSVG'
  | 'categories.heroImage.fixed.aspectRatio'
  | 'categories.heroImage.fixed.width'
  | 'categories.heroImage.fixed.height'
  | 'categories.heroImage.fixed.src'
  | 'categories.heroImage.fixed.srcSet'
  | 'categories.heroImage.fixed.srcWebp'
  | 'categories.heroImage.fixed.srcSetWebp'
  | 'categories.heroImage.fluid.base64'
  | 'categories.heroImage.fluid.tracedSVG'
  | 'categories.heroImage.fluid.aspectRatio'
  | 'categories.heroImage.fluid.src'
  | 'categories.heroImage.fluid.srcSet'
  | 'categories.heroImage.fluid.srcWebp'
  | 'categories.heroImage.fluid.srcSetWebp'
  | 'categories.heroImage.fluid.sizes'
  | 'categories.heroImage.gatsbyImageData'
  | 'categories.heroImage.resize.base64'
  | 'categories.heroImage.resize.tracedSVG'
  | 'categories.heroImage.resize.src'
  | 'categories.heroImage.resize.width'
  | 'categories.heroImage.resize.height'
  | 'categories.heroImage.resize.aspectRatio'
  | 'categories.heroImage.parent.id'
  | 'categories.heroImage.parent.children'
  | 'categories.heroImage.children'
  | 'categories.heroImage.children.id'
  | 'categories.heroImage.children.children'
  | 'categories.heroImage.internal.content'
  | 'categories.heroImage.internal.contentDigest'
  | 'categories.heroImage.internal.description'
  | 'categories.heroImage.internal.fieldOwners'
  | 'categories.heroImage.internal.ignoreType'
  | 'categories.heroImage.internal.mediaType'
  | 'categories.heroImage.internal.owner'
  | 'categories.heroImage.internal.type'
  | 'categories.product'
  | 'categories.product.contentful_id'
  | 'categories.product.id'
  | 'categories.product.node_locale'
  | 'categories.product.slug'
  | 'categories.product.sizetypecolor'
  | 'categories.product.tags'
  | 'categories.product.price'
  | 'categories.product.quantity'
  | 'categories.product.sku'
  | 'categories.product.website'
  | 'categories.product.categories'
  | 'categories.product.categories.contentful_id'
  | 'categories.product.categories.id'
  | 'categories.product.categories.node_locale'
  | 'categories.product.categories.product'
  | 'categories.product.categories.spaceId'
  | 'categories.product.categories.createdAt'
  | 'categories.product.categories.updatedAt'
  | 'categories.product.categories.childrenContentfulCategoryCategoryDescriptionTextNode'
  | 'categories.product.categories.childrenContentfulCategoryTitleTextNode'
  | 'categories.product.categories.children'
  | 'categories.product.brand.contentful_id'
  | 'categories.product.brand.id'
  | 'categories.product.brand.node_locale'
  | 'categories.product.brand.website'
  | 'categories.product.brand.product'
  | 'categories.product.brand.spaceId'
  | 'categories.product.brand.createdAt'
  | 'categories.product.brand.updatedAt'
  | 'categories.product.brand.email'
  | 'categories.product.brand.phone'
  | 'categories.product.brand.twitter'
  | 'categories.product.brand.childrenContentfulBrandCompanyDescriptionTextNode'
  | 'categories.product.brand.childrenContentfulBrandCompanyNameTextNode'
  | 'categories.product.brand.children'
  | 'categories.product.productName.id'
  | 'categories.product.productName.children'
  | 'categories.product.productName.productName'
  | 'categories.product.productDescription.id'
  | 'categories.product.productDescription.children'
  | 'categories.product.productDescription.productDescription'
  | 'categories.product.spaceId'
  | 'categories.product.createdAt'
  | 'categories.product.updatedAt'
  | 'categories.product.sys.type'
  | 'categories.product.sys.revision'
  | 'categories.product.childrenContentfulProductProductDescriptionTextNode'
  | 'categories.product.childrenContentfulProductProductDescriptionTextNode.id'
  | 'categories.product.childrenContentfulProductProductDescriptionTextNode.children'
  | 'categories.product.childrenContentfulProductProductDescriptionTextNode.productDescription'
  | 'categories.product.childContentfulProductProductDescriptionTextNode.id'
  | 'categories.product.childContentfulProductProductDescriptionTextNode.children'
  | 'categories.product.childContentfulProductProductDescriptionTextNode.productDescription'
  | 'categories.product.childrenContentfulProductProductNameTextNode'
  | 'categories.product.childrenContentfulProductProductNameTextNode.id'
  | 'categories.product.childrenContentfulProductProductNameTextNode.children'
  | 'categories.product.childrenContentfulProductProductNameTextNode.productName'
  | 'categories.product.childContentfulProductProductNameTextNode.id'
  | 'categories.product.childContentfulProductProductNameTextNode.children'
  | 'categories.product.childContentfulProductProductNameTextNode.productName'
  | 'categories.product.parent.id'
  | 'categories.product.parent.children'
  | 'categories.product.children'
  | 'categories.product.children.id'
  | 'categories.product.children.children'
  | 'categories.product.internal.content'
  | 'categories.product.internal.contentDigest'
  | 'categories.product.internal.description'
  | 'categories.product.internal.fieldOwners'
  | 'categories.product.internal.ignoreType'
  | 'categories.product.internal.mediaType'
  | 'categories.product.internal.owner'
  | 'categories.product.internal.type'
  | 'categories.title.id'
  | 'categories.title.parent.id'
  | 'categories.title.parent.children'
  | 'categories.title.children'
  | 'categories.title.children.id'
  | 'categories.title.children.children'
  | 'categories.title.internal.content'
  | 'categories.title.internal.contentDigest'
  | 'categories.title.internal.description'
  | 'categories.title.internal.fieldOwners'
  | 'categories.title.internal.ignoreType'
  | 'categories.title.internal.mediaType'
  | 'categories.title.internal.owner'
  | 'categories.title.internal.type'
  | 'categories.title.title'
  | 'categories.title.sys.type'
  | 'categories.categoryDescription.id'
  | 'categories.categoryDescription.parent.id'
  | 'categories.categoryDescription.parent.children'
  | 'categories.categoryDescription.children'
  | 'categories.categoryDescription.children.id'
  | 'categories.categoryDescription.children.children'
  | 'categories.categoryDescription.internal.content'
  | 'categories.categoryDescription.internal.contentDigest'
  | 'categories.categoryDescription.internal.description'
  | 'categories.categoryDescription.internal.fieldOwners'
  | 'categories.categoryDescription.internal.ignoreType'
  | 'categories.categoryDescription.internal.mediaType'
  | 'categories.categoryDescription.internal.owner'
  | 'categories.categoryDescription.internal.type'
  | 'categories.categoryDescription.categoryDescription'
  | 'categories.categoryDescription.sys.type'
  | 'categories.spaceId'
  | 'categories.createdAt'
  | 'categories.updatedAt'
  | 'categories.sys.type'
  | 'categories.sys.revision'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.id'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.parent.id'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.parent.children'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.children'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.children.id'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.children.children'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.content'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.contentDigest'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.description'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.fieldOwners'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.ignoreType'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.mediaType'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.owner'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.internal.type'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'categories.childrenContentfulCategoryCategoryDescriptionTextNode.sys.type'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.id'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.parent.id'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.parent.children'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.children'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.children.id'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.children.children'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.content'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.contentDigest'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.description'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.fieldOwners'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.ignoreType'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.mediaType'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.owner'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.internal.type'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.categoryDescription'
  | 'categories.childContentfulCategoryCategoryDescriptionTextNode.sys.type'
  | 'categories.childrenContentfulCategoryTitleTextNode'
  | 'categories.childrenContentfulCategoryTitleTextNode.id'
  | 'categories.childrenContentfulCategoryTitleTextNode.parent.id'
  | 'categories.childrenContentfulCategoryTitleTextNode.parent.children'
  | 'categories.childrenContentfulCategoryTitleTextNode.children'
  | 'categories.childrenContentfulCategoryTitleTextNode.children.id'
  | 'categories.childrenContentfulCategoryTitleTextNode.children.children'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.content'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.contentDigest'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.description'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.fieldOwners'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.ignoreType'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.mediaType'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.owner'
  | 'categories.childrenContentfulCategoryTitleTextNode.internal.type'
  | 'categories.childrenContentfulCategoryTitleTextNode.title'
  | 'categories.childrenContentfulCategoryTitleTextNode.sys.type'
  | 'categories.childContentfulCategoryTitleTextNode.id'
  | 'categories.childContentfulCategoryTitleTextNode.parent.id'
  | 'categories.childContentfulCategoryTitleTextNode.parent.children'
  | 'categories.childContentfulCategoryTitleTextNode.children'
  | 'categories.childContentfulCategoryTitleTextNode.children.id'
  | 'categories.childContentfulCategoryTitleTextNode.children.children'
  | 'categories.childContentfulCategoryTitleTextNode.internal.content'
  | 'categories.childContentfulCategoryTitleTextNode.internal.contentDigest'
  | 'categories.childContentfulCategoryTitleTextNode.internal.description'
  | 'categories.childContentfulCategoryTitleTextNode.internal.fieldOwners'
  | 'categories.childContentfulCategoryTitleTextNode.internal.ignoreType'
  | 'categories.childContentfulCategoryTitleTextNode.internal.mediaType'
  | 'categories.childContentfulCategoryTitleTextNode.internal.owner'
  | 'categories.childContentfulCategoryTitleTextNode.internal.type'
  | 'categories.childContentfulCategoryTitleTextNode.title'
  | 'categories.childContentfulCategoryTitleTextNode.sys.type'
  | 'categories.parent.id'
  | 'categories.parent.parent.id'
  | 'categories.parent.parent.children'
  | 'categories.parent.children'
  | 'categories.parent.children.id'
  | 'categories.parent.children.children'
  | 'categories.parent.internal.content'
  | 'categories.parent.internal.contentDigest'
  | 'categories.parent.internal.description'
  | 'categories.parent.internal.fieldOwners'
  | 'categories.parent.internal.ignoreType'
  | 'categories.parent.internal.mediaType'
  | 'categories.parent.internal.owner'
  | 'categories.parent.internal.type'
  | 'categories.children'
  | 'categories.children.id'
  | 'categories.children.parent.id'
  | 'categories.children.parent.children'
  | 'categories.children.children'
  | 'categories.children.children.id'
  | 'categories.children.children.children'
  | 'categories.children.internal.content'
  | 'categories.children.internal.contentDigest'
  | 'categories.children.internal.description'
  | 'categories.children.internal.fieldOwners'
  | 'categories.children.internal.ignoreType'
  | 'categories.children.internal.mediaType'
  | 'categories.children.internal.owner'
  | 'categories.children.internal.type'
  | 'categories.internal.content'
  | 'categories.internal.contentDigest'
  | 'categories.internal.description'
  | 'categories.internal.fieldOwners'
  | 'categories.internal.ignoreType'
  | 'categories.internal.mediaType'
  | 'categories.internal.owner'
  | 'categories.internal.type'
  | 'brand.contentful_id'
  | 'brand.id'
  | 'brand.node_locale'
  | 'brand.website'
  | 'brand.product'
  | 'brand.product.contentful_id'
  | 'brand.product.id'
  | 'brand.product.node_locale'
  | 'brand.product.slug'
  | 'brand.product.sizetypecolor'
  | 'brand.product.tags'
  | 'brand.product.price'
  | 'brand.product.quantity'
  | 'brand.product.sku'
  | 'brand.product.website'
  | 'brand.product.categories'
  | 'brand.product.categories.contentful_id'
  | 'brand.product.categories.id'
  | 'brand.product.categories.node_locale'
  | 'brand.product.categories.product'
  | 'brand.product.categories.spaceId'
  | 'brand.product.categories.createdAt'
  | 'brand.product.categories.updatedAt'
  | 'brand.product.categories.childrenContentfulCategoryCategoryDescriptionTextNode'
  | 'brand.product.categories.childrenContentfulCategoryTitleTextNode'
  | 'brand.product.categories.children'
  | 'brand.product.brand.contentful_id'
  | 'brand.product.brand.id'
  | 'brand.product.brand.node_locale'
  | 'brand.product.brand.website'
  | 'brand.product.brand.product'
  | 'brand.product.brand.spaceId'
  | 'brand.product.brand.createdAt'
  | 'brand.product.brand.updatedAt'
  | 'brand.product.brand.email'
  | 'brand.product.brand.phone'
  | 'brand.product.brand.twitter'
  | 'brand.product.brand.childrenContentfulBrandCompanyDescriptionTextNode'
  | 'brand.product.brand.childrenContentfulBrandCompanyNameTextNode'
  | 'brand.product.brand.children'
  | 'brand.product.productName.id'
  | 'brand.product.productName.children'
  | 'brand.product.productName.productName'
  | 'brand.product.productDescription.id'
  | 'brand.product.productDescription.children'
  | 'brand.product.productDescription.productDescription'
  | 'brand.product.spaceId'
  | 'brand.product.createdAt'
  | 'brand.product.updatedAt'
  | 'brand.product.sys.type'
  | 'brand.product.sys.revision'
  | 'brand.product.childrenContentfulProductProductDescriptionTextNode'
  | 'brand.product.childrenContentfulProductProductDescriptionTextNode.id'
  | 'brand.product.childrenContentfulProductProductDescriptionTextNode.children'
  | 'brand.product.childrenContentfulProductProductDescriptionTextNode.productDescription'
  | 'brand.product.childContentfulProductProductDescriptionTextNode.id'
  | 'brand.product.childContentfulProductProductDescriptionTextNode.children'
  | 'brand.product.childContentfulProductProductDescriptionTextNode.productDescription'
  | 'brand.product.childrenContentfulProductProductNameTextNode'
  | 'brand.product.childrenContentfulProductProductNameTextNode.id'
  | 'brand.product.childrenContentfulProductProductNameTextNode.children'
  | 'brand.product.childrenContentfulProductProductNameTextNode.productName'
  | 'brand.product.childContentfulProductProductNameTextNode.id'
  | 'brand.product.childContentfulProductProductNameTextNode.children'
  | 'brand.product.childContentfulProductProductNameTextNode.productName'
  | 'brand.product.parent.id'
  | 'brand.product.parent.children'
  | 'brand.product.children'
  | 'brand.product.children.id'
  | 'brand.product.children.children'
  | 'brand.product.internal.content'
  | 'brand.product.internal.contentDigest'
  | 'brand.product.internal.description'
  | 'brand.product.internal.fieldOwners'
  | 'brand.product.internal.ignoreType'
  | 'brand.product.internal.mediaType'
  | 'brand.product.internal.owner'
  | 'brand.product.internal.type'
  | 'brand.companyName.id'
  | 'brand.companyName.parent.id'
  | 'brand.companyName.parent.children'
  | 'brand.companyName.children'
  | 'brand.companyName.children.id'
  | 'brand.companyName.children.children'
  | 'brand.companyName.internal.content'
  | 'brand.companyName.internal.contentDigest'
  | 'brand.companyName.internal.description'
  | 'brand.companyName.internal.fieldOwners'
  | 'brand.companyName.internal.ignoreType'
  | 'brand.companyName.internal.mediaType'
  | 'brand.companyName.internal.owner'
  | 'brand.companyName.internal.type'
  | 'brand.companyName.companyName'
  | 'brand.companyName.sys.type'
  | 'brand.companyDescription.id'
  | 'brand.companyDescription.parent.id'
  | 'brand.companyDescription.parent.children'
  | 'brand.companyDescription.children'
  | 'brand.companyDescription.children.id'
  | 'brand.companyDescription.children.children'
  | 'brand.companyDescription.internal.content'
  | 'brand.companyDescription.internal.contentDigest'
  | 'brand.companyDescription.internal.description'
  | 'brand.companyDescription.internal.fieldOwners'
  | 'brand.companyDescription.internal.ignoreType'
  | 'brand.companyDescription.internal.mediaType'
  | 'brand.companyDescription.internal.owner'
  | 'brand.companyDescription.internal.type'
  | 'brand.companyDescription.companyDescription'
  | 'brand.companyDescription.sys.type'
  | 'brand.spaceId'
  | 'brand.createdAt'
  | 'brand.updatedAt'
  | 'brand.sys.type'
  | 'brand.sys.revision'
  | 'brand.email'
  | 'brand.phone'
  | 'brand.twitter'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.id'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.parent.id'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.parent.children'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.children'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.children.id'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.children.children'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.content'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.contentDigest'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.description'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.fieldOwners'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.ignoreType'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.mediaType'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.owner'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.internal.type'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'brand.childrenContentfulBrandCompanyDescriptionTextNode.sys.type'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.id'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.parent.id'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.parent.children'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.children'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.children.id'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.children.children'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.content'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.contentDigest'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.description'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.fieldOwners'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.ignoreType'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.mediaType'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.owner'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.internal.type'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.companyDescription'
  | 'brand.childContentfulBrandCompanyDescriptionTextNode.sys.type'
  | 'brand.childrenContentfulBrandCompanyNameTextNode'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.id'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.parent.id'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.parent.children'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.children'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.children.id'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.children.children'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.content'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.contentDigest'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.description'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.fieldOwners'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.ignoreType'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.mediaType'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.owner'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.internal.type'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.companyName'
  | 'brand.childrenContentfulBrandCompanyNameTextNode.sys.type'
  | 'brand.childContentfulBrandCompanyNameTextNode.id'
  | 'brand.childContentfulBrandCompanyNameTextNode.parent.id'
  | 'brand.childContentfulBrandCompanyNameTextNode.parent.children'
  | 'brand.childContentfulBrandCompanyNameTextNode.children'
  | 'brand.childContentfulBrandCompanyNameTextNode.children.id'
  | 'brand.childContentfulBrandCompanyNameTextNode.children.children'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.content'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.contentDigest'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.description'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.fieldOwners'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.ignoreType'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.mediaType'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.owner'
  | 'brand.childContentfulBrandCompanyNameTextNode.internal.type'
  | 'brand.childContentfulBrandCompanyNameTextNode.companyName'
  | 'brand.childContentfulBrandCompanyNameTextNode.sys.type'
  | 'brand.parent.id'
  | 'brand.parent.parent.id'
  | 'brand.parent.parent.children'
  | 'brand.parent.children'
  | 'brand.parent.children.id'
  | 'brand.parent.children.children'
  | 'brand.parent.internal.content'
  | 'brand.parent.internal.contentDigest'
  | 'brand.parent.internal.description'
  | 'brand.parent.internal.fieldOwners'
  | 'brand.parent.internal.ignoreType'
  | 'brand.parent.internal.mediaType'
  | 'brand.parent.internal.owner'
  | 'brand.parent.internal.type'
  | 'brand.children'
  | 'brand.children.id'
  | 'brand.children.parent.id'
  | 'brand.children.parent.children'
  | 'brand.children.children'
  | 'brand.children.children.id'
  | 'brand.children.children.children'
  | 'brand.children.internal.content'
  | 'brand.children.internal.contentDigest'
  | 'brand.children.internal.description'
  | 'brand.children.internal.fieldOwners'
  | 'brand.children.internal.ignoreType'
  | 'brand.children.internal.mediaType'
  | 'brand.children.internal.owner'
  | 'brand.children.internal.type'
  | 'brand.internal.content'
  | 'brand.internal.contentDigest'
  | 'brand.internal.description'
  | 'brand.internal.fieldOwners'
  | 'brand.internal.ignoreType'
  | 'brand.internal.mediaType'
  | 'brand.internal.owner'
  | 'brand.internal.type'
  | 'productName.id'
  | 'productName.parent.id'
  | 'productName.parent.parent.id'
  | 'productName.parent.parent.children'
  | 'productName.parent.children'
  | 'productName.parent.children.id'
  | 'productName.parent.children.children'
  | 'productName.parent.internal.content'
  | 'productName.parent.internal.contentDigest'
  | 'productName.parent.internal.description'
  | 'productName.parent.internal.fieldOwners'
  | 'productName.parent.internal.ignoreType'
  | 'productName.parent.internal.mediaType'
  | 'productName.parent.internal.owner'
  | 'productName.parent.internal.type'
  | 'productName.children'
  | 'productName.children.id'
  | 'productName.children.parent.id'
  | 'productName.children.parent.children'
  | 'productName.children.children'
  | 'productName.children.children.id'
  | 'productName.children.children.children'
  | 'productName.children.internal.content'
  | 'productName.children.internal.contentDigest'
  | 'productName.children.internal.description'
  | 'productName.children.internal.fieldOwners'
  | 'productName.children.internal.ignoreType'
  | 'productName.children.internal.mediaType'
  | 'productName.children.internal.owner'
  | 'productName.children.internal.type'
  | 'productName.internal.content'
  | 'productName.internal.contentDigest'
  | 'productName.internal.description'
  | 'productName.internal.fieldOwners'
  | 'productName.internal.ignoreType'
  | 'productName.internal.mediaType'
  | 'productName.internal.owner'
  | 'productName.internal.type'
  | 'productName.productName'
  | 'productName.sys.type'
  | 'productDescription.id'
  | 'productDescription.parent.id'
  | 'productDescription.parent.parent.id'
  | 'productDescription.parent.parent.children'
  | 'productDescription.parent.children'
  | 'productDescription.parent.children.id'
  | 'productDescription.parent.children.children'
  | 'productDescription.parent.internal.content'
  | 'productDescription.parent.internal.contentDigest'
  | 'productDescription.parent.internal.description'
  | 'productDescription.parent.internal.fieldOwners'
  | 'productDescription.parent.internal.ignoreType'
  | 'productDescription.parent.internal.mediaType'
  | 'productDescription.parent.internal.owner'
  | 'productDescription.parent.internal.type'
  | 'productDescription.children'
  | 'productDescription.children.id'
  | 'productDescription.children.parent.id'
  | 'productDescription.children.parent.children'
  | 'productDescription.children.children'
  | 'productDescription.children.children.id'
  | 'productDescription.children.children.children'
  | 'productDescription.children.internal.content'
  | 'productDescription.children.internal.contentDigest'
  | 'productDescription.children.internal.description'
  | 'productDescription.children.internal.fieldOwners'
  | 'productDescription.children.internal.ignoreType'
  | 'productDescription.children.internal.mediaType'
  | 'productDescription.children.internal.owner'
  | 'productDescription.children.internal.type'
  | 'productDescription.internal.content'
  | 'productDescription.internal.contentDigest'
  | 'productDescription.internal.description'
  | 'productDescription.internal.fieldOwners'
  | 'productDescription.internal.ignoreType'
  | 'productDescription.internal.mediaType'
  | 'productDescription.internal.owner'
  | 'productDescription.internal.type'
  | 'productDescription.productDescription'
  | 'productDescription.sys.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulProductProductDescriptionTextNode'
  | 'childrenContentfulProductProductDescriptionTextNode.id'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.id'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.children'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.children.id'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.children.children'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulProductProductDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulProductProductDescriptionTextNode.children'
  | 'childrenContentfulProductProductDescriptionTextNode.children.id'
  | 'childrenContentfulProductProductDescriptionTextNode.children.parent.id'
  | 'childrenContentfulProductProductDescriptionTextNode.children.parent.children'
  | 'childrenContentfulProductProductDescriptionTextNode.children.children'
  | 'childrenContentfulProductProductDescriptionTextNode.children.children.id'
  | 'childrenContentfulProductProductDescriptionTextNode.children.children.children'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.content'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.description'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulProductProductDescriptionTextNode.children.internal.type'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.content'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.description'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.owner'
  | 'childrenContentfulProductProductDescriptionTextNode.internal.type'
  | 'childrenContentfulProductProductDescriptionTextNode.productDescription'
  | 'childrenContentfulProductProductDescriptionTextNode.sys.type'
  | 'childContentfulProductProductDescriptionTextNode.id'
  | 'childContentfulProductProductDescriptionTextNode.parent.id'
  | 'childContentfulProductProductDescriptionTextNode.parent.parent.id'
  | 'childContentfulProductProductDescriptionTextNode.parent.parent.children'
  | 'childContentfulProductProductDescriptionTextNode.parent.children'
  | 'childContentfulProductProductDescriptionTextNode.parent.children.id'
  | 'childContentfulProductProductDescriptionTextNode.parent.children.children'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.content'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.description'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.owner'
  | 'childContentfulProductProductDescriptionTextNode.parent.internal.type'
  | 'childContentfulProductProductDescriptionTextNode.children'
  | 'childContentfulProductProductDescriptionTextNode.children.id'
  | 'childContentfulProductProductDescriptionTextNode.children.parent.id'
  | 'childContentfulProductProductDescriptionTextNode.children.parent.children'
  | 'childContentfulProductProductDescriptionTextNode.children.children'
  | 'childContentfulProductProductDescriptionTextNode.children.children.id'
  | 'childContentfulProductProductDescriptionTextNode.children.children.children'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.content'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.description'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.owner'
  | 'childContentfulProductProductDescriptionTextNode.children.internal.type'
  | 'childContentfulProductProductDescriptionTextNode.internal.content'
  | 'childContentfulProductProductDescriptionTextNode.internal.contentDigest'
  | 'childContentfulProductProductDescriptionTextNode.internal.description'
  | 'childContentfulProductProductDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulProductProductDescriptionTextNode.internal.ignoreType'
  | 'childContentfulProductProductDescriptionTextNode.internal.mediaType'
  | 'childContentfulProductProductDescriptionTextNode.internal.owner'
  | 'childContentfulProductProductDescriptionTextNode.internal.type'
  | 'childContentfulProductProductDescriptionTextNode.productDescription'
  | 'childContentfulProductProductDescriptionTextNode.sys.type'
  | 'childrenContentfulProductProductNameTextNode'
  | 'childrenContentfulProductProductNameTextNode.id'
  | 'childrenContentfulProductProductNameTextNode.parent.id'
  | 'childrenContentfulProductProductNameTextNode.parent.parent.id'
  | 'childrenContentfulProductProductNameTextNode.parent.parent.children'
  | 'childrenContentfulProductProductNameTextNode.parent.children'
  | 'childrenContentfulProductProductNameTextNode.parent.children.id'
  | 'childrenContentfulProductProductNameTextNode.parent.children.children'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.content'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.contentDigest'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.description'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.ignoreType'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.mediaType'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.owner'
  | 'childrenContentfulProductProductNameTextNode.parent.internal.type'
  | 'childrenContentfulProductProductNameTextNode.children'
  | 'childrenContentfulProductProductNameTextNode.children.id'
  | 'childrenContentfulProductProductNameTextNode.children.parent.id'
  | 'childrenContentfulProductProductNameTextNode.children.parent.children'
  | 'childrenContentfulProductProductNameTextNode.children.children'
  | 'childrenContentfulProductProductNameTextNode.children.children.id'
  | 'childrenContentfulProductProductNameTextNode.children.children.children'
  | 'childrenContentfulProductProductNameTextNode.children.internal.content'
  | 'childrenContentfulProductProductNameTextNode.children.internal.contentDigest'
  | 'childrenContentfulProductProductNameTextNode.children.internal.description'
  | 'childrenContentfulProductProductNameTextNode.children.internal.fieldOwners'
  | 'childrenContentfulProductProductNameTextNode.children.internal.ignoreType'
  | 'childrenContentfulProductProductNameTextNode.children.internal.mediaType'
  | 'childrenContentfulProductProductNameTextNode.children.internal.owner'
  | 'childrenContentfulProductProductNameTextNode.children.internal.type'
  | 'childrenContentfulProductProductNameTextNode.internal.content'
  | 'childrenContentfulProductProductNameTextNode.internal.contentDigest'
  | 'childrenContentfulProductProductNameTextNode.internal.description'
  | 'childrenContentfulProductProductNameTextNode.internal.fieldOwners'
  | 'childrenContentfulProductProductNameTextNode.internal.ignoreType'
  | 'childrenContentfulProductProductNameTextNode.internal.mediaType'
  | 'childrenContentfulProductProductNameTextNode.internal.owner'
  | 'childrenContentfulProductProductNameTextNode.internal.type'
  | 'childrenContentfulProductProductNameTextNode.productName'
  | 'childrenContentfulProductProductNameTextNode.sys.type'
  | 'childContentfulProductProductNameTextNode.id'
  | 'childContentfulProductProductNameTextNode.parent.id'
  | 'childContentfulProductProductNameTextNode.parent.parent.id'
  | 'childContentfulProductProductNameTextNode.parent.parent.children'
  | 'childContentfulProductProductNameTextNode.parent.children'
  | 'childContentfulProductProductNameTextNode.parent.children.id'
  | 'childContentfulProductProductNameTextNode.parent.children.children'
  | 'childContentfulProductProductNameTextNode.parent.internal.content'
  | 'childContentfulProductProductNameTextNode.parent.internal.contentDigest'
  | 'childContentfulProductProductNameTextNode.parent.internal.description'
  | 'childContentfulProductProductNameTextNode.parent.internal.fieldOwners'
  | 'childContentfulProductProductNameTextNode.parent.internal.ignoreType'
  | 'childContentfulProductProductNameTextNode.parent.internal.mediaType'
  | 'childContentfulProductProductNameTextNode.parent.internal.owner'
  | 'childContentfulProductProductNameTextNode.parent.internal.type'
  | 'childContentfulProductProductNameTextNode.children'
  | 'childContentfulProductProductNameTextNode.children.id'
  | 'childContentfulProductProductNameTextNode.children.parent.id'
  | 'childContentfulProductProductNameTextNode.children.parent.children'
  | 'childContentfulProductProductNameTextNode.children.children'
  | 'childContentfulProductProductNameTextNode.children.children.id'
  | 'childContentfulProductProductNameTextNode.children.children.children'
  | 'childContentfulProductProductNameTextNode.children.internal.content'
  | 'childContentfulProductProductNameTextNode.children.internal.contentDigest'
  | 'childContentfulProductProductNameTextNode.children.internal.description'
  | 'childContentfulProductProductNameTextNode.children.internal.fieldOwners'
  | 'childContentfulProductProductNameTextNode.children.internal.ignoreType'
  | 'childContentfulProductProductNameTextNode.children.internal.mediaType'
  | 'childContentfulProductProductNameTextNode.children.internal.owner'
  | 'childContentfulProductProductNameTextNode.children.internal.type'
  | 'childContentfulProductProductNameTextNode.internal.content'
  | 'childContentfulProductProductNameTextNode.internal.contentDigest'
  | 'childContentfulProductProductNameTextNode.internal.description'
  | 'childContentfulProductProductNameTextNode.internal.fieldOwners'
  | 'childContentfulProductProductNameTextNode.internal.ignoreType'
  | 'childContentfulProductProductNameTextNode.internal.mediaType'
  | 'childContentfulProductProductNameTextNode.internal.owner'
  | 'childContentfulProductProductNameTextNode.internal.type'
  | 'childContentfulProductProductNameTextNode.productName'
  | 'childContentfulProductProductNameTextNode.sys.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulProductGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulProductEdge>;
  readonly nodes: ReadonlyArray<ContentfulProduct>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulProductSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulProductFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPageSubheadingTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly subheading: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPageSubheadingTextNodeSysFilterInput>;
};

type contentfulPageSubheadingTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulPageSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

type ContentfulPageSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

type ContentfulPageSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulPageSubheadingTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPageSubheadingTextNodeFilterInput>;
};

type ContentfulPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageEdge>;
  readonly nodes: ReadonlyArray<ContentfulPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulPageGroupConnection>;
};


type ContentfulPageConnection_distinctArgs = {
  field: ContentfulPageFieldsEnum;
};


type ContentfulPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

type ContentfulPageEdge = {
  readonly next: Maybe<ContentfulPage>;
  readonly node: ContentfulPage;
  readonly previous: Maybe<ContentfulPage>;
};

type ContentfulPageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'subheading.id'
  | 'subheading.parent.id'
  | 'subheading.parent.parent.id'
  | 'subheading.parent.parent.children'
  | 'subheading.parent.children'
  | 'subheading.parent.children.id'
  | 'subheading.parent.children.children'
  | 'subheading.parent.internal.content'
  | 'subheading.parent.internal.contentDigest'
  | 'subheading.parent.internal.description'
  | 'subheading.parent.internal.fieldOwners'
  | 'subheading.parent.internal.ignoreType'
  | 'subheading.parent.internal.mediaType'
  | 'subheading.parent.internal.owner'
  | 'subheading.parent.internal.type'
  | 'subheading.children'
  | 'subheading.children.id'
  | 'subheading.children.parent.id'
  | 'subheading.children.parent.children'
  | 'subheading.children.children'
  | 'subheading.children.children.id'
  | 'subheading.children.children.children'
  | 'subheading.children.internal.content'
  | 'subheading.children.internal.contentDigest'
  | 'subheading.children.internal.description'
  | 'subheading.children.internal.fieldOwners'
  | 'subheading.children.internal.ignoreType'
  | 'subheading.children.internal.mediaType'
  | 'subheading.children.internal.owner'
  | 'subheading.children.internal.type'
  | 'subheading.internal.content'
  | 'subheading.internal.contentDigest'
  | 'subheading.internal.description'
  | 'subheading.internal.fieldOwners'
  | 'subheading.internal.ignoreType'
  | 'subheading.internal.mediaType'
  | 'subheading.internal.owner'
  | 'subheading.internal.type'
  | 'subheading.subheading'
  | 'subheading.sys.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulPageSubheadingTextNode'
  | 'childrenContentfulPageSubheadingTextNode.id'
  | 'childrenContentfulPageSubheadingTextNode.parent.id'
  | 'childrenContentfulPageSubheadingTextNode.parent.parent.id'
  | 'childrenContentfulPageSubheadingTextNode.parent.parent.children'
  | 'childrenContentfulPageSubheadingTextNode.parent.children'
  | 'childrenContentfulPageSubheadingTextNode.parent.children.id'
  | 'childrenContentfulPageSubheadingTextNode.parent.children.children'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.content'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.description'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.mediaType'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.owner'
  | 'childrenContentfulPageSubheadingTextNode.parent.internal.type'
  | 'childrenContentfulPageSubheadingTextNode.children'
  | 'childrenContentfulPageSubheadingTextNode.children.id'
  | 'childrenContentfulPageSubheadingTextNode.children.parent.id'
  | 'childrenContentfulPageSubheadingTextNode.children.parent.children'
  | 'childrenContentfulPageSubheadingTextNode.children.children'
  | 'childrenContentfulPageSubheadingTextNode.children.children.id'
  | 'childrenContentfulPageSubheadingTextNode.children.children.children'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.content'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.contentDigest'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.description'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.ignoreType'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.mediaType'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.owner'
  | 'childrenContentfulPageSubheadingTextNode.children.internal.type'
  | 'childrenContentfulPageSubheadingTextNode.internal.content'
  | 'childrenContentfulPageSubheadingTextNode.internal.contentDigest'
  | 'childrenContentfulPageSubheadingTextNode.internal.description'
  | 'childrenContentfulPageSubheadingTextNode.internal.fieldOwners'
  | 'childrenContentfulPageSubheadingTextNode.internal.ignoreType'
  | 'childrenContentfulPageSubheadingTextNode.internal.mediaType'
  | 'childrenContentfulPageSubheadingTextNode.internal.owner'
  | 'childrenContentfulPageSubheadingTextNode.internal.type'
  | 'childrenContentfulPageSubheadingTextNode.subheading'
  | 'childrenContentfulPageSubheadingTextNode.sys.type'
  | 'childContentfulPageSubheadingTextNode.id'
  | 'childContentfulPageSubheadingTextNode.parent.id'
  | 'childContentfulPageSubheadingTextNode.parent.parent.id'
  | 'childContentfulPageSubheadingTextNode.parent.parent.children'
  | 'childContentfulPageSubheadingTextNode.parent.children'
  | 'childContentfulPageSubheadingTextNode.parent.children.id'
  | 'childContentfulPageSubheadingTextNode.parent.children.children'
  | 'childContentfulPageSubheadingTextNode.parent.internal.content'
  | 'childContentfulPageSubheadingTextNode.parent.internal.contentDigest'
  | 'childContentfulPageSubheadingTextNode.parent.internal.description'
  | 'childContentfulPageSubheadingTextNode.parent.internal.fieldOwners'
  | 'childContentfulPageSubheadingTextNode.parent.internal.ignoreType'
  | 'childContentfulPageSubheadingTextNode.parent.internal.mediaType'
  | 'childContentfulPageSubheadingTextNode.parent.internal.owner'
  | 'childContentfulPageSubheadingTextNode.parent.internal.type'
  | 'childContentfulPageSubheadingTextNode.children'
  | 'childContentfulPageSubheadingTextNode.children.id'
  | 'childContentfulPageSubheadingTextNode.children.parent.id'
  | 'childContentfulPageSubheadingTextNode.children.parent.children'
  | 'childContentfulPageSubheadingTextNode.children.children'
  | 'childContentfulPageSubheadingTextNode.children.children.id'
  | 'childContentfulPageSubheadingTextNode.children.children.children'
  | 'childContentfulPageSubheadingTextNode.children.internal.content'
  | 'childContentfulPageSubheadingTextNode.children.internal.contentDigest'
  | 'childContentfulPageSubheadingTextNode.children.internal.description'
  | 'childContentfulPageSubheadingTextNode.children.internal.fieldOwners'
  | 'childContentfulPageSubheadingTextNode.children.internal.ignoreType'
  | 'childContentfulPageSubheadingTextNode.children.internal.mediaType'
  | 'childContentfulPageSubheadingTextNode.children.internal.owner'
  | 'childContentfulPageSubheadingTextNode.children.internal.type'
  | 'childContentfulPageSubheadingTextNode.internal.content'
  | 'childContentfulPageSubheadingTextNode.internal.contentDigest'
  | 'childContentfulPageSubheadingTextNode.internal.description'
  | 'childContentfulPageSubheadingTextNode.internal.fieldOwners'
  | 'childContentfulPageSubheadingTextNode.internal.ignoreType'
  | 'childContentfulPageSubheadingTextNode.internal.mediaType'
  | 'childContentfulPageSubheadingTextNode.internal.owner'
  | 'childContentfulPageSubheadingTextNode.internal.type'
  | 'childContentfulPageSubheadingTextNode.subheading'
  | 'childContentfulPageSubheadingTextNode.sys.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageEdge>;
  readonly nodes: ReadonlyArray<ContentfulPage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulPageFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subheading: Maybe<contentfulPageSubheadingTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPageSysFilterInput>;
  readonly childrenContentfulPageSubheadingTextNode: Maybe<contentfulPageSubheadingTextNodeFilterListInput>;
  readonly childContentfulPageSubheadingTextNode: Maybe<contentfulPageSubheadingTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPageSubheadingTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageSubheadingTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageSubheadingTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulPageSubheadingTextNodeGroupConnection>;
};


type contentfulPageSubheadingTextNodeConnection_distinctArgs = {
  field: contentfulPageSubheadingTextNodeFieldsEnum;
};


type contentfulPageSubheadingTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPageSubheadingTextNodeFieldsEnum;
};

type contentfulPageSubheadingTextNodeEdge = {
  readonly next: Maybe<contentfulPageSubheadingTextNode>;
  readonly node: contentfulPageSubheadingTextNode;
  readonly previous: Maybe<contentfulPageSubheadingTextNode>;
};

type contentfulPageSubheadingTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'subheading'
  | 'sys.type';

type contentfulPageSubheadingTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageSubheadingTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageSubheadingTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulPageSubheadingTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPageSubheadingTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulProductProductDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulProductProductDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulProductProductDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulProductProductDescriptionTextNodeGroupConnection>;
};


type contentfulProductProductDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulProductProductDescriptionTextNodeFieldsEnum;
};


type contentfulProductProductDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulProductProductDescriptionTextNodeFieldsEnum;
};

type contentfulProductProductDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulProductProductDescriptionTextNode>;
  readonly node: contentfulProductProductDescriptionTextNode;
  readonly previous: Maybe<contentfulProductProductDescriptionTextNode>;
};

type contentfulProductProductDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'productDescription'
  | 'sys.type';

type contentfulProductProductDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulProductProductDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulProductProductDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulProductProductDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulProductProductDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulProductProductNameTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulProductProductNameTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulProductProductNameTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulProductProductNameTextNodeGroupConnection>;
};


type contentfulProductProductNameTextNodeConnection_distinctArgs = {
  field: contentfulProductProductNameTextNodeFieldsEnum;
};


type contentfulProductProductNameTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulProductProductNameTextNodeFieldsEnum;
};

type contentfulProductProductNameTextNodeEdge = {
  readonly next: Maybe<contentfulProductProductNameTextNode>;
  readonly node: contentfulProductProductNameTextNode;
  readonly previous: Maybe<contentfulProductProductNameTextNode>;
};

type contentfulProductProductNameTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'productName'
  | 'sys.type';

type contentfulProductProductNameTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulProductProductNameTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulProductProductNameTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulProductProductNameTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulProductProductNameTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulBrandCompanyDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBrandCompanyDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBrandCompanyDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulBrandCompanyDescriptionTextNodeGroupConnection>;
};


type contentfulBrandCompanyDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulBrandCompanyDescriptionTextNodeFieldsEnum;
};


type contentfulBrandCompanyDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBrandCompanyDescriptionTextNodeFieldsEnum;
};

type contentfulBrandCompanyDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulBrandCompanyDescriptionTextNode>;
  readonly node: contentfulBrandCompanyDescriptionTextNode;
  readonly previous: Maybe<contentfulBrandCompanyDescriptionTextNode>;
};

type contentfulBrandCompanyDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'companyDescription'
  | 'sys.type';

type contentfulBrandCompanyDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBrandCompanyDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBrandCompanyDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulBrandCompanyDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBrandCompanyDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulBrandCompanyNameTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBrandCompanyNameTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBrandCompanyNameTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulBrandCompanyNameTextNodeGroupConnection>;
};


type contentfulBrandCompanyNameTextNodeConnection_distinctArgs = {
  field: contentfulBrandCompanyNameTextNodeFieldsEnum;
};


type contentfulBrandCompanyNameTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBrandCompanyNameTextNodeFieldsEnum;
};

type contentfulBrandCompanyNameTextNodeEdge = {
  readonly next: Maybe<contentfulBrandCompanyNameTextNode>;
  readonly node: contentfulBrandCompanyNameTextNode;
  readonly previous: Maybe<contentfulBrandCompanyNameTextNode>;
};

type contentfulBrandCompanyNameTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'companyName'
  | 'sys.type';

type contentfulBrandCompanyNameTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBrandCompanyNameTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBrandCompanyNameTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulBrandCompanyNameTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBrandCompanyNameTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulCategoryCategoryDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulCategoryCategoryDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulCategoryCategoryDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulCategoryCategoryDescriptionTextNodeGroupConnection>;
};


type contentfulCategoryCategoryDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulCategoryCategoryDescriptionTextNodeFieldsEnum;
};


type contentfulCategoryCategoryDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulCategoryCategoryDescriptionTextNodeFieldsEnum;
};

type contentfulCategoryCategoryDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulCategoryCategoryDescriptionTextNode>;
  readonly node: contentfulCategoryCategoryDescriptionTextNode;
  readonly previous: Maybe<contentfulCategoryCategoryDescriptionTextNode>;
};

type contentfulCategoryCategoryDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'categoryDescription'
  | 'sys.type';

type contentfulCategoryCategoryDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulCategoryCategoryDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulCategoryCategoryDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulCategoryCategoryDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulCategoryCategoryDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulCategoryTitleTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulCategoryTitleTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulCategoryTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulCategoryTitleTextNodeGroupConnection>;
};


type contentfulCategoryTitleTextNodeConnection_distinctArgs = {
  field: contentfulCategoryTitleTextNodeFieldsEnum;
};


type contentfulCategoryTitleTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulCategoryTitleTextNodeFieldsEnum;
};

type contentfulCategoryTitleTextNodeEdge = {
  readonly next: Maybe<contentfulCategoryTitleTextNode>;
  readonly node: contentfulCategoryTitleTextNode;
  readonly previous: Maybe<contentfulCategoryTitleTextNode>;
};

type contentfulCategoryTitleTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'title'
  | 'sys.type';

type contentfulCategoryTitleTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulCategoryTitleTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulCategoryTitleTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulCategoryTitleTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulCategoryTitleTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.accessToken'
  | 'pluginOptions.spaceId'
  | 'pluginOptions.host'
  | 'pluginOptions.environment'
  | 'pluginOptions.downloadLocal'
  | 'pluginOptions.forceFullSync'
  | 'pluginOptions.pageLimit'
  | 'pluginOptions.assetDownloadWorkers'
  | 'pluginOptions.useNameForId'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = { readonly contentfulPage: Maybe<(
    Pick<ContentfulPage, 'title'>
    & { readonly subheading: Maybe<Pick<contentfulPageSubheadingTextNode, 'subheading'>> }
  )>, readonly allContentfulCategory: { readonly nodes: ReadonlyArray<{ readonly title: Maybe<Pick<contentfulCategoryTitleTextNode, 'title'>> }> }, readonly allContentfulProduct: { readonly nodes: ReadonlyArray<{ readonly productDescription: Maybe<Pick<contentfulProductProductDescriptionTextNode, 'id' | 'productDescription'>> }> } };

}