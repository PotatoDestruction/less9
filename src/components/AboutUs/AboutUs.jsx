import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './AboutUs.css'

const AboutUs = () => {

    return (
        <div>
            <Header />
            <div className="About-Container">
                <div className="About-H">About Us</div>
                <div className="About-img-text-container">
                    <div className="About-img-wrap">
                        <img src="https://images.complex.com/complex/images/c_crop,h_2627,w_4308,x_429,y_280/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/cadzasrp2eqyapxwn0sq/under-armour-embiid-one?fimg-client-default" alt="shoe" className="About-img" />
                    </div>
                    <div className="About-text-wrap">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ut nulla consequatur fugit. Assumenda fuga vel asperiores modi. Dolor libero maxime corporis natus ad ratione, eius id aspernatur ea. Repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa, architecto laboriosam adipisci quidem voluptates cupiditate aut odio aspernatur unde reiciendis! Id dolorum natus unde repellat aspernatur animi eaque accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium inventore rerum nostrum consequatur laudantium odio error suscipit eligendi? Expedita pariatur sed ut voluptatem nesciunt aliquam iure iusto, voluptate est fuga?
                    </div>
                </div>

                
            </div>

            <Footer cl='absolute'/>
        </div>
    )
}

export default AboutUs;