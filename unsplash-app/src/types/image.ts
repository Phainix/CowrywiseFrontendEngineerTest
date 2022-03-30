interface Image {
  blur_hash: string;
  id: string;
  width: number;
  height: number;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
    location: string;
    bio: string;
  };
}

export { Image };
