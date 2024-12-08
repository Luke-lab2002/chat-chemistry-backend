
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type RoomChatDocument = HydratedDocument<RoomChat>;

@Schema()
export class RoomChat {
  @Prop()
  name: string;

  @Prop({type: Types.ObjectId, ref:"User"})
  userId: string

  @Prop()
  Messages: [{type: Types.ObjectId, ref: 'Messages' }]

}

export const RoomChatSchema = SchemaFactory.createForClass(RoomChat);
