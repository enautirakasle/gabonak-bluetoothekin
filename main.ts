bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            . # # # .
            # # . # #
            # # . # #
            . # # # .
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        if (0 < argia) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            argia += -128
            pins.analogWritePin(AnalogPin.P0, argia)
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.Asleep)
            basic.pause(500)
            basic.clearScreen()
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        if (argia < 1024) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            argia += 128
            pins.analogWritePin(AnalogPin.P0, argia)
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.Asleep)
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
let argia = 0
argia = 0
basic.forever(function () {
	
})
