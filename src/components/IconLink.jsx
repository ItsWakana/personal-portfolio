const IconLink = ({ url, iconSrc, width }) => {

    return (
        <button>
            <a href={url} target="_blank" rel="noreferrer">
                <img className={`w-${width}`} src={iconSrc} />
            </a>
        </button>
    )
}

export default IconLink;