import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

type UserFlowProps = {
    SVGFileName: React.ComponentType;
};

export default function UserFlow({ SVGFileName }: UserFlowProps) {
    return (
        <TransformWrapper
            onPanningStart={() => document.body.style.cursor = 'grab'}
            onPanningStop={() => document.body.style.cursor = 'default'}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                        <SVGFileName />
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    )
}
