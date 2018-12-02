import {injectable} from "inversify";

@injectable()
export abstract class Entry {
    private static readonly _instance = new Map<string, Entry>();

    protected constructor() {
        Entry._instance.set(this.constructor.name, this);
    }

    public instance() {
        return Entry._instance.get(this.constructor.name);
    }
}
