import { BuyLink } from "@/models/book.model"
import { MenuOption } from "@/models/menu.model"

export const getWeeksListMessage = (weeks: number) => weeks > 1 ? `${weeks} weeks on the list` : "New this week"

const openBuyLink = (url: string) => {
    window.open(url, '_blank')
}

export const getMenuOptionsByBuyLinks = (buy_links: BuyLink[]): MenuOption[] =>
    buy_links.map((link: BuyLink) => ({ title: link.name, callbackFunction: () => openBuyLink(link.url) }))