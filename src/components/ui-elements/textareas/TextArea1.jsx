export default function TextArea1() {
  return (
    <>
      <div className="ui-content mb40">
        <div className="form-style1">
          <label className="form-label fw500 fz16 dark-color">Textarea</label>
          <textarea
            name="text"
            cols={30}
            rows={7}
            defaultValue={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            }
          />
        </div>
      </div>
    </>
  );
}
