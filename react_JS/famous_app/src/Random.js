function Random(){
    const randColor = () => {
        return ("#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase());
    }
    const changeColor = () => {
        const bdy = document.querySelector('body')
        bdy.style.background = randColor()
    };
    return (
        <div>
            <header>
                <button onClick={changeColor}>Click</button>
            </header>
        </div>
    )
}
export default Random