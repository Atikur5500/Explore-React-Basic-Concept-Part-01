export default function President({president}){
    return (
        <div className="card mt-5 border">
            <div className="card-body">
                <h2 className="card-title">{president.name}</h2>
                <p>Age: {president.age}</p>
                <div className="card-actions mt-5 mx-auto">
                    <button className="btn bg-slate-500 w-full">Vote Now</button>
                </div>
            </div>
        </div>
    )
}

