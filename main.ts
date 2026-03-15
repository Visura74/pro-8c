input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C C G G A A G - ", 120), music.PlaybackMode.UntilDone)
})
