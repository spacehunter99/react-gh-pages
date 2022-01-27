import React from "react";
import Button from "./Button";
import Input from "./Input";

function AddForm(props) {
    let [titleValue, setTitleValue] = React.useState("");
    let [contentValue, setContentValue] = React.useState("");
    let [checkedValue, setCheckedValue] = React.useState(false);

    let firstInput = document.querySelector('#firstInput');

    function submitHandler(event) {
        event.preventDefault();

        if(titleValue.trim()) {
            props.createItem(titleValue, contentValue, checkedValue)
            setTitleValue("")
            setContentValue("")
            setCheckedValue(false)
            firstInput.focus()
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="flexContainerCreatePanel">
                <h2>Введите <span>заголовок</span> и <span>описание</span> задачи чтобы начать</h2>
                <div>
                    <label>
                        <Input className="CreatePanelfFirstInput" id="firstInput" placeholder="Заголовок" value = {titleValue} onChange={event => setTitleValue(event.target.value)}></Input>
                    </label>
                </div>
                <div>
                    <label>
                        <Input className="CreatePanelSecondInput" placeholder="Описание" value = {contentValue} onChange={event => setContentValue(event.target.value)}></Input>
                    </label>
                </div>
                <Button className="CreatePanelButton">Создать</Button>
            </div>
        </form>
    )
}

export default AddForm