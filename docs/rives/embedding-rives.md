---
sidebar_position: 2
---

# Embedding Rives on any Website

This tutorial will guide step by step on how to embed Rives on any website using the emulator on an iframe.

## Play Cartridge

To embed a Rives cartridge and allow users to play you first need to get the id of the cartridge. Go to [Rives Cartridges page](https://app.rives.io/cartridges), select one and copy the from the url (e.g. freedoom is `721f735bbca3`).

Then you can embed a simple iframe with the url `https://emulator.rives.io/#simple=true&cartridge=https://app.rives.io/data/cartridges/[CARTRIDGE_ID]`:

```html
<iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#simple=true&cartridge=https://app.rives.io/data/cartridges/721f735bbca3"
    allowFullScreen
    width="516" height="548" style="border: 2px solid #131415; overflow: hidden; background-color: black; caret-color: transparent;"
></iframe>
```

<div align="center"><iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#simple=true&cartridge=https://app.rives.io/data/cartridges/721f735bbca3"
    allowFullScreen className="rivemu-frame"></iframe></div>

The `simple=true` parameter hides some extra controls and information about the cartridge and emulation, and keep the controls clean and simple.

## Replay Tape

Similarly, to embed a rives tape replay you will need the cartridge id and the tape id (you can navigate on the cartridge page, select a play mode, check the leaderboard and select a tape, e.g `721f735bbca3721f735bbca396345ea884a19e7d0a37ff849a6573525f741813`)

Then you can embed the emulatator iframe with the url `https://emulator.rives.io/#cartridge=https://app.rives.io/data/cartridges/[CARTRIDGE_ID]&fullTape=https://app.rives.io/tapes-data/[TAPE_ID]`:

```html
<iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#cartridge=https://app.rives.io/data/cartridges/721f735bbca3&fullTape=https://app.rives.io/tapes-data/721f735bbca3721f735bbca396345ea884a19e7d0a37ff849a6573525f741813"
    allowFullScreen
    width="516" height="548" style="border: 2px solid #131415; overflow: hidden; background-color: black; caret-color: transparent;"
></iframe>
```

<div align="center"><iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#cartridge=https://app.rives.io/data/cartridges/721f735bbca3&fullTape=https://app.rives.io/tapes-data/721f735bbca3721f735bbca396345ea884a19e7d0a37ff849a6573525f741813"
    allowFullScreen className="rivemu-frame"></iframe></div>

Note: we suggest disabling the simple mode to allow users pause the replay and control the reproduction speed.

## Emulator Parameters

Optionally, you can set the source of the iframe programatically to change cartridge, tape and parameters. This will be important to set up a session and send a valid gameplay to the Rives backend. An example of programatically setting the iframe source:

```typescript
export const EMULATOR_URL = "https://emulator.rives.io";
export const CARTRIDGES_URL = "https://app.rives.io/data/cartridges";
export const TAPES_URL = "https://app.rives.io/tapes-data";

interface EmulatorParams {
  cartridgeId: string;
  simple?: boolean;
  autoplay?: boolean;
  tapeId?: string;
  args?: string;
  incardUrl?: string;
  entropy?: string;
}

function setEmulatorUrl(params: EmulatorParams) {
  const emulator = document.getElementById(
    "emulator-iframe",
  ) as HTMLIFrameElement;
  if (emulator) {
    let fullSrc = `${EMULATOR_URL}/#cartridge=${CARTRIDGES_URL}/${params.cartridgeId}`;
    if (params.simple) {
      fullSrc += `&simple=${params.simple}`;
    }
    if (params.autoplay) {
      fullSrc += `&autoplay=${params.autoplay}`;
    }
    if (params.tapeId) {
      fullSrc += `&fullTape=${TAPES_URL}/${params.tapeId}`;
    }
    if (params.args) {
      fullSrc += `&args=${params.args}`;
    }
    if (params.incardUrl) {
      fullSrc += `&incard=${params.incardUrl}`;
    }
    if (params.entropy) {
      fullSrc += `&entropy=${params.entropy}`;
    }
    emulator.src = fullSrc;
  }
}
```

As seen in the previous sections, the emulator parameters `cartridge` and `fullTape` setup the cartridge and the tape urls, and `simple` hides some extra controls. The `autoplay` parameter starts the emulation as soon as it is ready, otherwise it displays a play button layer on top of the canvas to begin the emulation.

The `args` parameter controls the command line argument that the emulator uses to run the cartridge and `incard` sets a url for the emulator to download the incard parameter. These are important to set the Rives play mode parameters.

The last parameter is `entropy`, which controls the randomness of the emulator. Rives uses this parameter to discourage cloning gameplays or part of gameplays of other users.

You can check this [repo](https://github.com/rives-io/rives-simple-frontend) with an example of simplified rives frontend with play, replay and submit.

## Submit Gameplay

To generate a valid gameplay to Rives, you'll need first to configure the entropy and the cartridge arguments of the chosen play mode. Then, to submit the gameplay you'll have to set up a listener to capture the emulator stop event, and process the output of the emulator to generate some protection parameters. Finally, you'll have a valid gameplay payload to submit to Rives.

We suggest you that you use this [lib](https://github.com/rives-io/rives-simple-frontend/blob/main/src/lib/rives.ts) to interact with the Rives backend (we'll consider that the constants, interfaces and functions defined in the previous sections are already defined).

1. Get the play mode (a.k.a as rule) arguments:

```typescript
import { getRule } from "./lib/rives.js";

