function Main() {



    return (
        <main className="content">
            <section className="profile">
                <div className="profile__current">
                    <button className="profile__picture-edit" onClick>
                        <img src="#" alt="profile" className="profile__picture" />
                    </button>
                    <div className="profile__info">
                        <div className="profile__head">
                            <h1 className="profile__name">Marie C</h1>
                            <button type="button" className="profile__edit"></button>
                        </div>
                        <p className="profile__about">Scientist</p>
                    </div>
                </div>
                <button type="button" className="profile__add"></button>
            </section>

            <section className="elements">
            </section>
        </main>
    )
}

export default Main;