import React from "react";

export const Multiply = (props) => {

    return(
        <>
            <div class="card">
                <div class="card-body">
                    <h2>
                        {props.numberOne * props.numberTwo}
                    </h2>

                </div>
            </div>
        </>
    );

};