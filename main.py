def update_LED():
    for index in range(5):
        led.plot_brightness(index, 0, y0[index])
    for index2 in range(5):
        led.plot_brightness(index2, 1, y1[index2])
    for index3 in range(5):
        led.plot_brightness(index3, 2, y2[index3])
    for index4 in range(5):
        led.plot_brightness(index4, 3, y3[index4])
    for index5 in range(5):
        led.plot_brightness(index5, 4, y4[index5])
def unplot_all():
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
y4: List[number] = []
y3: List[number] = []
y2: List[number] = []
y1: List[number] = []
y0: List[number] = []
y0 = [0, 255, 0, 255, 0]
y1 = [255, 255, 255, 255, 255]
y2 = [0, 255, 0, 255, 0]
y3 = [255, 255, 255, 255, 255]
y4 = [0, 255, 0, 255, 0]

def on_forever():
    unplot_all()
    update_LED()
basic.forever(on_forever)
