
const Previous = ({ changePrevious,setChangePrevious }) => {
    return (
        <svg onMouseEnter={() => setChangePrevious(true)} onMouseLeave={() => setChangePrevious(false)} width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke={ changePrevious === true ? 'hsl(26, 100%, 55%)' : 'black' } strokeWidth="3" fill="none" fillRule="evenodd"/></svg>    )
    }

export default Previous;