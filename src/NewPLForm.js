import React from 'react';

const NewPLForm = () => {
    return (
        <div>
            <form>
                <br></br>
                <h1>New Price List</h1>
                <br></br><br></br>
                <label>
                    <select>
                        Select Vendor
                        <option value="lime"> Lime </option><br></br>
                        <option value="potato"> Potato </option>
                    </select><br></br>
                    Date:
                    <input type="text" name="name" /><br></br>
                    Item Name:
                    <input type="text" name="name" /><br></br>
                    Pack Size:
                    <input type="text" name="name" /><br></br>
                    Price per Pack:
                    <input type="text" name="name" /><br></br>
                </label>
                <input type="submit" value="Save Price List" />
            </form>

        </div>
    );
}

export default NewPLForm;
