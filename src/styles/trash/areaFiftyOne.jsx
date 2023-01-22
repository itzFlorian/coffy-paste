const bg = "/src/images/coffypaste_bg_568217968.png"
const avatar = "/src/images/coffypaste_icon_avatar.png"
const coffee = "/src/images/coffypaste_icon_coffee_default.png"
const community = "/src/images/coffypaste_icon_community.png"
const searchL = "/src/images/coffypaste_icon_search_l.png"
const searchS = "/src/images/coffypaste_icon_search_s.png"
const shop = "/src/images/coffypaste_icon_shop.png"
const stats = "/src/images/coffypaste_icon_stats.png"
const logoM = "/src/images/coffypaste_logo_900.png"
const logoL = "/src/images/coffypaste_logo_2352.png"
const efjm = "/src/images/efjm_logo.png"



const Area = () => {
    return (
        <>
            <div className="bg">
                <img
                    src={bg}
                    className="bg-img"
                    alt="tasty coffee beans"
                />
            </div>

            <div>
                <div className="card bg-gradL">test</div>
                <div className="card bg-gradD">test</div>
                <h1 className="card fo-sig bg-oldwhite">coffy paste</h1>
                <p className="card fo-nor bg-pastel">coffy paste</p>
            </div>

            <div class="flex wrap">
                <div className="icon bo-ow">
                    <img src={avatar} />
                </div>
                <div className="icon bo-ow">
                    <img src={coffee} />
                </div>
                <div className="icon bo-ow">
                    <img src={community} />
                </div>
                <div className="icon bo-ow">
                    <img src={searchL} />
                </div>
                <div className="icon bo-ow">
                    <img src={searchS} />
                </div>
                <div className="icon bo-ow">
                    <img src={shop} />
                </div>
                <div className="icon bo-ow">
                    <img src={stats} />
                </div>
                <div className="icon bo-ow">
                    <img src={logoM} />
                </div>
                <div className="icon bo-ow">
                    <img src={efjm} />
                </div>
            </div>

        </>

    )
}

export default Area