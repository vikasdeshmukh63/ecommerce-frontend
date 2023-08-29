import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./pagination.scss"

const Pagination = () => {
    return (
        <section id="pagination">
            <Link>
                <ArrowBackIosNewIcon />
            </Link>
            <Link>1</Link>
            <Link>2</Link>
            <Link>3</Link>
            <Link>
                <ArrowForwardIosIcon />
            </Link>
        </section>
    )
}

export default Pagination
