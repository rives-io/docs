---
sidebar_position: 1
---

# Uploading cartridges

This tutorial will guide step by step on how to upload a cartridge to RIVES.
And make it available at [RIVES cartridges page](https://app.rives.io/cartridges).

It's mandatory to already have a usable cartridge file at hand.
If you have not created one yet,
learn more about how to create one first at
[creating a game](../riv/creating-a-game),
this tutorial will use the Snake cartridge created on that tutorial as an example.

## Cartridge information metadata

For RIVES to properly index a cartridge,
the cartridge needs a file containing important cartridge information,
such as title, description, tags and optionally authors and external links.
This metadata must be provided by a file named `info.json` in JSON format inside the cartridge archive.

Here is an example of the `info.json` file for the Snake game created in the [creating a game tutorial](../riv/creating-a-game).
```json
{
    "name": "Snake",
    "summary": "Snake game from tutorial",
    "description": "Use arrow to move, the game ends when the snake hits itself or a wall!",
    "tags": ["action", "strategy", "puzzle", "2d", "snake"],
    "authors": [{
        "name": "Eduardo Bart",
        "link": "https://github.com/edubart"
    }],
    "links": [
        "https://github.com/rives-io/riv/tree/main/demos/game-snake"
    ]
}
```

Let's break dawn what is there:

- `name` (mandatory): Title of the cartridge shown on RIVES.
- `summary` (mandatory): Short description for the cartridge, may be used when hovering a cartridge on RIVES.
- `description` (mandatory): Long description for the cartridge, should include instructions on how to play it. This can be a multi line text.
- `tags` (mandatory): List of tags, may be used to filter on cartridges page, keep it under 10 lowercase tags.
- `authors` (optional): List of authors names for the cartridge, alongside with an external link to his page.
- `links` (optional): External links where people can find more information about the cartridge. Such as repository source code, X socials, Discord channel or official website. It's recommended to create a channel in `#cartridges` RIVES Discord channel and use its link here, so people have place where they can share feedback about the cartridge.

Please make sure the file is a valid JSON format, otherwise your cartridge may be rejected.

## Cartridge cover image

A cartridge may optionally have a cover image that is shown when indexing on RIVES.
This cover image should be provided in `cover.png` file in PNG format inside the cartridge archive.
It's recommended to use the same resolution as the cartridge resolution for it.
Big or malformed cover images may cause your cartridge to be rejected when uploading.
They might also make your cartridge bigger, it's recommended to optimize the cover images with `oxipng` PNG compressor.

Some developers may prefer to use the very first frame of the cartridge as the cover image.
So in case a cover image file is not provided then the very first frame of the cartridge will be used
as a cover image.

## Creating cartridge archive

Recall that in the end of the [creating a game tutorial](../riv/creating-a-game)
we compiled the `snake.sqfs` cartridge with `riv-mksqfs` command.

Then just need to include the `info.json` (and optionally `cover.png`) files in the `riv-mksqfs` command.
Save the `info.json` containing metadata show in
[cartridge information section](#cartridge-information-metadata)
and the you can compile the new `snake.sqfs` with:

```sh
alias rivemu-exec='rivemu -quiet -no-window -sdk -workspace -exec'
rivemu-exec riv-mksqfs snake sprites.png info.json snake.sqfs
```

Notice `info.json` was added there, lets double check if `info.json` is indeed there and with valid name:

```sh
rivemu-exec 'sqfscat snake.sqfs info.json | jq .name'
```

It should output the description of the cartridge.

## Cartridge size limit

RIVES restricts cartridge to 256KB, you can double check the size of the cartridge with:

```sh
rivemu-exec ls -sh snake.sqfs
8.0K snake.sqfs
```

Cartridges greater than 256KB may be rejected.

## Upload page

When you have your final `.sqfs` cartridge file ready with metadata information,
go over RIVES [upload cartridge page](https://app.rives.io/upload-cartridge).
Drag and drop the cartridge `.sqfs` file then hit the play button to load and test it.

![Upload page](/img/guides/upload_page.png)

> Use this page to test extensively if everything is working as expected before uploading,
including metadata, game play and scores.

When everything looks ready, make sure you are connected with a web3 wallet,
and click "Upload Cartridge", it should cost a few USD cents to upload on Base Mainnet chain.
Once you upload, you will also burn some fees to make the transaction,
and you won't be able to update the cartridge for at least a week,
so be very sure everything is correct.

After the transaction goes through, wait about 30 minutes and your cartridge should appear at
[locked cartridges page](https://app.rives.io/locked-cartridges).
The name of the cartridge will not be present on the last,
you will only be able to identify by the timestamp and wallet address.

Once it's there, notify the RIVES team on Discord requesting their approval.
Because at the moment the RIVES team is moderating what cartridges are approved,but in the future we wish to make this process automatic.Notice the RIVES team may reject cartridges that are too big, malformed, not working,
buggy, or inappropriate.

Once the upload is complete and approved,
it should appear in RIVES [cartridges page](https://app.rives.io/cartridges).
It will also show in your wallet profile page, in cartridges you created.
