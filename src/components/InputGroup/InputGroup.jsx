import { inputsArray } from "../../util/inputFields";
export default function InputGroup() {
    return (
        <div id='user-input' className="input-group">
            {inputsArray.map((row)=>
            <div>
                {row.map((input)=>
                <div id='input-label-combo'>
                    <label>{input.label}</label>
                    <input id={input.id} type={input.type}></input>
                </div>)}
            </div>)}
        </div>
    );
}