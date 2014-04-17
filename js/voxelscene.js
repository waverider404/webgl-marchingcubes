/* Represents the entirety of voxel data which represents the terrain.
 * Voxel data is stored in bulk array for now.
 */

VOXEL = {};

VOXEL.voxels = [];  //these values will be densities, 0.0 - 1.0

//density function for voxel terrain generation
VOXEL.density = function(px, py, pz, size, stepSize) {
    var x = px * stepSize / (size / 2),
        y = py * stepSize / (size / 2),
        z = pz * stepSize / (size / 2);
    //return y + noise.perlin3(x * 2 + 5, y * 2 + 3, z * 2 + 0.6);
    return noise.perlin3(x * 2 + 5, y * 2 + 3, z * 2 + 0.5);
};

VOXEL.generate = function(size, stepSize) {
    //noise function for our density
    var density = VOXEL.density, 
        px = 0,
        py = 0,
        pz = 0;
    
    for (px = 0; px < size; px++) {
        VOXEL.voxels[px] = [];
        for (py = 0; py < size; py++) {
            VOXEL.voxels[px][py] = [];
            for (pz = 0; pz < size; pz++) {
                VOXEL.voxels[px][py][pz] = density(px, py, pz, size, stepSize);
            }
        }
    }
};