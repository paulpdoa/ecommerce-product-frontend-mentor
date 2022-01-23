
const Next = ({ changeNext,setChangeNext }) => {

    return (
        <svg className="z-50" width="13" height="18" onMouseEnter={() => setChangeNext(true)} onMouseLeave={() => setChangeNext(false)} xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke={ changeNext === true ? 'hsl(26, 100%, 55%)' : 'black' } strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
    )
}

export default Next;