import React from 'react';

function NewPLForm() {
    return (
        <div>
            <form>
                <br></br>
                <h1>New Price List</h1>
                <br></br>
                <label>
                    Select Vendor
                    <select>
                        <option value="lime"> Lime </option>
                        <option value="potato"> Potato </option>
                    </select><br></br><br></br>
                    Date:
                    <input type="text" name="name" /><br></br><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    Pack Size:
                    <input type="text" name="name" />
                    Price per Pack:
                    <input type="text" name="name" /><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    Pack Size:
                    <input type="text" name="name" />
                    Price per Pack:
                    <input type="text" name="name" /><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    Pack Size:
                    <input type="text" name="name" />
                    Price per Pack:
                    <input type="text" name="name" /><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    Pack Size:
                    <input type="text" name="name" />
                    Price per Pack:
                    <input type="text" name="name" /><br></br>

                </label>
                <input type="submit" value="Save Price List" />
            </form>

        </div>
    );
}

export default NewPLForm;
