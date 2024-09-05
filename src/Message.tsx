function Message(){
    // this is JSX code: JavaScript XML
    const name = 'Ather';
    if (name){
        return <h1>Hello There, {name}!</h1>;
    }else{
        return <h1>Hello World!</h1>
    }
}

export default Message;