const RULE_ID = '721f735bbca3721f735bbca3cfee7c08a98f4b56';

const rule = await getRule(RULE_ID);
const args = rule.args;
```

2. Generate the entropy based on the user wallet address:

```typescript
import { generateEntropy } from "./lib/rives.js";

const userAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

const entropy = generateEntropy(userAddress, RULE_ID);
```

3. Set up the emulator stop event listener. Note: `sendTransaction(contract: string, signature: string, params: any[])` is a function of your choice to send onchain transactions (e.g. we use [`submitGameplay(client: WalletClient, gameplayPayload: string)`](https://github.com/rives-io/rives-simple-frontend/blob/main/src/lib/onchain.ts) which uses `viem` library) :

```typescript
import { processGameplay } from "./lib/rives.js";

const CONTRACT_ADDRESS = "0x04969e1d36d43515cc6493a286021b44b0fce6f2";
const RIVES_APP_ADDRESS = "0xECB28678045a94F8b96EdE1c8203aDEa81F8AAe3";

window.addEventListener(
  "message",
  (e) => {
    const params = e.data;
    if (params.rivemuOnFinish) {
      const gameplayPayload = processGameplay(rule, params);
      sendTransaction(CONTRACT_ADDRESS, 'addInput(address _app, bytes payload)', [RIVES_APP_ADDRESS, gameplayPayload]);
    }
  },
  false,
);

```

4. Finally, set the iframe source with all required parameters:

```typescript
setEmulatorUrl({
  cartridgeId: CARTRIDGE_ID,
  simple: true,
  args: args,
  entropy: entropy,
});
```

Note: Rives frontend has the special endpoint that can be used to configure the iframe source`fullTape` parameter. This endpoint queries the rule, and accepts tapes and incard as parameters, and returns rule `args` (if it exists) and a resulting multi-incard format composed of 4-byte words (defined in the next section as a reference). The endpoint is `https://app.rives.io/rules-params/[RULE_ID]?incard=[INCARD_DATA]&tapes=[TAPE_1_ID]&tapes=[TAPE_2_ID]`. The incard parameter is the base64-encoded incard and the tapes parameter is a list of tapes ids whose outcards will be added to the multi incard format. Keep in mind that not all cartridges accept incards, the multi incard format, not all rules accept extra tapes and incards, and also not all tape outcards are saved, so these parameters are only usefull in special rules. This url should be uri-encoded to ensure the query params are part of the `fullTape` parameter.

Example querying rule parameters:

