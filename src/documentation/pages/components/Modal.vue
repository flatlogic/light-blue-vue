<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-row>
    <b-col
      lg="9"
      xs="12"
    >
      <h2>Modal</h2>
      <p class="mb-4">
        Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user
        notifications, or completely custom content.
      </p>
      <vue-code-highlight>import { BModal } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs
        nav-class="bg-transparent"
        class="mb-5"
      >
        <b-tab
          title="Example"
          active
        >
          <b-button
            size="lg"
            variant="primary"
            @click="showDefault = true"
          >
            Default modal
          </b-button>
          <b-modal
            id="modal-default"
            v-model="showDefault"
            title="Modal Title"
            body-bg-variant="light"
          >
            ...
            <template #modal-footer>
              <b-button
                variant="secondary"
                @click="showDefault = false"
              >
                Close
              </b-button>
              <b-button variant="primary">
                Save changes
              </b-button>
            </template>
          </b-modal>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>
            &lt;b-modal id="modal-default" title="Modal Title" v-model="showDefault" body-bg-variant="light"&gt;
            ...
            &lt;template #modal-footer&gt;
            &lt;b-button variant="secondary" @click="showDefault = false"&gt;Close&lt;/b-button&gt;
            &lt;b-button variant="primary"&gt;Save changes&lt;/b-button&gt;
            &lt;/template&gt;
            &lt;/b-modal&gt;
          </vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent">
        <b-tab
          title="Example"
          active
        >
          <h3>Variations</h3>
          <b-button
            class="me-3"
            size="lg"
            variant="danger"
            @click="showLong = true"
          >
            Long modal
          </b-button>
          <b-button
            size="lg"
            variant="success"
            @click="showLarge = true"
          >
            Large modal
          </b-button>

          <b-modal
            id="modal-long"
            v-model="showLong"
            title="Long content"
            body-bg-variant="light"
          >
            <span v-safe-html="longText" />
            <template #modal-footer>
              <b-button
                variant="secondary"
                @click="showLong = false"
              >
                Close
              </b-button>
              <b-button variant="primary">
                Save changes
              </b-button>
            </template>
          </b-modal>
          <b-modal
            id="modal-large"
            v-model="showLarge"
            size="lg"
            title="Large modal"
            body-bg-variant="light"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
            Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
            cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
            <template #modal-footer>
              <b-button
                variant="secondary"
                @click="showLarge = false"
              >
                Close
              </b-button>
              <b-button variant="primary">
                Save changes
              </b-button>
            </template>
          </b-modal>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>
            &lt;b-modal id="modal-long" title="Long Content" v-model="showLong" body-bg-variant="light"&gt;
            &#123;&#123; longContent &#125;&#125;
            &lt;template #modal-footer&gt;
            &lt;b-button variant="secondary" @click="showLong = false"&gt;Close&lt;/b-button&gt;
            &lt;b-button variant="primary"&gt;Save changes&lt;/b-button&gt;
            &lt;/template&gt;
            &lt;/b-modal&gt;

            &lt;b-modal size="lg" id="modal-large" title="Large modal" v-model="showLarge" body-bg-variant="light"&gt;
            &#123;&#123; content &#125;&#125;
            &lt;template #modal-footer&gt;
            &lt;b-button variant="secondary" @click="showLarge = false"&gt;Close&lt;/b-button&gt;
            &lt;b-button variant="primary"&gt;Save changes&lt;/b-button&gt;
            &lt;/template&gt;
            &lt;/b-modal&gt;
          </vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">
      For more examples please refer to <a
        href="https://bootstrap-vue.js.org/docs/components/modal/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap Vue Modal</a>
    </p>
  </b-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const showDefault = ref(false)
const showLong = ref(false)
const showLarge = ref(false)

const longText = `<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.
</p>`
</script>
