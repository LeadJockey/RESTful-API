const path = require('path');
const filePath = path.join(__dirname, '..', '..', '..', 'models', 'store.json');
let store = require(filePath);

//get
function getRandomIndex(max){
  return Math.floor(Math.random() * (max - 0));
}
function getRandomNumber(max){
  return Math.floor(Math.random() * (max - 1) + 1);
}
//create
function createGoods(max){
  const goods = [];
  for(let i =0; i < max; i++){
    goods.push(createItem());
  }
  return goods;
}
function createItem(){
  return {
    'name':createName(),
    'image':createImage(),
    'massage':createMassage(),
    'category':createCategory(),
    'price':createPrice(),
    'batches':createBatch(),
    'sizes':createSize(),
    'colors':createColor()
  };
}
function createName(){
  const names = [];
  const adjective = ['멋진', '이쁜', '귀여운', '고독한', '답없는', '세련된', '치명적인'];
  const designs = ['우솝', '샹디', '루피', '나미', '샹크스', '흰수염', '갓에넬', '초파', '니코로빈', '프랭키'];
  const nouns = ['후드티', '드레스', '원피스', '속옷', '라운드티', '브이넥', '청바지', '면바지', '마바지', '구두', '힐'];
  names.push(adjective[getRandomIndex(adjective.length)]);
  names.push(designs[getRandomIndex(designs.length)]);
  names.push(nouns[getRandomIndex(nouns.length)]);
  return names.join(' ');
}
function createImage(){
  return "https://dummyimage.com/600x400/efefef/333333";
}
function createCategory(){
  const categories = ['outer','top','bottom','cap','bag','shoes','acc','training','design','music'];
  return categories[getRandomIndex(categories.length)];
}
function createMassage(){
  const massages = ["", "...", "어머 이건 사야해!", "초대박 할인가!", "이거입으면 나한테 바나나?"];
  return massages[getRandomIndex(massages.length)];
}
function createPrice(){
  const currencies = ['원','달러','홍콩달러','위안','엔','파운드','루블','유로'];
  const original = getRandomNumber(100) * 1000;
  const discount = getRandomNumber(100);
  const discounted = original *  ((100-discount) / 100);
  return {
    original:original,
    discount:discount,
    discounted:discounted,
    currency:currencies[getRandomIndex(currencies.length)]
  };
}
function createBatch(){
  const batchList = [];
  const batches =["가을신상","베스트","오늘만","가을맞이","데일리룩","빠른배송","여리여리한","완벽텐션","지금필요","빅사이즈","완전편한"];
  const count = getRandomNumber(5);
  for(let i = 0; i < count; i++){
    batchList.push(batches.splice(getRandomIndex(batches.length),1)[0]);
  }
  return batchList;
}
function createSize(){
  const sizeList = [];
  const sizes =["2S","S","M","L","XL","2XL","3XL","4XL","BIG"];
  const count = getRandomNumber(sizes.length);
  for(let i = 0; i < count; i++){
    sizeList.push(sizes.splice(getRandomIndex(sizes.length),1)[0]);
  }
  return sizeList;
}
function createColor(){
  const colorList = [];
  const colors =["베이지", "아이보리", "와인", "블랙", "블루", "차콜", "네이비","화이트","마린블루"];
  const count = getRandomNumber(colors.length);
  for(let i = 0; i < count; i++){
    colorList.push(colors.splice(getRandomIndex(colors.length),1)[0]);
  }
  return colorList;
}

exports.create = (req, res) => res.json(createGoods(50));
exports.showList = (req,res) => res.json(store);
