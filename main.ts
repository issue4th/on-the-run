namespace SpriteKind {
    export const Secret = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    select_next_level()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        game.over(false, effects.splatter)
    }
})
function select_next_level () {
    level += 1
    start_level()
    hide_start_position_and_spawn_player_in()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    for (let temporary of tiles.getTilesByType(assets.tile`myTile26`)) {
        tiles.setTileAt(temporary, assets.tile`transparency8`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    for (let temporary of tiles.getTilesByType(assets.tile`myTile18`)) {
        tiles.setTileAt(temporary, assets.tile`transparency8`)
    }
})
function hide_start_position_and_spawn_player_in () {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile10`)
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false, effects.splatter)
})
function start_level () {
    tiles.loadMap(levels[level])
}
function set_levels () {
    levels = [tiles.createMap(tilemap`level3`), tiles.createMap(tilemap`level5`), tiles.createMap(tilemap`level4`)]
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        game.over(false, effects.splatter)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    game.over(false, effects.splatter)
})
let levels: tiles.WorldMap[] = []
let level = 0
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 60, 60)
set_levels()
start_level()
level = 0
scene.cameraFollowSprite(mySprite)
hide_start_position_and_spawn_player_in()
for (let temporary of tiles.getTilesByType(assets.tile`myTile20`)) {
    tiles.setTileAt(temporary, assets.tile`transparency8`)
}
