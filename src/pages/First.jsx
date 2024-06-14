import {Link} from "react-router-dom";

export default function First() {
    return (
        <div className='text-red-600 hover:underline'>
            <p>first</p>
            <Link to='/second'>second</Link>
        </div>
    )
}