import Close from './Close';
import Next from './Next';
import Previous from './Previous';
import { useState } from 'react';

const Lightbox = ({ showImg,setShowImg,showLightbox,setShowLightbox }) => {

    const [changeColor,setChangeColor] = useState(false);
    const [changeNext,setChangeNext] = useState(false);
    const [changePrevious,setChangePrevious] = useState(false);

    const [images] = useState([
        {
            img: '/images/image-product-1.jpg'
        },
        {
            img: '/images/image-product-2.jpg'
        },
        {
            img: '/images/image-product-3.jpg'
        },
        {
            img: '/images/image-product-4.jpg'
        }
    ]);

    const data = images.map((image) => {
        return image.img;
    });

   const [active,setActive] = useState(0);
   const goNext = (id) => {
        if(active < 3) {
            setShowImg(data[id + active]);
            setActive(active + 1); 
        } 
    } 
   const goPrevious = (id) => {
       if(active >= 1) {
            setShowImg(data[active - id]);
            setActive(active - 1);
       }
   }

    let changeClass1,changeClass2,changeClass3,changeClass4 = "";
    if(showImg === '/images/image-product-1.jpg') {
        changeClass1 = "thumb-cover1 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass1 = "thumbnail-img1 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    if(showImg === '/images/image-product-2.jpg') {
        changeClass2 = "thumb-cover2 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass2 = "thumbnail-img2 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    if(showImg === '/images/image-product-3.jpg') {
        changeClass3 = "thumb-cover3 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass3 = "thumbnail-img3 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    if(showImg === '/images/image-product-4.jpg') {
        changeClass4 = "thumb-cover4 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass4 = "thumbnail-img4 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    return (
        <div className="flex justify-center items-center z-50 bg-gray-900 bg-opacity-80 h-full w-full absolute">
          <div className="h-full w-full overflow-hidden col-span-1 flex items-center justify-center">
              <div className="mt-10 relative">
                <div className="absolute -top-5 right-0 cursor-pointer" onClick={() => setShowLightbox(!showLightbox)}>
                    <Close changeColor={changeColor} setChangeColor={setChangeColor} />
                </div>
                  <div className="relative">
                    <div onClick={() => goNext(1)} className="absolute top-1/2 -right-5 rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center cursor-pointer">
                        <Next changeNext={changeNext} setChangeNext={setChangeNext} />
                    </div>
                    <div onClick={() => goPrevious(1)} className="absolute top-1/2 -left-5 rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center cursor-pointer">
                        <Previous changePrevious={changePrevious} setChangePrevious={setChangePrevious} />
                    </div>
                    <img className="select-none w-full h-96 object-cover rounded-xl" src={showImg} alt="image1" />
                  </div>
                  <section className="flex w-full justify-center gap-4 mt-5">
                      {/* Thumbnails */}
                      <div onClick={() => setShowImg('/images/image-product-1.jpg')} className={ changeClass1 }>
                          
                      </div>
                      <div onClick={() => setShowImg('/images/image-product-2.jpg')} className={ changeClass2 }>
                          
                      </div>
                      <div onClick={() => setShowImg('/images/image-product-3.jpg')} className={ changeClass3 }>
                          
                      </div>
                      <div onClick={() => setShowImg('/images/image-product-4.jpg')} className={ changeClass4 }>
                          
                      </div>
                  </section>
              </div>
          </div>
        </div>
    )
}

export default Lightbox;