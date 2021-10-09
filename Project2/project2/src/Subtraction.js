import React from "react";

export const Subtraction = (props) => {

    return(
        <>
            <div class="card">
                <div class="card-body">
                    <h2 class="p-3 mb-2 bg-info p-2 text-dark bg-opacity-25">
                        {props.numberOne - props.numberTwo}
                    </h2>

                </div>
            </div>
        </>
    );

};