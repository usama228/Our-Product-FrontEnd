import Link from "next/link";

export default function Mega({ staticMenuClass }) {
  return (
    <>
      <div id="mega-menu">
        <a
          className={`btn-mega fw500 ${
            staticMenuClass ? staticMenuClass : ""
          } `}
        >
          <span
            className={`pl30 pl10-xl pr5 fz15 vam flaticon-menu ${
              staticMenuClass ? staticMenuClass : ""
            } `}
          />
          Categories
        </a>
        {/* <ul className="menu ps-0">
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-developer" />
              <span className="menu-title">Development &amp; IT</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-web-design-1" />
              <span className="menu-title">Design &amp; Creative</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-digital-marketing" />
              <span className="menu-title">Digital Marketing</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-translator" />
              <span className="menu-title">Writing &amp; Translation</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-microphone" />
              <span className="menu-title">Music &amp; Audio</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-video-file" />
              <span className="menu-title">Video &amp; Animation</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-ruler" />
              <span className="menu-title">Engineering &amp; Architecture</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-goal" />
              <span className="menu-title">Finance &amp; Accounting</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <div className="h6 cat-title">Web &amp; App Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Website Design</Link>
                  </li>
                  <li>
                    <Link href="/">App DesignUX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page Design</Link>
                  </li>
                  <li>
                    <Link href="/">Icon Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Marketing Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Social Media Design</Link>
                  </li>
                  <li>
                    <Link href="/">Email Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Banners</Link>
                  </li>
                  <li>
                    <Link href="/">Signage Design</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Art &amp; Illustration</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Illustration</Link>
                  </li>
                  <li>
                    <Link href="/">NFT Art</Link>
                  </li>
                  <li>
                    <Link href="/">Pattern Design</Link>
                  </li>
                  <li>
                    <Link href="/">Portraits &amp; Caricatures</Link>
                  </li>
                  <li>
                    <Link href="/">Cartoons &amp; Comics</Link>
                  </li>
                  <li>
                    <Link href="/">Tattoo Design</Link>
                  </li>
                  <li>
                    <Link href="/">Storyboards</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Gaming</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Game Art</Link>
                  </li>
                  <li>
                    <Link href="/">Graphics for Streamers</Link>
                  </li>
                  <li>
                    <Link href="/">Twitch Store</Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Visual Design</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/">Image Editing</Link>
                  </li>
                  <li>
                    <Link href="/">Presentation Design</Link>
                  </li>
                  <li>
                    <Link href="/">Infographic Design</Link>
                  </li>
                  <li>
                    <Link href="/">Vector Tracing</Link>
                  </li>
                  <li>
                    <Link href="/">Resume Design</Link>
                  </li>
                </ul>
                <div className="h6 cat-title">Print Design</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">T-Shirts &amp; Merchandise</Link>
                  </li>
                  <li>
                    <Link href="/">Flyer Design</Link>
                  </li>
                  <li>
                    <Link href="/">Brochure Design</Link>
                  </li>
                  <li>
                    <Link href="/">Poster Design</Link>
                  </li>
                  <li>
                    <Link href="/">Catalog Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul> */}
      </div>
    </>
  );
}
