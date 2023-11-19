import React from "react";

type IconCardItemProps = {
    iconName: string;
    IconFunctionName: React.ComponentType;
};

export default function IconCardItem({ iconName, IconFunctionName }: IconCardItemProps) {
    return (
        <div
            className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0  rounded bg-neutral-100 px-[1.688rem] py-[1.813rem] w-[14.875rem] gap-3"
            style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1)" }}
        >
            <div>
                <IconFunctionName />
            </div>
            <div className="flex-grow-0 flex-shrink-0">
                <p className="text-base font-medium text-left text-[#394041]">
                    {iconName}
                </p>
            </div>
        </div>
    );
}
