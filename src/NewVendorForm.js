import React from 'react';

const NewVendorForm = () => {
    return (
        <div>
            <form>
                <br></br>
                <h1>New Vendor</h1>
                <br></br><br></br>
                <label>
                    Company Name:
                    <input type="text" name="name" /><br></br>
                    Description:
                    <input type="text" name="name" /><br></br>
                    Rep Name:
                    <input type="text" name="name" /><br></br>
                    Contact Info:
                    <input type="text" name="name" /><br></br>
                </label>
                <input type="submit" value="Save Vendor" />
            </form>
            
        </div>
    );
}

export default NewVendorForm;
