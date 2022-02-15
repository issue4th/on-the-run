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
function select_next_level () {
    level += 1
    start_level()
    hide_start_position_and_spawn_player_in()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
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
    levels = [tiles.createMap(tilemap`level3`), tiles.createMap(tilemap`level4`)]
}
let levels: tiles.WorldMap[] = []
let level = 0
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 4 5 
    . . . . . . . . . . . . . 4 5 5 
    . . . . . . . . . . . . 4 5 5 5 
    . . . . . . . . . . . 4 5 5 5 5 
    . . . . . . . . . . 4 5 5 5 5 5 
    . . . . . . . . . 4 5 7 5 7 5 5 
    . . . . . . . . 4 5 5 7 d 7 5 5 
    . . . . . . . 4 5 5 5 7 d 7 5 5 
    . . . . . . 4 5 5 5 d 7 d 7 5 5 
    . . . . . 4 5 5 5 d d d d d 5 5 
    . . . . 4 5 5 5 d d d d d d 5 5 
    . . . 4 5 5 5 d d d d d d d 5 5 
    . . 4 5 5 5 d d d d d d d d 5 5 
    . 4 5 5 5 d d d d d d d d d 5 5 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 60, 60)
set_levels()
start_level()
level = 0
scene.cameraFollowSprite(mySprite)
hide_start_position_and_spawn_player_in()
