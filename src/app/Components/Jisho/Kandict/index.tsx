//@ts-expect-error
import Kanji from "kanji.js";
import { createEffect, createSignal, ErrorBoundary } from "solid-js";
/**
 *
 */
type KandictProps = {
  showKandict: () => void;
  kanji: string;
};

interface KanjiDetails {
  freq: number | null;
  grade: number | null;
  jlpt: number | null;
  kunyomi: string[];
  literal: string;
  meanings: string[];
  onyomi: string[];
  stroke_count: number | null;
}
export const Kandict = (props: KandictProps) => {
  let details: KanjiDetails = Kanji.getDetails(props.kanji);
  return (
    <>
      <button onclick={props.showKandict}>go back</button>
      <div>
        <ErrorBoundary
          fallback={
            <>
              <h5>cant get this kanji</h5>
            </>
          }
        >
          {props.kanji === null ? (
            "something bad happened"
          ) : (
            <div>
              <div>
                <h4>
                  {details.literal !== null ? details.literal : "not found"}
                </h4>
                <div>
                  <p>grade-{details.grade}</p>
                  <p>Jlpt- N{details.jlpt}</p>
                  <p>frequency-{details.freq}</p>
                  <p>stroke count-{details.stroke_count}</p>
                </div>
              </div>
              <hr></hr>

              <div>
                <b>onyomi :</b> <br />
                <p>{JSON.stringify(details.onyomi).slice(1, -1)},</p>
              </div>
              <div>
                <b>
                  kunyomi: <br />
                </b>
                <p>{JSON.stringify(details.kunyomi).slice(1, -1)},</p>
              </div>
              <div>
                <b>meanings:</b>
                <br />
                <p>
                  {details.meanings.map((el) => {
                    return <li>{el}</li>;
                  })}
                </p>
              </div>
            </div>
          )}
        </ErrorBoundary>
      </div>
    </>
  );
};
