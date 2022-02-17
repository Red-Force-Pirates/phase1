import React from 'react';
import styled from 'styled-components';

const ConceptStyle = styled.div`
    .concept_container1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: red;
    }

    .container1_contents {
        width: 80%;
        height: 100%;
        background-color: orange;
    }

`

function Concept () {
    return (
        <>
            <ConceptStyle>
                <div className="concept_container1">
                    <div className="container1_contents">
                        test
                    </div>
                </div>
            </ConceptStyle>

        </>
    )
}

export default Concept;