import { Type, Static } from '@sinclair/typebox';

export const CollectionSchema = Type.Object({
    _id: Type.String(),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    photosId: Type.Array(Type.String()),
});

export const UserSchema = Type.Object({
    _id: Type.String(),
    email: Type.String(),
    collections: Type.Array(CollectionSchema),
});

export type Collection = Static<typeof CollectionSchema>;
export type User = Static<typeof UserSchema>;
