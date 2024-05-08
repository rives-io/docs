import Layout from '@theme/Layout';
import React, { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { keymap } from "@codemirror/view"
import { cpp } from '@codemirror/lang-cpp';
import { dracula } from '@uiw/codemirror-theme-dracula';

export default function Hello() {
  const [value, setValue] = React.useState(`//riv-jit-c (DO NOT REMOVE THIS LINE)
#include <riv.h>
void main() { // entry point
  int x = 128, y = 128; // red dot position
  do { // main loop
    // handle inputs
    if (riv->keys[RIV_GAMEPAD_UP].down) y--;
    if (riv->keys[RIV_GAMEPAD_DOWN].down) y++;
    if (riv->keys[RIV_GAMEPAD_LEFT].down) x--;
    if (riv->keys[RIV_GAMEPAD_RIGHT].down) x++;
    // draw screen
    riv_clear(RIV_COLOR_BLUE); // clear screen
    riv_draw_rect_fill(0, 200, 256, 56, RIV_COLOR_PEACH); // draw beach
    riv_draw_circle_fill(x, y, 8, RIV_COLOR_RED); // draw red dot
    if (y >= 202) { // check if red dot reached the beach
      riv_draw_text("MAX IS AT THE BEACH\\nYOU SAVED HIM\\nHE IS VERY HAPPY", RIV_SPRITESHEET_FONT_5X7,
                    RIV_CENTER, 128, 128, 2, RIV_COLOR_YELLOW); // draw end screen
      riv->quit = true; // end game
    } else if (y <= 32) {
      riv_clear(RIV_COLOR_BLACK); // clear screen
      riv_draw_text("MAX WAS LOST AT\\nTHE DEEP OCEAN\\nHIS FATE IS UNKNOWN", RIV_SPRITESHEET_FONT_5X7,
                    RIV_CENTER, 128, 128, 2, RIV_COLOR_RED); // draw text
      riv->quit = true; // end game
    } else {
      riv_draw_text("THE RED DOT IS MAX\\nHE IS LOST AT SEA\\nHELP HIM REACH THE BEACH", RIV_SPRITESHEET_FONT_5X7,
                    RIV_CENTER, 128, 64, 1, RIV_COLOR_WHITE); // draw text
    }
  } while(riv_present()); // refresh screen and wait next frame
}

`);
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  return (
    <Layout title="Playground" description="Code cartridges directly in the browser">
        <main>
            <div className="container margin-vert--sm">
              <div className="row row--no-gutters">
                <div className="col col--6">
                  <div align="center">
                    <iframe id="rivemu" allowFullScreen className="rivemu-frame" />
                  </div>
                </div>
                <div className="col col--6">
                  <CodeMirror
                      value={value}
                      height="548px"
                      theme={dracula}
                      onChange={onChange}
                      onCreateEditor={() => {
                        let rivemuFrame = document.getElementById('rivemu');
                        let rivemuFrameWindow = rivemuFrame.contentWindow;
                        window.addEventListener(
                          'message',
                          (e) => {
                            let params = e.data;
                            if (params.rivemuLoaded) {
                                rivemuFrameWindow.postMessage({rivemuRunCode: true, code:value}, "*");
                            }
                          },
                          false,
                        );
                        rivemuFrame.src = "https://emulator.rives.io/#simple=true&editor=true";
                      }}
                      extensions={[
                          cpp({}),
                          keymap.of([
                            {
                              key: 'Shift-Enter',
                              run: () => {
                                document.getElementById("rivemu").contentWindow.postMessage({rivemuRunCode: true, code:value, start:true}, "*");
                                return true;
                              },
                            },
                            {
                              key: 'Ctrl-Shift-Enter',
                              run: () => {
                                document.getElementById("rivemu").contentWindow.postMessage({rivemuRunCode: true, code:value, start:true}, "*");
                                document.getElementById("rivemu").contentWindow.focus();
                                return true;
                              },
                            },
                          ]),
                      ]}
                  />
                  <small>
                    <div><strong>SHIFT + Enter</strong>: Run.</div>
                    <div><strong>CTRL + SHIFT + Enter</strong>: Run and focus canvas.</div>
                    <div><strong>CTRL + SHIFT + I</strong>: Open console output to see syntax errors.</div>
                    <div>If the screen is stuck while loading, means the cartridge has syntax errors or crashed.</div>
                  </small>
                </div>
              </div>
            </div>
        </main>
    </Layout>
  );
}