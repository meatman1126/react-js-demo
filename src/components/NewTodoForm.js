import React, { useState } from "react";
function NewTodoForm(props) {
    const [assigned, setAssigned] = useState('');
    const [description, setDescription] = useState('');

    const submitTodo = () => {
        if (assigned !== '' && description !== '') {
            props.addTodo(assigned, description);
            setAssigned('');
            setDescription('');
        }
    }
    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required
                        onChange={e => { setAssigned(e.target.value) }}
                        value={assigned} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3}
                        onChange={e => setDescription(e.target.value)}
                        value={description}>
                    </textarea>
                </div>
                <button type="button" className="btn btn-primary mb-3" onClick={submitTodo}>add todo</button>
            </form>
        </div>
    )
}
export default NewTodoForm