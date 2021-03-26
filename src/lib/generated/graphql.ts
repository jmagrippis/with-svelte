export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  seriesCollection?: Maybe<SeriesCollection>;
  lessonCollection?: Maybe<LessonCollection>;
  personCollection?: Maybe<PersonCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsSeriesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsLessonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}



export type Entry = {
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};

/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type Lesson = Entry & {
  __typename?: 'Lesson';
  sys: Sys;
  linkedFrom?: Maybe<LessonLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  description?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  teacher?: Maybe<Person>;
  series?: Maybe<Series>;
  publishDate?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonBodyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonTeacherArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonSeriesArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonPublishDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A lesson can optionally belong to a series! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/lesson) */
export type LessonTagsArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type LessonCollection = {
  __typename?: 'LessonCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Lesson>>;
};

export type LessonFilter = {
  teacher?: Maybe<CfPersonNestedFilter>;
  series?: Maybe<CfSeriesNestedFilter>;
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  body_exists?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  teacher_exists?: Maybe<Scalars['Boolean']>;
  series_exists?: Maybe<Scalars['Boolean']>;
  publishDate_exists?: Maybe<Scalars['Boolean']>;
  publishDate?: Maybe<Scalars['DateTime']>;
  publishDate_not?: Maybe<Scalars['DateTime']>;
  publishDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishDate_gt?: Maybe<Scalars['DateTime']>;
  publishDate_gte?: Maybe<Scalars['DateTime']>;
  publishDate_lt?: Maybe<Scalars['DateTime']>;
  publishDate_lte?: Maybe<Scalars['DateTime']>;
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<LessonFilter>>>;
  AND?: Maybe<Array<Maybe<LessonFilter>>>;
};

export type LessonLinkingCollections = {
  __typename?: 'LessonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  seriesCollection?: Maybe<SeriesCollection>;
  personCollection?: Maybe<PersonCollection>;
};


export type LessonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type LessonLinkingCollectionsSeriesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type LessonLinkingCollectionsPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum LessonOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  sys: Sys;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Asset>;
  email?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  clubhouse?: Maybe<Scalars['String']>;
  lessonsCollection?: Maybe<PersonLessonsCollection>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonAvatarArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonEmailArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonTwitterArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonGithubArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonInstagramArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonClubhouseArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The author of this lesson [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/person) */
export type PersonLessonsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PersonCollection = {
  __typename?: 'PersonCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Person>>;
};

export type PersonFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  avatar_exists?: Maybe<Scalars['Boolean']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  github_exists?: Maybe<Scalars['Boolean']>;
  github?: Maybe<Scalars['String']>;
  github_not?: Maybe<Scalars['String']>;
  github_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  github_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  github_contains?: Maybe<Scalars['String']>;
  github_not_contains?: Maybe<Scalars['String']>;
  instagram_exists?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  instagram_not?: Maybe<Scalars['String']>;
  instagram_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_contains?: Maybe<Scalars['String']>;
  instagram_not_contains?: Maybe<Scalars['String']>;
  clubhouse_exists?: Maybe<Scalars['Boolean']>;
  clubhouse?: Maybe<Scalars['String']>;
  clubhouse_not?: Maybe<Scalars['String']>;
  clubhouse_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clubhouse_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clubhouse_contains?: Maybe<Scalars['String']>;
  clubhouse_not_contains?: Maybe<Scalars['String']>;
  lessonsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PersonFilter>>>;
  AND?: Maybe<Array<Maybe<PersonFilter>>>;
};

export type PersonLessonsCollection = {
  __typename?: 'PersonLessonsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Lesson>>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  lessonCollection?: Maybe<LessonCollection>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PersonLinkingCollectionsLessonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PersonOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  InstagramAsc = 'instagram_ASC',
  InstagramDesc = 'instagram_DESC',
  ClubhouseAsc = 'clubhouse_ASC',
  ClubhouseDesc = 'clubhouse_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  series?: Maybe<Series>;
  seriesCollection?: Maybe<SeriesCollection>;
  lesson?: Maybe<Lesson>;
  lessonCollection?: Maybe<LessonCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QuerySeriesArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySeriesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SeriesFilter>;
  order?: Maybe<Array<Maybe<SeriesOrder>>>;
};


export type QueryLessonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLessonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LessonFilter>;
  order?: Maybe<Array<Maybe<LessonOrder>>>;
};


