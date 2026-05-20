import { getImageById } from "@/lib/pixabay";

type Props = {
  params: Promise<{ imageId: string }>;
};

export default async function ImageDetailsPage({ params }: Props) {
  const { imageId } = await params;
  const image = await getImageById(imageId);
  return (
    <div>
      <h1>Image Details for ID: {image.id}</h1>
      <img src={image.largeImageURL} alt={`Image ${image.id}`} width="600" />
      <p>Views: {image.views}</p>
      <p>Downloads: {image.downloads}</p>
      <p>Favorites: {image.favorites}</p>
      <p>Likes: {image.likes}</p>
      <p>Comments: {image.comments}</p>
    </div>
  );
}
