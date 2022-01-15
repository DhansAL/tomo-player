import { Spinner } from "solid-bootstrap";
import { createEffect, createSignal, For, Index } from "solid-js";
import JishoAPI from "unofficial-jisho-api";
import { Kandict } from "./Kandict";

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

  const loadDataFromJisho = async () => {
    setIsLoading(true);
    let wordData = await jisho.searchForPhrase(props.word);
    console.log(wordData);
    setWordData(wordData.data);
    setIsLoading(false);
  };
  createEffect(() => {
    loadDataFromJisho();
  });

  /** kanDict utils */
  const [showKandict, setShowKandict] = createSignal(false);
  const [kanjiServed, setKanjiServed] = createSignal<null | string>(null);

  const handleKanjiShow = () => {
    setShowKandict(false);
  };
  //regex to underline&search only kanji characters
  const regex = /[\u3000-\u303f\u3040-\u309f]|[\u30a0-\u30ff]/;

  return (
    <>
      {isLoading() ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : showKandict() ? (
        //TODO: lazyload kandict component
        <Kandict kanji={kanjiServed()} showKandict={handleKanjiShow} />
      ) : (
        <div>
          <For each={wordData()}>
            {(word, i) => (
              <>
                <div class="main">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      <p>
                        {word.jlpt.length
                          ? `${word.jlpt}`.replace("jlpt-", "")
                          : "unknown jlpt level"}
                      </p>
                    </div>
                    ||
                    <div>
                      {word.is_common ? <strong>CW</strong> : "Unknown"}
                    </div>
                    ||
                    <div>
                      <strong>{word.senses[0].parts_of_speech[0]}</strong>
                    </div>
                  </div>
                  {/* slug */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "3px solid red",
                      height: "77px",
                    }}
                  >
                    <For each={word.slug.split("")}>
                      {(kanji: string) => (
                        <>
                          {/* TODO: why kanji and not kanji() */}
                          <strong>{kanji}</strong>
                        </>
                      )}
                    </For>
                  </div>
                </div>
                <hr />
              </>
            )}
          </For>
        </div>
      )}
    </>
  );
};
