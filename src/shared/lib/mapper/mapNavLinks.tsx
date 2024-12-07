import { Link } from "react-router-dom"
import { LinkAttributes } from "../../config/navLinksConfig"

export function mapNavLinks(navLinksConfig: LinkAttributes[]) {
    return navLinksConfig.map((item, index) => (
        <li key={index}>
            <Link to={item.link}>{item.textValue}</Link>
        </li>
    ))
}
