import { viewContact } from "./contact.js"
import { viewHome } from "./home.js"
import { viewTerms } from "./terms.js"
import { viewUsers , scriptUsers} from "./users.js"

export const routes = {
    "#/home": viewHome,
    "#/contact": viewContact,
    "#/terms": viewTerms,
    "#/users": [viewUsers, scriptUsers]
}