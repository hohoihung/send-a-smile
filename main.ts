input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    radio.sendString("Halt")
})
radio.setGroup(2)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("U")
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("D")
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("L")
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
        radio.sendString("R")
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.No)
        radio.sendString("S")
    } else {
        basic.showIcon(IconNames.No)
        radio.sendString("S")
    }
})
