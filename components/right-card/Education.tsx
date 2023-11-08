function Education() {
  return (
    <section className="font-light">
      <code>
        &#123;
        <br />
        <KeyValuePair k="Highest Degree" v="Bachelor of Technology" />
        <br />
        <KeyValuePair k="CGPA" v="8.98" />
        <br />
        <KeyValuePair k="Higher Secondary" v="CBSE Board" />
        <br />
        <KeyValuePair k="Percentage" v="74.3%" />
        <br />
        <KeyValuePair k="Secondary" v="CBSE Board" />
        <br />
        <KeyValuePair k="CGPA" v="9.4" />
        <br />
        &#125;
      </code>
    </section>
  );
}

export default Education;
const KeyValuePair = ({ k, v }: { k: string; v: string }) => (
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;{k}:&nbsp;
    <span className="text-primary">{v}</span>
  </>
);
