var Matrix4 = {}
Matrix4.Create = function() {
    var mat = new Float32Array(16)
    for (var i = 0; i < 16; i++) {
        mat[i] = 0
    }
    return mat
}

Matrix4.Identity = function(mat) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (i === j) {
                mat[i*4 + j] = 1
            } else {
                mat[i*4 +j] = 0
            }
        }
    }
}

Matrix4.Ortho = function(mat, left, right, bottom, top, near, far) {
    var rml = right - left
    var rpl = right + left
    var tmb = top - bottom
    var tpb = top + bottom
    var fmn = far - near
    var fpn = far + near

    for (var i = 0; i < 16; i++) {
        mat[i] = 0
    }
    mat[0] = 2/rml
    mat[3] = -(rpl/rml)
    mat[5] = 2/tmb
    mat[7] = -(tpb/tmb)
    mat[10] = -(2/fmn)
    mat[11] = -(fpn/fmn)
    mat[15] = 1
}

Matrix4.Perspective = function(mat, fov, ar, near, far) {
    var npf = near+far
    var nmf = near-far
    var ntf = near*far
    for (var i = 0; i < 16; i++) {
        mat[i] = 0
    }
    mat[0] = fov/ar
    mat[5] = fov
    mat[10] = npf/nmf
    mat[11] = (2*ntf)/nmf
    mat[14] = -1
}

Matrix4.Equals = function(one, two) {
    for (var i = 0; i < 16; i++) {
        if (one[i] !== two[i]) {
            return false
        }
    }
    return true
}
