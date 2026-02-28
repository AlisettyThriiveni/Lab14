type Point={
    x:number;
    y:number;
};
function printPoint(point:Point):void{
    console.log("X:",point.x);
    console.log("Y:",point.y);
}
const p1:Point={x:10,y:20};
printPoint(p1);