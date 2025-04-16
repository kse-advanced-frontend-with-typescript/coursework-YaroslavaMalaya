import { Type, Static } from '@sinclair/typebox';

export const PhotoSchema = Type.Object({
    id:  Type.Number(),
    src: Type.Object({
        large: Type.String(),
    }),
    alt: Type.Optional(Type.String())
});

export const PhotoDetailsSchema = Type.Intersect([
    PhotoSchema,
    Type.Object({
        photographer: Type.String(),
        photographer_url: Type.String(),
    })
]);

export type Photo = Static<typeof PhotoSchema>;
export type PhotoDetails = Static<typeof PhotoDetailsSchema>;
