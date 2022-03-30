export interface Image {
  blur_hash: string;
  id: string;
  urls: {
    regular: string;
    thumbnail: string;
  }, 
  user: {
    name: string;
    location: string;
  }
}