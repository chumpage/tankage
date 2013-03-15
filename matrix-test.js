var matrix_test_run = function() {
    var tests = {}

    var ortho = Matrix4.Create()
    Matrix4.Ortho(ortho, 0, 10, 10, 0, -1, 1)
    var ortho_should_be = new Float32Array([0.2, 0, 0, -1,
                                            0, -0.2, 0, 1,
                                            0, 0, -1, 0,
                                            0, 0, 0, 1])
    tests["ortho"] = Matrix4.Equals(ortho, ortho_should_be)

    return tests
}
