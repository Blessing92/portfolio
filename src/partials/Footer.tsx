import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const CustomFooter = () => (
    <footer>
        <p>&copy; {new Date().getFullYear()} {AppConfig.site_name}. All rights reserved.</p>
    </footer>
);

const Footer = () => (
  <Section>
    <CustomFooter />
  </Section>
);

export { Footer };
