//@ts-expect-error
import Kanji from "kanji.js";
import { Badge } from "solid-bootstrap";
import { createEffect, createSignal, ErrorBoundary } from "solid-js";
/**
 * @param showKandict setter for the kanji dict overlay
 * @param kanji the string(kanji)
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

/**
 * Gets kanji definitions and readings on dictionary popover.
 */
export const Kandict = (props: KandictProps) => {
  let details: KanjiDetails = Kanji.getDetails(props.kanji);
  return (
    <>
      <Badge bg="secondary" style={{ cursor: "pointer" }} className=" m-2" onclick={props.showKandict}>Back</Badge>
      <div>
        <ErrorBoundary
          fallback={
            <>
              <h5 class="text-secondary">cant get details for this kanji</h5>
            </>
          }
        >
          {props.kanji === null ? (
            "something bad happened"
          ) : (
            <>
              <div class="d-flex flex-column flex-wrap ">
                <h3 class="text-light p-2">
                  {details.literal !== null ? details.literal : "not found"}
                </h3>
                <div>
                  <div className="d-flex justify-content-bewtween">
                    <span class="text-secondary m-2">grade-{details.grade}</span>
                    <span class="text-info m-2">Jlpt- N{details.jlpt}</span>
                  </div>

                  <div className="d-flex justify-content-bewtween">
                    <p class="text-info m-2">frequency-{details.freq}</p>
                    <p class="text-warning m-2">stroke count-{details.stroke_count}</p>
                  </div>
                </div>
              </div>
              <div className="m-2">
                <div>
                  <b class="text-light">onyomi :</b> <br />
                  <p class="text-light">{JSON.stringify(details.onyomi).slice(1, -1)},</p>
                </div>
                <div>
                  <b class="text-light">
                    kunyomi: <br />
                  </b>
                  <p class="text-light">{JSON.stringify(details.kunyomi).slice(1, -1)},</p>
                </div>
                <div>
                  <b class="text-light">meanings:</b>
                  <br />
                  <p class="text-light">
                    {details.meanings.map((el) => {
                      return <li class="text-light">{el}</li>;
                    })}
                  </p>
                </div>
              </div>

            </>
          )}
        </ErrorBoundary>
      </div>
    </>
  );
};
