const ErrorNotifications = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="errorStyle">
            {message}
        </div>
    )
}

export default ErrorNotifications;