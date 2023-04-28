input.onButtonPressed(Button.A, function () {
    ball.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    ball.change(LedSpriteProperty.X, 1)
})
let ball: game.LedSprite = null
game.setLife(6)
ball = game.createSprite(2, 4)
ball.set(LedSpriteProperty.Brightness, 10)
let hole = game.createSprite(randint(0, 4), 0)
while (true) {
    basic.pause(300)
    hole.change(LedSpriteProperty.Y, 1)
    if (ball.isTouching(hole)) {
        hole.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1600, 4610, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        game.addScore(1)
    } else if (hole.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        hole.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 15, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.removeLife(1)
    }
    if (hole.isDeleted()) {
        hole = game.createSprite(randint(0, 4), 0)
    }
}
