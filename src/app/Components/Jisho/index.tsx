import { Spinner } from "solid-bootstrap";
import { createEffect, createSignal, For, ErrorBoundary } from "solid-js";
import JishoAPI from "unofficial-jisho-api";
import { Kandict } from "./Kandict";

/**
 *  reusable component to get kanji and word definitions in a popover.
 */

//TODO: start with backend to avoid CORS .
/**
 * FIXME: throw error component on
 * 1. !data.length
 * 2. slug == number
 *
 */

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
    setShowKandict(!showKandict());
  };

  //regex to check if the word is kana or not
  const regex = /[\u3000-\u303f\u3040-\u309f]|[\u30a0-\u30ff]/;

  return (
    <>
      {/* <ErrorBoundary
        fallback={
          <>
            <h5>cant get this word :(</h5>
          </>
        }
      > */}
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
                  reading -{" "}
                  <ruby>{JSON.stringify(word.japanese[0].reading)}</ruby>
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
                      flexDirection: "row",
                      border: "3px solid red",
                      height: "77px",
                    }}
                  >
                    <For each={word.slug.split("")}>
                      {(singleWord: string) => (
                        <>
                          {/* TODO: why singleWord and not singleWord() */}

                          {/* kana?show normally:kanji case */}
                          {regex.test(singleWord) ? (
                            <p>{singleWord}</p>
                          ) : (
                            <h4
                              style={{ cursor: "pointer", fontsize: "22px" }}
                              onclick={handleKanjiShow}
                              onmouseover={() => setKanjiServed(singleWord)}
                            >
                              {singleWord}
                            </h4>
                          )}
                        </>
                      )}
                    </For>
                    <p>
                      {JSON.stringify(word.senses[0].english_definitions).slice(
                        1,
                        -1
                      )}
                    </p>
                  </div>
                </div>
                <hr />
              </>
            )}
          </For>
        </div>
      )}
      {/* </ErrorBoundary> */}
    </>
  );
};
