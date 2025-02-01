import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "生",
    items: {
      "hab": "https://habitica.com/",
      "uni": "https://idp.unicampania.it/idp/Authn/UserPassword",
      "gym": "https://www.notion.so/63234815ce13442a916031f2a79c616b?v=185cd9560dc08051ad2c000cd8c002ee",
      "x": "https://www.x.com/",
      "yt": "https://www.youtube.com/",
    },
  },
  {
    label: "什",
    items: {
      "snahp": "https://fora.snahp.eu/?__cf_chl_rt_tk=5bbmruXdjRjw_0mO85ImZSe7GdrTdrCn82RKUE0BcTk-1738406398-1.0.1.1-n_ZcfeMUHcv.hZ2B5TQJXnRNcYOTGLMrOb9mhLeQUpI",
      "ru_t": "https://rutracker.net/forum/index.php",
      "nya": "https://nyaa.land/",
      "gpt": "https://chatgpt.com/",
      "ds": "https://chat.deepseek.com/",
    },
  },
]

injectBookmarks(bookmarks)

// Select a random variant
updateVariant()
// Or set a static variant
// updateVariant("momo-1")

// For debugging
/*
function iterateVariants() {
  updateVariant()
  setTimeout(iterateVariants, 5000)
}
iterateVariants()
*/
