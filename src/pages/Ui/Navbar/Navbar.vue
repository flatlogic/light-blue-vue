<template>
  <div>
    <BRow>
      <BCol
        xs="12"
        md="9"
      >
        <Widget
          title="<h5>Navbar <span className='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <p>Here's what you need to know before getting started with the navbar:</p>
          <ul>
            <li>
              Navbars require a wrapping <code>&lt;BNavbar&gt;</code>
              with <code>toggleable=&quot;*&quot;</code> for
              responsive collapsing and color scheme classes.
            </li>
            <li>
              Navbars and their contents are fluid by default. Use optional containers
              to limit their horizontal width.
            </li>
            <li>
              Use our spacing and flex utility classes for controlling
              spacing and alignment within navbars.
            </li>
            <li>
              Navbars are responsive by default, but you can
              easily modify them to change that. Responsive
              behavior depends on our Collapse JavaScript plugin.
            </li>
            <li>
              Navbars are hidden by default when printing. Force
              them to be printed by adding <code>.d-print</code>
              to the <code>.navbar</code>. See the display utility class.
            </li>
          </ul>
          <BNavbar
            class="mt p-4"
            toggleable="md"
            type="light"
            variant="secondary"
          >
            <BNavbarBrand href="#">
              Navbar
            </BNavbarBrand>
            <BNavbarToggle
              class="ms-auto"
              target="nav_collapse1"
            />
            <BCollapse
              id="nav_collapse1"
              is-nav
            >
              <!-- Right aligned nav items -->
              <BNavbarNav class="ms-auto">
                <BNavItem href="#">
                  Home
                </BNavItem>
                <BNavItem href="#">
                  Features
                </BNavItem>
                <BNavItem href="#">
                  Pricing
                </BNavItem>
                <BNavItem
                  href="#"
                  disabled
                >
                  Disabled
                </BNavItem>
              </BNavbarNav>
            </BCollapse>
          </BNavbar>
        </Widget>
      </BCol>
      <BCol
        xs="12"
        md="9"
      >
        <Widget
          title="<h5>Navbar <span className='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Theming the navbar has never been easier thanks to the combination of
            theming classes and background-color utilities.
            Choose from <code>color=&quot;light&quot;</code>
            for use with light background colors, or
            <code>color=&quot;dark-main&quot;</code> for dark background
            colors. Then, customize with <code>.bg-*</code> utilities.
          </p>
          <BNavbar
            class="mt p-4"
            toggleable="md"
            type="dark"
            :variant="('dark-main' as any)"
          >
            <BNavbarBrand href="#">
              Navbar
            </BNavbarBrand>
            <BNavbarToggle
              class="ms-auto"
              target="nav_collapse2"
            />
            <BCollapse
              id="nav_collapse2"
              is-nav
            >
              <!-- Right aligned nav items -->
              <BNavbarNav class="ms-auto">
                <BNavItem href="#">
                  Home
                </BNavItem>
                <BNavItem href="#">
                  Features
                </BNavItem>
                <BNavItem href="#">
                  Pricing
                </BNavItem>
                <BNavItem
                  href="#"
                  disabled
                >
                  Disabled
                </BNavItem>
              </BNavbarNav>
            </BCollapse>
          </BNavbar>
          <BNavbar
            class="mt p-4"
            toggleable="md"
            type="dark"
            variant="primary"
          >
            <BNavbarBrand href="#">
              Navbar
            </BNavbarBrand>
            <BNavbarToggle
              class="ms-auto"
              target="nav_collapse3"
            />
            <BCollapse
              id="nav_collapse3"
              is-nav
            >
              <!-- Right aligned nav items -->
              <BNavbarNav class="ms-auto">
                <BNavItem href="#">
                  Home
                </BNavItem>
                <BNavItem href="#">
                  Features
                </BNavItem>
                <BNavItem href="#">
                  Pricing
                </BNavItem>
                <BNavItem
                  href="#"
                  disabled
                >
                  Disabled
                </BNavItem>
              </BNavbarNav>
            </BCollapse>
          </BNavbar>
          <BNavbar
            class="mt p-4"
            toggleable="md"
            type="dark"
            variant="success"
          >
            <BNavbarBrand href="#">
              Navbar
            </BNavbarBrand>
            <BNavbarToggle
              class="ms-auto"
              target="nav_collapse4"
            />
            <BCollapse
              id="nav_collapse4"
              is-nav
            >
              <!-- Right aligned nav items -->
              <BNavbarNav class="ms-auto">
                <BNavItem href="#">
                  Home
                </BNavItem>
                <BNavItem href="#">
                  Features
                </BNavItem>
                <BNavItem href="#">
                  Pricing
                </BNavItem>
                <BNavItem
                  href="#"
                  disabled
                >
                  Disabled
                </BNavItem>
              </BNavbarNav>
            </BCollapse>
          </BNavbar>
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue'
</script>
