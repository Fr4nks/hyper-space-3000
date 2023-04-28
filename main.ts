input.onButtonPressed(Button.A, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let ship: game.LedSprite = null
game.setLife(6)
ship = game.createSprite(2, 4)
ship.set(LedSpriteProperty.Brightness, 10)
let meteor = game.createSprite(randint(0, 4), 0)
while (true) {
    basic.pause(300)
    meteor.change(LedSpriteProperty.Y, 1)
    if (ship.isTouching(meteor)) {
        meteor.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1600, 4610, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        game.addScore(1)
    } else if (meteor.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        meteor.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 15, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.removeLife(1)
    }
    if (meteor.isDeleted()) {
        meteor = game.createSprite(randint(0, 4), 0)
    }
}
