music.setVolume(25)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 250) {
        basic.showIcon(IconNames.Duck)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    } else {
        music.stopAllSounds()
        basic.clearScreen()
    }
})
