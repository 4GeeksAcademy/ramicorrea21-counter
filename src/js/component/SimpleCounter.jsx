import React from "react";
import "../../styles/index.css"
const SimpleCounter = (props) => {
    return (
        <>
            <div className="container-fluid d-flex bg-dark text-light justify-content-around">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} fill="currentColor" className="bi bi-clock-fill mb-3" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>

                </div>
                <div>
                    {props.sec6}
                </div>
                <div>
                    {props.sec5}
                </div>
                <div>
                    {props.sec4}
                </div>
                <div>
                    {props.sec3}
                </div>
                <div>
                    {props.sec2}
                </div>
                <div>
                    {props.sec}
                </div>
            </div>
        </>
    );
};

export default SimpleCounter;