import {useCollapse} from "react-collapsed";
import './Services.css';
import arrow from '../../imgs/arrow.svg';

export default function ServicesComponent({title, content}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div>
            <button {...getToggleProps()} className="services-component--button">
                <p className="services-component--title">{title}</p>
                <img src={arrow} alt="Arrow" className={`services-component--arrow ${isExpanded && 'services-component--arrow-expanded'}`}/>
            </button>
            <div {...getCollapseProps()}>
                {content}
            </div>
        </div>
    )
}