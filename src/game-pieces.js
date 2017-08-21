export function TPiece(){
   var state1 = [
      [0,1,0]
      [1,1,1]
   ];
   var state2 = [
      [1,0],
      [1,1],
      [1,0]
   ];
   var state3 = [
      [1,1,1]
      [0,1,0]
   ];
   var state4 = [
      [0,1],
      [1,1],
      [0,1]
   ];
   this.state = [ state1, state2, state3, state4 ];
   this.x = 4;
	this.y = -2;
	this.tag = 'T';
};
export function LPiece(){
   var state1 = [
      [1,0],
      [1,0],
      [1,1]
   ];
   var state2 = [
      [1,1,1],
      [1,0,0]
   ]
   var state3 = [
      [1,1],
      [0,1],
      [0,1]
   ];
   var state4 = [
      [0,0,1],
      [1,1,1]
   ];
   this.state = [ state1, state2, state3, state4 ];
   this.x = 4;
	this.y = -3;
	this.tag = 'L';
};
export function SPiece(){
   var state1 = [
      [0,1,1]
      [1,1,0]
   ];
   var state2 = [
      [1,0],
      [1,1],
      [0,1]
   ];
   this.state = [ state1, state2 ];
   this.x = 4;
   this.y = -2;
   this.tag = 'S';

}
export function JPiece(){

   var state1 =[
      [0,1],
      [0,1],
      [1,1]
   ];

   var state2 = [
      [1,0,0],
      [1,1,1]
   ];

   var state3 = [
      [1,1],
      [1,0],
      [1,0]
   ];

   var state4 = [
      [1,1,1],
      [0,0,1]
   ];
   this.state = [ state1, state2, state3, state4 ];
   this.x = 4;
	this.y = -3;
	this.tag = 'J';
}
export function BoxPiece(){
   var state1 = [
      [1,1],
      [1,1]
   ];
   this.state = [ state1 ];
   this.x = 4;
   this.y = -2;
   this.tag = 'B';
};
export function ZPiece(){
   var state1 = [
      [1,1,0],
      [0,1,1]
   ];
   var state2 = [
      [0,1],
      [1,1],
      [1,0]
   ];
   this.state = [ state1, state2 ];
   this.x = 4;
   this.y = -2;
   this.tag = 'S';
};
export function IPiece(){
   var state1 = [
      [1],
      [1],
      [1],
      [1]
   ];
   var state2 = [
      [1,1,1,1]
   ];
};
