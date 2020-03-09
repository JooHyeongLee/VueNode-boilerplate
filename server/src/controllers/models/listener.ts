import mongoose, { Schema } from 'mongoose';



class Listener {
    Schema = mongoose.Schema;

    ListenerSchema = new Schema({
        value: { type: String, required: true },
        topic: { type: String, required: true },
        options: [{ qos: Number, messageId: String, clientId: String }],
      }, {collection: 'listener'});

      listenerModel: any;

      constructor() {
        this.listenerModel = mongoose.model("listener", this.ListenerSchema);
      }

      get model() {
          return this.listenerModel;
      }
}

export const listenerModel = new Listener();