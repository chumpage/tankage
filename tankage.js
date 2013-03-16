var tankage = {}
tankage.Init = function(canvas) {
    if (canvas === undefined || canvas === null)
        throw "canvas???"
    if (canvas.tagName !== "CANVAS")
        throw "not a canvas"
    tankage.context = canvas.getContext("experimental-webgl")
    if (tankage.context === undefined || tankage.context === null)
        throw "no webgl"
    tankage.width = canvas.width
    tankage.height = canvas.height
}
