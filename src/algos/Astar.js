/*
* Derived from pseudocode provided by A* wiki page
* https://en.wikipedia.org/wiki/A*_search_algorithm
*/
function AStar(startNode, endNode) {
    let openSet = [];
    let closedSet = [];
    let path = [];
    let visitedNodes = [];

    openSet.push(startNode);
    while(openSet.length > 0) {
        let leastIndex = 0;
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[leastIndex].f) {
                leastIndex = i;
            }
        }

        let current = openSet[leastIndex];
        visitedNodes.push(current);
        if (current === endNode) {
            let temp = current;
            path.push(temp);
            while (temp.previous) {
                path.push(temp.previous);
                temp = temp.previous;
            }
            return {path, visitedNodes};
        }
        openSet = openSet.filter((elt) => elt !== current);
        closedSet.push(current);

        let neighbors = current.neighbors;
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!closedSet.includes(neighbor) && !neighbor.isWall) {
                let tempG = current.g + 1;
                let newPath = false;
                if (openSet.includes(neighbor)) {
                    if (tempG < neighbor.g) {
                        neighbor.g = tempG;
                        newPath = true;
                    }
                }
                else {
                    neighbor.g = tempG;
                    newPath = true;
                    openSet.push(neighbor);
                }

                if (newPath) {
                    neighbor.h = manhattanDistance(neighbor, endNode);
                    neighbor.f = neighbor.g + neighbor.f;
                    neighbor.previous = current;
                }
            }
        }
    }
    return {path, visitedNodes, error: "No Path Found!"}
}

function manhattanDistance(a, b) {
    let distance = Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
    return distance;
}

export default AStar;