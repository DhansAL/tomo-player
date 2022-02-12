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
    console.log("jisho loaded");

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
        <div className="d-flex m-3 p-2 justify-content-center align-items-center">
          <Spinner variant="light" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : showKandict() ? (
        //TODO: lazyload kandict component
        <Kandict kanji={kanjiServed()} showKandict={handleKanjiShow} />
      ) : (
        <div className="bg-dark d-flex flex-wrap" style={{ width: "260px" }}>
          <For each={wordData()}>
            {(word, i) => (
              <>
                {/* slug */}
                <div className="p-2">
                  <div class="d-flex flex-column justify-content-between align-items-center">
                    <div className="">
                      <span style={{ fontSize: "12px" }} class="text-info">{JSON.stringify(word.japanese[0].reading)}</span>
                      <div className="d-flex">
                        <For each={word.slug.split("")}>
                          {(singleWord: string) => (
                            <>
                              {/* TODO: why singleWord and not singleWord() */}

                              {/* kana?show normally:kanji case */}
                              {regex.test(singleWord) ? (
                                <h3 class="text-secondary">{singleWord}</h3>
                              ) : (
                                <h3
                                  class="text-light"
                                  style={{ cursor: "pointer" }}
                                  onclick={handleKanjiShow}
                                  onmouseover={() => setKanjiServed(singleWord)}
                                >
                                  {singleWord}
                                </h3>
                              )}
                            </>
                          )}
                        </For>
                      </div>

                    </div>

                    <div >
                      <span class="text-warning">
                        JLPT-
                        {word.jlpt.length
                          ? `${word.jlpt}`.replace("jlpt-", "").toUpperCase()
                          : "unknown"}
                      </span>
                    </div>
                  </div>

                </div>
                {/* word popularity and sense */}
                <div class="d-flex flex-column flex-wrap m-1 p-1 justify-content-around">
                  <div>
                    <p className="text-secondary"> {word.is_common ? <strong>CW</strong> : "Unknown"}</p>
                  </div>
                  <div >
                    <strong class="text-secondary">{word.senses[0].parts_of_speech[0]}</strong>
                  </div>
                </div>
                {/* word meanings */}
                <hr class="text-light" />
                <div
                  class="d-flex m-2 p-1  flex-wrap-column"

                >
                  <p class="text-light" style={{ width: "240px" }}>
                    {JSON.stringify(word.senses[0].english_definitions).slice(
                      1,
                      -1
                    )}
                  </p>
                </div>
                <hr class="text-light" />
              </>
            )}
          </For>
        </div>
      )}
      {/* </ErrorBoundary> */}
    </>
  );
};
