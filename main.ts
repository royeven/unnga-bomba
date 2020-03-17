input.onButtonPressed(Button.B, function () {
    spiller.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    spiller.change(LedSpriteProperty.X, -1)
})
let spiller: game.LedSprite = null
let bombe = game.createSprite(Math.randomRange(0, 4), 0)
spiller = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
let pause2 = 1000
basic.forever(function () {
    bombe.change(LedSpriteProperty.Y, 1)
    basic.pause(pause2)
    if (bombe.isTouching(spiller)) {
        game.removeLife(1)
    } else if (bombe.get(LedSpriteProperty.Y) == 4) {
        game.addScore(Math.abs(spiller.get(LedSpriteProperty.X) - bombe.get(LedSpriteProperty.X)))
    }
    if (bombe.get(LedSpriteProperty.Y) == 4) {
        bombe.set(LedSpriteProperty.Y, 0)
        bombe.set(LedSpriteProperty.X, Math.randomRange(0, 4))
        basic.pause(pause2)
    }
})
basic.forever(function () {
	
})
