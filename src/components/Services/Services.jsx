import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Services.css'

const Services = () => {
    const [services] = useState([
        {
            serviceTitle: 'Service1',
            serviceBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt quod ad fuga deserunt reprehenderit repudiandae veniam assumenda veritatis, nulla quia excepturi illum atque dolores. Consectetur, repellat. Voluptates, quas incidunt!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit quo tenetur ab ipsum ad dolores, facilis nihil magni beatae soluta iure labore exercitationem et provident aliquam repellendus? Fugit, dicta!'
        },
        {
            serviceTitle: 'Service2',
            serviceBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt quod ad fuga deserunt reprehenderit repudiandae veniam . Consectetur, repellat. Voluptates, quas incidunt!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit quo tenetur ab ipsum ad dolores, facilis nihil magni beatae soluta iure labore exercitationem et provident aliquam repellendus? Fugit, dicta!'
        },
        {
            serviceTitle: 'Service3',
            serviceBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt quod ad fuga deserunt reprehenderit repudiandae veniam assumenda veritatis, nulla quia excepturi illum atque dolores. Consectetur, repellat. Voluptates repudiandae veniam . Consectetur, repellat. Voluptates, quas incidunt!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit quo tenetur ab ipsum ad dolores, facilis nihirepudiandae veniam . Consectetur, repellat. Voluptates, quas incidunt!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit quo tenetur ab ipsum ad dolores, facilis nihi'
        },
    ])


    return (
        <div>
            <Header />
            <div className="Services-main-container">
                <h1 className="Services-header">Services</h1>

                <div className='Services-cards-container'>
                    {services.map((service, i) => {
                        return (
                            <div key={i} className="card-box">
                                <div>
                                    <h1>{service.serviceTitle}</h1>
                                    <p>{service.serviceBody}</p>
                                </div>
                                <div className="card-button-wrap">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                    <Footer cl='absolute'/>
        </div>
    )
}

export default Services;