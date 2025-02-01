import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "life",
    items: {
      "hab": "https://habitica.com/",
      "uni": "https://idp.unicampania.it/idp/Authn/UserPassword",
      "gym": "https://www.notion.so/63234815ce13442a916031f2a79c616b?v=185cd9560dc08051ad2c000cd8c002ee",
      "r/coolgithubprojects ": "https://www.reddit.com/r/coolgithubprojects ",
    },
  },
  {
    label: "tools",
    items: {
      "img > compress": "https://compressimage.io/",
      "img > upscale": "https://bigjpg.com/",
      "css > shadows": "https://www.joshwcomeau.com/shadow-palette/",
      "js > bundlephobia": "https://bundlephobia.com/",
    },
  },
  {
    label: "libs",
    items: {
      tailwind: "https://tailwindcss.com/docs/customizing-colors",
      shadcn: "https://ui.shadcn.com/docs/components",
    },
  },
  {
    label: "ressources",
    items: {
      "react > bulletproof": "https://github.com/alan2207/bulletproof-react",
      "js > patterns": "https://www.patterns.dev/#patterns",
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
