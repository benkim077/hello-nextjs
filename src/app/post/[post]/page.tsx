type Props = {
  params: { post: string };
};

export default function Post({ params }: Props) {
  return <h1>{params.post}</h1>;
}
