let n = 0
input.onGesture(Gesture.Shake, function () {
    n = randint(1, 6)
    basic.showNumber(n)
})
