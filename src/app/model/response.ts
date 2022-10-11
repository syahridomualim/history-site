import { Birthday } from "./birthday"
import { Deaths } from "./deaths"
import { EventData } from "./event"

export interface ResponseData {
    date: string
    url: string
    data: {
        Events?: EventData[], events?: EventData,
        Birthdays?: Birthday, birthdays?: Birthday,
        Deaths?: Deaths, deaths?: string

    }
}
