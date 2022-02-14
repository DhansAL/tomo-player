import { Spinner } from "solid-bootstrap";
import { createEffect, createSignal, For, ErrorBoundary } from "solid-js";
import JishoAPI from "unofficial-jisho-api";
import { Kandict } from "./Kandict";



type JishoProps = {
  word: string;
};


//TODO: start with backend to avoid CORS .
/**
 * FIXME: throw error component on
 * 1. !data.length
 * 2. slug == number
 *
 */

/**
 *  Hoverable dictionary over subtitle.
 *  gets kanji and word definitions in a popover.
 */
export const JishoPopover = (props: JishoProps) => {
  //TODO:strong type data array

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
      {isLoading() ? (
        <div className="d-flex m-3 p-4 justify-content-center align-items-center">
          <Spinner variant="light" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : showKandict() ? (
        //TODO: lazyload kandict component
        <Kandict kanji={kanjiServed()} showKandict={handleKanjiShow} />
      ) : (
        <div className="bg-dark d-flex flex-column " style="width:inherit">
          <For each={wordData()}>
            {(word, i) => (
              <>
                {/* slug and definitions */}
                <div class="d-flex p-2 m-2 justify-content-between "
                  style="width:inherit">
                  {/* slug and meaning */}
                  <div class="d-flex flex-column" >
                    <span class="text-info">{(word.japanese[0].reading)}</span>
                    <div className="d-flex">
                      <For each={word.slug.split("")}>
                        {(singleWord: string) => (
                          <>
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
                  <div class="d-flex flex-column flex-wrap justify-content-between" style=" margin-right:15px;">
                    <span class="text-warning">
                      JLPT-
                      {word.jlpt.length
                        ? `${word.jlpt}`.replace("jlpt-", "").toUpperCase()
                        : "unknown"}
                    </span>
                    <span className="text-secondary"> {word.is_common ? "common word" : "unknown word"}</span>
                    <span class="text-secondary">{word.senses[0].parts_of_speech[0]}</span>
                  </div>

                </div>
                <div class="d-flex flex-column flex-wrap-column" style="width:inherit ; margin-left:15px;">
                  <h5 className="text-success">Meanings</h5>
                  <For each={(word.senses[0].english_definitions)}>
                    {(meaning: string) => <li class="text-light">{meaning}</li>}
                  </For>
                </div>
                <hr class="text-light" />
              </>
            )}
          </For>
        </div>
      )}
      {/*TODO: </ErrorBoundary> */}
    </>
  );
};
