const Notifications = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="addedStyle">
            {message}
        </div>
    )
}

export default Notifications;