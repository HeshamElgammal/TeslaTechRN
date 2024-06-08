declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<
        SvgProps & {
            fillSecondary?: string;
        }
    >;
    export default content;
}


declare module '*.png';
declare module '*.PNG';
declare module '*.webp';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.json';