export type QueryPersonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PersonFilter>;
  order?: Maybe<Array<Maybe<PersonOrder>>>;
};

/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type Series = Entry & {
  __typename?: 'Series';
  sys: Sys;
  linkedFrom?: Maybe<SeriesLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  description?: Maybe<Scalars['String']>;
  lessonsCollection?: Maybe<SeriesLessonsCollection>;
  latestUpdate?: Maybe<Scalars['DateTime']>;
};


/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type SeriesLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type SeriesTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type SeriesSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type SeriesHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type SeriesDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type SeriesLessonsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Groups many lessons together! [See type definition](https://app.contentful.com/spaces/0cavhlc3zk3k/content_types/series) */
export type SeriesLatestUpdateArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SeriesCollection = {
  __typename?: 'SeriesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Series>>;
};

export type SeriesFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  lessonsCollection_exists?: Maybe<Scalars['Boolean']>;
  latestUpdate_exists?: Maybe<Scalars['Boolean']>;
  latestUpdate?: Maybe<Scalars['DateTime']>;
  latestUpdate_not?: Maybe<Scalars['DateTime']>;
  latestUpdate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  latestUpdate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  latestUpdate_gt?: Maybe<Scalars['DateTime']>;
  latestUpdate_gte?: Maybe<Scalars['DateTime']>;
  latestUpdate_lt?: Maybe<Scalars['DateTime']>;
  latestUpdate_lte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<Maybe<SeriesFilter>>>;
  AND?: Maybe<Array<Maybe<SeriesFilter>>>;
};

export type SeriesLessonsCollection = {
  __typename?: 'SeriesLessonsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Lesson>>;
};

export type SeriesLinkingCollections = {
  __typename?: 'SeriesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  lessonCollection?: Maybe<LessonCollection>;
};


export type SeriesLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SeriesLinkingCollectionsLessonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum SeriesOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  LatestUpdateAsc = 'latestUpdate_ASC',
  LatestUpdateDesc = 'latestUpdate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export type CfPersonNestedFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  avatar_exists?: Maybe<Scalars['Boolean']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  github_exists?: Maybe<Scalars['Boolean']>;
  github?: Maybe<Scalars['String']>;
  github_not?: Maybe<Scalars['String']>;
  github_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  github_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  github_contains?: Maybe<Scalars['String']>;
  github_not_contains?: Maybe<Scalars['String']>;
  instagram_exists?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  instagram_not?: Maybe<Scalars['String']>;
  instagram_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_contains?: Maybe<Scalars['String']>;
  instagram_not_contains?: Maybe<Scalars['String']>;
  clubhouse_exists?: Maybe<Scalars['Boolean']>;
  clubhouse?: Maybe<Scalars['String']>;
  clubhouse_not?: Maybe<Scalars['String']>;
  clubhouse_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clubhouse_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clubhouse_contains?: Maybe<Scalars['String']>;
  clubhouse_not_contains?: Maybe<Scalars['String']>;
  lessonsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfPersonNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfPersonNestedFilter>>>;
};

export type CfSeriesNestedFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  lessonsCollection_exists?: Maybe<Scalars['Boolean']>;
  latestUpdate_exists?: Maybe<Scalars['Boolean']>;
  latestUpdate?: Maybe<Scalars['DateTime']>;
  latestUpdate_not?: Maybe<Scalars['DateTime']>;
  latestUpdate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  latestUpdate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  latestUpdate_gt?: Maybe<Scalars['DateTime']>;
  latestUpdate_gte?: Maybe<Scalars['DateTime']>;
  latestUpdate_lt?: Maybe<Scalars['DateTime']>;
  latestUpdate_lte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<Maybe<CfSeriesNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSeriesNestedFilter>>>;
};

export type CoreSeriesFieldsFragment = (
  { __typename?: 'Series' }
  & Pick<Series, 'title' | 'slug' | 'description'>
  & { heroImage?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'title' | 'width' | 'height' | 'url'>
  )>, lessonsCollection?: Maybe<(
    { __typename?: 'SeriesLessonsCollection' }
    & Pick<SeriesLessonsCollection, 'total'>
  )> }
);

export type LatestSeriesQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestSeriesQuery = (
  { __typename?: 'Query' }
  & { seriesCollection?: Maybe<(
    { __typename?: 'SeriesCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Series' }
      & CoreSeriesFieldsFragment
    )>> }
  )> }
);
