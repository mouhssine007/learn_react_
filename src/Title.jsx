export default function Title({locked}){
    return <h1 className="title">

        {locked ? (<span> Limit ! Buy <b>Pro</b> for   &gt;5</span>):( " fancy counter")}
    </h1>
}