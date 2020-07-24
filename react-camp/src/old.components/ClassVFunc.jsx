import React from 'react';
import FollowClass from './components/FollowClass';
import FollowFunc from './components/FollowFunc';

export default function ClassVFunc(props) {
    const [ user, setUser ] = useState(props.name);

    return (
        <div>
            <label>
                <b> Choose Profile to view: </b>
                <select>
                    <option value="apple"> apple </option>
                    <option value="banana"> banana </option>
                    <option value="carrot"> carrot </option>
                </select>
                <FollowClass/>
                <FollowFunc/>
            </label>
        </div>
    )
}
