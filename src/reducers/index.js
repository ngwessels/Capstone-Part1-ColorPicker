// import selectedTicketReducer from './selected-ticket-reducer';
// import ticketListReducer from './ticket-list-reducer';
//
// const rootReducer = combineReducers({
//   selectedTicket: selectedTicketReducer,
//   masterTicketList: ticketListReducer
// });
//
// export default rootReducer;



// All Code above is example


import mainPic from './main-pic.js';
import blocks from './blocks';
import blocksFinished from './blocksFinished';
import colors from './colors';
import ctx from './ctx';
import images from './images';
import imagesPlaced from './imagesPlaced';
import width from './width';
import height from './height';
import value from './value';
import string from './string';
import stringLength from './stringLength';
import totalBlocks from './totalBlocks';
import finished from './finished';
import array from './array';
import apiInformation from './api-information';
import imageURL from './image-url';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  array: array,
  blocks: blocks,
  colors: colors,
  images: images,
  finished: finished,
  value: value,
  width: width,
  height: height,
  string: string,
  stringLength: stringLength,
  totalBlocks: totalBlocks,
  blocksFinished: blocksFinished,
  imagesPlaced: imagesPlaced,
  ctx: ctx,
  apiInformation: apiInformation,
  imageURL: imageURL,
})

export default rootReducer;
