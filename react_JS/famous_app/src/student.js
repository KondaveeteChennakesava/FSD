function Student(p){
    // let name = 'Kesava'
    return (
        <tr><td>{p.index+1}</td><td>{p.name}</td><td>{p.rollno}</td></tr>
    )
}
// {style={{color:'black',backgroundColor:'lightgreen'}}}
export default Student;