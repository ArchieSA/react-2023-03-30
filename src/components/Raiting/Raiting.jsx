import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Raiting  = ({className, maxRating, value}) => {
    if (!maxRating || !value) {
        return null;
    }

    let goldStarWidth = value * 20;
    let starWidth = (maxRating - value) * 20;

    return (
        <div>
            <div style={{width: goldStarWidth + 'px'}} className={classNames(styles.star_gold)}></div>
            <div style={{width: starWidth + 'px'}} className={classNames(styles.star)}></div>
        </div>
    );
};