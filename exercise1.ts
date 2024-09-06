//find area of rectangle
let _width:number = 3;
let _length:number = 5;
const _rectangle =(_width*_length);
console.log(_rectangle);

//find perimeter of rectangle
let _1width : number = 5;
let _1length : number = 3;
const _perimeter = (2*(_1width+_1length));
console.log(_perimeter);


// find diameter , circumference and area 
let _radius: number = 5;
const diameter: number =(_radius * 2);
console.log(_radius);

const _pi: number = (22/7);



const _circumference: number = (2 *  _pi * _radius);
console.log(_circumference);

const _area : number= (_pi * _radius *_radius);
console.log(_area);

//find angles
let _angle1: number = 80;
let _angle2: number = 65;
const _rumus1 = (180 - _angle1 - _angle2);
console.log(_rumus1);


// days to years 
let _semuaHari: number = 400;
let _tahun: number = 365;
let _hari: number = 30;
const _semuaTahun: number = Math.round(_semuaHari/_tahun);
const _semuaBulan: number = Math.round(_semuaHari % _tahun /_hari);
const _semuaHari1: number = Math.round(_semuaHari % _tahun % _hari);
console.log(_semuaTahun +' years' , _semuaBulan +' month' , _semuaHari1 +' days');
console.log(_semuaHari);


//----
let _date1: string = (`2022-01-20`);
let _date2: string = (`2022-01-22`);
const _dateAll1: number = new Date(_date1).getDate();
const _dateAll2: number = new Date(_date2).getDate();
console.log(_dateAll1);
console.log(_dateAll2);
const _allDate =(_dateAll2-_dateAll1);
console.log(_allDate);
