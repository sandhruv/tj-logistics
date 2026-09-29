import content from "../lib/content";

export default function Page({ name }) {
  return <div dangerouslySetInnerHTML={{ __html: content.mains[name] }} />;
}
