function update_LED () {
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(index, 0, y0[index])
    }
    for (let index2 = 0; index2 <= 4; index2++) {
        led.plotBrightness(index2, 1, y1[index2])
    }
    for (let index3 = 0; index3 <= 4; index3++) {
        led.plotBrightness(index3, 2, y2[index3])
    }
    for (let index4 = 0; index4 <= 4; index4++) {
        led.plotBrightness(index4, 3, y3[index4])
    }
    for (let index5 = 0; index5 <= 4; index5++) {
        led.plotBrightness(index5, 4, y4[index5])
    }
}
input.onPinPressed(TouchPin.P0, function () {
    if (selection_y == 0) {
        y0[selection_x] = turn
    }
    if (selection_y == 1) {
        y1[selection_x] = turn
    }
    if (selection_y == 2) {
        y2[selection_x] = turn
    }
    if (selection_y == 3) {
        y3[selection_x] = turn
    }
    if (selection_y == 4) {
        y4[selection_x] = turn
    }
    if (turn == 1) {
        turn = 25
    } else {
        turn = 1
    }
})
function unplot_all () {
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.unplot(4, 0)
    led.unplot(0, 1)
    led.unplot(1, 1)
    led.unplot(2, 1)
    led.unplot(3, 1)
    led.unplot(4, 1)
    led.unplot(0, 2)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(4, 2)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.unplot(4, 3)
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
}
input.onButtonPressed(Button.A, function () {
    if (selection_status == 0) {
        if (selection_x != 0) {
            selection_x += -1
        }
    } else {
        if (selection_y != 0) {
            selection_y += -1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (selection_status == 0) {
        if (selection_x != 4) {
            selection_x += 1
        }
    } else {
        if (selection_y != 4) {
            selection_y += 1
        }
    }
})
let selection_status = 0
let turn = 0
let selection_y = 0
let selection_x = 0
let y4: number[] = []
let y3: number[] = []
let y2: number[] = []
let y1: number[] = []
let y0: number[] = []
y0 = [0, 255, 0, 255, 0]
y1 = [255, 255, 255, 255, 255]
y2 = [0, 255, 0, 255, 0]
y3 = [255, 255, 255, 255, 255]
y4 = [0, 255, 0, 255, 0]
selection_x = 0
selection_y = 0
basic.forever(function () {
    unplot_all()
    update_LED()
})
