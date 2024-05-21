const ConnectedUsers = ({ users }) => 
<div className='user-list'>
    <h4 className="user-title-">Connected Users</h4>
    <div  className="list">
        {users.map((u, idx) => <h6 key={idx}>{u}</h6>)}
    </div>
    
</div>

export default ConnectedUsers;
