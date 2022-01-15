import { Spinner } from "solid-bootstrap";
import { createEffect, createSignal, Index } from "solid-js";
import JishoAPI from "unofficial-jisho-api";

/**
 *  reusable component to get kanji and word definitions in a popover style.
 */

//TODO: start with backend to avoid CORS .

type JishoProps = {
  word: string;
};
export const JishoPopover = (props: JishoProps) => {
  const [wordData, setWordData] = createSignal([]);
  const [isLoading, setIsLoading] = createSignal(false);
  const jisho = new JishoAPI();

  createEffect(() => {
    loadDataFromJisho();
  });

  const loadDataFromJisho = async () => {
    setIsLoading(true);
    let wordData = await jisho.searchForPhrase(props.word);
    console.log(wordData);
    setWordData(wordData.data);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading() ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <Index each={wordData()}>
            {(word, i) => (
              <>
                <div class="main">
                  <div>
                    <p>
                      {word().jlpt.length
                        ? `${word().jlpt}`.replace("jlpt-", "")
                        : "unknown jlpt level"}
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>{word().is_common ? <strong>CW</strong> : ""}</div>
                    __
                    <div>
                      <strong>{word().senses[0].parts_of_speech[0]}</strong>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            )}
          </Index>
        </div>
      )}
    </>
  );
};
