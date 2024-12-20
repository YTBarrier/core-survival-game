# Changelog
for CORE survival game
## Version 0.4.0
The sunlight type has been changed from PointLight to DirectionalLight, which requires the shadow map's left, right, top, and bottom properties to be changed to either 50 or -50(negative for left and bottom) to increase the rendering area of the shadows.
## Patch 0.3.4
A build script has been added to the package:
```bash
npm run build
```
Additionally, dist has been added to the .gitignore file for the build.
## Patch 0.3.3
Changed shadow map range.
## Patch 0.3.2
Rocks now cast and recieve shadows. Additionally, shadows have much more clarity.
## Patch 0.3.1
There is now a small amount of ambient light.
## Version 0.3.0
There is a light source located at the middle of the world(100 feet high). The material type for the plane, trees, and the rocks has been updated from MeshBasicMaterial to MeshLambertMaterial, so that it shades relative to light. Shadows are also casted on all objects now.
## Patch 0.2.2
Tree trunks have only one possible radial segment amount(10), as opposed to all values between 5 and 16.
## Patch 0.2.1
Added title to top of screen, and changed where Alpha Testing Phase text is.
## Version 0.2.0
Trees and rocks are now rendered. There are 5 trees and three rocks. Collision detection is not active yet.
## Version 0.1.0
Forward and backward movement(NOT side-to-side) is now slightly faster. You also have the ability to sprint by holding down either SHIFT key. Sprinting only works for forward movement.
## Version 0.0.0
This is the launch version. Camera can be rotated by moving mouse and you can move around with WASD. Inventory slots are also rendered in the top right corner, and coordinates in the top left.