```html
<iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#cartridge=https://app.rives.io/data/cartridges/8dca7771a539&simple=true&fullTape=https://app.rives.io/rules-params/8dca7771a5398dca7771a5393f962cc6ce5f48de"
    allowFullScreen
    width="516" height="548" style="border: 2px solid #131415; overflow: hidden; background-color: black; caret-color: transparent;"
></iframe>
```

<div align="center"><iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#cartridge=https://app.rives.io/data/cartridges/8dca7771a539&simple=true&fullTape=https://app.rives.io/rules-params/8dca7771a5398dca7771a5393f962cc6ce5f48de"
    allowFullScreen className="rivemu-frame"></iframe></div>

Example using multiple tapes:

```html
<iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#cartridge=https://app.rives.io/data/cartridges/8dca7771a539&simple=true&fullTape=https://app.rives.io/rules-params/null%3Ftapes%3D865a3ae6abf7865a3ae6abf7155c3143d6acfbed7424cf4fe899ead0adace1f8%26tapes%3D865a3ae6abf7865a3ae6abf7155c3143d6acfbed49bd161d86198330402cd71c"
    allowFullScreen
    width="516" height="548" style="border: 2px solid #131415; overflow: hidden; background-color: black; caret-color: transparent;"
></iframe>
```

<div align="center"><iframe
    id="emulator-iframe"
    src="https://emulator.rives.io/#cartridge=https://app.rives.io/data/cartridges/8dca7771a539&simple=true&fullTape=https://app.rives.io/rules-params/null%3Ftapes%3D865a3ae6abf7865a3ae6abf7155c3143d6acfbed7424cf4fe899ead0adace1f8%26tapes%3D865a3ae6abf7865a3ae6abf7155c3143d6acfbed49bd161d86198330402cd71c"
    allowFullScreen className="rivemu-frame"></iframe></div>

### Rives Multi Incards Format

Example:

| Byte Index | Value | Description |
| --------: | :------- | :------- |
| 0 | MICS | header |
| 4 | 0x00000002 | incard count |
| 8 | 0x0000001c | incard 1 offset (in the 2MB data) |
| 12 | 0x00000013 | incard 1 size (0x13 bytes) |
| 16 | 0x00000030 | incard 2 offset |
| 20 | 0x00000020 | incard 2 size (0x10 bytes) |
| 24 | 0x... | incard 1 start |
| ... |


### Rives Gameplay Protections 

Rives uses Rivemu as the engine to generate and verify reprocible gameplays, but users need extra protection to ensure their gameplays are indeed valid, will produce the expected result, and shouldn't be copyed and used by other players. To accomplish that Rives uses **`oucard hash`**, **`claimed score`** and per user and per rule **`entropy`**, also it doesn't accept duplicate gameplays.

The **`oucard hash`** and **`claimed score`** are parameters of the gameplay submission. The `oucard hash` is the hash of the output generated by the Rivemu, and it ensures that the verification generated the expected output. Similarly, the `claimed score` is the resulting score calculated based on the output considering the rule score formula. so it ensures that the gameplay will generate an expected score. If these parameters don't match to the resulting values after the gameplay verification on the Rives backend, the gameplay is considered invalid, so it will be flagged with an error and it will have a effectively 0 score. These parameters can be set to `0x0`, so the backend will ignore these checks and the output generated will be accepted.

The **`entropy`** main goal is to discourage cloning gameplays of other players. Rives doesn't accept duplicate gameplays, but the gameplay could be exactly the same of another gameplay, with a single move diffent and RIves would consider it valid. The `entropy` parameter is used to control the randomness that the emulator produces, so a different randomness might cause platforms and enemies move slightly diffently, thus a similar gameplay would result in a different result. The `entropy` is generated based on the user's wallet address that signed the gameplay submission transaction, and the rule id. As the entropy is generated by parameters not controlled by the user, it can't be forged. Naturally, if the cartridge neither uses randomness, nor it doesn't affect the gameplay significantly, that wouldn't be sufficient to produce a different result.

