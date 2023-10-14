import React, {useEffect} from "react";
import './main.css'
import img1 from '../../Asset/img1.jpg';
import img2 from '../../Asset/img2.jpg';
import img3 from '../../Asset/img3.jpg';
import img4 from '../../Asset/img4.jpg';
import img5 from '../../Asset/img5.jpg';
import img6 from '../../Asset/img6.jpg';
import img7 from '../../Asset/img7.jpg';
import img8 from '../../Asset/img8.jpg';
import img9 from '../../Asset/img9.jpg';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck} from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id : 1 ,
        imgSrc : img1 ,
        destTitle : 'Vũng Tàu',
        location : 'Việt Nam' ,
        grade : '3 ngày 2 đêm',
        fees: '$700',
        description:'Chuyến đi đến Đà Lạt 3 ngày 2 đêm đi đến thung lũng mộng mơ'
    } ,
    {
        id : 2 ,
        imgSrc : img2 ,
        destTitle : 'Nha Trang',
        location : 'Việt Nam' ,
        grade : '3 ngày 2 đêm',
        fees: '$700',
        description:'Chuyến đi đến thành phố biển Nha Trang 3 ngày 2 đêm'
    },
    {
        id : 3 ,
        imgSrc : img3 ,
        destTitle : 'Đảo Phú Quốc',
        location : 'Việt Nam' ,
        grade : '2 ngày 1 đêm',
        fees: '$400',
        description:'Chuyến đi đến hòn đảo nổi tiếng về du lịch nhất Việt Nam'
    },
    {
        id : 4 ,
        imgSrc : img4 ,
        destTitle : 'Động Phong Nha - Kẻ Bàng',
        location : 'Việt Nam' ,
        grade : '1 ngày',
        fees: '$100',
        description:'Động được UNESCO công nhận là di sản thế giới'
    },
    {
        id : 5 ,
        imgSrc : img5 ,
        destTitle : 'Đà Nẵng',
        location : 'Việt Nam' ,
        grade : '3 ngày 2 đêm',
        fees: '$700',
        description:'Chuyến đi đến thành phố đáng sống nhất Việt Nam'
    },
    {
        id : 6,
        imgSrc : img6 ,
        destTitle : 'Bến Tre',
        location : 'Việt Nam' ,
        grade : '3 ngày 2 đêm',
        fees: '$700',
        description:'Chuyến đi đến miền tây sông nước Bến Tre'
    },
    {
        id : 7 ,
        imgSrc : img7 ,
        destTitle : 'Hà Nội',
        location : 'Việt Nam' ,
        grade : '3 ngày 2 đêm',
        fees: '$700',
        description:'Chuyến đi đến thủ đô của Việt Nam'
    },
    {
        id : 8 ,
        imgSrc : img8 ,
        destTitle : 'Hội An',
        location : 'Việt Nam' ,
        grade : '3 ngày 2 đêm',
        fees: '$700',
        description:'Chuyến đi đến thành phố cổ'
    },
    {
        id : 9 ,
        imgSrc : img9 ,
        destTitle : 'Huế',
        location : 'Việt Nam' ,
        grade : '3 ngày 2 đêm',
        fees: '$700',
        description:'Chuyến đi đến cố đô Huế '
    }

]

const Main = () => {

     useEffect(() => {
        Aos.init({duration:2000})
    },[])


    return(
        <section className="main container">

            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

        <div className="secContent grid">
            {Data.map(({id,imgSrc,destTitle,location,grade,fees,
            description})=>{
                return(
                    <div className="singleDestination">
                         <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                         </div>

                         <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}
                            </h4>
                            <span className="continent flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                            </span>
                         
                         <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                         </div>
                         
                        <div className="desc">
                            <p>{description}</p>
                        </div>

                        <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                        </button>
                         </div>
                    </div>
                )
            }
            )}

        </div>

        </section>
    )
}

export default Main