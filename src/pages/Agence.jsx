import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { useRef,useEffect } from 'react'

const Agence = () => {

    const imageRef = useRef(null)
    const imageDivRef = useRef(null)

    const imageArray=['../images/1.jpg',
        '../images/2.jpg',
        '../images/3.jpg',
        '../images/4.jpg',
        '../images/5.jpg',
        '../images/6.jpg',
        '../images/7.jpg',
        '../images/8.jpg',
        '../images/9.jpg',
        '../images/10.jpg',
        '../images/11.jpg',
        '../images/12.jpg',
        '../images/13.jpg',
        '../images/14.jpg',
        '../images/15.jpg'
    ];
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        imageArray.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      }, [])

      
      useGSAP(function(){
        gsap.to(imageDivRef.current,{
            scrollTrigger:{
                trigger:imageDivRef.current,
                start:'top 21.2%',
                end:'top -110%',
                pin:true,
                pinspacing:true,
                pinReparent:true,
                pinType:'transform',
                scrub:1,
                anticipatePin:1,
                invalidateOnRefresh:true,
                onUpdate:(elem)=>{
                    const imageIndex = Math.floor(elem.progress * (imageArray.length-1));
                    imageRef.current.src = imageArray[imageIndex];
                }
            }
        })
    })

ScrollTrigger.refresh();
  return (
 <div>
    <div className="section1 relative pt-1">
    <div className="h-[20vw] rounded-4xl w-[15vw] absolute top-0 left-[30vw] bg-black overflow-hidden" ref={imageDivRef}>
        <img className="h-full w-full object-cover" src="../images/1.jpg" ref={imageRef} alt="" />
    </div>
       <div className='font-[font2] relative'>
      <div className='mt-[55vh] text-black'>
        <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>SEVEN7Y<br/>
        TWO</h1>
      </div>

      <div className=' pl-[40%]'>
        <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-12 gap-y-36 max-w-[80vw] mx-auto mt-[24vh] font-[font2] text-[22px]">
            <div className=' '>Expertise</div>
            <div className="">
                <p>Strategy</p>
                <p>Advertising</p>
                <p>Bradning</p>
                <p>Design</p>
                <p>Content</p>
            </div>
            <div className=""></div>

            <div className="">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</div>
            <div className="">Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</div>
            <div className="">Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</div>
      </div>
    </div>
 </div>

 <div className="section2 h-screen">

 </div>
 </div>
  )
}

export default Agence
