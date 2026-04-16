
import "./Main.css"
import Hero from "../asset/shopping-bags-Picsart-BackgroundChanger.jpg"

function Main () {
    return(
        <main>
            <section>
                <div className="image-container">
                    <img
                        src={Hero}
                        alt="Sample"
                        className="image"
                    />

                    <div className="overlay">
                        <div className="over">
                            <h1>Shop Smart</h1>
                            <h2>Shop Velmora </h2>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main