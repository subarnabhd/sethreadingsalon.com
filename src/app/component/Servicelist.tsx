import Image from 'next/image'
import React from 'react'

const Servicelist = () => {
    return (
        <div className="servicelist">
            <div className="service-list p-20 bg-white">
                <div id="threading" className="service-conatiner flex gap-5 pb-5">
                    <Image className='rounded-2xl' src="/3.jpg" width={150} height={100} alt='' />
                    <div>
                        <h3 className='text-2xl font-bold mt-2 text-black'>Threading</h3>
                        <p className='text-s mt-2 text-gray-500'>For the sophisticate and the novice alike. This precise method removes hair in a line formation, or even a single hair, to achieve an exact brow.</p>
                    </div>
                </div>
                <table className=''>
                    <thead>
                    <tr>
                            <th className='bg-primary p-4 text-left'>SERVICE</th>
                            <th className='bg-primary p-4 text-left'>PRICE $</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Eyebrow</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>Upper Lip</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Chin</td>
                            <td>10 & UP</td>
                        </tr>
                        <tr>
                            <td>Neck</td>
                            <td>12 & UP</td>
                        </tr>
                        <tr>
                            <td>Forehead</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Chin and Neck</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Unibrow</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Sideburns</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sides</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Full Face</td>
                            <td>40 & UP</td>
                        </tr>

                    </tbody>
                </table>


            </div>


            <div id="waxing" className="service-list p-20 bg-background">
                <div className="service-conatiner flex gap-5 pb-5">
                    <Image className='rounded-2xl' src="/2.jpg" width={150} height={100} alt='' />
                    <div>
                        <h3 className='text-2xl font-bold mt-2 text-black'>Waxing</h3>
                        <p className='text-s mt-2 text-gray-500'>For the sophisticate and the novice alike. This precise method removes hair in a line formation, or even a single hair, to achieve an exact brow.</p>
                    </div>
                </div>
                <table className=''>
                    <thead>
                        <tr>
                            <th className='bg-primary p-4 text-left'>SERVICE</th>
                            <th className='bg-primary p-4 text-left'>PRICE $</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Under Arm</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Half Arm</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Full Hand</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Half Leg</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Full Leg</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Bikini</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Bikini Plus</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Brazilian</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Chest Wax</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Men Chest</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Back Wax</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Full Body</td>
                            <td>200</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div id="facial" className="service-list p-20 bg-white">
                <div className="service-conatiner flex gap-5 pb-5">
                    <Image className='rounded-2xl' src="/1.jpg" width={150} height={100} alt='' />
                    <div>
                        <h3 className='text-2xl font-bold mt-2 text-black'>Facial</h3>
                        <p className='text-s mt-2 text-gray-500'>Process of hair removal from the root by using covering of a sticky substance, Unlike old waxing, heated wax is spread easily over the skin.</p>
                    </div>
                </div>
                <table className=''>
                    <thead>
                        <tr>
                            <th className='bg-primary p-4 text-left'>SERVICE</th>
                            <th className='bg-primary p-4 text-left'>PRICE $</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Deep Cleansing</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Herbal Facial</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Ultrasonic</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Gold Facial</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Teen Facial</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Mini Chair Facial</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Black Head Remove</td>
                            <td>20</td>
                        </tr>


                    </tbody>
                </table>
            </div>

            <div className="service-list p-20 bg-background">
                <div className="service-conatiner flex gap-5 pb-5">
                    <h3 className='text-2xl font-bold mt-2 text-black'>Special</h3>
                </div>

                <table className=''>

                    <thead>
                        <tr>
                            <th className='bg-primary p-4 text-left'>SERVICE</th>
                            <th className='bg-primary p-4 text-left'>PRICE $</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Eyebrow Tinting</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Eyelashes</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Strip Lashes</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Lash Lift & Tint</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Eyelashes Tinting</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Nose Wax</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Top Nose Wax</td>
                            <td>10</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Servicelist