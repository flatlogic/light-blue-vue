<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        YOU ARE HERE
      </li>
      <li class="breadcrumb-item active">
        UI Tabs & Accordion
      </li>
    </ol>
    <h1 class="page-title">
      Tabs & Accordion -
      <span class="fw-semi-bold">Components</span>
    </h1>
    <BRow>
      <BCol
        md="6"
        xs="12"
      >
        <BTabs class="mb-lg">
          <BTab
            title="Basic"
            active
          >
            I had an idea named Great Work. It was a service aimed to
            help people find their passion. Yes I know it sound crazy and
            super naïve but I worked on that. I started to work on planning,
            graphics, presentations, pictures, descriptions, articles,
            investments and so on. I worked on everything but not the project itself.
          </BTab>
          <BTab title="Assumtion">
            <p class="mb-sm">
              Why don't use Lore Ipsum? I think if some one says don't use lore
              ipsum it's very controversial point. I think the opposite actually.
              Everyone knows what is lore ipsum - it is easy to understand if
              text is lore ipsum.
            </p>
            <BButton
              variant="danger"
              class="me-2"
            >
              Check
            </BButton>
            <BButton variant="secondary">
              Dance
            </BButton>
          </BTab>
          <BTab title="Works">
            <p>
              If you will think too much it will sink in the swamp of never implemented
              plans and ideas or will just go away or will be implemented by someone else.
            </p>
            <p><strong>5 months of doing everything to achieve nothing.</strong></p>
            <p>
              You'll automatically skip - because you know - it's just non-informative stub.
              But what if there some text like this one?
            </p>
          </BTab>
        </BTabs>
      </BCol>
      <BCol
        md="6"
        xs="12"
      >
        <BTabs
          class="mb-lg"
          pills
          card
          vertical
          end
        >
          <BTab
            title="Basic"
            active
          >
            I had an idea named Great Work. It was a service aimed to
            help people find their passion. Yes I know it sound crazy and
            super naïve but I worked on that. I started to work on planning,
            graphics, presentations, pictures, descriptions, articles,
            investments and so on. I worked on everything but not the project itself.
          </BTab>
          <BTab title="Assumtion">
            <p class="mb-sm">
              Why don't use Lore Ipsum? I think if some one says don't use lore
              ipsum it's very controversial point. I think the opposite actually.
              Everyone knows what is lore ipsum - it is easy to understand if
              text is lore ipsum.
            </p>
            <BButton
              variant="danger"
              class="me-2"
            >
              Check
            </BButton>
            <BButton variant="secondary">
              Dance
            </BButton>
          </BTab>
          <BTab title="Works">
            <p>
              If you will think too much it will sink in the swamp of never implemented
              plans and ideas or will just go away or will be implemented by someone else.
            </p>
            <p><strong>5 months of doing everything to achieve nothing.</strong></p>
            <p>
              You'll automatically skip - because you know - it's just non-informative stub.
              But what if there some text like this one?
            </p>
          </BTab>
        </BTabs>
      </BCol>
      <BCol
        md="6"
        xs="12"
      >
        <div
          v-for="(element, index) in accordionFirstContent"
          :key="`accord-one-${index.toString()}`"
          class="card mb-xs"
        >
          <div
            class="card-header"
            role="button"
            @click="toggleAccordion('accordionFirst', index)"
          >
            <div class="mb-0">
              <a
                class="accordion-toggle"
                role="button"
              >
                {{ element.title }}
                <i :class="`fa fa-angle-down ${accordionFirst === index ? 'expanded' : ''}`" />
              </a>
            </div>
          </div>
          <BCollapse
            id="accordion-first"
            class="card-body"
            :visible="accordionFirst === index"
          >
            <div
              v-safe-html="element.body"
              class="card-body"
            />
          </BCollapse>
        </div>
      </BCol>
      <BCol
        md="6"
        xs="12"
      >
        <div
          v-for="(element, index) in accordionSecondContent"
          :key="`accord-one-${index.toString()}`"
          class="card mb-xs"
        >
          <div
            class="card-header"
            role="button"
            @click="toggleAccordion('accordionSecond', index)"
          >
            <div class="mb-0">
              <a
                class="accordion-toggle"
                role="button"
              >
                {{ element.title }}
                <i :class="`fa fa-angle-down ${accordionSecond === index ? 'expanded' : ''}`" />
              </a>
            </div>
          </div>
          <BCollapse
            id="accordion-second"
            class="card-body"
            :visible="accordionSecond === index"
          >
            <div
              v-safe-html="element.body"
              class="card-body"
            />
          </BCollapse>
        </div>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface AccordionItem {
  title: string
  body: string
}

const accordionFirst = ref(-1)
const accordionSecond = ref(1)

const accordionSecondContent: AccordionItem[] = [
  {
    title: 'Collapsible Group Item',
    body: ` Get base styles and flexible support for collapsible components like accordions and navigation.
      Using the collapse plugin, we built a simple accordion by extending the panel component.`,
  },
  {
    title: 'Normal Text Insertion',
    body: `
    Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very
          controversial point. I think the opposite actually. Everyone knows what is lore ipsum
          - it is easy to understand if text is lore ipsum. You'll automatically skip -
          because you know - it's just non-informative stub. But what if there some text like
          this one? You start to read it! But the goal of this text is different. The goal is
          the example. So a bit of Lore Ipsum is always very good practice. Keep it in mind!`,
  },
  {
    title: 'Check It',
    body: " Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually.",
  },
]

const accordionFirstContent: AccordionItem[] = [
  {
    title: 'Collapsible Group Item',
    body: ` Get base styles and flexible support for collapsible components like accordions and navigation.
      Using the collapse plugin, we built a simple accordion by extending the panel component.`,
  },
  {
    title: 'Random from the Web',
    body: `
    <p><span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based
    on the latest Metro design. There are few reasons we want to tell you, why we have created it:
    We didn't like the darkness of most of admin templates, so we created this light one.
    We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
    We searched for a solution of how to make widgets look like real widgets, so we decided that
    deep background - is what makes widgets look real.
    </p>
    <p class="no-margin text-muted"><em>- Some One</em></p>
`,
  },
  {
    title: 'Check It',
    body: " Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually.",
  },
]

function toggleAccordion(field: 'accordionFirst' | 'accordionSecond', index: number) {
  const accordionRef = field === 'accordionFirst' ? accordionFirst : accordionSecond
  if (accordionRef.value !== index) {
    accordionRef.value = index
  } else {
    accordionRef.value = -1
  }
}
</script>
