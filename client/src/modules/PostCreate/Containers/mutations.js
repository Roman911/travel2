import { gql } from 'apollo-boost';

export const addPostMutation = gql`
  mutation addPost(
    $coordinateX: String,
    $coordinateY: String,
    $cover: String,
    $idAuthor: ID,
    $link: String,
    $photo: String,
    $price: String,
    $small_text: String,
    $text: String,
    $title: String,
    $type_material: String
  ) {
    addPost(
      coordinateX: $coordinateX,
      coordinateY: $coordinateY,
      cover: $cover,
      idAuthor: $idAuthor,
      link: $link,
      photo: $photo,
      price: $price,
      small_text: $small_text,
      text: $text,
      title: $title,
      type_material: $type_material
    ) {
      coordinateX
      coordinateY
      cover
      idAuthor
      link
      photo
      price
      small_text
      text
      title
      type_material
    }
  }
`;