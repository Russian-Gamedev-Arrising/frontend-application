import { mapNavLinks } from "@shared/lib/mapper/mapNavLinks"
import { navLinksConfig } from "@shared/config/navLinksConfig"
import classes from "./header.module.scss"

export function Header() {
    return (
        <>
            <header>
                <div className={classes.logo}>logo</div>
                <nav className={classes.nav}>
                    <ul>{mapNavLinks(navLinksConfig)}</ul>
                </nav>
                <div className={classes.user}>u</div>
            </header>
        </>
    )
}
