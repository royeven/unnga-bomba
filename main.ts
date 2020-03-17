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
	
})
basic.forever(function () {
	
})
