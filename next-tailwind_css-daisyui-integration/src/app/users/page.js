const UsersPage = async () => {
    /**
     * Important to note:
     * This cahching behaviour is only implemented in fetch() function.
     * Using any other thrid party libraries or functions for data fetch will
     *   not have data-cache.
     */
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // { cache: 'no-store' }  // disable cacheing to always fetch fresh data that changes frequently
        // { next: { revalidate: 10 } }  // run a background job to fetch fresh data every 10 seconds
    );

    const users = await res.json();

    return (
        <div>
            <h1>Users Info</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text-lg">Name</th>
                        <th className="text-lg">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage;