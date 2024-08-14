import { render, screen } from "@testing-library/vue"
import NavBar from "components/NavBar.vue"
import { describe, it } from "vitest"

describe("NavBar", () => {
  it('display company name', () => {
      render(NavBar)
      screen.debug()
  })
})