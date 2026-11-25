import FlowerImage from "../assets/flower.jpg"
const Home = () => {
    return(
        <div>
            <section className="bg-muted-accent" id="home">
                <div className="container">
                    <div className="row">
                        <div className="md:col-6 p-6 fg-emphasis-inverse">
                            <h1>Welcome to My Site</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto soluta nulla mollitia veniam sint doloremque! Iste, deleniti sed. Delectus possimus culpa omnis sequi, minima magnam maxime amet quod necessitatibus ea.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem culpa earum similique corrupti laborum quia incidunt laudantium assumenda quod pariatur vel, natus quos reprehenderit asperiores libero dolore doloremque fugiat illo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga praesentium neque, culpa provident laudantium, dolorum adipisci voluptatibus dolore quibusdam quisquam obcaecati repudiandae voluptatem. Iste delectus rerum perspiciatis eum rem voluptate?</p>
                        </div>
                        <div className="md:col-6 p-6">
                            <img src={FlowerImage} className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home