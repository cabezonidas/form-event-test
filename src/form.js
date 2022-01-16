export const Form = () => {
    return <form id="form1" onSubmit={e => {
        e.preventDefault();
        console.log(e.target.input1.value);
    }}>
        <label htmlFor="input1">Input 1</label>
        <input type="text" id="input1"></input>
        <button type="submit">Save</button>
    </form>
}

export default Form;