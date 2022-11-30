import "./UserCards.scss"

const UserCards = ({ data }) => {
    const { name, age, image, email } = data
    return (
        <div className="user-cards">
            <div className='container'>
                <div className="card mb-3 mt-3" style={{ maxWidth: '740px' }}>
                    <div className="row">
                        <div className="col-auto img">
                            <img src={image} className="rounded" alt="profile-image" />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="mb-3">{name}</h5>
                                <p>{email} </p>
                                <p><small className="text-muted">Age {age}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCards