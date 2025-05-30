import React from 'react'



const Partner = () => {
    const datas = [
        {
            name: 'Ebazzer.com',
            img: 'img/1.jpeg',
            active:false
        },
        {
            name: 'Linkdin.com',
            img: 'img/2.jpeg',
            active:true
        },
        {
            name: 'Facebook',
            img: 'img/3.jpeg',
            active:false
        },
        {
            name: 'Github.com',
            img: 'img/4.jpeg',
            active:true
        },
        {
            name: 'ITsupport',
            img: 'img/5.jpeg'

        },
         {
            name: 'Devloper.com',
            img: 'img/4.jpeg',
            active:true
        },
    ]

    return (
        <div className='p-2 flex justify-center items-center h-30 bg-gray-300'>
            <div className='flex gap-2 space-x-3'>
                {datas && datas.map((data, index) => (
                    <div className='' key={index}>
                        {/* <img src={data.img} alt="" className='w-40 h-40 rounded-full overflow-hidden cover'/> */}
                        <h1 className={`text-xs md:text-2xl -rotate-6 custom-anim font-bold ${data.active?'text-blue-700 rotate-15':'text-orange-400'} `}>{data.name}</h1>
                    </div>))}
            </div>
        </div>
    )
}

export default Partner