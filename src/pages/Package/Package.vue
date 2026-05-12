<template>
  <div>
    <h2 class="page-title">
      Light Blue - <span class="fw-semi-bold">Package</span>&nbsp;
      <small>More than 2000 man-hours already invested!</small>
    </h2>
    <p class="lead">
      Over 8,000 developers worldwide chose our bootstrap admin templates to build their
      web applications, SAAS and E-Commerce platforms faster. Jump in to burn through your gig too!
    </p>
    <BRow>
      <BCol md="6">
        <Widget
          title="<h6>React JS Version</h6>"
          settings
          collapse
          close
          custom-header
        >
          <img
            class="rounded pull-left mb-1 me-3 image"
            src="../../assets/react-logo.svg"
            alt="react"
          />
          <h3>React JS Version</h3>
          <p class="text-muted">
            We spent another <span class="fw-semi-bold">500</span> man-hours
            developing and designing
            React version, to save you time and money.
          </p>
          <p>
            <a
              href="https://reactjs.org/"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >React</a> is
            the most trendy and advanced
            component-based JavaScript library for building user interfaces. Our React
            version follows latest industry
            best practices and uses <strong>Redux</strong> as a state manager and
            supports <strong>Server Side Rendering</strong> which makes this app incredibly fast
            and SEO-friendly.
          </p>
          <p>
            This version is a great choice when you want to be in control
            of your own codebase and
            decide on development approaches that are the best for your project.
            <a href="https://vite.dev/">Vite</a> build tool and npm as a package
            manager are under the hood.
          </p>
          <div class="d-grid gap-2">
            <a
              class="btn btn-default btn-lg"
              href="https://flatlogic.com/templates/light-blue-react/demo"
            >
              Go to Demo
            </a>
          </div>
        </Widget>
      </BCol>
      <BCol
        md="6"
        xs="12"
      >
        <Widget
          title="<h6>Angular Version</h6>"
          settings
          collapse
          close
          custom-header
        >
          <img
            class="rounded pull-left mb-1 me-3 image"
            src="../../assets/angularjs-logo.svg"
            alt="angular"
          />
          <h3>Angular 2+ Version</h3>
          <p class="text-muted">
            We spent around <span class="fw-semi-bold">500</span> man-hours
            developing and designing
            Angular version, to match high engineering requirements.
          </p>
          <p>
            <a
              href="https://angular.io"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >Angular</a> is the
            most mature and wide spread
            front-end framework created by Google and used by many established enterprises.
            It is a very good choice when
            your expect your application to have a well-engineered structure
            and development workflow. If you are familiar
            with Java or .NET ecosystems Angular is definitely your choice.
          </p>
          <p>
            Our app is built on top of latest <strong>Angular</strong> version and
            uses modern build tools and npm as a package manager,
            so everything
            works out of the box! <br /><br />
          </p>
          <div class="d-grid gap-2">
            <a
              class="btn btn-default btn-lg"
              href="https://flatlogic.com/templates/light-blue-angular/demo"
            >
              Go to Demo
            </a>
          </div>
        </Widget>
      </BCol>
      <BCol
        md="6"
        xs="12"
      >
        <Widget
          title="<h6>Pure HTML5 Version</h6>"
          settings
          collapse
          close
          custom-header
        >
          <img
            class="rounded pull-left mb-1 me-3 image"
            src="../../assets/js-logo.svg"
            alt="js"
          />
          <h3>HTML5 Version</h3>
          <p class="text-muted">
            During last 4 years we
            invested more than <span class="fw-semi-bold">1000</span> man-hours
            crafting and maintaining this version.
          </p>
          <p>
            Basic HTML version is the most generic version of Light Blue App
            that can be used with any platform
            starting from PHP and Rails to .NET and Java. It contains pure
            w3c-validated <strong>HTML5</strong> markup
            and valid <strong>CSS3</strong> styles. It can work in two modes:
            (a) as a <strong>Single
              Page Application</strong>, using ajax to fetch page contents, or
            (b) as a static application, where
            pages served directly from server.
            The mode can be switched by changing the
            value of &nbsp;<code>window.PJAX_ENABLED</code> global variable.
          </p>
          <p>
            Moreover, this version comes with three different color
            schemes which you can easily switch based on your choice.
          </p>
          <div class="d-grid gap-2">
            <a
              class="btn btn-default btn-lg"
              href="https://flatlogic.com/templates/light-blue-html5/demo"
            >
              Go to Demo
            </a>
          </div>
        </Widget>
      </BCol>
      <BCol md="6">
        <Widget
          title="<h6>Vue JS Version</h6>"
          settings
          collapse
          close
          custom-header
        >
          <img
            class="rounded pull-left mb-1 me-3 image"
            src="../../assets/logo.png"
            alt="vue"
          />
          <h3>Vue JS Version</h3>
          <p class="text-muted">
            Built with <span class="fw-semi-bold">Vue 3</span> and modern tooling.
          </p>
          <p>
            <a
              href="https://vuejs.org/"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >Vue</a> is
            an open-source progressive
            JavaScript framework for building user interfaces. Vue is designed to be
            incrementally adoptable meaning that
            adding new libraries is made incredibly easy.
          </p>
          <p>
            This version uses <strong>Vue 3</strong> with Composition API,
            <a href="https://vite.dev/">Vite</a> for lightning-fast builds,
            <strong>TypeScript</strong> for type safety, and
            <strong>Pinia</strong> for state management.
          </p>
          <div class="d-grid gap-2">
            <a
              class="btn btn-transparent btn-lg disabled mb-3"
              href="#"
            >You are here!</a>
          </div>
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue'
</script>

<style src="./Package.scss" lang="scss" scoped />
