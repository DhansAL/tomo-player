import { Spinner } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
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
        <div>i loaded</div>
      )}
    </>
  );
};
