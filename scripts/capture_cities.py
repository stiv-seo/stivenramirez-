"""
Capture screenshots for SEO programmatic city pages.
Viewports: desktop 1440x900, mobile 390x844 (iPhone 14)
Also captures above-the-fold (hero) crop at desktop viewport.
"""
from playwright.sync_api import sync_playwright
import os

SCREENSHOTS_DIR = "/Users/stiven/Projects/stivenramirez/screenshots"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

PAGES = [
    ("barranquilla", "http://localhost:3000/diseno-web/barranquilla/"),
    ("bogota",       "http://localhost:3000/diseno-web/bogota/"),
    ("cali",         "http://localhost:3000/diseno-web/cali/"),
]

VIEWPORTS = {
    "desktop": {"width": 1440, "height": 900},
    "mobile":  {"width": 390,  "height": 844},
}


def capture(page_obj, url, path, viewport, full_page=True, clip=None):
    page_obj.set_viewport_size(viewport)
    page_obj.goto(url, wait_until="networkidle", timeout=30000)
    page_obj.wait_for_timeout(1500)  # let animations settle
    kwargs = {"path": path, "full_page": full_page}
    if clip:
        kwargs["clip"] = clip
    page_obj.screenshot(**kwargs)
    print(f"  saved: {path}")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        for city, url in PAGES:
            print(f"\n--- {city.upper()} ---")

            # 1. Desktop full page
            capture(
                page, url,
                f"{SCREENSHOTS_DIR}/{city}_desktop_full.png",
                VIEWPORTS["desktop"],
                full_page=True,
            )

            # 2. Desktop above-the-fold (hero only, 1440x900 viewport crop)
            capture(
                page, url,
                f"{SCREENSHOTS_DIR}/{city}_desktop_hero.png",
                VIEWPORTS["desktop"],
                full_page=False,
                clip={"x": 0, "y": 0, "width": 1440, "height": 900},
            )

            # 3. Mobile full page
            capture(
                page, url,
                f"{SCREENSHOTS_DIR}/{city}_mobile_full.png",
                VIEWPORTS["mobile"],
                full_page=True,
            )

            # 4. Mobile above-the-fold
            capture(
                page, url,
                f"{SCREENSHOTS_DIR}/{city}_mobile_hero.png",
                VIEWPORTS["mobile"],
                full_page=False,
                clip={"x": 0, "y": 0, "width": 390, "height": 844},
            )

        browser.close()
        print("\nAll screenshots captured.")


if __name__ == "__main__":
    main()
