import Student from "./student"
function Trainees(){
    let students = [
        {name:'kesava',rollno:'1234'},
        {name:'Akshay',rollno:'4321'},
        {name:'Sai',rollno:'1243'}
    ]
    return (
         <div >
            <h1 style={{color:'lightblue',backgroundColor:'green'}}>Trainees</h1>
            <table border = {1} cellSpacing={0} align='center' width={'500px'}>
                <tr><th>S.No</th><th>Name</th><th>Roll No</th></tr>
            {
                students.map((ele,i,arr)=>{
                    return (<Student index={i} name={ele.name}rollno={ele.rollno} />)
                })
            }
            </table>
        </div>
    )
}
export default Trainees