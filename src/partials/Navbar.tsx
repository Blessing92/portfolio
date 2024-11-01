import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
              <svg
                  className="mr-1 h-10 w-10 stroke-cyan-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              >
                  <path d="M8 4v16"></path>
                  <path d="M8 4h6a4 4 0 0 1 0 8H8"></path>
              </svg>
          }
          name="Munga"
        />
      </a>

      <NavMenu>
        {/*<NavMenuItem href="/posts/">CV</NavMenuItem>*/}
        <NavMenuItem href="https://github.com/Blessing92">GitHub</NavMenuItem>
        {/*<NavMenuItem href="https://x.com/PercyMunga">Twitter</NavMenuItem>*/}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
